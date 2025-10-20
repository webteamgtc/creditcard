// app/api/wasabi/key-selftest/route.js
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { signSha256, verifySignature } from "@/lib/wasabi";

export async function GET() {
  const msg = JSON.stringify({ hello: "world" });
  const sig = signSha256(msg);
  const ok = verifySignature(msg, sig); // should be true if PUBLIC matches PRIVATE
  return NextResponse.json({ ok, sigLength: sig.length });
}
