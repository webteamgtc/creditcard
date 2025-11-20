"use client";
import React, { useEffect, useMemo, useState } from "react";
import CountryTownSelect from "./countrySelect";
import { toast } from "react-toastify";

/* ---------- Shared field styles ---------- */
const inputBase =
  "block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 disabled:opacity-60";
const labelBase = "text-[13px] font-medium text-slate-700";
const helpBase = "mt-1 text-[12px] text-slate-500";
const errText = "mt-1 text-[12px] text-rose-600";

/* ---------- Pretty Select (same look as inputs) ---------- */
function StyledSelect({
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = "",
  disabled = false,
  error,
  help,
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${inputBase} appearance-none pr-9`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      {/* chevron */}
      <svg
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 011.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>

      {error ? <p className={errText}>{error}</p> : help ? <p className={helpBase}>{help}</p> : null}
    </div>
  );
}

export default function UpdateHolderForm({ setStep, setData, data }) {
  const [cardTypes, setCardTypes] = useState([]);
  const [loadingTypes, setLoadingTypes] = useState(false);
  const [selectedType, setSelectedType] = useState(data?.cardTypeId || "");
  const [holderResp, setHolderResp] = useState(null);
  const [updatingHolder, setUpdatingHolder] = useState(false);
  const [loc, setLoc] = useState({ country: data?.country || "", town: data?.town || "" });
  const [mobileCode, setMobileCode] = useState(data?.areaCode || "");
  const [errors, setErrors] = useState({});
  const [nameCount, setNameCount] = useState(0);
  const [areaCode, setAreaCode] = useState([]);
  const [holderId, setHolderId] = useState(data?.holderId || "");

  useEffect(() => {
    fetchCardTypes();
  }, []);

  async function fetchCardTypes() {
    setLoadingTypes(true);
    try {
      const res = await fetch("/api/wsb/card-types", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageNum: 1, pageSize: 100 }),
      });
      const json = await res.json();
      const list = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];
      setCardTypes(list);
    } catch (e) {
      console.error("card types error", e);
    }
    try {
      const res = await fetch("/api/wsb/area-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageNum: 1, pageSize: 100 }),
      });
      const json = await res.json();
      const list = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];
      setAreaCode(list);
    } catch (e) {
      console.error("area code error", e);
    } finally {
      setLoadingTypes(false);
    }
  }

  // helpers
  const onlyDigits = (s) => (s || "").replace(/\D+/g, "");
  const isISO2 = (s) => /^[A-Z]{2}$/.test((s || "").toUpperCase());
  const addressOk = (s) => /^[A-Za-z0-9\- ]{2,40}$/.test(s || "");
  const postCodeOk = (s) => /^[a-zA-Z0-9]{2,15}$/.test(s || "");

  const cardTypeOptions = useMemo(
    () =>
      cardTypes.map((ct) => ({
        value: String(ct.cardTypeId ?? ct.id),
        label: `${ct.cardTypeName ?? ct.name ?? "Unnamed"} — ID: ${ct.cardTypeId ?? ct.id}`,
      })),
    [cardTypes]
  );

  async function updateHolder(e) {
    e.preventDefault();
    setHolderResp(null);
    setUpdatingHolder(true);

    const f = new FormData(e.currentTarget);
    const payload = {
      holderId: Number(holderId) || Number(f.get("holderId")),
      cardHolderModel: "B2B",
      cardTypeId: selectedType,
      areaCode: mobileCode || "",
      mobile: f.get("mobile") || "",
      email: String(f.get("email") || ""),
      firstName: String(f.get("firstName") || ""),
      lastName: String(f.get("lastName") || ""),
      birthday: String(f.get("birthday") || ""),
      country: (loc.country || "").toUpperCase().trim(),
      town: (loc.town || "").trim(),
      address: String(f.get("address") || ""),
      postCode: String(f.get("postCode") || ""),
    };

    // Basic validation
    const errors = [];
    if (!payload.holderId) errors.push("holderId is required");
    if (!payload.cardTypeId) errors.push("cardTypeId required");
    if (mobileCode.length < 2 || mobileCode.length > 5)
      errors.push("areaCode must be 2–5 digits");
    if (payload.mobile.length < 5 || payload.mobile.length > 20)
      errors.push("mobile must be 5–20 digits");
    if (payload.email.length < 5 || payload.email.length > 50)
      errors.push("email must be 5–50 characters");
    if (!/^[A-Za-z]{2,32}$/.test(payload.firstName))
      errors.push("firstName must be 2–32 English letters");
    if (!/^[A-Za-z]{2,32}$/.test(payload.lastName))
      errors.push("lastName must be 2–32 English letters");
    if ((payload.firstName + payload.lastName).length > 23)
      errors.push("firstName + lastName cannot exceed 23 characters");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(payload.birthday))
      errors.push("birthday must be YYYY-MM-DD");
    if (!isISO2(payload.country))
      errors.push("country must be ISO 3166-1 alpha-2 (e.g. AE)");
    if (!payload.town) errors.push("town (city code) required");
    if (!addressOk(payload.address))
      errors.push("address invalid format (A-Z, 0-9, -, space, 2–40 chars)");
    if (!postCodeOk(payload.postCode))
      errors.push("postCode invalid format (2–15 alphanumeric)");

    if (errors.length > 0) {
      setHolderResp({ success: false, msg: errors.join(" | ") });
      setUpdatingHolder(false);
      toast.error(errors.join(" | "));
      return;
    }

    try {
      const res = await fetch("/api/wsb/update-holder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (json?.success && json?.code == 200) {
        toast.success(json.msg || "Holder updated successfully");
        setData((st) => ({
          ...st,
          ...json?.data,
        }));
      } else {
        toast.error(json.msg || "Update failed");
      }
      setHolderResp(json);
    } catch (err) {
      setHolderResp({ success: false, msg: String(err) });
      toast.error(String(err));
    } finally {
      setUpdatingHolder(false);
    }
  }

  const card = "rounded-2xl border border-slate-200 bg-white shadow-sm";
  const header = "sticky top-0 rounded-t-2xl border-b border-slate-200 bg-slate-50/70 px-5 py-3 backdrop-blur";

  return (
    <div className="mx-auto w-full space-y-6">
      <section className={card}>
        <div className={header}>
          <h3 className="text-sm font-semibold text-slate-800">Select Card Type</h3>
        </div>
        <div className="space-y-2 px-5 py-4">
          <label className={labelBase} htmlFor="cardTypeId-select-update">Card Type</label>
          <StyledSelect
            id="cardTypeId-select-update"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            options={cardTypeOptions}
            placeholder={loadingTypes ? "Loading…" : "-- Select card type --"}
            disabled={loadingTypes}
            error={errors.cardTypeId}
            help={!errors.cardTypeId ? "This selection fills the Card Type ID field below." : null}
          />
          <input type="hidden" name="cardTypeId" value={selectedType || ""} />
        </div>
      </section>

      {/* Form */}
      <section className={card}>
        <div className={header}>
          <h3 className="text-sm font-semibold text-slate-800">Update Cardholder Details</h3>
        </div>

        <form onSubmit={updateHolder} className="grid gap-4 p-5">
          <div>
            <label className={labelBase} htmlFor="holderId">Holder ID</label>
            <input
              id="holderId"
              name="holderId"
              value={holderId}
              onChange={(e) => setHolderId(e.target.value)}
              placeholder="Enter holder ID to update"
              className={inputBase}
              required
            />
            {errors.holderId ? (
              <p className={errText}>{errors.holderId}</p>
            ) : (
              <p className={helpBase}>The ID of the cardholder you want to update.</p>
            )}
          </div>

          {/* Phone group */}
          <div>
            <label className={labelBase}>Phone</label>
            <div className="grid grid-cols-[200px_1fr] gap-3">
              <select
                className="border p-2 block w-full rounded-lg border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 disabled:opacity-60"
                value={mobileCode}
                onChange={(e) => {
                  setMobileCode(e.target.value);
                }}
                required={true}
              >
                <option value="">{"-- Select area code --"}</option>
                {areaCode?.map((o) => (
                  <option key={o.code} value={o.code}>
                    {o?.code} {o?.name}
                  </option>
                ))}
              </select>
              <input
                name="mobile"
                inputMode="numeric"
                placeholder="Mobile number"
                defaultValue={data?.mobile || ""}
                className={inputBase}
                onChange={(e) => (e.currentTarget.value = onlyDigits(e.currentTarget.value))}
                required
              />
            </div>
            <div className="mt-1 grid grid-cols-[130px_1fr] gap-3">
              <div>{errors.areaCode && <p className={errText}>{errors.areaCode}</p>}</div>
              <div>{errors.mobile && <p className={errText}>{errors.mobile}</p>}</div>
            </div>
            {!errors.areaCode && !errors.mobile && (
              <p className={helpBase}>Digits only. Area code 2–5, mobile 5–20.</p>
            )}
          </div>

          <div>
            <label className={labelBase} htmlFor="email">Email</label>
            <input 
              id="email" 
              name="email" 
              placeholder="Email" 
              defaultValue={data?.email || ""}
              className={inputBase} 
              required 
            />
            {errors.email ? <p className={errText}>{errors.email}</p> : <p className={helpBase}>5–50 characters.</p>}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className={labelBase} htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                placeholder="A–Z only"
                defaultValue={data?.firstName || ""}
                className={inputBase}
                onChange={(e) =>
                  setNameCount(
                    (e.target.value +
                      ((document.getElementById("lastName-update") || { value: "" }).value)
                    ).length
                  )
                }
                required
              />
              {errors.firstName && <p className={errText}>{errors.firstName}</p>}
            </div>
            <div>
              <label className={labelBase} htmlFor="lastName">Last Name</label>
              <input
                id="lastName-update"
                name="lastName"
                placeholder="A–Z only"
                defaultValue={data?.lastName || ""}
                className={inputBase}
                onChange={(e) =>
                  setNameCount(
                    (((document.getElementById("firstName") || { value: "" }).value) + e.target.value).length
                  )
                }
                required
              />
              {errors.lastName && <p className={errText}>{errors.lastName}</p>}
            </div>
          </div>
          <div className="flex items-center justify-between">
            {errors.nameJoin ? (
              <p className={errText}>{errors.nameJoin}</p>
            ) : (
              <p className={helpBase}>Combined length ≤ 23 characters.</p>
            )}
            <p className="text-[11px] text-slate-400">{nameCount}/23</p>
          </div>

          <div>
            <label className={labelBase} htmlFor="birthday">Birthday</label>
            <input
              id="birthday"
              name="birthday"
              placeholder="YYYY-MM-DD"
              defaultValue={data?.birthday || ""}
              className={inputBase}
              pattern="\d{4}-\d{2}-\d{2}"
              required
            />
            {errors.birthday ? <p className={errText}>{errors.birthday}</p> : <p className={helpBase}>1990-12-31</p>}
          </div>

          <div>
            <CountryTownSelect value={loc} onChange={setLoc} required />
            <div className="mt-1 grid grid-cols-2 gap-4">
              <div>{errors.country && <p className={errText}>{errors.country}</p>}</div>
              <div>{errors.town && <p className={errText}>{errors.town}</p>}</div>
            </div>
            {!errors.country && !errors.town && <p className={helpBase}>Country must be ISO-2 (e.g., AE).</p>}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className={labelBase} htmlFor="address">Address</label>
              <input 
                id="address" 
                name="address" 
                placeholder="A–Z 0–9 - space" 
                defaultValue={data?.address || ""}
                className={inputBase} 
                required 
              />
              {errors.address && <p className={errText}>{errors.address}</p>}
            </div>
            <div>
              <label className={labelBase} htmlFor="postCode">Post Code</label>
              <input 
                id="postCode" 
                name="postCode" 
                placeholder="2–15 alphanumeric" 
                defaultValue={data?.postCode || ""}
                className={inputBase} 
                required 
              />
              {errors.postCode && <p className={errText}>{errors.postCode}</p>}
            </div>
          </div>

          <div className="pt-1 flex justify-end">
            <button
              disabled={updatingHolder}
              className="inline-flex items-center gap-2 rounded-lg bg-[#956D42] text-white border-[#956D42] hover:bg-[#7a5735] px-4 py-2.5 text-sm font-semibold shadow-sm disabled:opacity-60"
            >
              {updatingHolder && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z" />
                </svg>
              )}
              {updatingHolder ? "Updating…" : "Update Holder"}
            </button>
          </div>
        </form>

        {holderResp && (
          <div className="border-t border-slate-200 p-5">
            <p className="mb-2 text-sm font-medium text-slate-800">Server Response</p>
            <pre className="max-h-80 overflow-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-700">
              {JSON.stringify(holderResp, null, 2)}
            </pre>
          </div>
        )}
      </section>
    </div>
  );
}