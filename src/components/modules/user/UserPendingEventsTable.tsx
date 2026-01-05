"use client";

interface EventData {
  participationId: string;
  paymentStatus: string;
  event: {
    _id: string;
    name: string;
    type: string;
    location: string;
    time: string;
    joiningFee: number;
    image: string;
    status: string;
  };
}

interface Props {
  events: EventData[];
  onPay: (eventId: string) => void;
  onLeave: (eventId: string) => void;
}

export default function PendingPaymentsTable({
  events,
  onPay,
  onLeave,
}: Props) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto w-full border-collapse border border-border">
        <thead className="bg-card">
          <tr>
            {["Image", "Name", "Type", "Location", "Time", "Fee", "Payment Status", "Actions"].map((th) => (
              <th key={th} className="px-4 py-2 border text-foreground">{th}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {events.map(({ participationId, paymentStatus, event }) => (
            <tr key={participationId} className="hover:bg-popover">
              <td className="px-4 py-2 border">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-16 h-16 object-cover rounded border border-border"
                />
              </td>
              <td className="px-4 py-2 border text-foreground">{event.name}</td>
              <td className="px-4 py-2 border text-foreground">{event.type}</td>
              <td className="px-4 py-2 border text-foreground">{event.location}</td>
              <td className="px-4 py-2 border text-foreground">{event.time}</td>
              <td className="px-4 py-2 border text-foreground">{event.joiningFee} ৳</td>
              <td className="px-4 py-2 border">
                <span
                  className={`px-2 py-1 rounded ${
                    paymentStatus === "PAID"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {paymentStatus}
                </span>
              </td>
              <td className="px-4 py-2 border space-x-2">
                {paymentStatus !== "PAID" && (
                  <button
                    onClick={() => onPay(event._id)}
                    className="px-3 py-1 text-xs md:text-md bg-primary text-primary-foreground rounded hover:bg-chart-5 transition"
                  >
                    Pay Now
                  </button>
                )}
                <button
                  onClick={() => onLeave(event._id)}
                  className="px-3 py-1 text-xs md:text-md bg-destructive text-destructive-foreground rounded hover:opacity-90 transition"
                >
                  Leave
                </button>
              </td>
            </tr>
          ))}

          {events.length === 0 && (
            <tr>
              <td colSpan={8} className="text-center py-4 text-muted-foreground">
                No pending payment events.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
