"use client";

import { useActionState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { IEvent } from "@/types/event.interface";
import { toast } from "sonner";
import { createEvent, updateEvent } from "@/service/event/eventManagement";
import InputFieldError from "../shared/InputFieldError";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  event?: IEvent;
}

const EventFormDialog = ({ open, onClose, onSuccess, event }: Props) => {
  const isEdit = !!event;

  const [state, formAction, pending] = useActionState(
    isEdit ? updateEvent.bind(null, event!._id!) : createEvent,
    null
  );

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      onSuccess();
      onClose();
    } else if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Event" : "Create Event"}</DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-4">
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input name="name" defaultValue={event?.name} />
            <InputFieldError state={state} field="name" />
          </Field>

          <Field>
            <FieldLabel>Type</FieldLabel>
            <Input name="type" defaultValue={event?.type} />
          </Field>

          <Field>
            <FieldLabel>Date</FieldLabel>
            <Input type="date" name="date" />
          </Field>

          <Field>
            <FieldLabel>Time</FieldLabel>
            <Input name="time" placeholder="10:00 AM" />
          </Field>

          <Field>
            <FieldLabel>Location</FieldLabel>
            <Input name="location" defaultValue={event?.location} />
          </Field>

          <Field>
            <FieldLabel>Participants</FieldLabel>
            <div className="flex gap-2">
              <Input name="minParticipants" type="number" placeholder="Min" />
              <Input name="maxParticipants" type="number" placeholder="Max" />
            </div>
          </Field>

          <Field>
            <FieldLabel>Joining Fee</FieldLabel>
            <Input name="joiningFee" type="number" />
          </Field>

          <Field>
            <FieldLabel>Description</FieldLabel>
            <Input name="description" />
          </Field>

          <Field>
            <FieldLabel>Image</FieldLabel>
            <Input name="file" type="file" accept="image/*" />
          </Field>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose} type="button">
              Cancel
            </Button>
            <Button type="submit" disabled={pending}>
              {pending ? "Saving..." : isEdit ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventFormDialog;
