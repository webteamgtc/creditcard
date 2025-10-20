import crypto from "crypto";

const key="MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIzgTk4gwXfHx2TCpFJyajXCWRx4pJMLT9aOwtMWIiJQNsqFXgF2DjuWb7DHxosrjgduC+KRZbIO3i4NhXIFtZrXk6NGhQQYJ8D2bmbj78legJyB4d3UfO6KOSghjgPI6VVETFPmxtpgS/dnbzagh1T4OgTJG75zDDrY8KEOwppXAgMBAAECgYBJwYY90Vh5Zdc3IdD2eYCx9LbC+Ubw1ZNPOh82dPgaDvUgwwKcsTpyaCjB3VZNttf9e9gtHwKnXrFkWx/quqKBSGv1OoT9LLYV1XUMLKeFuDF+EaVrMwe9GEPcL4I2cQBKem3I9O5DPhWquj1l621hLt2fzg3nJSIub6ReLSbygQJBAPuBJSIUrgs69DmphxWvgPUwIzcwFOSUUsgv6pQfzi4Pvkguu1tkQDvZcKXbkDYeplFfeNoBQRAu0NRojx7T0e8CQQCPZPBWBcvNJ4NqI9My6p0M7IKUYfJMGqAswBcHYljL7C+0fRIbmJ46dx3EM7se/7eSv3VYOvsQyNrfkGIG0IYZAkB5OskRYnJ6S1KJsOPCWjSI+0keQvjvLWexwxcJi0MxBLmtxYjeBrbHooogCHO9Ao0c0C5KtywLhuV2XWgPbf7VAkB5UCc4T70E+rnmURq7x9tIdMtgZ6EKm7gJRBX3jE+dbltJskpgiHTM97t6I13asvMGtu260GNZ5uOtIkSciUv5AkEAwxYXaBPxrU/e7mTwQt3jQKqe26/8qohujaJnp+wNjhvbWIqNUIx8meTi+1rshYfGJ5ENbScRFc0QfZpMPvc8fQ=="

function normalizeKey(raw) {
  if (!raw) return "";
  let key = raw.trim();
  // Trim surrounding quotes if present
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1);
  }
  // Convert \n to real newlines if needed
  if (key.includes("\\n")) key = key.replace(/\\n/g, "\n");
  return key;
}

export function getPrivateKeyObject() {
  const pem = normalizeKey(key|| "");
  const passphrase = key;
  // Supports PKCS#8 and PKCS#1; encrypted or not
  return crypto.createPrivateKey({ key: pem, format: "pem", passphrase });
}

// Create RSA-SHA256 signature (base64) of the raw JSON string
export function signBody(bodyString) {
  const keyObject = getPrivateKeyObject();
  const signature = crypto.sign("sha256", Buffer.from(bodyString), keyObject);
  return signature.toString("base64");
}

// Optional: sanity check
export function assertKeyLooksValid() {
  const head = (key|| "").split("\n")[0] || "";
  if (!head.includes("BEGIN") || !head.toUpperCase().includes("PRIVATE KEY")) {
    throw new Error("WSB_PRIVATE_KEY missing or not a PRIVATE KEY PEM. Check header/footer & newlines.");
  }
}
