import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

// POST body:
// {
//   "merchantOrderNo": "string(20-40)",
//   "cardNo": "FC...",
//   "pin": "123456",                // 6 digits
//   "activeCode": "ABCD-1234",
//   "noPinPaymentAmount": 500       // optional 0~2000
// }
export async function POST(req) {
  try {
    const body = await req.json();
    const data = await wsbPost("/merchant/core/mcb/card/physicalCard/activeCard", body);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { success: false, code: 500, msg: String(e.message || e) },
      { status: 500 }
    );
  }
}
