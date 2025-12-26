"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IEvent } from "@/types/event.interface";

import { formatDateTime, getInitials } from "@/lib/formatter";
import { Calendar, Clock, MapPin, DollarSign, Users, Image as ImageIcon } from "lucide-react";
import InfoRow from "../Management/InfoRow";

interface Props {
  open: boolean;
  onClose: () => void;
  event: IEvent | null;
}

const EventViewDetailDialog = ({ open, onClose, event }: Props) => {
  if (!event) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-[600px] max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Event Details</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col px-6 pb-6 space-y-6">
          {/* Header */}
          <div className="flex gap-6 items-center bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
            <Avatar className="h-24 w-24 border-2 border-white shadow">
              {event.image ? (
                <AvatarImage src={event.image} alt={event.name} />
              ) : (
                <AvatarFallback className="text-2xl">{getInitials(event.name)}</AvatarFallback>
              )}
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{event.name}</h2>
              <Badge variant="secondary" className="mt-1">
                {event.type}
              </Badge>
            </div>
          </div>

          {/* Event Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <InfoRow label="Date" value={formatDateTime(event.date)} />
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-600" />
              <InfoRow label="Time" value={event.time} />
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <InfoRow label="Location" value={event.location} />
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-orange-600" />
              <InfoRow
                label="Participants"
                value={`${event.minParticipants} - ${event.maxParticipants}`}
              />
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <InfoRow label="Joining Fee" value={event.joiningFee ? `৳${event.joiningFee}` : "Free"} />
            </div>
            {event.description && (
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventViewDetailDialog;
