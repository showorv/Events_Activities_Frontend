"use client";

import {  IEventParticipant } from "@/types/event.interface";
import { useState } from "react";

import ManagementTable from "../Management/ManagementTable";

import EventParticipantsTableDialog from "../EvenetManagement/EventParticipantsDialog";
import { getEventParticipants } from "@/service/event/eventManagement";
import { toast } from "sonner";
import { adminEventColumns } from "./AdminEventColoum";
import EventDetails from "./AdminEventDetails";
import { IAdminEvent } from "@/types/adminEvent.interface";

const AdminEventsTable = ({ events }: { events: IAdminEvent[] }) => {
  const [view, setView] = useState<IAdminEvent | null>(null);
  const [participants, setParticipants] = useState<IEventParticipant[]>([]);
  const [participantsOpen, setParticipantsOpen] = useState(false);

  const handleView = (event: IAdminEvent) => {
    setView(event);
  };

  const handleViewParticipants = async (event: IAdminEvent) => {
    const res = await getEventParticipants(event._id!);
    if (res.success) {
      setParticipants(res.data.participants);
      setParticipantsOpen(true);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <ManagementTable
        data={events}
        columns={adminEventColumns}
        onView={handleView}
        onParticipants={handleViewParticipants}
        getRowKey={(e) => e._id!}
      />

      {/* View Event */}
      <EventDetails
        open={!!view}
        onClose={() => setView(null)}
        event={view}
      />

      {/* View Participants */}
      <EventParticipantsTableDialog
        open={participantsOpen}
        onClose={() => setParticipantsOpen(false)}
        participant={participants}
      />
    </>
  );
};

export default AdminEventsTable;
