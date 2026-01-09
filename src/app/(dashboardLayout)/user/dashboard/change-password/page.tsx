import ChangePasswordFormClient from "@/components/modules/user/ChangePasswordForm";
import { Suspense } from "react";


export default function ChangePasswordPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Change Your Password</h1>

      <Suspense fallback={null}>

      <ChangePasswordFormClient />

      </Suspense>
    </div>
  );
}
