"use client";

import { IAdminEvent } from "@/types/adminEvent.interface";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Status } from "@/types/event.interface";
import { Badge } from "@/components/ui/badge";

interface EventDetailsProps {
  open: boolean;
  onClose: () => void;
  event: IAdminEvent | null;
}

const EventDetails = ({ open, onClose, event }: EventDetailsProps) => {
  if (!event) return null;
  const getStatusVariant = (status: Status) => {
    switch (status) {
      case Status.OPEN:
        return "default";
      case Status.FULL:
        return "destructive";
      case Status.CANCELLED:
        return "secondary";
      case Status.COMPLETED:
        return "default";
      default:
        return "default";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader className="flex justify-between items-center">
          <DialogTitle className="text-xl font-semibold">
            Event Details
          </DialogTitle>
          <DialogClose className="text-red-500 hover:underline">
            Close
          </DialogClose>
        </DialogHeader>

        <div className="space-y-8 mt-4">

          {/* Event Header */}
          <div className="flex flex-col md:flex-row gap-6">
            <Image
              src={event.image}
              alt={event.name}
              width={320}
              height={200}
              className="rounded-lg object-cover"
            />
        {event.status && (
                <Badge variant={getStatusVariant(event.status)} className="mt-1">
                    {event.status}
                </Badge>
                )}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{event.name}</h2>
              <p className="text-sm text-muted-foreground">{event.type}</p>
              <p>📍 {event.location}</p>
              <p>
                🗓 {new Date(event.date).toDateString()} — {event.time}
              </p>
              <p>💳 Fee: ৳{event.joiningFee}</p>
              <p className="font-medium">Status: {event.status}</p>
            </div>
          </div>

          {/* Host Info */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Host Details</h3>
            <div className="flex items-center gap-4">
              {event.host.profileImage && (
                <Image
                  src={event.host.profileImage}
                  alt={event.host.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-medium">{event.host.name}</p>
                <p className="text-sm text-muted-foreground">{event.host.email}</p>
                <p className="text-sm text-yellow-500">
                  ⭐ {event.host.ratingAvg || 0}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{event.description}</p>
          </div>

          {/* Participants */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Participants ({event.participants.length})
            </h3>
            <div className="overflow-x-auto border rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-center">Status</th>
                    <th className="p-3 text-center">Payment</th>
                    <th className="p-3 text-center">Joined At</th>
                  </tr>
                </thead>
                <tbody>
                  {event.participants.map((p) => (
                    <tr key={p._id} className="border-t">
                      <td className="p-3">{p.user.name}</td>
                      <td className="p-3">{p.user.email}</td>
                      <td className="p-3 text-center">{p.status}</td>
                      <td className="p-3 text-center">{p.paymentStatus}</td>
                      <td className="p-3 text-center">
                        {new Date(p.createdAt!).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetails;
