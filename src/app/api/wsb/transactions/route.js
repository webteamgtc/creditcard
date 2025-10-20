export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { wsbPost } from "@/lib/wsb/client";

/**
 * POST body (examples):
 * { "pageNum": 1, "pageSize": 20, "type": "create", "merchantOrderNo": "..." }
 * { "pageNum": 1, "pageSize": 20, "type": "create", "orderNo": "..." }
 * { "pageNum": 1, "pageSize": 20, "type": "create", "cardNo": "..." }
 * { "pageNum": 1, "pageSize": 20, "type": "deposit", "startTime": 1700000000000, "endTime": 1700600000000 }
 */
export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      pageNum,
      pageSize,
      type,
      merchantOrderNo,
      orderNo,
      cardNo,
      startTime,
      endTime,
    } = body || {};

    // Minimal guards (provider also validates)
    if (!pageNum || !pageSize || !type) {
      return NextResponse.json(
        {
          success: false,
          code: 400,
          msg: "pageNum, pageSize, and type are required",
        },
        { status: 400 }
      );
    }

    const payload = {
      pageNum: Number(pageNum),
      pageSize: Math.min(Number(pageSize), 100),
      type: String(type),
    };
    if (merchantOrderNo) payload.merchantOrderNo = String(merchantOrderNo);
    if (orderNo) payload.orderNo = String(orderNo);
    if (cardNo) payload.cardNo = String(cardNo).replace(/\s+/g, "");
    if (startTime) payload.startTime = Number(startTime);
    if (endTime) payload.endTime = Number(endTime);

    // Use "warn" while integrating so you still get data even if response signature isn’t verified yet.
    const data = await wsbPost(
      "/merchant/core/mcb/card/transaction",
      payload,
      "warn"
    );

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { success: false, code: 500, msg: String(e.message || e) },
      { status: 500 }
    );
  }
}
