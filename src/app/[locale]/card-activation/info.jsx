"use client";
import { useState } from "react";

export default function CheckCardInfo() {
  const [loading, setLoading] = useState(false);
  const [resp, setResp] = useState(null);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setResp(null);
    setLoading(true);

    const f = new FormData(e.currentTarget);
    const cardNo = String(f.get("cardNo") || "").trim();
    const onlySimpleInfo = f.get("onlySimpleInfo") === "on";

    if (!cardNo) {
      setErr("Please enter a card number.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/wsb/card-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cardNo, onlySimpleInfo }),
      });
      const json = await res.json();
      if (!json?.success) {
        setErr(json?.msg || "Failed to fetch card info.");
      }
      setResp(json);
    } catch (e) {
      setErr(String(e));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="border p-4 rounded space-y-3">
      <h3 className="font-semibold text-lg">Check Card Information</h3>

      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3">
        <input
          name="cardNo"
          placeholder="Enter card number (cardNo)"
          className="border p-2"
          required
        />

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="onlySimpleInfo" defaultChecked />
          <span>Return only basic info (exclude balance)</span>
        </label>

        <button
          className="px-4 py-2 bg-black text-white rounded"
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Card Info"}
        </button>
      </form>

      {err && <p className="text-sm text-red-600">{err}</p>}

      {resp && (
        <pre className="mt-2 bg-gray-50 p-3 text-xs overflow-auto">
          {JSON.stringify(resp, null, 2)}
        </pre>
      )}
    </section>
  );
}
