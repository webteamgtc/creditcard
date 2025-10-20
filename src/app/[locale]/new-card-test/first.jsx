"use client";
import { useState } from "react";

export default function WsbOpenCardForm() {
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState(null);

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setResp(null);

        const form = new FormData(e.currentTarget);
        const payload = {
            merchantOrderNo: form.get("merchantOrderNo"),
            cardTypeId: Number(form.get("cardTypeId")),
              holderId: form.get("holderId") ? Number(form.get("holderId")) : undefined,
            amount: form.get("amount") ? Number(form.get("amount")) : undefined,
            cardNumber: form.get("cardNumber") || undefined,
        };

        const res = await fetch("/api/wsb/open", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const json = await res.json();
        setResp(json);
        setLoading(false);
    }

    return (
        <form onSubmit={onSubmit} className="space-y-3 border rounded p-4">
            <h3 className="font-bold">Open Card</h3>
            <input name="merchantOrderNo" placeholder="merchantOrderNo (20-40 chars)" required className="border p-2 w-full" />
            <input name="cardTypeId" placeholder="cardTypeId" type="number" required className="border p-2 w-full" />
            <input name="holderId" placeholder="holderId (optional)" type="number" className="border p-2 w-full" />
            <input name="amount" placeholder="amount (optional, per BIN rules)" type="number" step="0.01" className="border p-2 w-full" />
            <input name="cardNumber" placeholder="physical card number (optional)" className="border p-2 w-full" />
            <button  className="px-4 py-2 bg-black text-white rounded">
                {loading ? "Opening..." : "Open Card"}
            </button>
            {resp && <pre className="bg-gray-50 p-3 text-xs overflow-auto">{JSON.stringify(resp, null, 2)}</pre>}
        </form>
    );
}
