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


export default function WebDepositBalanceForm({ data, setData, setStep, setSuccess }) {
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState(null);
    const [errors, setErrors] = useState({});

    const onlyDigits = (s) => (s || "").replace(/\D+/g, "");
    async function onSubmit(e) {
        e.preventDefault();
        setResp(null);
        setLoading(true);

        const form = new FormData(e.currentTarget);
        const payload = {
            merchantOrderNo: data?.merchantOrderNo,
            cardNo: data?.cardNo,
            amount: String(form.get("amount") || ""),
        };

        try {
            const res = await fetch("/api/wsb/amount-deposit", {
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
                <h3 className="text-sm font-semibold text-slate-800">Deposit Amount</h3>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4 p-5">
                <div>
                    <label className={labelBase} htmlFor="amount">
                        Enter Amount
                    </label>
                    <input
                        id="amount"
                        name="amount"
                        inputMode="numeric"
                        type="text"
                        placeholder="E.g 100"
                        className={inputBase}
                        maxLength={6}
                        onChange={(e) => (e.currentTarget.value = onlyDigits(e.currentTarget.value).slice(0, 6))}
                        required
                    />
                    {errors.amount ? (
                        <p className={errText}>{errors.amount}</p>
                    ) : (
                        <p className={helpBase}></p>
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
                        {loading ? "Submiting.." : "Submit"}
                    </button>
                </div>
            </form>
        </section>
    );
}
