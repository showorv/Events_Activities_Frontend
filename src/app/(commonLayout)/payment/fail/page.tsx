import Link from "next/link";

export default function PaymentFailPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <div className="bg-card border border-border rounded-xl p-8 text-center space-y-3 shadow-sm">
        <h1 className="text-4xl font-bold text-destructive">
          ❌ Payment Failed
        </h1>

        <p className="text-lg text-muted-foreground">
          Something went wrong with your payment. Please try again.
        </p>
      </div>

      <Link
        href="/events"
        className="mt-6 px-6 py-3 rounded-lg bg-destructive text-destructive-foreground hover:opacity-90 transition"
      >
        Back to Events
      </Link>
    </div>
  );
}
