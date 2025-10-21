// "use client";
// import { useEffect, useState } from "react";

// export default function WasabiCardFlow() {
//   const [cardTypes, setCardTypes] = useState<any[]>([]);
//   const [loadingTypes, setLoadingTypes] = useState(false);
//   const [selectedType, setSelectedType] = useState<string | null>(null);

//   const [holderResp, setHolderResp] = useState<any>(null);
//   const [openResp, setOpenResp] = useState<any>(null);
//   const [activateResp, setActivateResp] = useState<any>(null);

//   const [creatingHolder, setCreatingHolder] = useState(false);
//   const [openingCard, setOpeningCard] = useState(false);
//   const [activatingCard, setActivatingCard] = useState(false);

//   useEffect(() => {
//     fetchCardTypes();
//   }, []);

//   async function fetchCardTypes() {
//     setLoadingTypes(true);
//     try {
//       const res = await fetch("/api/wsb/card-types", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ pageNum: 1, pageSize: 100 })
//       });
//       const json = await res.json();
//       const list = Array.isArray(json?.data) ? json.data
//         : Array.isArray(json) ? json
//           : [];
//       setCardTypes(list);
//     } catch (e) {
//       console.error("card types err", e);
//     } finally {
//       setLoadingTypes(false);
//     }
//   }

//   // 🔹 Create holder with ALL required fields (per spec)
//   async function createHolder(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setCreatingHolder(true);
//     setHolderResp(null);

//     const f = new FormData(e.currentTarget);

//     // Build payload strictly as the API expects
//     const payload: any = {
//       cardHolderModel: String(f.get("cardHolderModel") || "B2C"), // B2C / B2B
//       merchantOrderNo: String(f.get("merchantOrderNo") || ""), // length 20..40
//       cardTypeId: Number(f.get("cardTypeId") || 0),
//       areaCode: String(f.get("areaCode") || ""), // length 2..5
//       mobile: String(f.get("mobile") || ""), // length 5..20
//       email: String(f.get("email") || ""), // length 5..50

//       firstName: String(f.get("firstName") || ""), // 2..32; first+last total <= 23 (incl spaces)
//       lastName: String(f.get("lastName") || ""), // 2..32; same total len rule
//       birthday: String(f.get("birthday") || ""), // yyyy-MM-dd

//       nationality: String(f.get("nationality") || ""), // ISO 3166-1 alpha-2
//       country: String(f.get("country") || ""), // ISO 3166-1 alpha-2 (billing)
//       town: String(f.get("town") || ""), // city code (from Get City List)
//       address: String(f.get("address") || ""), // 2..40, ^[A-Za-z0-9\- ]+$
//       postCode: String(f.get("postCode") || ""), // 2..15, ^[a-zA-Z0-9]{1,15}$

//       gender: String(f.get("gender") || ""), // M / F
//       occupation: String(f.get("occupation") || ""), // occupationCode
//       annualSalary: String(f.get("annualSalary") || ""), // e.g. "100000 USD"
//       accountPurpose: String(f.get("accountPurpose") || ""), // English text
//       expectedMonthlyVolume: String(f.get("expectedMonthlyVolume") || ""), // e.g. "10000 USD"

//       idType: String(f.get("idType") || ""), // PASSPORT, HK_HKID, DLN, GOVERNMENT_ISSUED_ID_CARD
//       idNumber: String(f.get("idNumber") || ""), // 2..50
//       ssn: f.get("ssn") ? String(f.get("ssn")) : undefined, // optional

//       issueDate: String(f.get("issueDate") || ""), // yyyy-MM-dd
//       idNoExpiryDate: String(f.get("idNoExpiryDate") || ""), // yyyy-MM-dd

//       idFrontId: String(f.get("idFrontId") || ""), // file id from upload
//       idBackId: String(f.get("idBackId") || ""), // file id from upload
//       idHoldId: String(f.get("idHoldId") || ""), // selfie file id

//       ipAddress: String(f.get("ipAddress") || "") // IPv4
//     };

//     try {
//       const res = await fetch("/api/wsb/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload)
//       });
//       const json = await res.json();
//       setHolderResp(json);
//     } catch (err: any) {
//       setHolderResp({ success: false, msg: String(err) });
//     } finally {
//       setCreatingHolder(false);
//     }
//   }

//   // Open virtual card
//   async function openCard(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setOpeningCard(true);
//     setOpenResp(null);

//     const f = new FormData(e.currentTarget);
//     const payload: any = {
//       merchantOrderNo: String(f.get("merchantOrderNo") || ""),
//       cardTypeId: Number(f.get("cardTypeId") || 0),
//       holderId: f.get("holderId") ? Number(f.get("holderId")) : undefined,
//       amount: f.get("amount") ? Number(f.get("amount")) : undefined
//     };

//     try {
//       const res = await fetch("/api/wsb/open", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload)
//       });
//       const json = await res.json();
//       setOpenResp(json);
//     } catch (err: any) {
//       setOpenResp({ success: false, msg: String(err) });
//     } finally {
//       setOpeningCard(false);
//     }
//   }

//   // Activate virtual card
//   async function activateCard(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setActivatingCard(true);
//     setActivateResp(null);

//     const f = new FormData(e.currentTarget);
//     const payload: any = {
//       merchantOrderNo: String(f.get("merchantOrderNo") || ""),
//       cardNo: String(f.get("cardNo") || ""),
//       activeCode: f.get("activeCode") ? String(f.get("activeCode")) : undefined,
//       status: f.get("status") ? String(f.get("status")) : undefined
//     };

//     try {
//       const res = await fetch("/api/wsb/virtual-activate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload)
//       });
//       const json = await res.json();
//       setActivateResp(json);
//     } catch (err: any) {
//       setActivateResp({ success: false, msg: String(err) });
//     } finally {
//       setActivatingCard(false);
//     }
//   }

//   return (
//     <div className="space-y-6 max-w-4xl mx-auto p-4">
//       <h2 className="text-xl font-bold">Wasabi — Virtual Card Flow</h2>

//       {/* 1) Card Types */}
//       <section className="border p-4 rounded">
//         <h3 className="font-semibold">1) Card Types</h3>
//         {loadingTypes ? (
//           <p>Loading types...</p>
//         ) : (
//           <>
//             <select
//               value={selectedType || ""}
//               onChange={(e) => setSelectedType(e.target.value)}
//               className="border p-2 w-full"
//             >
//               <option value="">-- select card type --</option>
//               {cardTypes.map((ct: any) => {
//                 const id = ct.cardTypeId ?? ct.id ?? ct.typeId;
//                 const name = ct.name ?? ct.cardTypeName ?? ct.title ?? "Card Type";
//                 return (
//                   <option key={id} value={id}>
//                     {name} — id:{id}
//                   </option>
//                 );
//               })}
//             </select>
//             <p className="text-sm text-gray-600 mt-2">
//               If your BIN requires a cardholder, create one below and then use the holderId when opening the card.
//             </p>
//           </>
//         )}
//       </section>

//       {/* 2) Create Cardholder — ALL required fields */}
//       <section className="border p-4 rounded">
//         <h3 className="font-semibold">2) Create Cardholder (all required fields)</h3>

//         <form onSubmit={createHolder} className="grid grid-cols-1 gap-2">
//           {/* Basic identifiers */}
//           <div className="grid grid-cols-2 gap-2">
//             <input name="cardHolderModel" placeholder="B2C or B2B" defaultValue="B2C" className="border p-2" required />
//             <input name="merchantOrderNo" placeholder="merchantOrderNo (20–40 chars)" required className="border p-2" />
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <input
//               name="cardTypeId"
//               placeholder="cardTypeId"
//               defaultValue={selectedType || ""}
//               className="border p-2"
//               required
//             />
//             <input name="email" placeholder="email (receive OTP)" className="border p-2" required />
//           </div>

//           {/* Contact */}
//           <div className="grid grid-cols-3 gap-2">
//             <input name="areaCode" placeholder="areaCode (e.g. 971)" className="border p-2" required />
//             <input name="mobile" placeholder="mobile (5–20 chars)" className="border p-2" required />
//             <input name="ipAddress" placeholder="IPv4 address" className="border p-2" required />
//           </div>

//           {/* Name + DOB */}
//           <div className="grid grid-cols-3 gap-2">
//             <input name="firstName" placeholder="First name (A–Z only)" className="border p-2" required />
//             <input name="lastName" placeholder="Last name (A–Z only)" className="border p-2" required />
//             <input name="birthday" placeholder="YYYY-MM-DD" className="border p-2" required />
//           </div>
//           <p className="text-xs text-gray-500">
//             Note: firstName + lastName total length must be ≤ 23 characters (including spaces).
//           </p>

//           {/* Geography */}
//           <div className="grid grid-cols-3 gap-2">
//             <input name="nationality" placeholder="Nationality (ISO alpha-2, e.g. AE)" className="border p-2" required />
//             <input name="country" placeholder="Billing Country (ISO alpha-2)" className="border p-2" required />
//             <input name="town" placeholder="City code (from Get City List)" className="border p-2" required />
//           </div>
//           <div className="grid grid-cols-3 gap-2">
//             <input name="address" placeholder="Address (A-Z 0-9 - space)" className="border p-2" required />
//             <input name="postCode" placeholder="Postal code (1–15 alnum)" className="border p-2" required />
//             <select name="gender" className="border p-2" defaultValue="" required>
//               <option value="" disabled>Gender</option>
//               <option value="M">M</option>
//               <option value="F">F</option>
//             </select>
//           </div>

//           {/* Employment / KYC */}
//           <div className="grid grid-cols-3 gap-2">
//             <input name="occupation" placeholder="occupationCode" className="border p-2" required />
//             <input name="annualSalary" placeholder="e.g. 100000 USD" className="border p-2" required />
//             <input name="expectedMonthlyVolume" placeholder="e.g. 10000 USD" className="border p-2" required />
//           </div>
//           <input name="accountPurpose" placeholder="Account purpose (English)" className="border p-2" required />

//           {/* ID Docs */}
//           <div className="grid grid-cols-3 gap-2">
//             <select name="idType" className="border p-2" defaultValue="" required>
//               <option value="" disabled>ID Type</option>
//               <option value="PASSPORT">PASSPORT</option>
//               <option value="HK_HKID">HK_HKID</option>
//               <option value="DLN">DLN</option>
//               <option value="GOVERNMENT_ISSUED_ID_CARD">GOVERNMENT_ISSUED_ID_CARD</option>
//             </select>
//             <input name="idNumber" placeholder="ID number (2–50)" className="border p-2" required />
//             <input name="ssn" placeholder="SSN (optional)" className="border p-2" />
//           </div>
//           <div className="grid grid-cols-3 gap-2">
//             <input name="issueDate" placeholder="Issue date YYYY-MM-DD" className="border p-2" required />
//             <input name="idNoExpiryDate" placeholder="Expiry date YYYY-MM-DD" className="border p-2" required />
//             <input name="idFrontId" placeholder="Front fileId (upload first)" className="border p-2" required />
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <input name="idBackId" placeholder="Back fileId (upload first)" className="border p-2" required />
//             <input name="idHoldId" placeholder="Selfie fileId (upload first)" className="border p-2" required />
//           </div>

//           <button disabled={creatingHolder} className="px-4 py-2 bg-black text-white rounded mt-2">
//             {creatingHolder ? "Creating..." : "Create Holder"}
//           </button>
//         </form>

//         {holderResp && (
//           <pre className="mt-3 bg-gray-50 p-3 text-xs overflow-auto">
//             {JSON.stringify(holderResp, null, 2)}
//           </pre>
//         )}
//       </section>

//       {/* 3) Open Virtual Card */}
//       <section className="border p-4 rounded">
//         <h3 className="font-semibold">3) Open Virtual Card</h3>
//         <form onSubmit={openCard} className="grid grid-cols-1 gap-2">
//           <div className="grid grid-cols-2 gap-2">
//             <input name="merchantOrderNo" placeholder="merchantOrderNo (unique)" required className="border p-2" />
//             <input
//               name="cardTypeId"
//               placeholder="cardTypeId"
//               defaultValue={selectedType || ""}
//               required
//               className="border p-2"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <input name="holderId" placeholder="holderId (if required by BIN)" className="border p-2" />
//             <input name="amount" placeholder="initial deposit (optional)" className="border p-2" />
//           </div>

//           <button disabled={openingCard} className="px-4 py-2 bg-black text-white rounded mt-2">
//             {openingCard ? "Opening..." : "Open Virtual Card"}
//           </button>
//         </form>

//         {openResp && (
//           <pre className="mt-3 bg-gray-50 p-3 text-xs overflow-auto">
//             {JSON.stringify(openResp, null, 2)}
//           </pre>
//         )}
//       </section>

//       {/* 4) Activate Virtual Card */}
//       <section className="border p-4 rounded">
//         <h3 className="font-semibold">4) Activate Virtual Card</h3>
//         <form onSubmit={activateCard} className="grid grid-cols-1 gap-2">
//           <div className="grid grid-cols-2 gap-2">
//             <input name="merchantOrderNo" placeholder="merchantOrderNo (unique)" required className="border p-2" />
//             <input name="cardNo" placeholder="cardNo (from openCard response)" required className="border p-2" />
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <input name="activeCode" placeholder="activeCode (if required)" className="border p-2" />
//             <input name="status" placeholder="status (e.g. active) (if supported)" className="border p-2" />
//           </div>

//           <button disabled={activatingCard} className="px-4 py-2 bg-black text-white rounded mt-2">
//             {activatingCard ? "Activating..." : "Activate Virtual Card"}
//           </button>
//         </form>

//         {activateResp && (
//           <pre className="mt-3 bg-gray-50 p-3 text-xs overflow-auto">
//             {JSON.stringify(activateResp, null, 2)}
//           </pre>
//         )}
//       </section>
//     </div>
//   );
// }


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

export default function WasabiCardFlow({ setStep, setData }) {
  const [cardTypes, setCardTypes] = useState([]);
  const [loadingTypes, setLoadingTypes] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [holderResp, setHolderResp] = useState(null);
  const [creatingHolder, setCreatingHolder] = useState(false);
  const [loc, setLoc] = useState({ country: "", town: "" });
  const [mobileCode, setMobileCode] = useState("'")
  const [errors, setErrors] = useState({});
  const [orderLen, setOrderLen] = useState(0);
  const [nameCount, setNameCount] = useState(0);
  const [merchantId, setMerchantId] = useState("");
  const [areaCode, setAreaCode] = useState([])

  /* NEW: generator for a 20-length alphanumeric (A–Z, 0–9) */
  const genMerchantId = (len = 20) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let out = "";
    for (let i = 0; i < len; i++) {
      out += chars[Math.floor(Math.random() * chars.length)];
    }
    return out;
  };

  /* NEW: initialize once on mount */
  useEffect(() => {
    const id = genMerchantId(20);
    setMerchantId(id);
    setOrderLen(id.length);
  }, []);


  useEffect(() => {
    fetchCardTypes();
  }, []);

  async function fetchCardTypes() {
    setLoadingTypes(true);
    // try {
    //   const res = await fetch("/api/wsb/card-types", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ pageNum: 1, pageSize: 100 }),
    //   });
    //   const json = await res.json();
    //   const list = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];
    //   setCardTypes(list);
    // } catch (e) {
    //   console.error("card types error", e);
    // } finally {
    //   setLoadingTypes(false);
    // }
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
      console.error("card types error", e);
    } finally {
      setLoadingTypes(false);
    }
  }

  console.log({ areaCode })

  // helpers
  const onlyDigits = (s) => (s || "").replace(/\D+/g, "");
  const isISO2 = (s) => /^[A-Z]{2}$/.test((s || "").toUpperCase());
  const addressOk = (s) => /^[A-Za-z0-9\- ]{2,40}$/.test(s || "");
  const postCodeOk = (s) => /^[a-zA-Z0-9]{2,15}$/.test(s || "");
  const lettersOnly = (s) => /^[A-Za-z]{2,32}$/.test(s || "");

  const cardTypeOptions = useMemo(
    () =>
      cardTypes.map((ct) => ({
        value: String(ct.cardTypeId ?? ct.id),
        label: `${ct.cardTypeName ?? ct.name ?? "Unnamed"} — ID: ${ct.cardTypeId ?? ct.id}`,
      })),
    [cardTypes]
  );

  async function createHolder(e) {
    e.preventDefault();
    setHolderResp(null);
    setCreatingHolder(true);

    const f = new FormData(e.currentTarget);
    const payload = {
      cardHolderModel: "B2B",
      merchantOrderNo: String(f.get("merchantOrderNo") || ""),
      cardTypeId: 111030,
      areaCode: mobileCode || "",
      mobile: f.get("mobile") || "",
      email: String(f.get("email") || ""),
      firstName: String(f.get("firstName") || ""),
      lastName: String(f.get("lastName") || ""),
      birthday: String(f.get("birthday") || ""),
      country: (loc.country || "").toUpperCase().trim(), // from CountryTownSelect
      town: (loc.town || "").trim(),
      address: String(f.get("address") || ""),
      postCode: String(f.get("postCode") || ""),
    };

    // Basic validation
    const errors = [];
    if (!payload.cardHolderModel) errors.push("cardHolderModel required");
    if (payload.merchantOrderNo.length < 20 || payload.merchantOrderNo.length > 40)
      errors.push("merchantOrderNo must be 20–40 characters");
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
      setCreatingHolder(false);
      return;
    }

    try {
      const res = await fetch("/api/wsb/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      console.log(json)

      if (json?.success) {
        setHolderResp(json);
        setStep(2)
        toast.success(json.msg)
        setData(st => ({
          ...st,
          ...json?.data
        }))

      } else {
        toast.error(json.msg)
      }
    } catch (err) {
      setHolderResp({ success: false, msg: String(err) });
    } finally {
      setCreatingHolder(false);
    }
  }

  const card = "rounded-2xl border border-slate-200 bg-white shadow-sm";
  const header = "sticky top-0 rounded-t-2xl border-b border-slate-200 bg-slate-50/70 px-5 py-3 backdrop-blur";

  return (
    <div className="mx-auto w-full space-y-6">
      {/* <section className={card}>
        <div className={header}>
          <h3 className="text-sm font-semibold text-slate-800">Select Card Type</h3>
        </div>
        <div className="space-y-2 px-5 py-4">
          <label className={labelBase} htmlFor="cardTypeId-select">Card Type</label>

          <StyledSelect
            id="cardTypeId-select"
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
      </section> */}

      {/* Form */}
      <section className={card}>
        <div className={header}>
          <h3 className="text-sm font-semibold text-slate-800"> Cardholder Details (Required)</h3>
        </div>

        <form onSubmit={createHolder} className="grid gap-4 p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
            {/* <div>
              <label className={labelBase} htmlFor="cardHolderModel">Cardholder Model</label>
              <input
                id="cardHolderModel"
                name="cardHolderModel"
                defaultValue="B2B"
                placeholder="e.g., B2B"
                className={inputBase}
                disabled
                required
              />
              {errors.cardHolderModel ? (
                <p className={errText}>{errors.cardHolderModel}</p>
              ) : (
                <p className={helpBase}>Usually <span className="font-medium">B2B</span>.</p>
              )}
            </div> */}

            <div>
              <label className={labelBase} htmlFor="merchantOrderNo">Merchant Order No</label>
              <input
                id="merchantOrderNo"
                name="merchantOrderNo"
                value={merchantId}
                onChange={(e) => {
                  setMerchantId(e.target.value.toUpperCase()); // keep uppercase like generator
                  setOrderLen(e.target.value.length);
                }}
                placeholder="20–40 characters"
                className={`${inputBase} flex-1`}
                required
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
          </div>

          {/* Phone group */}
          <div>
            <label className={labelBase}>Phone</label>
            <div className="grid grid-cols-[200px_1fr] gap-3">
              <select
                className="border p-2 block w-full rounded-lg border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 disabled:opacity-60"
                value={mobileCode}
                onChange={(e) => {
                  setMobileCode(e.target.value)
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
              {/* <input
                name="areaCode"
                inputMode="numeric"
                placeholder="Area (+971)"
                className={inputBase}
                onChange={(e) => (e.currentTarget.value = (e.currentTarget.value))}
                required
              /> */}
              <input
                name="mobile"
                inputMode="numeric"
                placeholder="Mobile number"
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
            <input id="email" name="email" placeholder="Email" className={inputBase} required />
            {errors.email ? <p className={errText}>{errors.email}</p> : <p className={helpBase}>5–50 characters.</p>}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className={labelBase} htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                placeholder="A–Z only"
                className={inputBase}
                onChange={(e) =>
                  setNameCount(
                    (e.target.value +
                      ((document.getElementById("lastName") || { value: "" }).value)
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
                id="lastName"
                name="lastName"
                placeholder="A–Z only"
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
              <input id="address" name="address" placeholder="A–Z 0–9 - space" className={inputBase} required />
              {errors.address && <p className={errText}>{errors.address}</p>}
            </div>
            <div>
              <label className={labelBase} htmlFor="postCode">Post Code</label>
              <input id="postCode" name="postCode" placeholder="2–15 alphanumeric" className={inputBase} required />
              {errors.postCode && <p className={errText}>{errors.postCode}</p>}
            </div>
          </div>

          <div className="pt-1 flex justify-end">
            <button
              disabled={creatingHolder}
              className="inline-flex items-center gap-2 rounded-lg bg-[#956D42] text-white border-[#956D42] hover:bg-[#7a5735] px-4 py-2.5 text-sm font-semibold shadow-sm disabled:opacity-60"
            >
              {creatingHolder && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z" />
                </svg>
              )}
              {creatingHolder ? "Creating…" : "Create Holder"}
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


// "use client";
// import { useEffect, useState } from "react";
// import CitySelect from "./citySelect";
// import CountryTownSelect from "./countrySelect";

// export default function WasabiCardFlow() {
//     const [cardTypes, setCardTypes] = useState([]);
//     const [loadingTypes, setLoadingTypes] = useState(false);
//     const [selectedType, setSelectedType] = useState(null);
//     const [holderResp, setHolderResp] = useState(null);
//     const [creatingHolder, setCreatingHolder] = useState(false);
//     const [town, setTown] = useState("");
//     const [loc, setLoc] = useState({ country: "", town: "" });


//     useEffect(() => {
//         fetchCardTypes();
//     }, []);

//     // Fetch card types
//     async function fetchCardTypes() {
//         setLoadingTypes(true);
//         try {
//             const res = await fetch("/api/wsb/card-types", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ pageNum: 1, pageSize: 100 }),
//             });
//             const json = await res.json();
//             const list = Array.isArray(json?.data)
//                 ? json.data
//                 : Array.isArray(json)
//                     ? json
//                     : [];
//             setCardTypes(list);
//         } catch (e) {
//             console.error("card types error", e);
//         } finally {
//             setLoadingTypes(false);
//         }
//     }

//     // Helper validation
//     const onlyDigits = (s) => (s || "").replace(/\D+/g, "");
//     const isISO2 = (s) => /^[A-Z]{2}$/.test((s || "").toUpperCase());
//     const addressOk = (s) => /^[A-Za-z0-9\- ]{2,40}$/.test(s || "");
//     const postCodeOk = (s) => /^[a-zA-Z0-9]{1,15}$/.test(s || "");

//     // Create cardholder (required parameters only)
//     async function createHolder(e) {
//         e.preventDefault();
//         setCreatingHolder(true);
//         setHolderResp(null);

//         const f = new FormData(e.currentTarget);

//         const payload = {
//             cardHolderModel: String(f.get("cardHolderModel") || "B2B"),
//             merchantOrderNo: String(f.get("merchantOrderNo") || ""),
//             cardTypeId: Number(f.get("cardTypeId") || 0),
//             areaCode: (String(f.get("areaCode") || "")),
//             mobile: f.get("mobile") || "",
//             email: String(f.get("email") || ""),
//             firstName: String(f.get("firstName") || ""),
//             lastName: String(f.get("lastName") || ""),
//             birthday: String(f.get("birthday") || ""),
//             country: (loc.country || "").toUpperCase().trim(), // from CountryTownSelect
//             town: (loc.town || "").trim(),
//             address: String(f.get("address") || ""),
//             postCode: String(f.get("postCode") || ""),
//         };

//         // Basic validation
//         const errors = [];
//         if (!payload.cardHolderModel) errors.push("cardHolderModel required");
//         if (payload.merchantOrderNo.length < 20 || payload.merchantOrderNo.length > 40)
//             errors.push("merchantOrderNo must be 20–40 characters");
//         if (!payload.cardTypeId) errors.push("cardTypeId required");
//         if (payload.areaCode.length < 2 || payload.areaCode.length > 5)
//             errors.push("areaCode must be 2–5 digits");
//         if (payload.mobile.length < 5 || payload.mobile.length > 20)
//             errors.push("mobile must be 5–20 digits");
//         if (payload.email.length < 5 || payload.email.length > 50)
//             errors.push("email must be 5–50 characters");
//         if (!/^[A-Za-z]{2,32}$/.test(payload.firstName))
//             errors.push("firstName must be 2–32 English letters");
//         if (!/^[A-Za-z]{2,32}$/.test(payload.lastName))
//             errors.push("lastName must be 2–32 English letters");
//         if ((payload.firstName + payload.lastName).length > 23)
//             errors.push("firstName + lastName cannot exceed 23 characters");
//         if (!/^\d{4}-\d{2}-\d{2}$/.test(payload.birthday))
//             errors.push("birthday must be YYYY-MM-DD");
//         if (!isISO2(payload.country))
//             errors.push("country must be ISO 3166-1 alpha-2 (e.g. AE)");
//         if (!payload.town) errors.push("town (city code) required");
//         if (!addressOk(payload.address))
//             errors.push("address invalid format (A-Z, 0-9, -, space, 2–40 chars)");
//         if (!postCodeOk(payload.postCode))
//             errors.push("postCode invalid format (2–15 alphanumeric)");

//         if (errors.length > 0) {
//             setHolderResp({ success: false, msg: errors.join(" | ") });
//             setCreatingHolder(false);
//             return;
//         }

//         try {
//             const res = await fetch("/api/wsb/create", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(payload),
//             });
//             const json = await res.json();
//             setHolderResp(json);
//         } catch (err) {
//             setHolderResp({ success: false, msg: String(err) });
//         } finally {
//             setCreatingHolder(false);
//         }
//     }

//     return (
//         <div className="w-full mx-auto space-y-6">
//             <h2 className="text-xl font-bold">Wasabi — Create Cardholder (Required Fields)</h2>

//             {/* 1) Card Types */}
//             <section className="border p-4 rounded">
//                 <h3 className="font-semibold mb-2">Select Card Type</h3>
//                 {loadingTypes ? (
//                     <p>Loading...</p>
//                 ) : (
//                     <select
//                         value={selectedType || ""}
//                         onChange={(e) => setSelectedType(e.target.value)}
//                         className="border p-2 w-full"
//                     >
//                         <option value="">-- Select card type --</option>
//                         {cardTypes.map((ct) => {
//                             const id = ct.cardTypeId || ct.id;
//                             const name = ct.cardTypeName || ct.name || "Unnamed";
//                             return (
//                                 <option key={id} value={id}>
//                                     {name} — ID: {id}
//                                 </option>
//                             );
//                         })}
//                     </select>
//                 )}
//             </section>

//             {/* 2) Create Cardholder Form */}
//             <section className="border p-4 rounded">
//                 <h3 className="font-semibold mb-2">Create Cardholder</h3>
//                 <form onSubmit={createHolder} className="grid grid-cols-1 gap-2">
//                     <input
//                         name="cardHolderModel"
//                         defaultValue="B2B"
//                         placeholder="cardHolderModel (e.g. B2B)"
//                         className="border p-2"
//                         required
//                     />
//                     <input
//                         name="merchantOrderNo"
//                         placeholder="merchantOrderNo (20–40 chars)"
//                         className="border p-2"
//                         required
//                     />
//                     <input
//                         name="cardTypeId"
//                         placeholder="cardTypeId"
//                         defaultValue={selectedType || ""}
//                         className="border p-2"
//                         required
//                     />
//                     <div className="grid grid-cols-2 gap-2">
//                         <input
//                             name="areaCode"
//                             placeholder="areaCode (2–5 digits)"
//                             className="border p-2"
//                             required
//                         />
//                         <input
//                             name="mobile"
//                             placeholder="mobile (5–20 digits)"
//                             className="border p-2"
//                             required
//                         />
//                     </div>
//                     <input
//                         name="email"
//                         placeholder="email (5–50 chars)"
//                         className="border p-2"
//                         required
//                     />
//                     <div className="grid grid-cols-2 gap-2">
//                         <input
//                             name="firstName"
//                             placeholder="First Name (A–Z only)"
//                             className="border p-2"
//                             required
//                         />
//                         <input
//                             name="lastName"
//                             placeholder="Last Name (A–Z only)"
//                             className="border p-2"
//                             required
//                         />
//                     </div>
//                     <input
//                         name="birthday"
//                         placeholder="Birthday (YYYY-MM-DD)"
//                         className="border p-2"
//                         required
//                     />
//                     <input
//                         name="country"
//                         placeholder="Country (ISO alpha-2, e.g. AE)"
//                         className="border p-2"
//                         required
//                     />
//                     <CountryTownSelect value={loc} onChange={setLoc} required />

//                     <input
//                         name="address"
//                         placeholder="Address (A–Z 0–9 - space)"
//                         className="border p-2"
//                         required
//                     />
//                     <input
//                         name="postCode"
//                         placeholder="Post Code (2–15 alphanumeric)"
//                         className="border p-2"
//                         required
//                     />

//                     <button
//                         disabled={creatingHolder}
//                         className="px-4 py-2 bg-black text-white rounded mt-2"
//                     >
//                         {creatingHolder ? "Creating..." : "Create Holder"}
//                     </button>
//                 </form>

//                 {holderResp && (
//                     <pre className="mt-3 bg-gray-50 p-3 text-xs overflow-auto">
//                         {JSON.stringify(holderResp, null, 2)}
//                     </pre>
//                 )}
//             </section>
//         </div>
//     );
// }
