import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

/**
 * POST body example:
 * {
 *   "cardNo": "1234567890123456",
 *   "amount": 100.0,
 *   "currency": "USD",
 *   "remark": "Initial Deposit"
 * }
 */
export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    // Call Wasabi API (no signature verification required for this one)
    const data = await wsbPost("/merchant/core/mcb/card/deposit", body, /* verifySig */ false);

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        code: 500,
        msg: String(e.message || e),
      },
      { status: 500 }
    );
  }
}
