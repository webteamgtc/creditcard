// "use client";
// import { useState } from "react";

// export default function WsbActivateCardForm() {
//     const [loading, setLoading] = useState(false);
//     const [resp, setResp] = useState(null);

//     async function onSubmit(e) {
//         e.preventDefault();
//         setLoading(true);
//         setResp(null);

//         const form = new FormData(e.currentTarget);
//         const payload = {
//             merchantOrderNo: form.get("merchantOrderNo"),
//             cardNo: form.get("cardNo"),
//             pin: form.get("pin"),
//             activeCode: form.get("activeCode"),
//             noPinPaymentAmount: form.get("noPinPaymentAmount") ? Number(form.get("noPinPaymentAmount")) : undefined,
//         };

//         const res = await fetch("/api/wsb/activate", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(payload),
//         });

//         const json = await res.json();
//         setResp(json);
//         setLoading(false);
//     }

//     return (
//         <form onSubmit={onSubmit} className="space-y-3 border rounded p-4">
//             <h3 className="font-bold">Activate Card (physical)</h3>
//             <input name="merchantOrderNo" placeholder="merchantOrderNo (20-40 chars)" required className="border p-2 w-full" />
//             <input name="cardNo" placeholder="cardNo" required className="border p-2 w-full" />
//             <input name="pin" placeholder="PIN (6 digits)"  required className="border p-2 w-full" />
//             <input name="activeCode" placeholder="Activation code" required className="border p-2 w-full" />
//             <input name="noPinPaymentAmount" placeholder="No-PIN amount (0-2000, optional)" type="number" step="1" min="0" max="2000" className="border p-2 w-full" />
//             <button  className="px-4 py-2 bg-black text-white rounded">
//                 {loading ? "Activating..." : "Activate"}
//             </button>
//             {resp && <pre className="bg-gray-50 p-3 text-xs overflow-auto">{JSON.stringify(resp, null, 2)}</pre>}
//         </form>
//     );
// }


"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

/* Shared styles (same as other forms) */
const inputBase =
    "block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 disabled:opacity-60";
const labelBase = "text-[13px] font-medium text-slate-700";
const helpBase = "mt-1 text-[12px] text-slate-500";
const errText = "mt-1 text-[12px] text-rose-600";
const card = "rounded-2xl border border-slate-200 bg-white shadow-sm";
const header =
    "sticky top-0 rounded-t-2xl border-b border-slate-200 bg-slate-50/70 px-5 py-3 backdrop-blur";


export default function WsbActivateCardForm({ data, setData, setStep, setSuccess }) {
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState(null);
    const [errors, setErrors] = useState({});
    const [orderLen, setOrderLen] = useState(0);

    const onlyDigits = (s) => (s || "").replace(/\D+/g, "");

    function validate(p) {
        const next = {};

        if (!p.merchantOrderNo) {
            next.merchantOrderNo = "Required.";
        } else if (p.merchantOrderNo.length < 20 || p.merchantOrderNo.length > 40) {
            next.merchantOrderNo = "Must be between 20–40 characters.";
        }

        if (!p.cardNo) next.cardNo = "cardNo is required.";

        if (!p.pin) {
            next.pin = "PIN is required.";
        } else if (!/^\d{6}$/.test(p.pin)) {
            next.pin = "PIN must be exactly 6 digits.";
        }

        if (!p.activeCode) next.activeCode = "Activation code is required.";

        if (p.noPinPaymentAmount != null && p.noPinPaymentAmount !== "") {
            const amt = Number(p.noPinPaymentAmount);
            if (Number.isNaN(amt) || amt < 0 || amt > 2000) {
                next.noPinPaymentAmount = "Enter a number between 0 and 2000.";
            }
        }

        setErrors(next);
        return Object.keys(next).length === 0;
    }

    async function onSubmit(e) {
        e.preventDefault();
        setResp(null);
        setLoading(true);

        const form = new FormData(e.currentTarget);
        const payload = {
            merchantOrderNo: data?.merchantOrderNo,
            cardNo: data?.cardNo,
            pin: String(form.get("pin") || ""),
            activeCode: String(form.get("activeCode") || ""),
            noPinPaymentAmount: form.get("noPinPaymentAmount")
                ? Number(form.get("noPinPaymentAmount"))
                : undefined,
        };

        if (!validate(payload)) {
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/wsb/activate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const json = await res.json();
            if (json?.success) {
                setData(null)
                toast.success(json?.msg)
                setResp(json);
                setSuccess(true)

            } else {
                toast.error(json?.msg)
            }
        } catch (err) {
            setResp({ success: false, error: String(err) });
            toast.error(err || "Something went wrong try again!")
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className={card}>
            <div className={header}>
                <h3 className="text-sm font-semibold text-slate-800">Activate Card (Physical)</h3>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4 p-5">
                {/* merchantOrderNo */}
                <div>
                    <label className={labelBase} htmlFor="merchantOrderNo">
                        Merchant Order No
                    </label>
                    <input
                        id="merchantOrderNo"
                        name="merchantOrderNo"
                        placeholder="20–40 characters"
                        className={inputBase}
                        value={data?.merchantOrderNo}
                        onChange={(e) => setOrderLen(e.target.value.length)}
                        readOnly
                        disabled
                    />
                    <div className="flex items-center justify-between">
                        {errors.merchantOrderNo ? (
                            <p className={errText}>{errors.merchantOrderNo}</p>
                        ) : (
                            <p className={helpBase}>Unique identifier you control.</p>
                        )}
                        <p className="text-[11px] text-slate-400">{orderLen}/40</p>
                    </div>
                </div>

                {/* cardNo */}
                <div>
                    <label className={labelBase} htmlFor="cardNo">
                        Card Number
                    </label>
                    <input
                        id="cardNo"
                        name="cardNo"
                        placeholder="Physical card number"
                        className={inputBase}
                        value={data?.cardNo}
                        readOnly
                        disabled
                    />
                    {errors.cardNo ? (
                        <p className={errText}>{errors.cardNo}</p>
                    ) : (
                        <p className={helpBase}>Enter the exact physical card number.</p>
                    )}
                </div>

                {/* pin */}
                <div>
                    <label className={labelBase} htmlFor="pin">
                        PIN (6 digits)
                    </label>
                    <input
                        id="pin"
                        name="pin"
                        inputMode="numeric"
                        type="password"
                        placeholder="••••••"
                        className={inputBase}
                        maxLength={6}
                        onChange={(e) => (e.currentTarget.value = onlyDigits(e.currentTarget.value).slice(0, 6))}
                        required
                    />
                    {errors.pin ? (
                        <p className={errText}>{errors.pin}</p>
                    ) : (
                        <p className={helpBase}>For your security, PIN is masked.</p>
                    )}
                </div>

                {/* activeCode */}
                <div>
                    <label className={labelBase} htmlFor="activeCode">
                        Activation Code
                    </label>
                    <input
                        id="activeCode"
                        name="activeCode"
                        placeholder="Activation code"
                        className={inputBase}
                        required
                    />
                    {errors.activeCode ? (
                        <p className={errText}>{errors.activeCode}</p>
                    ) : (
                        <p className={helpBase}>Check your Email and enter acivation.</p>
                    )}
                </div>

                {/* noPinPaymentAmount (optional) */}
                <div>
                    <label className={labelBase} htmlFor="noPinPaymentAmount">
                        No-PIN Payment Amount (optional)
                    </label>
                    <input
                        id="noPinPaymentAmount"
                        name="noPinPaymentAmount"
                        placeholder="0–2000"
                        type="number"
                        min="0"
                        max="2000"
                        step="1"
                        className={inputBase}
                    />
                    {errors.noPinPaymentAmount ? (
                        <p className={errText}>{errors.noPinPaymentAmount}</p>
                    ) : (
                        <p className={helpBase}>If set, taps under this limit won’t require a PIN.</p>
                    )}
                </div>

                {/* submit */}
                <div className="pt-1 flex justify-end">
                    <button
                        className="inline-flex items-center gap-2 rounded-lg bg-[#956D42] text-white border-[#956D42] hover:bg-[#7a5735] px-4 py-2.5 text-sm font-semibold shadow-sm disabled:opacity-60"
                        disabled={loading}
                    >
                        {loading && (
                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z"
                                />
                            </svg>
                        )}
                        {loading ? "Activating…" : "Activate"}
                    </button>
                </div>
            </form>

            {resp && (
                <div className="border-t border-slate-200 p-5">
                    <p className="mb-2 text-sm font-medium text-slate-800">Server Response</p>
                    <pre className="max-h-80 overflow-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-700">
                        {JSON.stringify(resp, null, 2)}
                    </pre>
                </div>
            )}
        </section>
    );
}
