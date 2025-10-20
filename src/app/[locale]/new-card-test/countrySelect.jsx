"use client";
import { useEffect, useMemo, useState } from "react";

export default function CountryTownSelect({
    value = { country: "", town: "" },      // { country: "AE", town: "AE_DXB" }
    onChange,                                // (val) => void
    required = false,
    labelCountry = "Country (ISO-2)",
    labelTown = "City (town code)",
    nameCountry = "country",
    nameTown = "town",
    showHiddenInputs = true,                 // emit hidden inputs for forms
}) {
    const [regions, setRegions] = useState([]);
    const [cities, setCities] = useState([]);
    const [loadingRegions, setLoadingRegions] = useState(false);
    const [loadingCities, setLoadingCities] = useState(false);
    const [errRegions, setErrRegions] = useState("");
    const [errCities, setErrCities] = useState("");

    const country = (value?.country || "").toUpperCase().trim();
    const town = (value?.town || "").trim();

    async function fetchRegions() {
        setLoadingRegions(true);
        setErrRegions("");
        try {
            const res = await fetch("/api/wsb/country-list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({}),
            });
            const json = await res.json();
            if (!json?.success) {
                setErrRegions(json?.msg || "Failed to fetch regions");
                setRegions([]);
                return;
            }
            // Expecting array of items like: { code: "AE", name: "United Arab Emirates" }
            const list = Array.isArray(json?.data) ? json.data : [];
            setRegions(list);
        } catch (e) {
            setErrRegions(String(e));
            setRegions([]);
        } finally {
            setLoadingRegions(false);
        }
    }

    async function fetchCities(regionISO2) {
        if (!regionISO2) {
            setCities([]);
            return;
        }
        setLoadingCities(true);
        setErrCities("");
        try {
            const res = await fetch("/api/wsb/city-list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ regionCode: regionISO2 }),
            });
            const json = await res.json();
            if (!json?.success) {
                setErrCities(json?.msg || "Failed to fetch cities");
                setCities([]);
                return;
            }
            // Expecting: [{ code, name, country, countryStandardCode }]
            const list = Array.isArray(json?.data) ? json.data : [];
            setCities(list);
        } catch (e) {
            setErrCities(String(e));
            setCities([]);
        } finally {
            setLoadingCities(false);
        }
    }

    useEffect(() => {
        fetchRegions();
    }, []);

    // When country changes, refresh cities
    useEffect(() => {
        fetchCities(country);
    }, [country]);

    const regionOptions = useMemo(
        () =>
            regions.map((r) => ({
                value: (r.code || "").toUpperCase(),
                label: r.name ? `${r.name} (${(r.code || "").toUpperCase()})` : (r.code || ""),
            })),
        [regions]
    );

    const cityOptions = useMemo(
        () =>
            cities.map((c) => ({
                value: c.code,                            // send code (required by /create)
                label: c.name ? `${c.name} (${c.code})` : c.code,
            })),
        [cities]
    );

    function update(next) {
        onChange?.(next);
    }

    function handleCountryChange(e) {
        const iso2 = e.target.value.toUpperCase();
        // reset town when country changes
        update({ country: iso2, town: "" });
    }

    function handleTownChange(e) {
        update({ country, town: e.target.value });
    }

    return (
        <div className="space-y-3">
            <div>
                <label className="block text-sm font-medium mb-1">{labelCountry}</label>
                <select
                    className="border p-2 w-full"
                    value={country}
                    onChange={handleCountryChange}
                    required={required}
                >
                    <option value="">{loadingRegions ? "Loading..." : "-- Select country --"}</option>
                    {regionOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                {errRegions ? <p className="text-xs text-red-600 mt-1">{errRegions}</p> : null}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">{labelTown}</label>
                <select
                    className="border p-2 w-full"
                    value={town}
                    onChange={handleTownChange}
                    disabled={!country || loadingCities}
                    required={required}
                >
                    <option value="">{loadingCities ? "Loading..." : (!country ? "Select country first" : "-- Select city --")}</option>
                    {cityOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                {errCities ? <p className="text-xs text-red-600 mt-1">{errCities}</p> : null}
            </div>

            {showHiddenInputs && (
                <>
                    <input type="hidden" name={nameCountry} value={country} />
                    <input type="hidden" name={nameTown} value={town} />
                </>
            )}
        </div>
    );
}
