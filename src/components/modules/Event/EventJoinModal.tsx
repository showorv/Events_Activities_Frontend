"use client"

import { joinEvent } from "@/service/event/event";
import { motion } from "framer-motion";


export default function JoinEventModal({ event, onClose }: any) {
  const isFree = event.joiningFee === 0;

  const handleJoin = async () => {
    await joinEvent(event._id);
    onClose();
    alert(isFree ? "Successfully Joined 🎉" : "Proceed to Payment 💳");
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white p-6 rounded-xl w-96"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <h2 className="text-xl font-semibold mb-2">{event.name}</h2>

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
          >
            Cancel
          </button>
          <button
            onClick={handleJoin}
            className="flex-1 py-2 bg-primary text-white rounded-lg"
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
