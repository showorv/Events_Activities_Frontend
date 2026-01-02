import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>
      <p className="text-lg text-green-800 mb-6">
        Your payment has been completed successfully.
      </p>
      <Link
        href="/events"
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Back to Events
      </Link>
    </div>
  );
}
