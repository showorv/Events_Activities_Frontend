
import EventsClient from "@/components/modules/Event/EventClient";
import { getEvent } from "@/service/event/event";

const EventsPage = async ({ searchParams }: any) => {
  const result = await getEvent(searchParams);

  return (
  <div className="max-w-7xl mx-auto mt-20">

    <EventsClient events={result?.data?.result || []} />
    
  </div>
  );
};

export default EventsPage;
