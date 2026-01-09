"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

;
import ScrollReveal from "../shared/ScrollReveal";
import EventCard from "../Event/EventCard";
import { getTopEvent } from "@/service/event/event";
import EventsClient from "../Event/EventClient";
import JoinEventModal from "../Event/EventJoinModal";

export default function TopEventsSection() {
  const [event, setEvent] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  useEffect(() => {
    getTopEvent().then((res:any) => {
        console.log("top event",res);
        
        if (res.success) {
          // Take only the top 3 events
          setEvent((res.data?.result || []).slice(0, 3));
        }
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto  py-24 px-6">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Top Events</h2>
          <Link
            href="/events"
            className="text-primary font-medium hover:underline"
          >
            View All →
          </Link>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {event.map((event, i) => (
          <ScrollReveal key={event._id} delay={i * 0.15}>
             
     
          <EventCard
            key={event._id}
            event={event}
            onJoin={setSelectedEvent}
          />
  
 

      {selectedEvent && (
        <JoinEventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
