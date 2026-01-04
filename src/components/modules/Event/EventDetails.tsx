"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import JoinEventModal from "./EventJoinModal";
import { Status } from "@/types/event.interface"; // make sure Status enum is imported
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/formatter";

interface Props {
  event: any;
}

export default function EventDetailsClient({ event }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinClick = () => {
    setIsModalOpen(true);
  };

  const getStatusVariant = (status: Status) => {
    switch (status) {
      case Status.OPEN:
        return "default";
      case Status.FULL:
        return "destructive";
      case Status.CANCELLED:
        return "secondary";
      case Status.COMPLETED:
        return "default";
      default:
        return "default";
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 space-y-8">
      
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

        {/* Status Badge */}
        {event.status && (
          <Badge variant={getStatusVariant(event.status)} className="mt-1">
            {event.status}
          </Badge>
        )}

        <p className="text-gray-600">{event?.description}</p>
        <p className="text-sm">📍 {event?.location} | ⏰ {event?.time}</p>
      </div>

      {/* Join Button */}
      <Button onClick={handleJoinClick} className="px-6 py-2 bg-primary text-white rounded-lg">
        Join Event
      </Button>

      {/* Host Info */}
      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold">Host</h2>
        <div className="flex items-center gap-4 mt-3">
          <img src={event.host.profileImage} className="w-14 h-14 rounded-full" />
          <div>
            <p className="font-medium">{event.host.name}</p>
            <p className="text-sm text-muted-foreground">{event.host.email}</p>
            <p className="text-sm text-yellow-500">⭐ {event.host.ratingAvg || 0}</p>
          </div>
        </div>
      </div>

      {/* Participants */}
      <div>
        <h2 className="text-xl font-semibold">Participants ({event.participants.length})</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {event.participants.map((p: any) => (
           <Link href={`/user-profile/${p.user._id}`} key={p._id} className="block">
           <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer">
           <Avatar className="h-20 w-20">
              {p.user.profileImage ? (
                <AvatarImage src={p.user.profileImage} />
              ) : (
                <AvatarFallback className="text-xl">
                  {getInitials(p.user.name)}
                </AvatarFallback>
              )}
            </Avatar>
             <div>
               <p className="font-medium">{p.user.name}</p>
               <p className="text-sm text-muted-foreground">{p.user.email}</p>
             </div>
           </motion.div>
         </Link>
          ))}
        </div>
      </div>

      {/* Join Event Modal */}
      {isModalOpen && <JoinEventModal event={event} onClose={() => setIsModalOpen(false)} />}
    </motion.div>
  );
}
