"use client "
// components/StatusMessage.js
import React from "react";

const styles = {
    success: {
        wrap: "bg-emerald-50 ring-emerald-200 text-emerald-900",
        badge: "bg-emerald-100 text-emerald-700",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12A10 10 0 1 1 12 2" />
                <path d="m22 4-12 12-3-3" />
            </svg>
        ),
    },
    info: {
        wrap: "bg-sky-50 ring-sky-200 text-sky-900",
        badge: "bg-sky-100 text-sky-700",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
            </svg>
        ),
    },
    warning: {
        wrap: "bg-amber-50 ring-amber-200 text-amber-900",
        badge: "bg-amber-100 text-amber-700",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <path d="M12 9v4M12 17h.01" />
            </svg>
        ),
    },
    error: {
        wrap: "bg-rose-50 ring-rose-200 text-rose-900",
        badge: "bg-rose-100 text-rose-700",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M15 9l-6 6M9 9l6 6" />
            </svg>
        ),
    },
};

export default function StatusMessage({
    variant = "success",
    title = "",
    message = "",
    actions = null,   // optional React nodes (buttons/links)
    className = "",   // optional extra classes
}) {
    const s = styles[variant] || styles.success;

    return (
        <div className={`rounded-xl ring-1 p-4 sm:p-5 ${s.wrap} ${className}`}>
            <div className="flex gap-3">
                <div className={`h-9 w-9 shrink-0 grid place-items-center rounded-full ${s.badge}`}>
                    {s.icon}
                </div>
                <div className="min-w-0 flex-1">
                    {title ? <h4 className="text-[15px] font-semibold">{title}</h4> : null}
                    {message ? <p className="mt-0.5 text-[13px] text-slate-700">{message}</p> : null}
                    {actions ? <div className="mt-4 flex flex-wrap gap-2">{actions}</div> : null}
                </div>
            </div>
        </div>
    );
}
