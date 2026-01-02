"use client";

import { useState } from "react";
import EventCard from "./EventCard";
import JoinEventModal from "./EventJoinModal";
import SearchFilter from "@/components/modules/Management/SearchFilter";
import SelectFilter from "@/components/modules/Management/SelectFilter";

export default function EventsClient({ events }: { events: any[] }) {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex gap-2">
        <SearchFilter paramName="searchTerm" placeholder="Search events..." />
        <SelectFilter
          paramName="type"
          placeholder="Type"
          options={[
            { label: "Racing", value: "Racing" },
            { label: "Hiking", value: "Hiking" },
          ]}
        />
      </div>

      {/* Events */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event._id}
            event={event}
            onJoin={setSelectedEvent}
          />
        ))}
      </div>

      {selectedEvent && (
        <JoinEventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
