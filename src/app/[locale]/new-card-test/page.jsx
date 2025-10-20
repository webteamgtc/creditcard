import WsbOpenCardForm from "./first";
import WsbCardInfoForm from "./info";
import WsbActivateCardForm from "./activate";
import WsbCreateHolderForm from "./holder";
import WasabiCardFlow from "./cardFlow";
import WasabiCardFlowAllParams from "./cardHolderWithAllRequiredParams";
import CardHolderList from "./cardHolderList";
import FindCardNoFromTransactions from "./transcation";

export default function WsbDemoPage() {
    return (
        <div className="max-w-6xl mx-auto p-6 grid gap-6 md:grid-cols-1">
            <WasabiCardFlowAllParams />
            {/* <WsbCreateHolderForm /> */}
            <WsbOpenCardForm />
            <WsbActivateCardForm />

            {/* <WsbCardInfoForm /> */}
            {/* <div className="md:col-span-2">
                <WsbActivateCardForm />
            </div> */}
            <CardHolderList />
            <WsbCardInfoForm />
            <FindCardNoFromTransactions />
        </div>
    );
}
