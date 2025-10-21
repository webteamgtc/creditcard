// // "use client";
// // import { useState } from "react";

// // export default function WsbOpenCardForm() {
// //     const [loading, setLoading] = useState(false);
// //     const [resp, setResp] = useState(null);

// //     async function onSubmit(e) {
// //         e.preventDefault();
// //         setLoading(true);
// //         setResp(null);

// //         const form = new FormData(e.currentTarget);
// //         const payload = {
// //             merchantOrderNo: form.get("merchantOrderNo"),
// //             cardTypeId: Number(form.get("cardTypeId")),
// //               holderId: form.get("holderId") ? Number(form.get("holderId")) : undefined,
// //             amount: form.get("amount") ? Number(form.get("amount")) : undefined,
// //             cardNumber: form.get("cardNumber") || undefined,
// //         };

// //         const res = await fetch("/api/wsb/open", {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify(payload),
// //         });

// //         const json = await res.json();
// //         setResp(json);
// //         setLoading(false);
// //     }

// //     return (
// //         <form onSubmit={onSubmit} className="space-y-3 border rounded p-4">
// //             <h3 className="font-bold">Open Card</h3>
// //             <input name="merchantOrderNo" placeholder="merchantOrderNo (20-40 chars)" required className="border p-2 w-full" />
// //             <input name="cardTypeId" placeholder="cardTypeId" type="number" required className="border p-2 w-full" />
// //             <input name="holderId" placeholder="holderId (optional)" type="number" className="border p-2 w-full" />
// //             <input name="amount" placeholder="amount (optional, per BIN rules)" type="number" step="0.01" className="border p-2 w-full" />
// //             <input name="cardNumber" placeholder="physical card number (optional)" className="border p-2 w-full" />
// //             <button  className="px-4 py-2 bg-black text-white rounded">
// //                 {loading ? "Opening..." : "Open Card"}
// //             </button>
// //             {resp && <pre className="bg-gray-50 p-3 text-xs overflow-auto">{JSON.stringify(resp, null, 2)}</pre>}
// //         </form>
// //     );
// // }


// "use client";
// import React, { useState } from "react";
// import { toast } from "react-toastify";

// /* Shared styles (same as above flow) */
// const inputBase =
//   "block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 disabled:opacity-60";
// const labelBase = "text-[13px] font-medium text-slate-700";
// const helpBase = "mt-1 text-[12px] text-slate-500";
// const errText = "mt-1 text-[12px] text-rose-600";
// const card = "rounded-2xl border border-slate-200 bg-white shadow-sm";
// const header =
//   "sticky top-0 rounded-t-2xl border-b border-slate-200 bg-slate-50/70 px-5 py-3 backdrop-blur";

// export default function WsbOpenCardForm({ data, setData, setStep }) {
//   const [loading, setLoading] = useState(false);
//   const [resp, setResp] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [orderLen, setOrderLen] = useState(0);

//   const getTransactionData = async () => {
//     try {
//       // Ask only for "create" transactions for this order; first page is usually enough
//       const res = await fetch("/api/wsb/transactions", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           pageNum: 1,
//           pageSize: 20,
//           type: "create",
//           merchantOrderNo: data?.merchantOrderNo || "",
//         }),
//       });
//       const json = await res.json();
//       if (!json?.success) {
//         // setErr(json?.msg || "Query failed");
//         setLoading(false);
//         return;
//       }

//       // Normalize list (provider may use data or data.list)
//       const rows = Array.isArray(json?.data?.records)
//         ? json.data.records
//         : Array.isArray(json?.data)
//           ? json?.data
//           : [];

//       // Find a successful create txn and read cardNo
//       const hit = rows.find(
//         (r) =>
//           String(r?.type).toLowerCase() === "create" &&
//           String(r?.status).toLowerCase() === "success"
//       );

//       setData(st => ({
//         ...st,
//         ...hit
//       }))

//       setOut({
//         cardNo: hit?.cardNo || null,
//         transaction: hit || null,
//         raw: json,
//       });
//     } catch (e2) {
//       // setErr(String(e2));
//     } finally {
//       setLoading(false);
//     }
//   }

//   function validate(payload) {
//     const next = {};
//     if (!payload.merchantOrderNo) {
//       next.merchantOrderNo = "Required.";
//     } else if (
//       payload.merchantOrderNo.length < 20 ||
//       payload.merchantOrderNo.length > 40
//     ) {
//       next.merchantOrderNo = "Must be between 20–40 characters.";
//     }

//     if (!payload.cardTypeId) next.cardTypeId = "cardTypeId is required.";

//     if (payload.amount != null && payload.amount !== "" && Number(payload.amount) < 0) {
//       next.amount = "Amount cannot be negative.";
//     }

//     setErrors(next);
//     return Object.keys(next).length === 0;
//   }

//   async function onSubmit(e) {
//     e.preventDefault();
//     setResp(null);
//     setLoading(true);

//     const form = new FormData(e.currentTarget);
//     const payload = {
//       merchantOrderNo: data?.merchantOrderNo || "",
//       cardTypeId: data?.cardTypeId || undefined,
//       holderId: data?.holderId || undefined,
//       amount: form.get("amount") ? Number(form.get("amount")) : undefined,
//       cardNumber: form.get("cardNumber") ? String(form.get("cardNumber")) : undefined,
//     };

//     if (!validate(payload)) {
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch("/api/wsb/open", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const trans = await getTransactionData()

//       const json = await res.json();
//       console.log({ json })
//       if (json?.success && trans?.data?.records?.[0]?.cardNo) {
//         setResp(json);
//         toast.success(json?.msg)
//         setStep(3)
//       } else {
//         toast?.error(json?.msg)
//       }

//     } catch (err) {
//       setResp({ success: false, error: String(err) });
//     } finally {
//       setLoading(false);

//     }
//   }

//   return (
//     <section className={card}>
//       <div className={header}>
//         <h3 className="text-sm font-semibold text-slate-800">Open Card</h3>
//       </div>

//       <form onSubmit={onSubmit} className="grid gap-4 p-5">
//         {/* <div>
//           <label className={labelBase} htmlFor="merchantOrderNo">
//             Merchant Order No
//           </label>
//           <input
//             id="merchantOrderNo"
//             name="merchantOrderNo"
//             placeholder="20–40 characters"
//             className={inputBase}
//             value={data?.merchantOrderNo}
//             readOnly
//             disabled
//             onChange={(e) => setOrderLen(e.target.value.length)}
//           />
//           <div className="flex items-center justify-between">
//             {errors.merchantOrderNo ? (
//               <p className={errText}>{errors.merchantOrderNo}</p>
//             ) : (
//               <p className={helpBase}>Unique identifier you control.</p>
//             )}
//             <p className="text-[11px] text-slate-400">{orderLen}/40</p>
//           </div>
//         </div>

//          <div>
//           <label className={labelBase} htmlFor="cardTypeId">
//             Card Type ID
//           </label>
//           <input
//             id="cardTypeId"
//             name="cardTypeId"
//             value={data?.cardTypeId}
//             placeholder="e.g., 1001"
//             type="number"
//             className={inputBase}
//             readOnly
//             disabled
//           />
//           {errors.cardTypeId ? (
//             <p className={errText}>{errors.cardTypeId}</p>
//           ) : (
//             <p className={helpBase}>Must match a valid Wasabi card type.</p>
//           )}
//         </div>

//          <div>
//           <label className={labelBase} htmlFor="holderId">
//             Holder ID (optional)
//           </label>
//           <input
//             id="holderId"
//             name="holderId"
//             placeholder="Numeric"
//             type="number"
//             readOnly
//             disabled
//             value={data?.holderId}
//             className={inputBase}
//           />
//           <p className={helpBase}>If omitted, backend will use BIN rules/user context.</p>
//         </div> */}

//         {/* amount (optional) */}
//         <div>
//           <label className={labelBase} htmlFor="amount">
//             Amount (optional)
//           </label>
//           <input
//             id="amount"
//             name="amount"
//             placeholder="Per BIN rules"
//             type="number"
//             step="0.01"
//             className={inputBase}
//           />
//           {errors.amount ? (
//             <p className={errText}>{errors.amount}</p>
//           ) : (
//             <p className={helpBase}>Leave blank to let BIN rules decide.</p>
//           )}
//         </div>

//         {/* cardNumber (optional) */}
//         <div>
//           <label className={labelBase} htmlFor="cardNumber">
//             Physical Card Number (optional)
//           </label>
//           <input
//             id="cardNumber"
//             name="cardNumber"
//             placeholder="For physical cards only"
//             className={inputBase}
//           />
//           <p className={helpBase}>Provide only when opening a physical card.</p>
//         </div>

//         {/* submit */}
//         <div className="pt-1 flex justify-end">
//           <button
//             className="inline-flex items-center gap-2 rounded-lg bg-[#956D42] text-white border-[#956D42] hover:bg-[#7a5735] px-4 py-2.5 text-sm font-semibold shadow-sm disabled:opacity-60"
//             disabled={loading}
//           >
//             {loading && (
//               <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z"
//                 />
//               </svg>
//             )}
//             {loading ? "Opening…" : "Open Card"}
//           </button>
//         </div>
//       </form>

//       {resp && (
//         <div className="border-t border-slate-200 p-5">
//           <p className="mb-2 text-sm font-medium text-slate-800">Server Response</p>
//           <pre className="max-h-80 overflow-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-700">
//             {JSON.stringify(resp, null, 2)}
//           </pre>
//         </div>
//       )}
//     </section>
//   );
// }


"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

/* styles kept the same */
const inputBase =
  "block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 disabled:opacity-60";
const labelBase = "text-[13px] font-medium text-slate-700";
const helpBase = "mt-1 text-[12px] text-slate-500";
const errText = "mt-1 text-[12px] text-rose-600";
const card = "rounded-2xl border border-slate-200 bg-white shadow-sm";
const header =
  "sticky top-0 rounded-t-2xl border-b border-slate-200 bg-slate-50/70 px-5 py-3 backdrop-blur";

/** Poll transactions until a successful 'create' has cardNo or timeout */
async function pollForCardNo(merchantOrderNo, { intervalMs = 1000, maxWaitMs = 20000 } = {}) {
  const deadline = Date.now() + maxWaitMs;

  while (Date.now() < deadline) {
    try {
      const res = await fetch("/api/wsb/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pageNum: 1,
          pageSize: 20,
          type: "create",
          merchantOrderNo
        }),
      });
      const json = await res.json();

      const rows = Array.isArray(json?.data?.records)
        ? json.data.records
        : Array.isArray(json?.data)
          ? json.data
          : [];

      const hit = rows.find(
        (r) =>
          String(r?.type).toLowerCase() === "create" &&
          String(r?.status).toLowerCase() === "success" &&
          r?.cardNo
      );

      if (hit?.cardNo) {
        return { ok: true, hit, raw: json };
      }
    } catch (e) {
      // swallow and keep polling until deadline
    }

    await new Promise((r) => setTimeout(r, intervalMs));
  }

  return { ok: false };
}

export default function WsbOpenCardForm({ data, setData, setStep }) {
  const [loading, setLoading] = useState(false);
  const [resp, setResp] = useState(null);
  const [errors, setErrors] = useState({});

  function validate(payload) {
    const next = {};
    if (!payload.merchantOrderNo) next.merchantOrderNo = "Required.";
    if (!payload.cardTypeId) next.cardTypeId = "cardTypeId is required.";
    if (payload.amount != null && payload.amount !== "" && Number(payload.amount) < 0) {
      next.amount = "Amount cannot be negative.";
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
      merchantOrderNo: data?.merchantOrderNo || "",
      cardTypeId: data?.cardTypeId || undefined,
      holderId: data?.holderId || undefined,
      amount: form.get("amount") ? Number(form.get("amount")) : undefined,
      cardNumber: form.get("cardNumber") ? String(form.get("cardNumber")) : undefined,
    };

    if (!validate(payload)) {
      setLoading(false);
      return;
    }

    try {
      // 1) Open card
      const res = await fetch("/api/wsb/open", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const openJson = await res.json();
      setResp(openJson);

      if (!openJson?.success) {
        toast.error(openJson?.msg || "Failed to open card");
        setLoading(false);
        return;
      }

      toast.info("Opening card… waiting for card number");

      // 2) Poll transactions until cardNo appears (max ~20s)
      const poll = await pollForCardNo(payload.merchantOrderNo, {
        intervalMs: 5000,
        maxWaitMs: 600000,
      })

      if (poll.ok) {
        // store cardNo and txn details in your wizard state
        setData((st) => ({
          ...st,
          ...poll.hit, // includes cardNo and other txn fields
        }));
        toast.success("Card opened successfully");
        setStep(3); // allow navigation now
      } else {
        toast.error("Card number not ready yet. Please try again in a moment.");
      }
    } catch (err) {
      setResp({ success: false, error: String(err) });
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={card}>
      <div className={header}>
        <h3 className="text-sm font-semibold text-slate-800">Open Card</h3>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 p-5">
        <div>
          <label className={labelBase} htmlFor="amount">Amount (optional)</label>
          <input
            id="amount"
            name="amount"
            placeholder="Per BIN rules"
            type="number"
            step="0.01"
            className={inputBase}
          />
          {errors.amount ? (
            <p className={errText}>{errors.amount}</p>
          ) : (
            <p className={helpBase}>Leave blank to let BIN rules decide.</p>
          )}
        </div>

        <div>
          <label className={labelBase} htmlFor="cardNumber">Physical Card Number (optional)</label>
          <input
            id="cardNumber"
            name="cardNumber"
            placeholder="For physical cards only"
            className={inputBase}
          />
          <p className={helpBase}>Provide only when opening a physical card.</p>
        </div>

        <div className="pt-1 flex justify-end">
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-[#956D42] text-white border-[#956D42] hover:bg-[#7a5735] px-4 py-2.5 text-sm font-semibold shadow-sm disabled:opacity-60"
            disabled={loading}
          >
            {loading && (
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z" />
              </svg>
            )}
            {loading ? "Opening…" : "Open Card"}
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
