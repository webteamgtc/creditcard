import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

/**
 * POST body (examples):
 * {}                         // get all cities
 * { "regionCode": "AE" }     // filter by region (ISO alpha-2)
 */
export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    // Call Wasabi city list API
    const data = await wsbPost(
      "/merchant/core/mcb/common/city",
      body,
      /* verifySig */ false // disable signature verification if not required
    );

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
