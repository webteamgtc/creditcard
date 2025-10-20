// // components/ActiveCardClient.jsx
// "use client";

// import { useState } from "react";

// export default function ActiveCardClient() {
//     const [getResult, setGetResult] = useState(null);
//     const [postResult, setPostResult] = useState(null);
//     const [posting, setPosting] = useState(false);
//     const [getting, setGetting] = useState(false);

//     // Adjust if your endpoint needs specific fields
//     const [payload, setPayload] = useState(() =>
//         JSON.stringify({}, null, 2)
//     );

//     const doGet = async () => {
//         setGetting(true);
//         setGetResult(null);
//         try {
//             const res = await fetch("/api/verify-key", { cache: "no-store" });
//             const json = await res.json();
//             setGetResult(json);
//         } catch (e) {
//             setGetResult({ ok: false, status: 0, error: e?.message || "Network error" });
//         } finally {
//             setGetting(false);
//         }
//     };

//     const doPost = async () => {
//         setPosting(true);
//         setPostResult(null);
//         try {
//             let body = {};
//             try {
//                 body = JSON.parse({ "merchantOrderNo": "M20251014-000000000001", "cardNo": "4937240800299333", "pin": "523698", "activeCode": "ABC123", "noPinPaymentAmount": 500 } || "{}");
//             } catch {
//                 body = {};
//             }
//             const res = await fetch("/api/verify-card", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ "merchantOrderNo": "M20251014-000000000001", "cardNo": "4937240800299333", "pin": "523698", "activeCode": "679", "noPinPaymentAmount": 500 }),
//             });
//             const json = await res.json();
//             setPostResult(json);
//         } catch (e) {
//             setPostResult({ ok: false, status: 0, error: e?.message || "Network error" });
//         } finally {
//             setPosting(false);
//         }
//     };

//     return (
//         <div className="space-y-8">
//             {/* GET */}
//             <div className="rounded-2xl border p-4 space-y-3">
//                 <div className="flex items-center justify-between">
//                     <h2 className="font-semibold">GET /api/wasabi/active-card</h2>
//                     <button
//                         onClick={doGet}
//                         disabled={getting}
//                         className="px-4 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
//                     >
//                         {getting ? "Loading..." : "Call GET"}
//                     </button>
//                 </div>

//                 {getResult && (
//                     <div className="text-sm space-y-2">
//                         <div className="flex gap-4 flex-wrap">
//                             <span className="px-2 py-0.5 rounded bg-gray-100">ok: {String(getResult.ok)}</span>
//                             <span className="px-2 py-0.5 rounded bg-gray-100">status: {getResult.status}</span>
//                             {typeof getResult.verified !== "undefined" && (
//                                 <span className="px-2 py-0.5 rounded bg-gray-100">
//                                     verified: {String(getResult.verified)}
//                                 </span>
//                             )}
//                         </div>
//                         {getResult.signatureFromServer && (
//                             <div className="break-all">
//                                 <div className="text-gray-500">X-WSB-SIGNATURE (response):</div>
//                                 <code className="text-xs">{getResult.signatureFromServer}</code>
//                             </div>
//                         )}
//                         <pre className="text-xs bg-gray-50 p-3 rounded overflow-auto">
//                             {JSON.stringify(getResult.data ?? getResult, null, 2)}
//                         </pre>
//                     </div>
//                 )}
//             </div>

//             {/* POST */}
//             <div className="rounded-2xl border p-4 space-y-3">
//                 <div className="flex items-center justify-between">
//                     <h2 className="font-semibold">POST /api/wasabi/active-card</h2>
//                     <button
//                         onClick={doPost}
//                         disabled={posting}
//                         className="px-4 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
//                     >
//                         {posting ? "Submitting..." : "Call POST"}
//                     </button>
//                 </div>

//                 <div>
//                     <label className="block text-sm mb-1">Request JSON payload (optional):</label>
//                     <textarea
//                         className="w-full h-40 p-2 border rounded font-mono text-xs"
//                         value={payload}
//                         onChange={(e) => setPayload(e.target.value)}
//                         spellCheck={false}
//                     />
//                     <p className="text-xs text-gray-500 mt-1">
//                         This body is forwarded (server-side) to Wasabi and signed with RSA-SHA256.
//                     </p>
//                 </div>

//                 {postResult && (
//                     <div className="text-sm space-y-2">
//                         <div className="flex gap-4 flex-wrap">
//                             <span className="px-2 py-0.5 rounded bg-gray-100">ok: {String(postResult.ok)}</span>
//                             <span className="px-2 py-0.5 rounded bg-gray-100">status: {postResult.status}</span>
//                             {typeof postResult.verified !== "undefined" && (
//                                 <span className="px-2 py-0.5 rounded bg-gray-100">
//                                     verified: {String(postResult.verified)}
//                                 </span>
//                             )}
//                         </div>
//                         {postResult.signatureFromServer && (
//                             <div className="break-all">
//                                 <div className="text-gray-500">X-WSB-SIGNATURE (response):</div>
//                                 <code className="text-xs">{postResult.signatureFromServer}</code>
//                             </div>
//                         )}
//                         <pre className="text-xs bg-gray-50 p-3 rounded overflow-auto">
//                             {JSON.stringify(postResult.data ?? postResult, null, 2)}
//                         </pre>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }




// components/ActiveCardClient.jsx
"use client";

import { useState } from "react";

export default function ActiveCardClient() {
    const [getResult, setGetResult] = useState(null);
    const [postResult, setPostResult] = useState(null);
    const [posting, setPosting] = useState(false);
    const [getting, setGetting] = useState(false);
    const [useMock, setUseMock] = useState(true);

    const sample1 = JSON.stringify({ "cardNo": "4096360800148806" });

    const sample2 = JSON.stringify({
        cardTypeId: 111030,
        merchantOrderNo: "987654321987654321987654321",
        cardNumber: "49382410"
    });

    const [payload, setPayload] = useState(sample1);

    const doGet = async () => {
        setGetting(true);
        setGetResult(null);
        try {
            const url = `/api/verify-key${useMock ? "?mock=true" : ""}`;
            const res = await fetch(url, { cache: "no-store" });
            const json = await res.json();
            setGetResult(json);
        } catch (e) {
            setGetResult({ ok: false, status: 0, error: e?.message || "Network error" });
        } finally {
            setGetting(false);
        }
    };

    const doPost = async () => {
        setPosting(true);
        setPostResult(null);
        try {
            let body = {};
            try {
                body = JSON.parse(payload || "{}");
            } catch {
                body = {};
            }
            const url = `/api/verify-card`;
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const json = await res.json();
            setPostResult(json);
        } catch (e) {
            setPostResult({ ok: false, status: 0, error: e?.message || "Network error" });
        } finally {
            setPosting(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={useMock} onChange={(e) => setUseMock(e.target.checked)} />
                    <span className="text-sm">Use mock (local)</span>
                </label>

                <div className="ml-auto flex gap-2">
                    <button
                        onClick={() => setPayload(sample1)}
                        className="px-3 py-1 rounded border text-sm"
                    >
                        Load sample 1
                    </button>
                    <button
                        onClick={() => setPayload(sample2)}
                        className="px-3 py-1 rounded border text-sm"
                    >
                        Load sample 2
                    </button>
                </div>
            </div>

            {/* GET */}
            <div className="rounded-2xl border p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">GET /api/wasabi/active-card</h2>
                    <button onClick={doGet} disabled={getting} className="px-4 py-2 rounded-lg border disabled:opacity-50">
                        {getting ? "Loading..." : "Call GET"}
                    </button>
                </div>

                {getResult && (
                    <div className="text-sm space-y-2">
                        <div className="flex gap-4 flex-wrap">
                            <span className="px-2 py-0.5 rounded bg-gray-100">ok: {String(getResult.ok)}</span>
                            <span className="px-2 py-0.5 rounded bg-gray-100">status: {getResult.status}</span>
                            {typeof getResult.verified !== "undefined" && (
                                <span className="px-2 py-0.5 rounded bg-gray-100">verified: {String(getResult.verified)}</span>
                            )}
                        </div>
                        {getResult.signatureFromServer && (
                            <div className="break-all">
                                <div className="text-gray-500">X-WSB-SIGNATURE (response):</div>
                                <code className="text-xs">{getResult.signatureFromServer}</code>
                            </div>
                        )}
                        <pre className="text-xs bg-gray-50 p-3 rounded overflow-auto">{JSON.stringify(getResult.data ?? getResult, null, 2)}</pre>
                    </div>
                )}
            </div>

            {/* POST */}
            <div className="rounded-2xl border p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">POST /api/wasabi/active-card</h2>
                    <button onClick={doPost} disabled={posting} className="px-4 py-2 rounded-lg border disabled:opacity-50">
                        {posting ? "Submitting..." : "Call POST"}
                    </button>
                </div>

                <div>
                    <label className="block text-sm mb-1">Request JSON payload (optional):</label>
                    <textarea className="w-full h-40 p-2 border rounded font-mono text-xs" value={payload} onChange={(e) => setPayload(e.target.value)} spellCheck={false} />
                    <p className="text-xs text-gray-500 mt-1">This body is forwarded to the server and signed. When mock is ON, the server returns a successful mocked response.</p>
                </div>

                {postResult && (
                    <div className="text-sm space-y-2">
                        <div className="flex gap-4 flex-wrap">
                            <span className="px-2 py-0.5 rounded bg-gray-100">ok: {String(postResult.ok)}</span>
                            <span className="px-2 py-0.5 rounded bg-gray-100">status: {postResult.status}</span>
                            {typeof postResult.verified !== "undefined" && (
                                <span className="px-2 py-0.5 rounded bg-gray-100">verified: {String(postResult.verified)}</span>
                            )}
                        </div>
                        {postResult.signatureFromServer && (
                            <div className="break-all">
                                <div className="text-gray-500">X-WSB-SIGNATURE (response):</div>
                                <code className="text-xs">{postResult.signatureFromServer}</code>
                            </div>
                        )}
                        <pre className="text-xs bg-gray-50 p-3 rounded overflow-auto">{JSON.stringify(postResult.data ?? postResult, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}
