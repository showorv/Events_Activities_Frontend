"use client";

import { IUser } from "@/types/user.interface";
import ManagementTable from "../Management/ManagementTable";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import UserActionDialog from "./UserActionDialog";
import { userColumns } from "./UserColoum";
import UserViewDetailDialog from "./UserViewDetaills";

const UsersTable = ({ users }: { users: IUser[] }) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [viewUser, setViewUser] = useState<IUser | null>(null);
  return (
    <>
      <ManagementTable
        data={users}
        columns={userColumns}
        getRowKey={(u) => u._id!}
        onEdit={(u) => setSelectedUser(u)}
        onView={(v)=> setViewUser(v)}
      />
       <UserViewDetailDialog
        open={!!viewUser}
        user={viewUser}
        onClose={() => setViewUser(null)}
      />

      <UserActionDialog
        open={!!selectedUser}
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
        onSuccess={() => startTransition(() => router.refresh())}
      />
    </>
  );
};

export default UsersTable;
