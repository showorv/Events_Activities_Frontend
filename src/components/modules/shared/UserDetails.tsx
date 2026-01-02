"use client";

import { motion } from "framer-motion";
import { CircleUserRound } from "lucide-react";


interface Props {
  user: any;
}

export default function UserDetailsClient({ user }: Props) {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 space-y-6 max-w-3xl mx-auto"
    >
      {/* Profile Image */}
      <div className="flex items-center gap-4">
        {
            user.profileImage ? (<img
            src={user.profileImage }
            className="w-24 h-24 rounded-full object-cover"
          /> ): (
            <CircleUserRound className="w-10 h-10 text-gray-400" />
          )
        }
        
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-yellow-500 font-medium">⭐ {user.ratingAvg || 0}</p>
          <p className="text-sm text-muted-foreground">
            Role: {user.role || "User"}
          </p>
        </div>
      </div>

      {/* User Info */}
      <div className="border-t pt-4 space-y-2">
        <h2 className="text-xl font-semibold">Interests</h2>
        <p>{user.interests.length ? user.interests.join(", ") : "No interests"}</p>
      </div>

      <div className="border-t pt-4 space-y-2">
        <h2 className="text-xl font-semibold">Bio & Location</h2>
        <p>{user.bio || "No bio available"}</p>
        <p>{user.location || "Location not set"}</p>
      </div>

      {/* Joined / Hosted Events */}
      <div className="border-t pt-4 space-y-2">
        <h2 className="text-xl font-semibold">Events</h2>
        <p>Hosted Events: {user.hostedEvents?.length || 0}</p>
        <p>Joined Events: {user.joinedEvents?.length || 0}</p>
      </div>
    </motion.div>
  );
}
