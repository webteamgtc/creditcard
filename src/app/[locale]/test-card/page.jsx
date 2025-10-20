// app/wasabi/active-card/page.jsx
import ActiveCardClient from "./card";
import OpenCardClient from "./penCArd";

export default function ActiveCardPage() {
    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold">Wasabi: Active Physical Card</h1>
            <p className="text-sm text-gray-600">
                Test calling <code>/merchant/core/mcb/card/physicalCard/activeCard</code> through your secured API.
            </p>
            {/* <OpenCardClient /> */}
            <ActiveCardClient />
        </div>
    );
}
