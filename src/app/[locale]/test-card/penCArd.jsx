// components/OpenCardClient.jsx
"use client";

import { useState } from "react";

/**
 * Minimal form for Open Card
 * Required: cardTypeId (number)
 * Optional: holderId, amount, cardNumber, currency
 */
export default function OpenCardClient() {
    const [cardTypeId, setCardTypeId] = useState("");
    const [holderId, setHolderId] = useState("");
    const [amount, setAmount] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [useMock, setUseMock] = useState(true);
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState(null);

    // helper to build payload
    function buildPayload() {
        const p = {};
        if (cardTypeId) p.cardTypeId = Number(cardTypeId);
        // if (holderId) p.holderId = Number(holderId);
        // if (amount) p.amount = amount; // string or number okay
        // if (cardNumber) p.cardNumber = cardNumber;
        // if (currency) p.currency = currency;
        p.merchantOrderNo="987654321987654321987654321"
        return p;
    }

    async function submit() {
        setLoading(true);
        setResp(null);
        try {
            const payload = buildPayload();

            const url = `/api/open-card`;
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const json = await res.json();
            setResp(json);
        } catch (e) {
            setResp({ ok: false, error: e.message || "Network error" });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={useMock} onChange={(e) => setUseMock(e.target.checked)} />
                    <span className="text-sm">Use mock (dev)</span>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm">cardTypeId (required)</label>
                    <input value={cardTypeId} onChange={(e) => setCardTypeId(e.target.value)} className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">holderId (optional)</label>
                    <input value={holderId} onChange={(e) => setHolderId(e.target.value)} className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">amount (optional)</label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">currency</label>
                    <input value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full border p-2 rounded" />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm">cardNumber (optional for physical card)</label>
                    <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full border p-2 rounded" />
                </div>
            </div>

            <div>
                <button disabled={loading || !cardTypeId} onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60">
                    {loading ? "Creating..." : "Create Card"}
                </button>
            </div>

            {resp && (
                <div className="mt-4 p-4 border rounded bg-gray-50">
                    <div><strong>HTTP ok:</strong> {String(resp.ok)}</div>
                    <div><strong>status:</strong> {resp.status}</div>
                    <div><strong>verified:</strong> {String(resp.verified)}</div>
                    <div className="break-words"><strong>signatureFromServer:</strong> {resp.signatureFromServer}</div>

                    <div className="mt-3">
                        <strong>API data:</strong>
                        <pre className="text-xs mt-2 bg-white p-3 rounded overflow-auto">{JSON.stringify(resp.data ?? resp, null, 2)}</pre>
                    </div>

                    {/* Interpret first array item if returned */}
                    {Array.isArray(resp.data) && resp.data.length > 0 && (
                        <div className="mt-3">
                            <strong>First item:</strong>
                            <pre className="text-xs mt-1 bg-white p-2 rounded">{JSON.stringify(resp.data[0], null, 2)}</pre>

                            <div className="mt-2">
                                {resp.data[0].status === "success" ? (
                                    <div className="text-green-700 font-semibold">
                                        Card successfully created — cardNo: {resp.data[0].cardNo}
                                    </div>
                                ) : (
                                    <div className="text-orange-700">
                                        Current status: <strong>{resp.data[0].status}</strong> — store orderNo <code>{resp.data[0].orderNo}</code> and poll query API later (if available)
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
