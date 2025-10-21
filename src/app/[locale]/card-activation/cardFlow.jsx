"use client";
import { useEffect, useState } from "react";

export default function WasabiCardFlow() {
    const [cardTypes, setCardTypes] = useState([]);
    const [loadingTypes, setLoadingTypes] = useState(false);
    const [selectedType, setSelectedType] = useState(null);

    const [holderResp, setHolderResp] = useState(null);
    const [openResp, setOpenResp] = useState(null);
    const [activateResp, setActivateResp] = useState(null);

    const [creatingHolder, setCreatingHolder] = useState(false);
    const [openingCard, setOpeningCard] = useState(false);
    const [activatingCard, setActivatingCard] = useState(false);

    useEffect(() => {
        fetchCardTypes();
    }, []);

    // inside components/WasabiCardFlow.jsx (or wherever you load types)
    async function fetchCardTypes() {
        setLoadingTypes(true);
        try {
            const res = await fetch("/api/wsb/card-types", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ pageNum: 1, pageSize: 100 }) // adjust filters as needed
            });
            const json = await res.json();
            console.log({ json })
            // Normalize list field (varies by issuer)
            const list = (json && json.data && json.data) ? json.data
                : (json && json.data) ? json.data
                    : Array.isArray(json) ? json : [];
            setCardTypes(list);
        } catch (e) {
            console.error("card types err", e);
        } finally {
            setLoadingTypes(false);
        }
    }


    // Create holder (simple example) - adapt fields to your BIN requirements
    async function createHolder(e) {
        e.preventDefault();
        setCreatingHolder(true);
        setHolderResp(null);

        const f = new FormData(e.currentTarget);
        const payload = {
            cardHolderModel: f.get("cardHolderModel") || "B2C",
            merchantOrderNo: f.get("merchantOrderNo"),
            cardTypeId: Number(f.get("cardTypeId")),
            firstName: f.get("firstName"),
            lastName: f.get("lastName"),
            birthday: f.get("birthday"),
            areaCode: (f.get("areaCode") || ""),
            mobile: f.get("mobile"),
            email: f.get("email"),
            country: f.get("country"),
            town: f.get("town"),
            address: f.get("address"),
            postCode: f.get("postCode"),
            cardNumber: "4096360800147162",

        };

        try {
            const res = await fetch("/api/wsb/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            setHolderResp(json);
        } catch (err) {
            setHolderResp({ success: false, msg: String(err) });
        } finally {
            setCreatingHolder(false);
        }
    }

    // Open virtual card
    async function openCard(e) {
        e.preventDefault();
        setOpeningCard(true);
        setOpenResp(null);

        const f = new FormData(e.currentTarget);
        const payload = {
            merchantOrderNo: f.get("merchantOrderNo"),
            cardTypeId: Number(f.get("cardTypeId")),
            // If your BIN requires holderId, supply it. Otherwise omit.
            holderId: f.get("holderId") ? Number(f.get("holderId")) : undefined,
            // For virtual cards often you don't send cardNumber.
            amount: f.get("amount") ? Number(f.get("amount")) : undefined,
            // Some programs accept a 'cardNature' or similar to mark virtual; not standardized.
            // If your cardType indicates virtual, that's enough.
        };

        try {
            const res = await fetch("/api/wsb/open", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            setOpenResp(json);
        } catch (err) {
            setOpenResp({ success: false, msg: String(err) });
        } finally {
            setOpeningCard(false);
        }
    }

    // Activate virtual card
    async function activateCard(e) {
        e.preventDefault();
        setActivatingCard(true);
        setActivateResp(null);

        const f = new FormData(e.currentTarget);
        const payload = {
            merchantOrderNo: f.get("merchantOrderNo"),
            cardNo: f.get("cardNo"),
            // If activation requires an activeCode or status field, include it:
            activeCode: f.get("activeCode") || undefined,
            status: f.get("status") || undefined
        };

        try {
            const res = await fetch("/api/wsb/virtual-activate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            setActivateResp(json);
        } catch (err) {
            setActivateResp({ success: false, msg: String(err) });
        } finally {
            setActivatingCard(false);
        }
    }

    return (
        <div className="space-y-6 max-w-4xl mx-auto p-4">
            <h2 className="text-xl font-bold">Wasabi — Virtual Card Flow</h2>

            <section className="border p-4 rounded">
                <h3 className="font-semibold">1) Card Types</h3>
                {loadingTypes ? <p>Loading types...</p> : (
                    <>
                        <select value={selectedType || ""} onChange={e => setSelectedType(e.target.value)} className="border p-2 w-full">
                            <option value="">-- select card type --</option>
                            {cardTypes.map(ct => (
                                <option key={ct.cardTypeId || ct.id || ct.typeId} value={ct.cardTypeId || ct.id || ct.typeId}>
                                    {(ct.name || ct.cardTypeName || ct.title) + " — id:" + (ct.cardTypeId || ct.id || ct.typeId)}
                                </option>
                            ))}
                        </select>
                        <p className="text-sm text-gray-600 mt-2">If your chosen BIN requires a holder, create one below and use its holderId when opening the card.</p>
                    </>
                )}
            </section>

            <section className="border p-4 rounded">
                <h3 className="font-semibold">2) Create Cardholder (optional / if required)</h3>
                <form onSubmit={createHolder} className="grid grid-cols-1 gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <input name="cardHolderModel" placeholder="B2C or B2B" defaultValue="B2C" className="border p-2" />
                        <input name="merchantOrderNo" placeholder="merchantOrderNo (unique 20-40)" required className="border p-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <input name="cardTypeId" placeholder="cardTypeId" defaultValue={selectedType || ""} className="border p-2" />
                        <input name="firstName" placeholder="First name" className="border p-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <input name="lastName" placeholder="Last name" className="border p-2" />
                        <input name="birthday" placeholder="YYYY-MM-DD" className="border p-2" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <input name="areaCode" placeholder="971" className="border p-2" />
                        <input name="mobile" placeholder="501234567" className="border p-2" />
                        <input name="email" placeholder="email@example.com" className="border p-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <input name="country" placeholder="AE" className="border p-2" />
                        <input name="town" placeholder="city code (from /common/city)" className="border p-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <input name="address" placeholder="address" className="border p-2" />
                        <input name="postCode" placeholder="postCode" className="border p-2" />
                    </div>

                    <button disabled={creatingHolder} className="px-4 py-2 bg-black text-white rounded mt-2">
                        {creatingHolder ? "Creating..." : "Create Holder"}
                    </button>
                </form>

                {holderResp && <pre className="mt-3 bg-gray-50 p-3 text-xs overflow-auto">{JSON.stringify(holderResp, null, 2)}</pre>}
            </section>

            <section className="border p-4 rounded">
                <h3 className="font-semibold">3) Open Virtual Card</h3>
                <form onSubmit={openCard} className="grid grid-cols-1 gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <input name="merchantOrderNo" placeholder="merchantOrderNo (unique)" required className="border p-2" />
                        <input name="cardTypeId" placeholder="cardTypeId" defaultValue={selectedType || ""} required className="border p-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <input name="holderId" placeholder="holderId (optional)" className="border p-2" />
                        <input name="amount" placeholder="initial deposit (optional)" className="border p-2" />
                    </div>

                    <button disabled={openingCard} className="px-4 py-2 bg-black text-white rounded mt-2">
                        {openingCard ? "Opening..." : "Open Virtual Card"}
                    </button>
                </form>

                {openResp && <pre className="mt-3 bg-gray-50 p-3 text-xs overflow-auto">{JSON.stringify(openResp, null, 2)}</pre>}
            </section>

            <section className="border p-4 rounded">
                <h3 className="font-semibold">4) Activate Virtual Card</h3>
                <form onSubmit={activateCard} className="grid grid-cols-1 gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <input name="merchantOrderNo" placeholder="merchantOrderNo (unique)" required className="border p-2" />
                        <input name="cardNo" placeholder="cardNo (from openCard response)" required className="border p-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <input name="activeCode" placeholder="activeCode (if required)" className="border p-2" />
                        <input name="status" placeholder="status (e.g. active) (if supported)" className="border p-2" />
                    </div>

                    <button disabled={activatingCard} className="px-4 py-2 bg-black text-white rounded mt-2">
                        {activatingCard ? "Activating..." : "Activate Virtual Card"}
                    </button>
                </form>

                {activateResp && <pre className="mt-3 bg-gray-50 p-3 text-xs overflow-auto">{JSON.stringify(activateResp, null, 2)}</pre>}
            </section>
        </div>
    );
}
