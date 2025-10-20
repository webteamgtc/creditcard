// app/api/wasabi/open-card/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { postWasabi } from "@/lib/wasabi";

/**
 * Path on the Wasabi (merchant) API
 */
const PATH = "/merchant/core/mcb/card/openCard";

/** Generate merchantOrderNo length ~24-32 (20..40 allowed) */
function genMerchantOrderNo() {
  const ts = Date.now().toString(36); // time part
  const rand = Math.random().toString(36).slice(2, 14); // random part
  const id = `T${ts}${rand}`.slice(0, 32); // ensure <40 char
  return id;
}

/** Mock success response helper (for dev) */
function mockSuccess(payload) {
  const orderNo = `${Date.now()}`; // fake orderNo
  return {
    ok: true,
    status: 200,
    verified: true,
    responseSignature: "mock-signature",
    data: [
      {
        orderNo,
        merchantOrderNo: payload.merchantOrderNo,
        cardNo: "411111******1111",
        currency: payload.currency || "USD",
        amount: payload.amount ? String(payload.amount) : "15",
        fee: "0",
        receivedAmount: "0",
        receivedCurrency: payload.currency || "USD",
        type: "create",
        status: "success",
        remark: null,
        transactionTime: Date.now(),
      },
    ],
  };
}

/** POST: create card */
export async function POST(req) {
  try {
    const url = new URL(req.url);
    const useMock =
      process.env.DEV_WASABI_MOCK === "true" ||
      url.searchParams.get("mock") === "true";

    // read incoming body
    let incoming = {};
    try {
      incoming = await req.json();
    } catch {
      incoming = {};
    }

    // required fields: merchantOrderNo (we will generate if missing), cardTypeId (required)
    const merchantOrderNo = incoming.merchantOrderNo || genMerchantOrderNo();
    if (!incoming.cardTypeId) {
      return NextResponse.json(
        { ok: false, error: "cardTypeId (Long) is required" },
        { status: 400 }
      );
    }

    // Build payload according to API contract
    const payload = {
      merchantOrderNo,
      holderId: incoming.holderId ?? undefined, // optional
      cardTypeId: incoming.cardTypeId, // required
      amount: incoming.amount ?? undefined, // optional (string/number)
      cardNumber: incoming.cardNumber ?? undefined, // optional for physical card
      currency: incoming.currency ?? undefined, // optional if you want
    };

    // remove undefined props
    Object.keys(payload).forEach(
      (k) => payload[k] === undefined && delete payload[k]
    );

    // If mocking, return success immediately (useful for dev)
    if (useMock) {
      const mock = mockSuccess(payload);
      return NextResponse.json(
        {
          ok: mock.ok,
          status: mock.status,
          verified: mock.verified,
          signatureFromServer: mock.responseSignature,
          data: mock.data,
        },
        { status: 200 }
      );
    }

    // Real call: sign + forward
    const result = await postWasabi(PATH, payload);

    // postWasabi returns { ok, status, verified, responseSignature, data }
    // The actual API returns data as an array — we pass it through.
    return NextResponse.json(
      {
        ok: result.ok,
        status: result.status,
        verified: result.verified ?? false,
        signatureFromServer: result.responseSignature ?? null,
        data: result.data ?? result,
      },
      { status: result.ok ? 200 : result.status || 500 }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unexpected error" },
      { status: 500 }
    );
  }
}
