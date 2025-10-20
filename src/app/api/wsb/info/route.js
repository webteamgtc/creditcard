import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

// POST body:
// {
//   "cardNo": "FC...",
//   "onlySimpleInfo": true // default true
// }
export async function POST(req) {
  try {
    const body = await req.json();
    const data = await wsbPost("/merchant/core/mcb/card/sensitive", body);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { success: false, code: 500, msg: String(e.message || e) },
      { status: 500 }
    );
  }
}
