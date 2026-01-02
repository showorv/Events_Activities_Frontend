"use client";

import { useState } from "react";

import EventDetailsModal from "./EventDetailsModal";
import { getClientSingleEvent, getSingleEvent } from "@/service/event/event";
import JoinedEventsTable from "./JoinedTable";
import Loader from "../shared/Loader";

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
  events: EventData[];
}

export default function JoinedEventsClient({ events }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleViewDetails = async (eventId: string) => {
    try {
      setLoading(true);
      const res = await getClientSingleEvent(eventId);
     
      

      if (res.success) {
        setSelectedEvent(res.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <JoinedEventsTable
        events={events}
        onViewDetails={handleViewDetails}
      />

      {loading && (
        <p className="mt-4 text-center text-gray-500"><Loader /></p>
      )}

      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}
