"use client";

import { motion } from "framer-motion";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

interface Props {
  event: any;
}

export default function EventDetailsClient({ event }: Props) {
   
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 space-y-8"
    >
      {/* Event Image */}
      <motion.img
        src={event?.image}
        alt={event?.name}
        className="w-full h-72 object-cover rounded-xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      />

      {/* Event Info */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{event?.name}</h1>
        <p className="text-gray-600">{event?.description}</p>
        <p className="text-sm">
          📍 {event?.location} | ⏰ {event?.time}
        </p>
      </div>

      {/* Join Button */}
      <button className="px-6 py-2 bg-primary text-white rounded-lg">
        Join Event
      </button>

      {/* Host Info */}
      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold">Host</h2>

        <div className="flex items-center gap-4 mt-3">
          <img
            src={event.host.profileImage}
            className="w-14 h-14 rounded-full"
          />
          <div>
            <p className="font-medium">{event.host.name}</p>
            <p className="text-sm text-muted-foreground">
              {event.host.email}
            </p>
            <p className="text-sm text-yellow-500">⭐ {event.host.ratingAvg || 0}</p>
          </div>
        </div>
      </div>

      {/* Participants */}
      <div>
        <h2 className="text-xl font-semibold">
          Participants ({event.participants.length})
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {event.participants.map((p: any) => (
            <motion.div
              key={p._id}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 border rounded-xl"
            >
              <Link href={`/user-profile/${p.user._id}`}>
              
              {p.user.profileImage ? (
                <img
                    src={p.user.profileImage}
                    className="w-10 h-10 rounded-full"
                />
                ) : (
                <CircleUserRound className="w-10 h-10 text-gray-400" />
                )}
              <div>
                <p className="font-medium">{p.user.name}</p>
                <p className="text-sm text-muted-foreground">{p.user.email}</p>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
