"use client";

import { motion } from "framer-motion";
import { CircleUserRound } from "lucide-react";
interface Participant {
    _id: string;
    user: {
      _id: string;
      name: string;
      email: string;
      profileImage?: string;
    };
  
  }
  
  interface Host {
    _id: string;
    name: string;
    email: string;
    profileImage?: string;
    ratingAvg?: number;
  }
  
  interface EventData {
    _id: string;
    name: string;
    type: string;
    location: string;
    time: string;
    joiningFee: number;
    image: string;
    description: string;
    host: Host;
    participants: Participant[];
  }

interface Props {
  event: EventData;
  onClose: () => void;
}

export default function EventDetailsModal({ event, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white p-6 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">{event.name}</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <img src={event.image} className="w-full h-64 rounded mb-4" />

        <p>{event.description}</p>

        <p className="mt-2 text-sm">
          📍 {event.location} | ⏰ {event.time} | 💰 {event.joiningFee} ৳
        </p>

        {/* Host */}
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold mb-2">Host</h3>
          <div className="flex gap-3 items-center">
            <img
              src={event.host.profileImage || "/avatar.png"}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p>{event.host.name}</p>
              <p className="text-sm text-gray-500">{event.host.email}</p>
              <p className="text-sm">⭐ {event.host.ratingAvg ?? 0}</p>
            </div>
          </div>
        </div>

        {/* Participants */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">
            Participants ({event.participants.length})
          </h3>

          <div className="grid md:grid-cols-3 gap-3">
            {event.participants.map((p) => (
              <div key={p._id} className="flex gap-2 items-center border p-2 rounded">
                {p.user.profileImage ? (
                    <img
                    src={p.user.profileImage || "/avatar.png"}
                    className="w-8 h-8 rounded-full"
                    />
                ): (
                    <CircleUserRound className="w-10 h-10 text-gray-400" />
                )}
               
                <div>
                  <p>{p.user.name}</p>
                  <p className="text-xs text-gray-500">{p.user.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
