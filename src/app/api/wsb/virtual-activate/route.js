import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

/**
 * Expected POST body:
 * {
 *   merchantOrderNo: "unique-merchant-order-no-20-40",
 *   cardNo: "FC....",            // cardNo returned by openCard
 *   // other fields required by your program for virtual activation, e.g.:
 *   // status: "active"  OR  activeCode: "..." depending on API
 * }
 */
export async function POST(req) {
  try {
    const body = await req.json();

    // Primary attempt: call virtualCard activate endpoint.
    // If your provider uses a different path, replace it here.
    const path = "/merchant/core/mcb/card/virtualCard/activeCard";

    try {
      const data = await wsbPost(path, body);
      return NextResponse.json(data, { status: 200 });
    } catch (err) {
      // If the specific virtual activation endpoint fails, bubble the error message
      // so you can inspect what your sandbox expects.
      return NextResponse.json(
        {
          success: false,
          code: -1,
          msg: "virtual activate attempt failed: " + String(err.message || err),
        },
        { status: 500 }
      );
    }
  } catch (e) {
    return NextResponse.json(
      { success: false, code: 500, msg: String(e.message || e) },
      { status: 500 }
    );
  }
}
