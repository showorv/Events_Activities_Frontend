// app/(commonLayout)/joined-events/page.tsx

import JoinedEventsClient from "@/components/modules/user/JoinedEventClient";
import { getAllJoinedEvents, getSingleEvent } from "@/service/event/event";

export default async function JoinedEventsPage() {
  const res = await getAllJoinedEvents();

  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Joined Events</h1>

      <JoinedEventsClient events={res.data} />
    </div>
  );
}
