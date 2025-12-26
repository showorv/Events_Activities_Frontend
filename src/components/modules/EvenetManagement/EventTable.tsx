"use client";


import { IEvent } from "@/types/event.interface";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import { deleteEvent } from "@/service/event/eventManagement";
import ManagementTable from "../Management/ManagementTable";
import DeleteConfirmationDialog from "../shared/DeleteConfrimDialog";
import { eventsColumns } from "./EventColoum";


const EventsTable = ({ events }: { events: IEvent[] }) => {
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [deleting, setDeleting] = useState<IEvent | null>(null);
  
    const confirmDelete = async () => {
      if (!deleting?._id) return; // safe check
      const res = await deleteEvent(deleting._id);
      if (res.success) {
        toast.success(res.message);
        startTransition(() => router.refresh());
      }
      setDeleting(null);
    };
  
    return (
      <>
        <ManagementTable
          data={events.filter(Boolean)} // remove nulls
          columns={eventsColumns}
          getRowKey={(e) => e._id!}
          onDelete={(e) => e && setDeleting(e)}
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
