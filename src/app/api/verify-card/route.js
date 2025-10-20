// app/api/wasabi/active-card/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { postWasabi } from "@/lib/wasabi";

// const PATH = "/merchant/core/mcb/card/v2/cardTypes";
 const PATH = "/merchant/core/mcb/card/openCard";
//  const PATH = "/merchant/core/mcb/card/info";
//  const PATH = "/merchant/core/mcb/card/balanceInfo";


/** GET: simple call with {} body */
export async function GET() {
  try {
    const result = await postWasabi(PATH, {});
    return NextResponse.json(
      {
        ok: result.ok,
        status: result.status,
        verified: result.verified,
        signatureFromServer: result.responseSignature,
        data: result.data,
      },
      { status: result.ok ? 200 : result.status || 500 }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unexpected error" },
      { status: 500 }
    );
  }
}

/** POST: forward a JSON payload (still signed server-side) */
export async function POST(req) {
  try {
    let incoming = {};
    try {
      incoming = await req.json();
    } catch {
      incoming = {};
    }

    const payload = incoming && typeof incoming === "object" ? incoming : {};
    const result = await postWasabi(PATH, payload);

    return NextResponse.json(
      {
        ok: result.ok,
        status: result.status,
        verified: result.verified,
        signatureFromServer: result.responseSignature,
        data: result.data,
      },
      { status: result.ok ? 200 : result.status || 500 }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unexpected error" },
      { status: 500 }
    );
  }
}



// app/api/wasabi/active-card/route.js
// export const runtime = "nodejs";

// import { NextResponse } from "next/server";
// import { postWasabi } from "@/lib/wasabi";

// const PATH = "/merchant/core/mcb/card/physicalCard/activeCard";

// function mockSuccessResponse(bodyObj) {
//   const cardNo = (bodyObj && (bodyObj.cardNo || bodyObj.pan || bodyObj.cardNumber)) || "4111********1111";
//   return {
//     ok: true,
//     status: 200,
//     verified: true,
//     responseSignature: "mock-signature",
//     data: {
//       success: true,
//       code: 0,
//       msg: "Success (mock)",
//       data: {
//         cardNo,
//         status: "ACTIVE",
//         balance: 100.0,
//         activatedAt: new Date().toISOString(),
//       },
//     },
//   };
// }

// async function handleRealCall(payload) {
//   // forward to real Wasabi (postWasabi will sign & verify)
//   return await postWasabi(PATH, payload);
// }

// export async function GET(req) {
//   try {
//     const url = new URL(req.url);
//     const useMock = process.env.DEV_WASABI_MOCK === "true" || url.searchParams.get("mock") === "true";

//     const payload = {}; // GET uses empty object by default

//     const result = useMock ? mockSuccessResponse(payload) : await handleRealCall(payload);

//     return NextResponse.json(
//       {
//         ok: result.ok,
//         status: result.status,
//         verified: result.verified ?? false,
//         signatureFromServer: result.responseSignature ?? null,
//         data: result.data ?? result,
//       },
//       { status: result.ok ? 200 : result.status || 500 }
//     );
//   } catch (err) {
//     return NextResponse.json({ ok: false, error: err?.message ?? "Unexpected error" }, { status: 500 });
//   }
// }

// export async function POST(req) {
//   try {
//     const url = new URL(req.url);
//     const useMock = process.env.DEV_WASABI_MOCK === "true" || url.searchParams.get("mock") === "true";

//     let incoming = {};
//     try {
//       incoming = await req.json();
//     } catch {
//       incoming = {};
//     }

//     const payload = (incoming && typeof incoming === "object") ? incoming : {};

//     const result = useMock ? mockSuccessResponse(payload) : await handleRealCall(payload);

//     return NextResponse.json(
//       {
//         ok: result.ok,
//         status: result.status,
//         verified: result.verified ?? false,
//         signatureFromServer: result.responseSignature ?? null,
//         data: result.data ?? result,
//       },
//       { status: result.ok ? 200 : result.status || 500 }
//     );
//   } catch (err) {
//     return NextResponse.json({ ok: false, error: err?.message ?? "Unexpected error" }, { status: 500 });
//   }
// }
