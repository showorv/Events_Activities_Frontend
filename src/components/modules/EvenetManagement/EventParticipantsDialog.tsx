"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { IEventParticipant } from "@/types/event.interface";
import { getInitials } from "@/lib/formatter";
import TablePagination from "../Management/TablePagination";

interface Props {
  open: boolean;
  onClose: () => void;
  participant: IEventParticipant[];
}

const EventParticipantsTableDialog = ({ open, onClose, participant }: Props) => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card text-foreground border border-border">
        <DialogHeader>
          <DialogTitle>Participants</DialogTitle>
        </DialogHeader>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border border-border">
            <thead className="bg-popover text-foreground">
              <tr>
                <th className="px-4 py-2 border border-border">User</th>
                <th className="px-4 py-2 border border-border">Email</th>
                <th className="px-4 py-2 border border-border">Status</th>
                <th className="px-4 py-2 border border-border">Payment</th>
              </tr>
            </thead>
            <tbody>
              {participant.map((p) => (
                <tr key={p._id} className="border-t border-border hover:bg-background/50">
                  <td className="px-4 py-2 flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      {p.user.profileImage ? (
                        <AvatarImage src={p.user.profileImage} />
                      ) : (
                        <AvatarFallback>{getInitials(p.user.name)}</AvatarFallback>
                      )}
                    </Avatar>
                    {p.user.name}
                  </td>
                  <td className="px-4 py-2">{p.user.email}</td>
                  <td className="px-4 py-2">
                    <Badge variant={p.status === "JOINED" ? "default" : "destructive"}>
                      {p.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-2">
                    <Badge variant={p.paymentStatus === "PAID" ? "default" : "destructive"}>
                      {p.paymentStatus}
                    </Badge>
                  </td>
                </tr>
              ))}
              {participant.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-muted-foreground">
                    No participants found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <TablePagination
            currentPage={page}
            totalPages={Math.ceil(total / limit)}
            onPageChange={setPage}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventParticipantsTableDialog;
