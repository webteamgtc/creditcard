import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

/**
 * POST body (examples):
 * {}                              // default list (first page, issuer defaults)
 * { "pageNum": 1, "pageSize": 100 }
 * { "cardTypeName": "virtual" }
 * { "binId": 12345 }
 */
export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    // If your gateway doesn't return X-WSB-SIGNATURE for this endpoint,
    // you can disable verify just for this call by passing false:
    const data = await wsbPost("/merchant/core/mcb/card/v2/cardTypes", body, /* verifySig */ false);

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { success: false, code: 500, msg: String(e.message || e) },
      { status: 500 }
    );
  }
}
