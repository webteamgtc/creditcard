// app/api/postback/route.js
import { NextResponse } from "next/server";

const CF_URL =
  "https://us-central1-madrid-investing.cloudfunctions.net/PostbackCloudFunciton/";

const corsHeaders = {
  // If your site uses a specific domain, replace * with that origin.
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const runtime = "nodejs"; // make sure this runs on the server

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const email = body?.email ?? "";

    // Build upstream URL with query params (same as your axios call)
    const url = new URL(CF_URL);
    url.searchParams.set(
      "token",
      "YWR2ZXJpc2VyX2FmZmlsYXRpb25fdXJs".replace(/\s+/g, "")
    );
    url.searchParams.set("advertiser", "GTC%Global%LTD");
    url.searchParams.set("brand", "GTC%FX");
    url.searchParams.set("model", "CPL");
    url.searchParams.set("affiliate_id", "1");
    url.searchParams.set("user_id", email);
    url.searchParams.set("event_type", "Lead");
    url.searchParams.set("subID", "MXMX_Test");

    // Server-to-server call (no CORS here)
    const upstream = await fetch(url.toString(), {
      method: "POST",
    });

    console.log(url.toString());

    const text = await upstream.text(); // Cloud Functions often return text
    if (!upstream.ok) {
      return NextResponse.json(
        { error: text || `Upstream error ${upstream.status}` },
        { status: upstream.status, headers: corsHeaders }
      );
    }

    return new NextResponse(text, { status: 200, headers: corsHeaders });
  } catch (err) {
    return NextResponse.json(
      { error: err?.message || "Unexpected error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
