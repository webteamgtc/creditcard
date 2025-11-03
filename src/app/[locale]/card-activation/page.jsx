// // import WsbOpenCardForm from "./first";
// // import WsbCardInfoForm from "./info";
// // import WsbActivateCardForm from "./activate";
// // import WsbCreateHolderForm from "./holder";
// // import WasabiCardFlow from "./cardFlow";
// // import WasabiCardFlowAllParams from "./cardHolderWithAllRequiredParams";
// // import CardHolderList from "./cardHolderList";
// // import FindCardNoFromTransactions from "./transcation";

// // export default function WsbDemoPage() {
// //     return (
// //         <div className="max-w-6xl mx-auto p-6 grid gap-6 md:grid-cols-1">
// //             <WasabiCardFlowAllParams />
// //             <WsbOpenCardForm />
// //             <WsbActivateCardForm />

// //             {/* <WsbCardInfoForm /> */}
// //             {/* <div className="md:col-span-2">
// //                 <WsbActivateCardForm />
// //             </div> */}
// //             <CardHolderList />
// //             <WsbCardInfoForm />
// //             <FindCardNoFromTransactions />
// //         </div>
// //     );
// // }




"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

import WasabiCardFlowAllParams from "./cardHolderWithAllRequiredParams";
import WsbOpenCardForm from "./first";
import WsbActivateCardForm from "./activate";
import CardHolderList from "./cardHolderList";
import FindCardNoFromTransactions from "./transcation";
import StatusMessage from "./SuccessMessage";
import WebDepositBalanceForm from "./depositBalance";

export default function WsbDemoPage() {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ Detect dev mode (?mode=dev OR ?mode==dev)
  const rawMode = (searchParams?.get("mode") || "").trim().toLowerCase();
  const isDev = useMemo(
    () =>
      rawMode === "dev" ||
      rawMode === "=dev" ||
      rawMode === "true" ||
      rawMode === "=true",
    [rawMode]
  );

  // Authentication check
  useEffect(() => {
    const email = localStorage?.getItem("login_email");
    if (!email) {
      router.push("/");
      localStorage.clear();
    }
  }, [router]);

  const noopSetStep = () => {}; // keep children untouched

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#2b307b] to-[#1f2052] text-transparent bg-clip-text">
        GTCFX Credit Card Activation
      </h1>

      {/* Success message */}
      {success && (
        <div className="mb-6">
          <StatusMessage
            variant="success"
            title="Card activated successfully!"
            message="You can now use your card for purchases and manage limits in your dashboard."
          />
        </div>
      )}

      {/* ✅ Dev-only utilities */}
      {isDev && (
        <div className="grid gap-6 mb-10">
          <div className="bg-white/90 shadow-lg rounded-2xl border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-3">Card Holder List (Dev Mode)</h2>
            <CardHolderList setData={setData}/>
          </div>
          <div className="bg-white/90 shadow-lg rounded-2xl border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-3">Find Card No. from Transactions (Dev Mode)</h2>
            <FindCardNoFromTransactions />
          </div>
        </div>
      )}

      {/* Card Holder Form */}
      <div className="bg-white/90 shadow-lg rounded-2xl border border-gray-100 p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">Create Card Holder</h2>
        <p className="text-sm text-gray-600 mb-6">
          Register the cardholder with Wasabi.
        </p>
        <WasabiCardFlowAllParams setStep={noopSetStep} setData={setData} />
      </div>

      {/* Open Card Form */}
      <div className="bg-white/90 shadow-lg rounded-2xl border border-gray-100 p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">Open Card</h2>
        <p className="text-sm text-gray-600 mb-6">
          Create a new Wasabi card for the holder you just registered.
        </p>
        <WsbOpenCardForm setStep={noopSetStep} setData={setData} data={data} />
      </div>

      {/* Activate Card Form */}
      <div className="bg-white/90 shadow-lg rounded-2xl border border-gray-100 p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">Activate Card</h2>
        <p className="text-sm text-gray-600 mb-6">
          Use the card number and activation code to activate the card.
        </p>
        <WsbActivateCardForm
          setData={setData}
          setStep={noopSetStep}
          data={data}
          setSuccess={setSuccess}
        />
      </div>

        {/* Deposit Card Balance */}
      <div className="bg-white/90 shadow-lg rounded-2xl border border-gray-100 p-6">
        <h2 className="text-xl font-semibold mb-3">Depost Balance</h2>
        <p className="text-sm text-gray-600 mb-6">
          Use the card number to deposit the card balance.
        </p>
        <WebDepositBalanceForm
          setData={setData}
          setStep={noopSetStep}
          data={data}
          setSuccess={setSuccess}
        />
      </div>
    </div>
  );
}




// "use client";
// import { useEffect, useState } from "react";
// import WsbCreateHolderForm from "./holder";
// import WsbOpenCardForm from "./first";
// import WsbActivateCardForm from "./activate";
// import { CheckCircle2 } from "lucide-react";
// import WasabiCardFlowAllParams from "./cardHolderWithAllRequiredParams";
// import CardHolderList from "./cardHolderList";
// import FindCardNoFromTransactions from "./transcation";
// import { useRouter } from "@/i18n/navigation";
// import StatusMessage from "./SuccessMessage";
// export default function WsbDemoPage() {
//     const [step, setStep] = useState(1);
//     const [success, setSuccess] = useState(false)
//     const [data, setData] = useState(null)
//     const router = useRouter()
//     const steps = [
//         { id: 1, title: "Create Card Holder", desc: "Register the cardholder with Wasabi" },
//         { id: 2, title: "Open Card", desc: "Create and issue a new card" },
//         { id: 3, title: "Activate Card", desc: "Activate the physical/virtual card" },
//     ];

//     const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
//     const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

//     useEffect(() => {
//         const email = localStorage?.getItem("login_email")
//         if (email) {

//         } else {
//             router.push("/")
//             localStorage.clear()
//         }
//     }, [])

//     console.log({ data })

//     return (
        
//         <div className="max-w-5xl mx-auto px-6 py-10">
//             <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#2b307b] to-[#1f2052] text-transparent bg-clip-text">
//                 GTCFX Credit Card Activation
//             </h1>

//             {/* Step Progress Bar */}
//             <div className="flex justify-between items-center relative mb-12">
//                 <div className="absolute top-[32%] left-0 w-full h-[2px] bg-gray-200 -z-10" />
//                 {steps.map((s, i) => (
//                     <div key={s.id} className="flex flex-col items-center relative z-10">
//                         <div
//                             className={`flex items-center justify-center w-10 h-10 rounded-full border-2 font-semibold transition-all duration-300 ${step > s.id
//                                 ? "bg-[#956D42] border-[#956D42] text-white"
//                                 : step === s.id
//                                     ? "bg-[#956D42] border-[#956D42] text-white"
//                                     : "bg-white border-gray-300 text-gray-400"
//                                 }`}
//                         >
//                             {step > s.id ? <CheckCircle2 size={20} /> : s.id}
//                         </div>
//                         <p
//                             className={`mt-2 text-sm text-center ${step >= s.id ? "text-[#956D42]" : "text-gray-400"
//                                 }`}
//                         >
//                             {s.title}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {/* Step Content */}
//             <div className="bg-white/90 shadow-lg rounded-2xl border border-gray-100 p-6 transition-all duration-500">
//                 {success ? <div>
//                     <StatusMessage
//                         variant="success"
//                         title="Card activated successfully!"
//                         message="You can now use your card for purchases and manage limits in your dashboard."

//                     />
//                 </div> :
//                     <>
//                         {step === 1 && (
//                             <div>
//                                 <h2 className="text-xl font-semibold mb-3">Step 1: Create Card Holder</h2>
//                                 <p className="text-sm text-gray-600 mb-6">
//                                     Fill in cardholder details before creating their card.
//                                 </p>
//                                 <WasabiCardFlowAllParams setStep={setStep} setData={setData} />
//                             </div>
//                         )}

//                         {step === 2 && (
//                             <div>
//                                 <h2 className="text-xl font-semibold mb-3">Step 2: Open Card</h2>
//                                 <p className="text-sm text-gray-600 mb-6">
//                                     Create a new Wasabi card for the holder you just registered.
//                                 </p>
//                                 <WsbOpenCardForm setStep={setStep} setData={setData} data={data} />
//                             </div>
//                         )}

//                         {step === 3 && (
//                             <div>
//                                 <h2 className="text-xl font-semibold mb-3">Step 3: Activate Card</h2>
//                                 <p className="text-sm text-gray-600 mb-6">
//                                     Use the card number and activation code to activate the card.
//                                 </p>
//                                 <WsbActivateCardForm setData={setData} setStep={setStep} data={data} setSuccess={setSuccess} />
//                             </div>
//                         )}
//                     </>
//                 }
//             </div>

//             {/* Navigation Buttons */}
//             {/* <div className="flex justify-between items-center mt-8">
//                 <button
//                     onClick={prevStep}
//                     disabled={step === 1}
//                     className={`px-6 py-2 rounded-lg font-medium border transition-all ${step === 1
//                         ? "text-gray-400 border-gray-200 cursor-not-allowed"
//                         : "text-[#956D42] border-[#956D42] hover:bg-[#956D42] hover:text-white"
//                         }`}
//                 >
//                     Back
//                 </button>

//                 <button
//                     onClick={nextStep}
//                     disabled={step === steps.length}
//                     className={`px-6 py-2 rounded-lg font-medium border transition-all ${step === steps.length
//                         ? "text-gray-400 border-gray-200 cursor-not-allowed"
//                         : "bg-[#956D42] text-white border-[#956D42] hover:bg-[#7a5735]"
//                         }`}
//                 >
//                     {step === steps.length ? "Completed" : "Next"}
//                 </button>
//             </div> */}
//         </div>
//     );
// }
