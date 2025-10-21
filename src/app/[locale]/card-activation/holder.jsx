"use client";
import { useState } from "react";

export default function WsbCreateHolderForm() {
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState(null);

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setResp(null);

        const f = new FormData(e.currentTarget);

        // Minimal B2B example — adapt to your BIN. For B2C, include KYC file IDs etc.
        const payload = {
            cardHolderModel: f.get("cardHolderModel"), // "B2B" or "B2C"
            merchantOrderNo: f.get("merchantOrderNo"),
            cardTypeId: Number(f.get("cardTypeId")),
            areaCode: f.get("areaCode"),
            mobile: f.get("mobile"),
            email: f.get("email"),
            firstName: f.get("firstName"),
            lastName: f.get("lastName"),
            birthday: f.get("birthday"), // yyyy-MM-dd
            country: f.get("country"),   // ISO 3166-1 alpha-2
            town: f.get("town"),         // city code (per docs)
            address: f.get("address"),
            postCode: f.get("postCode"),
            // For B2C you will also need idFrontId, idBackId, idHoldId, ipAddress, etc. (see docs)
        };

        const dummy = {
            "cardHolderModel": "B2C",
            "merchantOrderNo": "AFD202510101976654665497468928",
            "cardTypeId": 111030,
            "firstName": "Mohammad",
            "lastName": "Zeeshan",
            "birthday": "1993-07-01",
            "areaCode": "971",
            "mobile": "501234567",
            "email": "name@example.com",
            "cardType":"Virtual",
            "country": "AE",
            "town": "AE01",
            "address": "Sheikh-Zayed-Rd 12",
            "postCode": "12345"
        }

        const res = await fetch("/api/wsb/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dummy),
        });

        const json = await res.json();
        setResp(json);
        setLoading(false);
    }

    return (
        <form onSubmit={onSubmit} className="space-y-3 border rounded p-4">
            <h3 className="font-bold">Create Cardholder (v2)</h3>
            <select name="cardHolderModel" className="border p-2 w-full">
                <option value="B2B">B2B</option>
                <option value="B2C">B2C</option>
            </select>
            <input name="merchantOrderNo" placeholder="merchantOrderNo (20-40)" required className="border p-2 w-full" />
            <input name="cardTypeId" placeholder="cardTypeId" required type="number" className="border p-2 w-full" />
            <div className="grid grid-cols-2 gap-2">
                <input name="firstName" placeholder="First Name" required className="border p-2 w-full" />
                <input name="lastName" placeholder="Last Name" required className="border p-2 w-full" />
            </div>
            <input name="birthday" placeholder="YYYY-MM-DD" required className="border p-2 w-full" />
            <div className="grid grid-cols-3 gap-2">
                <input name="areaCode" placeholder="+971" required className="border p-2 w-full" />
                <input name="mobile" placeholder="555123456" required className="border p-2 w-full" />
                <input name="email" placeholder="email@example.com" required className="border p-2 w-full" />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <input name="country" placeholder="AE" required className="border p-2 w-full" />
                <input name="town" placeholder="City code" required className="border p-2 w-full" />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <input name="address" placeholder="Billing address" required className="border p-2 w-full" />
                <input name="postCode" placeholder="Postal code" required className="border p-2 w-full" />
            </div>

            <button disabled={loading} className="px-4 py-2 bg-black text-white rounded">
                {loading ? "Creating..." : "Create Cardholder"}
            </button>
            {resp && <pre className="bg-gray-50 p-3 text-xs overflow-auto">{JSON.stringify(resp, null, 2)}</pre>}
        </form>
    );
}
