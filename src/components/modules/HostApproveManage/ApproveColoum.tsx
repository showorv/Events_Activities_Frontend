import { Column } from "../Management/ManagementTable";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { startTransition } from "react";
import { approveHostRequest } from "@/service/user/user";
import { IUser } from "@/types/user.interface";

export const hostRequestColumns: Column<IUser>[] = [
  {
    header: "Name",
    accessor: (user) => (
      <div className="flex items-center gap-2">
        {user.profileImage && (
          <img
            src={user.profileImage}
            alt={user.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        )}
        <span>{user.name}</span>
      </div>
    ),
  },
  {
    header: "Email",
    accessor: (user) => <span>{user.email}</span>,
  },
  {
    header: "Verified",
    accessor: (user) => (
      <Badge variant={user.isVerified ? "default" : "destructive"}>
        {user.isVerified ? "Verified" : "Unverified"}
      </Badge>
    ),
  },
  {
    header: "Status",
    accessor: (user) => (
      <Badge variant={user.isHostApproved ? "default" : "secondary"}>
        {user.isHostApproved ? "Approved" : "Pending"}
      </Badge>
    ),
  },
  {
    header: "Actions",
    accessor: (user) => (
      <Button
        size="sm"
        variant="default"
        disabled={user.isHostApproved}
        onClick={async () => {
          const res = await approveHostRequest(user._id!);
          if (res.success) {
            toast.success("Host approved!");
            startTransition(() => {
              // Refresh page or refetch table data
              location.reload();
            });
          } else {
            toast.error(res.message);
          }
        }}
      >
        Approve
      </Button>
    ),
  },
];
