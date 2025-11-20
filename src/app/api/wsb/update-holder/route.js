import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

/**
 * POST body (examples):
 * {}                                        // issuer defaults (first page)
 * { "pageNum": 1, "pageSize": 20 }          // pagination
 * { "email": "test@gmail.com" }             // optional filters (if supported)
 * { "mobile": "501234567", "areaCode": "971" }
 * { "holderId": 123456789 }                 // if API supports direct id query
 */
export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    // Flip the last arg to `true` if your gateway signs this response
    const data = await wsbPost(
      "/merchant/core/mcb/card/holder/v2/update",
      body,
      /* verifySig */ false
    );

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { success: false, code: 500, msg: String(e.message || e) },
      { status: 500 }
    );
  }
}
