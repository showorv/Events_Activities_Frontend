"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  event: any;
  onJoin: (event: any) => void;
}

export default function EventCard({ event, onJoin }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <img
        src={event.image}
        alt={event.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{event.name}</h3>
        <p className="text-sm text-gray-500">{event.type}</p>
        <p className="text-sm">{event.location}</p>

        <p className="text-sm font-medium">
          👥 {event.participants.length} / {event.maxParticipants} joined
        </p>

        <div className="flex gap-2 pt-3">
          <Link
            href={`/events/${event._id}`}
            className="flex-1 text-center py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            View Details
          </Link>

          <button
            onClick={() => onJoin(event)}
            className="flex-1 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
          >
            Join
          </button>
        </div>
      </div>
    </motion.div>
  );
}
