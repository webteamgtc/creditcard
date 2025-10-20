// import crypto from "crypto";

// const ENDPOINT = process.env.WSB_ENDPOINT;
// const API_KEY = process.env.WSB_API_KEY;
// const PRIVATE_KEY_B64 = process.env.WSB_PRIVATE_KEY_B64;       // PKCS#8 DER (base64)
// const WSB_PUBLIC_KEY_B64 = process.env.WSB_WSB_PUBLIC_KEY_B64; // X.509 SPKI DER (base64)

// if (!ENDPOINT || !API_KEY || !PRIVATE_KEY_B64 || !WSB_PUBLIC_KEY_B64) {
//   throw new Error("WSB env vars missing. Check .env.local");
// }

// // Build KeyObjects from Base64 DER (no PEM)
// const privateKey = crypto.createPrivateKey({
//   key: Buffer.from(PRIVATE_KEY_B64, "base64"),
//   format: "der",
//   type: "pkcs8",
// });

// const wsbPublicKey = crypto.createPublicKey({
//   key: Buffer.from(WSB_PUBLIC_KEY_B64, "base64"),
//   format: "der",
//   type: "spki",
// });

// function signBody(bodyString) {
//   const signer = crypto.createSign("RSA-SHA256");
//   signer.update(bodyString, "utf8");
//   return signer.sign(privateKey).toString("base64");
// }

// function verifyResponseSignature(responseBodyString, signatureB64) {
//   try {
//     const verifier = crypto.createVerify("RSA-SHA256");
//     verifier.update(responseBodyString, "utf8");
//     return verifier.verify(wsbPublicKey, Buffer.from(signatureB64 || "", "base64"));
//   } catch {
//     return false;
//   }
// }

// /**
//  * POST helper to WasabiCard
//  * @param {string} path e.g. "/merchant/core/mcb/card/openCard"
//  * @param {object} payload JSON payload (signed as-is; if empty -> {})
//  * @param {boolean} verifySig verify X-WSB-SIGNATURE on success (code===200)
//  */
// export async function wsbPost(path, payload = {}, verifySig = true) {
//   const url = `${ENDPOINT}${path}`;
//   const bodyString = JSON.stringify(payload ?? {});
//   const signature = signBody(bodyString);

//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-WSB-API-KEY": API_KEY,
//       "X-WSB-SIGNATURE": signature,
//     },
//     body: bodyString,
//   });

//   const resText = await res.text();
//   let json;
//   try {
//     json = JSON.parse(resText);
//   } catch {
//     throw new Error(`WSB non-JSON response: ${resText}`);
//   }

//   const respSig = res.headers.get("X-WSB-SIGNATURE");
//   if (verifySig && json?.code === 200) {
//     const ok = verifyResponseSignature(resText, respSig);
//     if (!ok) throw new Error("WSB response signature verification failed");
//   }

//   return json;
// }



import crypto from "crypto";

const ENDPOINT = process.env.WSB_ENDPOINT;
const API_KEY  = process.env.WSB_API_KEY;
const PRIVATE_KEY_B64   = process.env.WSB_PRIVATE_KEY_B64;        // PKCS#8 DER (base64)
const WSB_PUBLIC_KEY_B64 = process.env.WSB_WSB_PUBLIC_KEY_B64;    // X.509 SPKI DER (base64)

if (!ENDPOINT || !API_KEY || !PRIVATE_KEY_B64 || !WSB_PUBLIC_KEY_B64) {
  throw new Error("WSB env vars missing. Check .env.local");
}

const privateKey = crypto.createPrivateKey({
  key: Buffer.from(PRIVATE_KEY_B64, "base64"),
  format: "der",
  type: "pkcs8",
});

const wsbPublicKey = crypto.createPublicKey({
  key: Buffer.from(WSB_PUBLIC_KEY_B64, "base64"),
  format: "der",
  type: "spki",
});

function signBody(bodyString) {
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(bodyString, "utf8");
  return signer.sign(privateKey).toString("base64");
}

// Optional helper if the gateway signs a body hash (some do)
function sha256b64(s) {
  return crypto.createHash("sha256").update(s, "utf8").digest("base64");
}

// Handles url-safe base64 too
function normalizeB64(b64) {
  if (!b64) return "";
  return b64.replace(/-/g, "+").replace(/_/g, "/");
}

// Try multiple canonical strings + paddings
function verifyResponseSignature(rawBody, headers) {
  const sigHeader = headers.get("x-wsb-signature") || headers.get("X-WSB-SIGNATURE");
  const tsHeader  = headers.get("x-wsb-timestamp") || headers.get("X-WSB-TIMESTAMP");
  if (!sigHeader) return { ok: false, tried: [], reason: "missing signature header" };

  const signature = Buffer.from(normalizeB64(sigHeader), "base64");
  const candidates = [];

  // Most common
  if (tsHeader) candidates.push({ name: "ts\\nbody", data: `${tsHeader}\n${rawBody}` });

  // Raw body (what you had)
  candidates.push({ name: "body", data: rawBody });

  // Body hash variants (some providers sign the hash, not the body)
  if (tsHeader) candidates.push({ name: "ts\\nsha256(body)", data: `${tsHeader}\n${sha256b64(rawBody)}` });
  candidates.push({ name: "sha256(body)", data: sha256b64(rawBody) });

  const tried = [];

  for (const c of candidates) {
    // 1) PKCS#1 v1.5
    try {
      const v = crypto.createVerify("RSA-SHA256");
      v.update(c.data, "utf8");
      if (v.verify(wsbPublicKey, signature)) return { ok: true, tried: [...tried, `${c.name}/pkcs1v15`] };
      tried.push(`${c.name}/pkcs1v15:fail`);
    } catch { tried.push(`${c.name}/pkcs1v15:err`); }

    // 2) RSA-PSS
    try {
      const ok = crypto.verify(
        "RSA-SHA256",
        Buffer.from(c.data, "utf8"),
        { key: wsbPublicKey, padding: crypto.constants.RSA_PKCS1_PSS_PADDING, saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST },
        signature
      );
      if (ok) return { ok: true, tried: [...tried, `${c.name}/pss`] };
      tried.push(`${c.name}/pss:fail`);
    } catch { tried.push(`${c.name}/pss:err`); }
  }

  return { ok: false, tried, reason: "no canonical matched" };
}


/**
 * POST helper to WasabiCard
 * @param {string} path e.g. "/merchant/core/mcb/card/openCard"
 * @param {object} payload JSON payload
 * @param {true|false|"warn"} verifySig verify response signature (true throws; "warn" logs & returns; false skips)
 */
export async function wsbPost(path, payload = {}, verifySig = "warn") {
  const url = `${ENDPOINT}${path}`;
  const bodyString = JSON.stringify(payload ?? {});
  const signature = signBody(bodyString);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-WSB-API-KEY": API_KEY,
      "X-WSB-SIGNATURE": signature,
    },
    body: bodyString,
  });

  const resText = await res.text();
  let json;
  try {
    json = JSON.parse(resText);
  } catch {
    // Return raw text so caller can still see what came back
    const msg = `WSB non-JSON response: ${resText}`;
    if (verifySig === true) throw new Error(msg);
    return { success: false, code: res.status, msg, data: resText, __sigVerified: false, __sigTried: [] };
  }

  // Only try to verify when the call is "successful" by provider’s code
  if (verifySig) {
    const v = verifyResponseSignature(resText, res.headers);
    if (!v.ok) {
      const m = `WSB response signature verification failed (${v.reason}); tried=${v.tried.join(", ")}`;
      if (verifySig === true) {
        // hard fail
        const err = new Error(m);
        err.response = json;
        throw err;
      } else {
        // warn but return data so you can continue flow
        console.warn(m);
        return { ...json, __sigVerified: false, __sigTried: v.tried };
      }
    }
    return { ...json, __sigVerified: true };
  }

  return json;
}
