// components/CitySelect.jsx
"use client";
import { useEffect, useMemo, useState } from "react";

export default function CitySelect({ value, onChange, defaultRegion = "" }) {
    const [regionCode, setRegionCode] = useState(defaultRegion);
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([]);
    const [error, setError] = useState("");

    async function fetchCities(rc) {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/wsb/city-list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(rc ? { regionCode: rc.toUpperCase() } : {}),
            });
            const json = await res.json();
            if (!json?.success) {
                setError(json?.msg || "Failed to fetch cities");
                setCities([]);
                return;
            }
            setCities(Array.isArray(json.data) ? json.data : []);
        } catch (e) {
            setError(String(e));
            setCities([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCities(regionCode);
    }, []); // initial load

    const options = useMemo(
        () =>
            cities.map((c) => ({
                value: c.code,               // e.g., "AU_01"
                label: `${c.name} (${c.code})`, // e.g., "Sydney (AU_SYD)"
            })),
        [cities]
    );

    return (
        <div className="space-y-2">
            <div className="flex gap-2">
                <input
                    className="border p-2 flex-1"
                    placeholder="Region (ISO-2, optional, e.g., AE)"
                    value={regionCode}
                    onChange={(e) => setRegionCode(e.target.value)}
                />
                <button
                    className="px-4 py-2 bg-black text-white rounded"
                    onClick={() => fetchCities(regionCode)}
                    type="button"
                >
                    {loading ? "Loading..." : "Fetch Cities"}
                </button>
            </div>

            {error ? (
                <p className="text-sm text-red-600">{error}</p>
            ) : null}

            <select
                className="border p-2 w-full"
                value={value || ""}
                onChange={(e) => onChange?.(e.target.value)}
            >
                <option value="">-- Select city --</option>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
