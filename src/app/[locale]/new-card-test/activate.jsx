"use client";
import { useState } from "react";

export default function WsbActivateCardForm() {
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState(null);

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setResp(null);

        const form = new FormData(e.currentTarget);
        const payload = {
            merchantOrderNo: form.get("merchantOrderNo"),
            cardNo: form.get("cardNo"),
            pin: form.get("pin"),
            activeCode: form.get("activeCode"),
            noPinPaymentAmount: form.get("noPinPaymentAmount") ? Number(form.get("noPinPaymentAmount")) : undefined,
        };

        const res = await fetch("/api/wsb/activate", {
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
            <h3 className="font-bold">Activate Card (physical)</h3>
            <input name="merchantOrderNo" placeholder="merchantOrderNo (20-40 chars)" required className="border p-2 w-full" />
            <input name="cardNo" placeholder="cardNo" required className="border p-2 w-full" />
            <input name="pin" placeholder="PIN (6 digits)"  required className="border p-2 w-full" />
            <input name="activeCode" placeholder="Activation code" required className="border p-2 w-full" />
            <input name="noPinPaymentAmount" placeholder="No-PIN amount (0-2000, optional)" type="number" step="1" min="0" max="2000" className="border p-2 w-full" />
            <button  className="px-4 py-2 bg-black text-white rounded">
                {loading ? "Activating..." : "Activate"}
            </button>
            {resp && <pre className="bg-gray-50 p-3 text-xs overflow-auto">{JSON.stringify(resp, null, 2)}</pre>}
        </form>
    );
}
