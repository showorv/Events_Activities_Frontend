"use client";

import { joinEvent, initialPayment } from "@/service/event/event";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  event: any;
  onClose: () => void;
}

export default function JoinEventModal({ event, onClose }: Props) {
  const [joined, setJoined] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isFree = event.joiningFee === 0;

  const redirectToLogin = () => {
    window.location.href = `/login?redirect=/events/${event._id}`;
  };


  const handleJoin = async () => {
    setLoading(true);

    try {
      const res = await joinEvent(event._id);

    
      if (res?.message === "access token undefined") {
        toast.error("Please login to join the event");
        redirectToLogin();
        return;
      }

      if (!res.success) {
        toast.error(res.message || "Something went wrong while joining.");
        return;
      }

      setJoined(true);

   
      if (!isFree) {
        const paymentRes = await initialPayment(event._id);

        if (paymentRes?.message === "access token undefined") {
          toast.error("Session expired. Please login again.");
          redirectToLogin();
          return;
        }

        if (paymentRes.success && paymentRes.data?.paymentUrl) {
          setPaymentUrl(paymentRes.data.paymentUrl);
        } else {
          toast.error("Payment initialization failed.");
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Error joining event.");
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = () => {
    if (paymentUrl) {
      window.location.href = paymentUrl;
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-card text-card-foreground p-6 rounded-2xl w-96 border border-border shadow-xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        <h2 className="text-xl font-semibold mb-3">{event.name}</h2>

        {/* BEFORE JOIN */}
        {!joined && (
          <>
            {isFree ? (
              <p className="text-muted-foreground">
                This event is free. Do you want to join?
              </p>
            ) : (
              <p className="text-muted-foreground">
                Joining fee:{" "}
                <span className="font-semibold text-foreground">
                  ৳{event.joiningFee}
                </span>
              </p>
            )}

            <div className="flex gap-3 mt-6">
              <button
                onClick={onClose}
                disabled={loading}
                className="flex-1 py-2 rounded-lg border border-border bg-secondary text-secondary-foreground hover:bg-accent transition"
              >
                Cancel
              </button>

              <button
                onClick={handleJoin}
                disabled={loading}
                className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
              >
                {loading ? "Processing..." : "Confirm"}
              </button>
            </div>
          </>
        )}

        {/* AFTER JOIN */}
        {joined && (
          <>
            {isFree ? (
              <>
                <p className="font-medium text-primary">
                  Successfully Joined 🎉
                </p>

                <div className="flex justify-end mt-5">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg border border-border bg-secondary text-secondary-foreground hover:bg-accent transition"
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="font-medium text-primary">
                  Successfully Joined 🎉 Proceed to Payment 💳
                </p>

                <div className="flex gap-3 mt-5">
                  <button
                    onClick={onClose}
                    className="flex-1 py-2 rounded-lg border border-border bg-secondary text-secondary-foreground hover:bg-accent transition"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handlePayment}
                    disabled={!paymentUrl}
                    className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition"
                  >
                    {paymentUrl ? "Pay Now" : "Initializing..."}
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
