"use client";


import { Plus } from "lucide-react";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import EventFormDialog from "./EventDialog";
import ManagementPageHeader from "../Management/ManagementPageHeader";


const EventsManagementHeader = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [, startTransition] = useTransition();

  return (
    <>
      <EventFormDialog
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={() => startTransition(() => router.refresh())}
      />

      <ManagementPageHeader
        title="Events Management"
        description="Manage your hosted events"
        action={{
          label: "Create Event",
          icon: Plus,
          onClick: () => setOpen(true),
        }}
      />
    </>
  );
};

export default EventsManagementHeader;
