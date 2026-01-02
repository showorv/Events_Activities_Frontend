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
  // onViewDetails: (eventId: string) => void;
  onPay: (eventId: string) => void;
  onLeave: (eventId: string) => void;
}

export default function PendingPaymentsTable({
  events,
  // onViewDetails,
  onPay,
  onLeave,
}: Props) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Image</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Type</th>
            <th className="px-4 py-2 border">Location</th>
            <th className="px-4 py-2 border">Time</th>
            <th className="px-4 py-2 border">Fee</th>
            <th className="px-4 py-2 border">Payment Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(({ participationId, paymentStatus, event }) => (
            <tr key={participationId} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="px-4 py-2 border">{event.name}</td>
              <td className="px-4 py-2 border">{event.type}</td>
              <td className="px-4 py-2 border">{event.location}</td>
              <td className="px-4 py-2 border">{event.time}</td>
              <td className="px-4 py-2 border">{event.joiningFee} ৳</td>
              <td className="px-4 py-2 border">
                <span
                  className={`px-2 py-1 rounded ${
                    paymentStatus === "PAID"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {paymentStatus}
                </span>
              </td>
              <td className="px-4 py-2 border space-x-2">
                {/* <button
                  onClick={() => onViewDetails(event._id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View Details
                </button> */}
                {paymentStatus !== "PAID" && (
                  <button
                    onClick={() => onPay(event._id)}
                    className="px-3 py-1 text-xs whitespace-nowrap md:text-md  bg-primary text-white rounded hover:bg-chart-5"
                  >
                    Pay Now
                  </button>
                )}
                <button
                  onClick={() => onLeave(event._id)}
                  className="px-3 py-1 text-xs whitespace-nowrap md:text-md bg-destructive text-white rounded hover:bg-destructive"
                >
                  Leave
                </button>
              </td>
            </tr>
          ))}
          {events.length === 0 && (
            <tr>
              <td colSpan={8} className="text-center py-4">
                No pending payment events.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
