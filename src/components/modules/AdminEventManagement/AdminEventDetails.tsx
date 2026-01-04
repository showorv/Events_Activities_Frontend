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
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={event.image}
                alt={event.name}
                fill
                className="object-cover"
              />
              {event.status && (
                <Badge
                  variant={getStatusVariant(event.status)}
                  className="absolute top-3 left-3"
                >
                  {event.status}
                </Badge>
              )}
            </div>

            <div className="flex-1 space-y-2">
              <h2 className="text-3xl font-bold">{event.name}</h2>
              <p className="text-sm text-muted-foreground">{event.type}</p>
              <p className="flex items-center gap-2">📍 {event.location}</p>
              <p className="flex items-center gap-2">
                🗓 {new Date(event.date).toDateString()} — {event.time}
              </p>
              <p className="flex items-center gap-2">💳 Fee: ৳{event.joiningFee}</p>
            </div>
          </div>

          {/* Host Info */}
          <div className="border rounded-lg p-4 shadow-sm bg-background/50">
            <h3 className="text-lg font-semibold mb-3">Host Details</h3>
            <div className="flex items-center gap-4">
              <Image
                src={event.host.profileImage || "/default-avatar.png"}
                alt={event.host.name}
                width={60}
                height={60}
                className="rounded-full object-cover border border-border"
              />
              <div className="flex flex-col">
                <p className="font-medium text-lg">{event.host.name}</p>
                <p className="text-sm text-muted-foreground">{event.host.email}</p>
                <p className="text-sm text-yellow-500">
                  ⭐ {event.host.ratingAvg || 0}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-muted/20 p-4 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{event.description}</p>
          </div>

          {/* Participants */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Participants ({event.participants.length})
            </h3>
            <div className="overflow-x-auto border rounded-lg shadow-md">
              <table className="w-full text-sm table-auto">
                <thead className="bg-muted text-left">
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3 text-center">Status</th>
                    <th className="p-3 text-center">Payment</th>
                    <th className="p-3 text-center">Joined At</th>
                  </tr>
                </thead>
                <tbody>
                  {event.participants.map((p, idx) => (
                    <tr
                      key={p._id}
                      className={`border-t hover:bg-muted/10 ${
                        idx % 2 === 0 ? "bg-background/50" : ""
                      }`}
                    >
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
