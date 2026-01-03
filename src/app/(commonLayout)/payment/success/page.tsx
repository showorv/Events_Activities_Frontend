"use client";

import Link from "next/link";
import { useState } from "react";

import { useSearchParams } from "next/navigation";
import HostRatingDialog from "@/components/modules/shared/RatingDialog";

export default function PaymentSuccessPage() {
  const [ratingOpen, setRatingOpen] = useState(false);
  const searchParams = useSearchParams();

 
  const hostId = searchParams.get("hostId")!;
  const eventId = searchParams.get("eventId")!;

  if (!hostId || !eventId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-xl text-red-600">Error: Missing host or event info</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6 space-y-6">
      <h1 className="text-4xl font-bold text-green-700 mb-2">🎉 Payment Successful!</h1>
      <p className="text-lg text-green-800 mb-4">
        Your payment has been completed successfully.
      </p>

      <div className="flex gap-4">
        <Link
          href="/events"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Back to Events
        </Link>

        <button
          onClick={() => setRatingOpen(true)}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-chart-5 transition"
        >
          Rate Host
        </button>
      </div>

      <HostRatingDialog
        open={ratingOpen}
        onClose={() => setRatingOpen(false)}
        hostId={hostId}
        eventId={eventId}
      />
    </div>
  );
}
