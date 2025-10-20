import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";
import { postWasabi } from "@/lib/wasabi";


// POST body:
// {
//   "merchantOrderNo": "string(20-40)",
//   "holderId": 123,              // optional
//   "cardTypeId": 111002,         // required
//   "amount": 10,                 // optional (respect BIN min/max)
//   "cardNumber": "xxxx"          // optional (physical)
// }
export async function POST(req) {
  try {
    const body = await req.json();
    const data = await wsbPost("/merchant/core/mcb/card/openCard", body);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { success: false, code: 500, msg: String(e.message || e) },
      { status: 500 }
    );
  }
}
