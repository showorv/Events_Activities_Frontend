"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import HostRatingDialog from "@/components/modules/shared/RatingDialog";

export default function PaymentSuccessClient() {
  const [ratingOpen, setRatingOpen] = useState(false);
  const searchParams = useSearchParams();

  const hostId = searchParams.get("hostId")!;
  const eventId = searchParams.get("eventId")!;

  if (!hostId || !eventId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <h1 className="text-xl text-destructive">
          Error: Missing host or event info
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 space-y-6">
      <div className="bg-card border border-border rounded-xl p-8 text-center space-y-3 shadow-sm">
        <h1 className="text-4xl font-bold text-foreground">
          🎉 Payment Successful!
        </h1>

        <p className="text-lg text-muted-foreground">
          Your payment has been completed successfully.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/events"
          className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition"
        >
          Back to Events
        </Link>

        <button
          onClick={() => setRatingOpen(true)}
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
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
