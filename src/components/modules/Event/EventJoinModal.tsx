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
  console.log("eventid",event._id);
  
  const isFree = event.joiningFee === 0;

  // Join Event
  const handleJoin = async () => {
    setLoading(true);
    try {
      const res = await joinEvent(event._id);

      if (!res.success) {
        toast.error(res.message || "Something went wrong while joining.");
        setLoading(false);
        return;
      }

      setJoined(true);

      if (!isFree) {
        // Initialize payment
        const paymentRes = await initialPayment(event._id);
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

  // Go to payment
  const handlePayment = () => {
    if (paymentUrl) {
      window.location.href = paymentUrl;
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white p-6 rounded-xl w-96"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <h2 className="text-xl font-semibold mb-2">{event.name}</h2>

        {/* Before join */}
        {!joined && (
          <>
            {isFree ? (
              <p>This event is free. Join now?</p>
            ) : (
              <p>
                Joining fee: <b>{event.joiningFee} ৳</b>
              </p>
            )}

            <div className="flex gap-3 mt-4">
              <button
                onClick={onClose}
                className="flex-1 py-2 border rounded-lg"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleJoin}
                className="flex-1 py-2 bg-primary text-white rounded-lg"
                disabled={loading}
              >
                {loading ? "Processing..." : "Confirm"}
              </button>
            </div>
          </>
        )}

        {/* After join */}
        {joined && (
          <>
            {isFree ? (
              <>
                <p className="text-green-600 font-medium">
                  Successfully Joined 🎉
                </p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={onClose}
                    className="py-2 px-4 border rounded-lg"
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-yellow-600 font-medium">
                  Successfully Joined 🎉 Proceed to Payment 💳
                </p>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={onClose}
                    className="flex-1 py-2 border rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePayment}
                    className="flex-1 py-2 bg-primary text-white rounded-lg"
                    disabled={!paymentUrl}
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
