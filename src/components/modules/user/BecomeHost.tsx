"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function BecomeHostClient() {
  const [loading, setLoading] = useState(false);

  const handleBecomeHost = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/user/become-host`, {
        method: "PATCH",
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message || "Failed to become host");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-card text-foreground p-6 rounded-xl shadow-md text-center border border-border">
      <h2 className="text-2xl font-bold mb-4">Want to become a host?</h2>
      <p className="mb-6 text-muted-foreground">
        Click the button below to apply and start hosting events.
      </p>

      <button
        onClick={handleBecomeHost}
        disabled={loading}
        className="bg-primary hover:bg-chart-5 text-primary-foreground py-2 px-6 rounded-lg transition disabled:opacity-60"
      >
        {loading ? "Sending Request..." : "Send Request"}
      </button>
    </div>
  );
}
