import PaymentSuccessClient from "@/components/modules/Payment/PaymentsuccessClient";
import { Suspense } from "react";


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessClient />
    </Suspense>
  );
}
