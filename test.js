const crypto = require('crypto');

const WSB_PRIVATE_KEY_B64="MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIzgTk4gwXfHx2TCpFJyajXCWRx4pJMLT9aOwtMWIiJQNsqFXgF2DjuWb7DHxosrjgduC+KRZbIO3i4NhXIFtZrXk6NGhQQYJ8D2bmbj78legJyB4d3UfO6KOSghjgPI6VVETFPmxtpgS/dnbzagh1T4OgTJG75zDDrY8KEOwppXAgMBAAECgYBJwYY90Vh5Zdc3IdD2eYCx9LbC+Ubw1ZNPOh82dPgaDvUgwwKcsTpyaCjB3VZNttf9e9gtHwKnXrFkWx/quqKBSGv1OoT9LLYV1XUMLKeFuDF+EaVrMwe9GEPcL4I2cQBKem3I9O5DPhWquj1l621hLt2fzg3nJSIub6ReLSbygQJBAPuBJSIUrgs69DmphxWvgPUwIzcwFOSUUsgv6pQfzi4Pvkguu1tkQDvZcKXbkDYeplFfeNoBQRAu0NRojx7T0e8CQQCPZPBWBcvNJ4NqI9My6p0M7IKUYfJMGqAswBcHYljL7C+0fRIbmJ46dx3EM7se/7eSv3VYOvsQyNrfkGIG0IYZAkB5OskRYnJ6S1KJsOPCWjSI+0keQvjvLWexwxcJi0MxBLmtxYjeBrbHooogCHO9Ao0c0C5KtywLhuV2XWgPbf7VAkB5UCc4T70E+rnmURq7x9tIdMtgZ6EKm7gJRBX3jE+dbltJskpgiHTM97t6I13asvMGtu260GNZ5uOtIkSciUv5AkEAwxYXaBPxrU/e7mTwQt3jQKqe26/8qohujaJnp+wNjhvbWIqNUIx8meTi+1rshYfGJ5ENbScRFc0QfZpMPvc8fQ=="
const WSB_PUBLIC_KEY_B64="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCM4E5OIMF3x8dkwqRScmo1wlkceKSTC0/WjsLTFiIiUDbKhV4Bdg47lm+wx8aLK44HbgvikWWyDt4uDYVyBbWa15OjRoUEGCfA9m5m4+/JXoCcgeHd1HzuijkoIY4DyOlVRExT5sbaYEv3Z282oIdU+DoEyRu+cww62PChDsKaVwIDAQAB"



if (!WSB_PRIVATE_KEY_B64 || !WSB_PUBLIC_KEY_B64) {
  console.error('Missing envs. Got:', {
    WSB_PRIVATE_KEY_B64: !!WSB_PRIVATE_KEY_B64,
    WSB_PUBLIC_KEY_B64: !!WSB_PUBLIC_KEY_B64,
  });
  process.exit(1);
}

const priv = crypto.createPrivateKey({ key: Buffer.from(WSB_PRIVATE_KEY_B64, 'base64'), format: 'der', type: 'pkcs8' });
const pub  = crypto.createPublicKey({ key: Buffer.from(WSB_PUBLIC_KEY_B64, 'base64'), format: 'der', type: 'spki' });

const body = JSON.stringify({ ping: 'pong' });

const sig = crypto.createSign('RSA-SHA256').update(body, 'utf8').sign(priv).toString('base64');
const ok  = crypto.createVerify('RSA-SHA256').update(body, 'utf8').verify(pub, Buffer.from(sig, 'base64'));

console.log({ ok }); // should be true
