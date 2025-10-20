import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

// Query cardholders to confirm status (`pass_audit`) and fetch holderId by email/mobile, etc.
export async function POST(req) {
  try {
    const body = await req.json(); // e.g. { pageNum:1, pageSize:10, email:"x@x.com" }
    const data = await wsbPost("/merchant/core/mcb/card/holder/query", body);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { success: false, code: 500, msg: String(e.message || e) },
      { status: 500 }
    );
  }
}
