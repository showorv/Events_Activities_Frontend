"use client";

import { IUser } from "@/types/user.interface";
import { Badge } from "@/components/ui/badge";
import { Column } from "../Management/ManagementTable";
import { DateCell } from "../shared/DateCell";
import { getInitials } from "@/lib/formatter";


export const userColumns: Column<IUser>[] = [
  {
    header: "User",
    accessor: (user) => (
      <div className="flex items-center gap-3">
        {user.profileImage ? (
        <img
        src={user.profileImage || "/avatar.png"}
        className="h-10 w-10 rounded-full object-cover"
        />
        ): (<>
         {getInitials(user.name)}
        </>
           
        )}
       
        <div>
          <p className="font-medium">{user.name}</p>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
      </div>
    ),
  },
  {
    header: "Role",
    accessor: (user) => (
      <Badge variant="secondary">{user.role}</Badge>
    ),
  },
  {
    header: "Verified",
    accessor: (user) =>
      user.isVerified ? (
        <Badge className="bg-green-600">Yes</Badge>
      ) : (
        <Badge variant="destructive">No</Badge>
      ),
  },
  {
    header: "Blocked",
    accessor: (user) =>
      user.isBlocked ? (
        <Badge variant="destructive">Blocked</Badge>
      ) : (
        <Badge className="bg-green-600">Active</Badge>
      ),
  },
  {
    header: "Joined",
    accessor: (user) => <DateCell date={user.createdAt} />,
  },
];
