"use client";
import { useState } from "react";

export default function FindCardNoFromTransactions() {
    const [loading, setLoading] = useState(false);
    const [out, setOut] = useState(null);
    const [err, setErr] = useState("");

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true); setErr(""); setOut(null);

        const f = new FormData(e.currentTarget);
        const merchantOrderNo = String(f.get("merchantOrderNo") || "").trim();

        try {
            // Ask only for "create" transactions for this order; first page is usually enough
            const res = await fetch("/api/wsb/transactions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    pageNum: 1,
                    pageSize: 20,
                    type: "create",
                    merchantOrderNo,
                }),
            });
            const json = await res.json();
            if (!json?.success) {
                setErr(json?.msg || "Query failed");
                setLoading(false);
                return;
            }

            // Normalize list (provider may use data or data.list)
            const rows = Array.isArray(json?.data?.list)
                ? json.data.list
                : Array.isArray(json?.data)
                    ? json.data
                    : [];

            // Find a successful create txn and read cardNo
            const hit = rows.find(
                (r) =>
                    String(r?.type).toLowerCase() === "create" &&
                    String(r?.status).toLowerCase() === "success"
            );

            setOut({
                cardNo: hit?.cardNo || null,
                transaction: hit || null,
                raw: json,
            });
        } catch (e2) {
            setErr(String(e2));
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="border p-4 rounded space-y-3">
            <h3 className="font-semibold">Find CardNo via Transactions</h3>
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-2">
                <input
                    name="merchantOrderNo"
                    className="border p-2"
                    placeholder="merchantOrderNo from openCard"
                    required
                />
                <button className="px-3 py-2 bg-black text-white rounded" disabled={loading}>
                    {loading ? "Searching..." : "Search"}
                </button>
            </form>

            {err && <p className="text-sm text-red-600">{err}</p>}

            {out && (
                <div className="space-y-2">
                    <p className="text-sm">
                        CardNo: <b>{out.cardNo || "— not found yet —"}</b>
                    </p>
                    <pre className="bg-gray-50 p-3 text-xs overflow-auto">
                        {JSON.stringify(out.transaction || out.raw, null, 2)}
                    </pre>
                </div>
            )}
        </section>
    );
}
