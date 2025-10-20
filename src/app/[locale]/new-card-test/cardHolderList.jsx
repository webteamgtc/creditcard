"use client";
import { useState } from "react";

export default function CardHolderList() {
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState(null);
    const [error, setError] = useState("");

    // quick filters
    const [email, setEmail] = useState("");
    const [areaCode, setAreaCode] = useState("");
    const [mobile, setMobile] = useState("");
    const [pageNum, setPageNum] = useState(1);
    const [pageSize, setPageSize] = useState(20);

    async function fetchHolders() {
        setLoading(true);
        setError("");
        setResp(null);

        // build body based on inputs (omit empties)
        const body = {};
        if (email.trim()) body.email = email.trim();
        if (areaCode.trim()) body.areaCode = areaCode.replace(/\D+/g, "");
        if (mobile.trim()) body.mobile = mobile.replace(/\D+/g, "");
        if (pageNum) body.pageNum = Number(pageNum);
        if (pageSize) body.pageSize = Number(pageSize);

        try {
            const res = await fetch("/api/wsb/card-holder-list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const json = await res.json();
            if (!json?.success) {
                setError(json?.msg || "Query failed");
            }
            setResp(json);
        } catch (e) {
            setError(String(e));
        } finally {
            setLoading(false);
        }
    }

    const rows = Array.isArray(resp?.data?.records)
        ? resp?.data?.records
        : Array.isArray(resp?.data?.records)
            ? resp.data
            : [];

    const total = resp?.data?.total ?? rows.length;

    console.log({rows})

    return (
        <section className="border p-4 rounded space-y-3">
            <h3 className="font-semibold">Cardholder List</h3>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                <input
                    className="border p-2"
                    placeholder="email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border p-2"
                    placeholder="areaCode (e.g. 971)"
                    value={areaCode}
                    onChange={(e) => setAreaCode(e.target.value)}
                />
                <input
                    className="border p-2"
                    placeholder="mobile (local, digits)"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <input
                    className="border p-2"
                    type="number"
                    min={1}
                    placeholder="pageNum"
                    value={pageNum}
                    onChange={(e) => setPageNum(e.target.value)}
                />
                <input
                    className="border p-2"
                    type="number"
                    min={1}
                    placeholder="pageSize"
                    value={pageSize}
                    onChange={(e) => setPageSize(e.target.value)}
                />
            </div>

            <button
                onClick={fetchHolders}
                className="px-4 py-2 bg-black text-white rounded"
                disabled={loading}
            >
                {loading ? "Loading..." : "Fetch Cardholders"}
            </button>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            {/* Result table */}
            <div className="overflow-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="text-left border-b">
                            <th className="p-2">Holder ID</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">AreaCode</th>
                            <th className="p-2">Mobile</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">merchantOrderNo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows?.length === 0 ? (
                            <tr>
                                <td className="p-2" colSpan={7}>
                                    {resp ? "No results." : "—"}
                                </td>
                            </tr>
                        ) : (
                            rows?.map((h) => (
                                <tr key={h.holderId ?? h.id} className="border-b">
                                    <td className="p-2">{h.holderId ?? h.id ?? "-"}</td>
                                    <td className="p-2">
                                        {(h.firstName || "") + (h.lastName ? " " + h.lastName : "")}
                                    </td>
                                    <td className="p-2">{h.email ?? "-"}</td>
                                    <td className="p-2">{h.areaCode ?? "-"}</td>
                                    <td className="p-2">{h.mobile ?? "-"}</td>
                                    <td className="p-2">{h.status ?? h.state ?? "-"}</td>
                                    <td className="p-2">{h.merchantOrderNo ?? h.merchantOrderNo ?? "-"}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {resp && (
                <div className="text-xs text-gray-600">
                    Total: {total}
                </div>
            )}
        </section>
    );
}
