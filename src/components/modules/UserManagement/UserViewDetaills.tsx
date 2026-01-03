"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IUser } from "@/types/user.interface";
import { getInitials } from "@/lib/formatter";
import InfoRow from "../Management/InfoRow";
import { Mail, MapPin, Shield, UserCheck, UserX } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  user: IUser | null;
}

const UserViewDetailDialog = ({ open, onClose, user }: Props) => {
  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-[550px]">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex gap-4 items-center bg-muted/50 p-4 rounded-lg">
            <Avatar className="h-20 w-20">
              {user.profileImage ? (
                <AvatarImage src={user.profileImage} />
              ) : (
                <AvatarFallback className="text-xl">
                  {getInitials(user.name)}
                </AvatarFallback>
              )}
            </Avatar>

            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>

              <div className="flex gap-2 mt-2">
                <Badge>{user.role}</Badge>
                {user.isBlocked ? (
                  <Badge variant="destructive">Blocked</Badge>
                ) : (
                  <Badge className="bg-green-600">Active</Badge>
                )}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-3">
            <InfoRow
            //   icon={<Shield className="h-4 w-4" />}
              label="Verified"
              value={user.isVerified ? "Yes" : "No"}
            />
            {user.location && (
              <InfoRow
                // con={<MapPin className="h-4 w-4" />}
                label="Location"
                value={user.location}
              />
            )}
            {user.bio && (
              <InfoRow label="Bio" value={user.bio} />
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-4 text-center">
              <p className="text-2xl font-bold">
                {user.hostedEvents?.length || 0}
              </p>
              <p className="text-sm text-muted-foreground">Hosted Events</p>
            </div>

            <div className="rounded-lg border p-4 text-center">
              <p className="text-2xl font-bold">
                {user.joinedEvents?.length || 0}
              </p>
              <p className="text-sm text-muted-foreground">Joined Events</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserViewDetailDialog;
