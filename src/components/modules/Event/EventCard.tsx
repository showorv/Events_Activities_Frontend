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
      className="bg-card text-card-foreground rounded-2xl border border-border overflow-hidden transition-shadow hover:shadow-xl"
    >
      {/* Image */}
      <img
        src={event.image}
        alt={event.name}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{event.name}</h3>

        <p className="text-sm text-muted-foreground">{event.type}</p>
        <p className="text-sm text-muted-foreground">{event.location}</p>

        <p className="text-sm font-medium">
          👥 {event.participants.length} / {event.maxParticipants} joined
        </p>

        {/* Actions */}
        <div className="flex gap-2 pt-3">
          <Link
            href={`/events/${event._id}`}
            className="flex-1 text-center py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition"
          >
            View Details
          </Link>

          <button
            onClick={() => onJoin(event)}
            className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            Join
          </button>
        </div>
      </div>
    </motion.div>
  );
}
