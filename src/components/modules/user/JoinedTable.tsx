"use client";

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
  onViewDetails: (eventId: string) => void;
}


export default function JoinedEventsTable({ events, onViewDetails }: Props) {
    return (
      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Fee</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
  
          <tbody>
            {events.map((event) => (
              <tr
                key={event._id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-4 py-3">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                </td>
  
                <td className="px-4 py-3 font-medium">
                  {event.name}
                </td>
  
                <td className="px-4 py-3">{event.type}</td>
                <td className="px-4 py-3">{event.location}</td>
                <td className="px-4 py-3">{event.time}</td>
                <td className="px-4 py-3">{event.joiningFee} ৳</td>
  
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => onViewDetails(event._id)}
                    className="px-3 py-1 text-sm bg-primary text-white rounded-md hover:bg-chart-4"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
  
            {events.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-500">
                  No joined events found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }