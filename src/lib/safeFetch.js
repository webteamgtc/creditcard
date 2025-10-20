// lib/safeFetch.js
export async function safeJson(input, init = {}, fallback = {}) {
  try {
    const res = await fetch(input, { ...init, cache: 'no-store' });
    if (!res.ok) throw new Error(`Fetch ${res.status} ${res.statusText}`);
    return await res.json();
  } catch (err) {
    console.error('[SSR safeJson] error:', err?.message || err);
    // Never crash SSR for bots; return a safe fallback
    return fallback;
  }
}
