"use client";
import { useRouter } from "@/i18n/navigation";
import React, { useEffect, useRef, useState } from "react";

/* ===== Shared styles (same vibe as your other forms) ===== */
const inputBase =
  "block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 disabled:opacity-60";
const labelBase = "text-[13px] font-medium text-slate-700";
const helpBase = "mt-1 text-[12px] text-slate-500";
const errText = "mt-1 text-[12px] text-rose-600";
const card = "rounded-2xl border border-slate-200 bg-white shadow-sm";
const header =
  "sticky top-0 rounded-t-2xl border-b border-slate-200 bg-slate-50/70 px-5 py-3 backdrop-blur";

/* LocalStorage keys */
const LS_EMAIL_KEY = "login_email";
const LS_EMAIL_EXP_KEY = "login_email_expires_at";

/* Hardcoded credentials (rename to avoid clash with state) */
const VALID_EMAIL = "creditcard@gtcfx.com";
const VALID_PASSWORD = "?3:v25C!!xkk";

/* Utility to compute ms until expiry */
function msUntil(ts) {
  const now = Date.now();
  return Math.max(0, Number(ts) - now);
}

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [rememberEmail, setRememberEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const expiryTimerRef = useRef(null);

  /* Load remembered email; purge if expired */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_EMAIL_KEY);
      const exp = localStorage.getItem(LS_EMAIL_EXP_KEY);

      if (saved && exp) {
        const remaining = msUntil(exp);
        if (remaining <= 0) {
          localStorage.removeItem(LS_EMAIL_KEY);
          localStorage.removeItem(LS_EMAIL_EXP_KEY);
        } else {
          setEmail(saved);
          if (expiryTimerRef.current) clearTimeout(expiryTimerRef.current);
          expiryTimerRef.current = setTimeout(() => {
            localStorage.removeItem(LS_EMAIL_KEY);
            localStorage.removeItem(LS_EMAIL_EXP_KEY);
          }, remaining);
        }
      }
    } catch {}
    return () => {
      if (expiryTimerRef.current) clearTimeout(expiryTimerRef.current);
    };
  }, []);

  const validate = () => {
    const next = {};
    if (!email) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email.";
    if (!pwd) next.password = "Password is required.";
    else if (pwd.length < 6) next.password = "At least 6 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // Compare with predefined credentials
      if (email !== VALID_EMAIL || pwd !== VALID_PASSWORD) {
        throw new Error("Invalid email or password.");
      }

      // Remember email for 5 hours if checked
      const expiresAt = Date.now() + 5 * 60 * 60 * 1000;
      localStorage.setItem(LS_EMAIL_KEY, email);
      localStorage.setItem(LS_EMAIL_EXP_KEY, String(expiresAt));
      if (expiryTimerRef.current) clearTimeout(expiryTimerRef.current);
      expiryTimerRef.current = setTimeout(() => {
        localStorage.removeItem(LS_EMAIL_KEY);
        localStorage.removeItem(LS_EMAIL_EXP_KEY);
      }, 5 * 60 * 60 * 1000);

      // Success callback
      router.push("/card-activation");
    } catch (err) {
      setErrors((prev) => ({ ...prev, form: err.message || "Login failed" }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1A68] via-[#141B3A] to-[#0B1A68] p-2 md:p-6">
      <section className={`w-full max-w-md ${card}`}>
        <div className={header}>
          <h3 className="text-sm font-semibold text-slate-800">
            Please Enter Your Login Details
          </h3>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 p-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className={labelBase}>
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              className={inputBase}
              placeholder="Please enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trimStart())}
            />
            {errors.email ? (
              <p className={errText}>{errors.email}</p>
            ) : (
              <p className={helpBase}>Use the email you registered with.</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className={labelBase}>
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                className={`${inputBase} pr-10`}
                placeholder="••••••••"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-[12px] text-slate-600 hover:bg-slate-100"
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password ? (
              <p className={errText}>{errors.password}</p>
            ) : (
              <p className={helpBase}>Minimum 6 characters.</p>
            )}
          </div>

          {/* Remember email for 5 hours */}
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-[13px] text-slate-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-slate-800 focus:ring-slate-200"
                checked={rememberEmail}
                disabled
                onChange={(e) => setRememberEmail(e.target.checked)}
              />
              <span>Remember my email for 5 hours</span>
            </label>
          </div>

          {/* Form error */}
          {errors.form && (
            <div className="rounded-lg bg-rose-50 ring-1 ring-rose-200 px-3 py-2 text-[13px] text-rose-800">
              {errors.form}
            </div>
          )}

          {/* Submit */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#956D42] text-white border-[#956D42] hover:bg-[#7a5735] px-4 py-2.5 text-sm font-semibold shadow-sm disabled:opacity-60"
            >
              {loading && (
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
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
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
