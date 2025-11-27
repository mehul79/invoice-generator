import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Payment Details</p>
    <CustomTextInput
      label="Bank name"
      placeholder="HDFC Bank"
      variableName="bankName"
    />
    <CustomTextInput
      label="Account number"
      placeholder="123456789012"
      variableName="accountNumber"
    />
    <CustomTextInput
      label="Account Name"
      placeholder="Mehul Gupta"
      variableName="accountName"
    />
    <CustomTextInput
      label="IFSC code"
      placeholder="HDFC0001234"
      variableName="ifscCode"
    />
    <CustomTextInput
      label="Routing number"
      placeholder="N/A for India"
      variableName="routingCode"
    />
    <CustomNumberInput
      label="Swift code"
      placeholder="HDFCINBB"
      variableName="swiftCode"
    />
  </div>
);
