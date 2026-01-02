"use client";


import { initialPayment, leaveEvent } from "@/service/event/event";
import PendingPaymentsTable from "./UserPendingEventsTable";
import { toast } from "sonner";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function PendingPaymentsPage({events}: {events: any[]}) {
    const [, startTransition] = useTransition();
    const router= useRouter()
//   const [events, setEvents] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const res = await getPendingPaymentEvents();
//       if (res.success) setEvents(res.data);
//     };
//     fetchEvents();
//   }, []);

//   const handleViewDetails = (eventId: string) => {
//     console.log("View event", eventId);
//     // router.push(`/events/${eventId}`)
//   };

  const handlePay = async (eventId: string) => {
    console.log("Pay for participation", eventId);
    // call payment API and redirect
    const paymentRes = await initialPayment(eventId);
    if (paymentRes.success && paymentRes.data?.paymentUrl) {
        window.location.href = paymentRes.data?.paymentUrl;
    } else {
      toast.error("Payment initialization failed.");
    }
  };

  const handleLeave = async(eventId: string) => {
    console.log("Leave event", eventId);
    const res = await leaveEvent(eventId)
    if(res.success){
        toast.success(res.message || "event leaved successfully ")
        startTransition(() => {
            router.refresh();
          });
    }else{
        toast.error(res.message)
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pending Payment Events</h1>
      <PendingPaymentsTable
        events={events}
        // onViewDetails={handleViewDetails}
        onPay={handlePay}
        onLeave={handleLeave}
      />
    </div>
  );
}
