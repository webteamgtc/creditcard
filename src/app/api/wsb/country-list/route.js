import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

/**
 * POST body (examples):
 * {}                         // fetch supported regions/countries
 * // Some gateways accept filters; leave {} if none are needed.
 */
export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    // Call Wasabi Regions API
    const data = await wsbPost(
      "/merchant/core/mcb/common/region",
      body,
      /* verifySig */ false // flip to true if your gateway signs this response
    );

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { success: false, code: 500, msg: String(e.message || e) },
      { status: 500 }
    );
  }
}
