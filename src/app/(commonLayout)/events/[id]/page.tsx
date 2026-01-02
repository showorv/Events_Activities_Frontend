import EventDetailsClient from "@/components/modules/Event/EventDetails";
import { getSingleEvent } from "@/service/event/event";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const EventDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params; // ✅ IMPORTANT

  const res = await getSingleEvent(id);
  console.log(res);
  

  return (
    <div className="max-w-7xl mx-auto mt-20">
  <EventDetailsClient event={res.data}/>
  </div>
  );
};

export default EventDetailsPage;
