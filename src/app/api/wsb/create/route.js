import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

// Create Cardholder v2 (B2B or B2C). Provide the fields your BIN requires.
// For B2B: business KYC fields; For B2C: personal/KYC file IDs, etc. (see docs)
export async function POST(req) {
  try {
    const body = await req.json();

    // if (typeof body.areaCode === "string") {
    //   body.areaCode = body.areaCode.replace(/\D/g, "").slice(0, 5); // digits only, <=5
    // }
    if (typeof body.postCode === "string") {
      body.postCode = body.postCode.slice(0, 5); // <=5
    }
    // if (typeof body.town === "string") {
    //   body.town = body.town.slice(0, 5); // <=5 (code, not city name)
    // }
    const data = await wsbPost(
      "/merchant/core/mcb/card/holder/v2/create",
      body
    );
    console.log({data})
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { success: false, code: 500, msg: String(e.message || e) },
      { status: 500 }
    );
  }
}
