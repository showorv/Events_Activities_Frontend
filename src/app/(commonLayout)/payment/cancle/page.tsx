import Link from "next/link";

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6">
      <h1 className="text-4xl font-bold text-yellow-700 mb-4">⚠️ Payment Cancelled</h1>
      <p className="text-lg text-yellow-800 mb-6">
        You cancelled the payment. No charges were made.
      </p>
      <Link
        href="/events"
        className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
      >
        Back to Events
      </Link>
    </div>
  );
}
