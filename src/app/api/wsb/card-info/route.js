import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

/**
 * POST body example:
 * {
 *   "cardNo": "4096xxxxxxxxxxxx",
 *   "onlySimpleInfo": true   // optional; default true
 * }
 */
export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    if (!body?.cardNo) {
      return NextResponse.json(
        { success: false, code: 400, msg: "cardNo is required" },
        { status: 400 }
      );
    }

    // Call Wasabi API
    const data = await wsbPost(
      "/merchant/core/mcb/card/info",
      {
        cardNo: body.cardNo,
        onlySimpleInfo:
          body.onlySimpleInfo !== undefined ? body.onlySimpleInfo : true,
      },
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
