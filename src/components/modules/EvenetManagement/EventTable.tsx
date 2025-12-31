"use client";


import { IEvent, IEventParticipant } from "@/types/event.interface";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import { deleteEvent, getEventParticipants } from "@/service/event/eventManagement";
import ManagementTable from "../Management/ManagementTable";
import DeleteConfirmationDialog from "../shared/DeleteConfrimDialog";
import { eventsColumns } from "./EventColoum";
import EventFormDialog from "./EventDialog";
import EventViewDetailDialog from "./EventDetails";

import EventParticipantsTableDialog from "./EventParticipantsDialog";


const EventsTable = ({ events }: { events: IEvent[] }) => {
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [deleting, setDeleting] = useState<IEvent | null>(null);
    const [edit, setEdit] = useState<IEvent | null>(null);
    const [view, setView] = useState<IEvent | null>(null);
    const [participants, setParticipants] = useState<IEventParticipant[]>([]);
    const [participantsOpen, setParticipantsOpen] = useState(false);
    
    const confirmDelete = async () => {
      if (!deleting?._id) return; // safe check
      const res = await deleteEvent(deleting._id);
      if (res.success) {
        toast.success(res.message);
        startTransition(() => router.refresh());
      }
      setDeleting(null);
    };

    const handleView = (event: IEvent) => {
      setView(event);
    };
  
    const handleEdit = (event: IEvent) => {
      setEdit(event);
    };
    const handleRefresh = () => {
      startTransition(() => {
        router.refresh();
      });
    };
    const handleViewParticipants = async (event: IEvent) => {
      const res = await getEventParticipants(event._id!);
      if (res.success) {
        setParticipants(res.data.participants);
        setParticipantsOpen(true);
      }
    };
    
    return (
      <>
        <ManagementTable
          data={events.filter(Boolean)} // remove nulls
          columns={eventsColumns}
          onView={handleView}
          onEdit={handleEdit}
          onParticipants={handleViewParticipants}
          getRowKey={(e) => e._id!}
          onDelete={(e) => e && setDeleting(e)}
        />
          <EventFormDialog
        open={!!edit}
        onClose={() => setEdit(null)}
        event={edit!}
        
        onSuccess={() => {
          setEdit(null);
          handleRefresh();
        }}
      />

      {/* View Doctor Detail Dialog */}
      <EventViewDetailDialog
        open={!!view}
        onClose={() => setView(null)}
        event={view}
      />
  <EventParticipantsTableDialog
    open={participantsOpen}
    onClose={() => setParticipantsOpen(false)}
   participant={participants}
  />

  
        <DeleteConfirmationDialog
          open={!!deleting}
          onOpenChange={() => setDeleting(null)}
          onConfirm={confirmDelete}
          title="Delete Event"
          description={`Delete ${deleting?.name}?`}
        />
      </>
    );
  };
  

export default EventsTable;
