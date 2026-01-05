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
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-card text-foreground text-left">
          <tr>
            {["Image", "Name", "Type", "Location", "Time", "Fee", "Action"].map((th) => (
              <th key={th} className="px-4 py-3">{th}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr key={event._id} className="border-t border-border hover:bg-popover">
              <td className="px-4 py-3">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-14 h-14 rounded-lg object-cover border border-border"
                />
              </td>

              <td className="px-4 py-3 font-medium text-foreground">{event.name}</td>
              <td className="px-4 py-3 text-foreground">{event.type}</td>
              <td className="px-4 py-3 text-foreground">{event.location}</td>
              <td className="px-4 py-3 text-foreground">{event.time}</td>
              <td className="px-4 py-3 text-foreground">{event.joiningFee} ৳</td>

              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => onViewDetails(event._id)}
                  className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-chart-4 transition"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}

          {events.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-6 text-muted-foreground">
                No joined events found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
