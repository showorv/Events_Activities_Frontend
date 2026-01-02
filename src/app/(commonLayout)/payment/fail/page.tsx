import Link from "next/link";

export default function PaymentFailPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
      <h1 className="text-4xl font-bold text-red-700 mb-4">❌ Payment Failed</h1>
      <p className="text-lg text-red-800 mb-6">
        Something went wrong with your payment. Please try again.
      </p>
      <Link
        href="/events"
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Back to Events
      </Link>
    </div>
  );
}