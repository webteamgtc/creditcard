// lib/wasabi.js
import crypto from "crypto";

const ENDPOINT = "https://sandbox-api-merchant.wasabicard.com";
const API_KEY = "7d520e62-4402-44a1-9c35-e69c22ce4aca-8cdc6c13-d1fa-4c09-ac1d-5453c3e9d8ed";
const PRIV_ENV = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIzgTk4gwXfHx2TCpFJyajXCWRx4pJMLT9aOwtMWIiJQNsqFXgF2DjuWb7DHxosrjgduC+KRZbIO3i4NhXIFtZrXk6NGhQQYJ8D2bmbj78legJyB4d3UfO6KOSghjgPI6VVETFPmxtpgS/dnbzagh1T4OgTJG75zDDrY8KEOwppXAgMBAAECgYBJwYY90Vh5Zdc3IdD2eYCx9LbC+Ubw1ZNPOh82dPgaDvUgwwKcsTpyaCjB3VZNttf9e9gtHwKnXrFkWx/quqKBSGv1OoT9LLYV1XUMLKeFuDF+EaVrMwe9GEPcL4I2cQBKem3I9O5DPhWquj1l621hLt2fzg3nJSIub6ReLSbygQJBAPuBJSIUrgs69DmphxWvgPUwIzcwFOSUUsgv6pQfzi4Pvkguu1tkQDvZcKXbkDYeplFfeNoBQRAu0NRojx7T0e8CQQCPZPBWBcvNJ4NqI9My6p0M7IKUYfJMGqAswBcHYljL7C+0fRIbmJ46dx3EM7se/7eSv3VYOvsQyNrfkGIG0IYZAkB5OskRYnJ6S1KJsOPCWjSI+0keQvjvLWexwxcJi0MxBLmtxYjeBrbHooogCHO9Ao0c0C5KtywLhuV2XWgPbf7VAkB5UCc4T70E+rnmURq7x9tIdMtgZ6EKm7gJRBX3jE+dbltJskpgiHTM97t6I13asvMGtu260GNZ5uOtIkSciUv5AkEAwxYXaBPxrU/e7mTwQt3jQKqe26/8qohujaJnp+wNjhvbWIqNUIx8meTi+1rshYfGJ5ENbScRFc0QfZpMPvc8fQ==";   // can be PEM or base64(der)
const PUB_ENV  = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCM4E5OIMF3x8dkwqRScmo1wlkceKSTC0/WjsLTFiIiUDbKhV4Bdg47lm+wx8aLK44HbgvikWWyDt4uDYVyBbWa15OjRoUEGCfA9m5m4+/JXoCcgeHd1HzuijkoIY4DyOlVRExT5sbaYEv3Z282oIdU+DoEyRu+cww62PChDsKaVwIDAQAB";    // can be PEM or base64(der)

function assertEnv() {
  if (!ENDPOINT || !API_KEY || !PRIV_ENV || !PUB_ENV) {
    throw new Error("Missing Wasabi env vars. Check .env.local");
  }
}
assertEnv();

/** Normalize base64 (handle URL-safe variants) */
function normalizeB64(s) {
  return s.replace(/-/g, "+").replace(/_/g, "/").replace(/\s+/g, "");
}

/** Heuristic: is this PEM? */
function looksLikePEM(s) {
  return /-----BEGIN [A-Z ]+-----/.test(s);
}

/** Build a KeyObject from various env formats. */
function loadPrivateKey(keyStr) {
  const trimmed = keyStr.trim();

  // If it already looks like PEM, try PKCS#8 then PKCS#1
  if (looksLikePEM(trimmed)) {
    try {
      return crypto.createPrivateKey({ key: trimmed, format: "pem" }); // auto-detect pkcs8/pkcs1
    } catch (e) {
      // fallthrough below
    }
  }

  // Otherwise assume base64(der). Try PKCS#8 DER first (most common), then PKCS#1 DER
  const der = Buffer.from(normalizeB64(trimmed), "base64");
  try {
    return crypto.createPrivateKey({ key: der, format: "der", type: "pkcs8" });
  } catch (e1) {
    // Try PKCS#1 DER (RSA PRIVATE KEY)
    try {
      return crypto.createPrivateKey({ key: der, format: "der", type: "pkcs1" });
    } catch (e2) {
      // As a last resort, wrap into PEM if it was a single-line PEM without headers (rare)
      throw new Error(
        "Unable to parse private key. Provide PEM (-----BEGIN PRIVATE KEY-----) or base64 DER (PKCS#8/PKCS#1)."
      );
    }
  }
}

function loadPublicKey(keyStr) {
  const trimmed = keyStr.trim();

  // If PEM, try directly (SPKI or PKCS1)
  if (looksLikePEM(trimmed)) {
    try {
      return crypto.createPublicKey({ key: trimmed, format: "pem" }); // auto-detect spki/pkcs1
    } catch (e) {
      // fallthrough below
    }
  }

  // Otherwise assume base64(der). Try SPKI DER first, then PKCS#1 DER
  const der = Buffer.from(normalizeB64(trimmed), "base64");
  try {
    return crypto.createPublicKey({ key: der, format: "der", type: "spki" });
  } catch (e1) {
    try {
      return crypto.createPublicKey({ key: der, format: "der", type: "pkcs1" });
    } catch (e2) {
      throw new Error(
        "Unable to parse public key. Provide PEM (-----BEGIN PUBLIC KEY-----) or base64 DER (SPKI/PKCS#1)."
      );
    }
  }
}

const PRIVATE_KEY = loadPrivateKey(PRIV_ENV);
const PUBLIC_KEY  = loadPublicKey(PUB_ENV);

/** Sign exact JSON string with RSA-SHA256 */
export function signSha256(data) {
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(data, "utf8");
  signer.end();
  return signer.sign(PRIVATE_KEY).toString("base64");
}

/** Verify response body with Wasabi public key */
export function verifySignature(data, signatureB64) {
  const verifier = crypto.createVerify("RSA-SHA256");
  verifier.update(data, "utf8");
  verifier.end();
  return verifier.verify(PUBLIC_KEY, Buffer.from(signatureB64, "base64"));
}

/** Send signed POST to Wasabi */
export async function postWasabi(path, bodyObj) {
  const url = `${ENDPOINT}${path}`;
  const body = JSON.stringify(bodyObj ?? {"merchantOrderNo":"M20251014-000000000001","cardNo":"38928421021320391244","pin":"123456","activeCode":"ABC123","noPinPaymentAmount":500});
  const signature = signSha256(body);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-WSB-API-KEY": API_KEY,
      "X-WSB-SIGNATURE": signature,
    },
    body,
    cache: "no-store",
  });

  const text = await res.text();
  console.log(res)
  const respSig = res.headers.get("X-WSB-SIGNATURE");
  let parsed = null;
  try {
    parsed = JSON.parse(text);
  } catch { /* leave as text */ }

  return {
    ok: res.ok,
    status: res.status,
    verified: Boolean(respSig) && verifySignature(text, respSig),
    responseSignature: respSig,
    data: parsed ?? text,
  };
}
