"use client";



import { IEvent } from "@/types/event.interface";
import { Badge } from "@/components/ui/badge";
import { Column } from "../Management/ManagementTable";
import { DateCell } from "../shared/DateCell";

export const eventsColumns: Column<IEvent>[] = [
  {
    header: "Event",
    accessor: (event) => (
      <div className="flex flex-col">
        <span className="font-medium">{event.name}</span>
        <span className="text-xs text-muted-foreground">{event.type}</span>
      </div>
    ),
  },
  {
    header: "Date",
    accessor: (event) => <DateCell date={event.date} />,
  },
  {
    header: "Time",
    accessor: (event) => <span>{event.time}</span>,
  },
  {
    header: "Location",
    accessor: (event) => <span>{event.location}</span>,
  },
  {
    header: "Participants",
    accessor: (event) => (
      <span className="text-sm">
        {event.minParticipants} - {event.maxParticipants}
      </span>
    ),
  },
  {
    header: "Fee",
    accessor: (event) =>
      event.joiningFee ? (
        <span className="text-green-600 font-semibold">
          ৳{event.joiningFee}
        </span>
      ) : (
        <Badge variant="secondary">Free</Badge>
      ),
  },
];
