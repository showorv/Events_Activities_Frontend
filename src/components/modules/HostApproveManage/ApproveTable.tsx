"use client";

import { useEffect, useState, useTransition } from "react";

import ManagementTable from "../Management/ManagementTable";

import { toast } from "sonner";
import { getAllHostRequests } from "@/service/user/user";
import { IUser } from "@/types/user.interface";
import { hostRequestColumns } from "./ApproveColoum";
import Loader from "../shared/Loader";

const HostRequestsTable = () => {
  const [hostRequests, setHostRequests] = useState<IUser[]>([]);
  const [, startTransition] = useTransition();
  const [loading, setLoading] = useState(true);

  const fetchHostRequests = async () => {
    setLoading(true);
    const res = await getAllHostRequests();
    if (res.success) {
      setHostRequests(res.data || []);
    } else {
      toast.error(res.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHostRequests();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Host Requests</h2>
      {loading ? (
        <p><Loader /></p>
      ) : hostRequests.length === 0 ? (
        <p>No host requests found.</p>
      ) : (
        <ManagementTable
          data={hostRequests}
          columns={hostRequestColumns}
          getRowKey={(user) => user._id!}
        />
      )}
    </div>
  );
};

export default HostRequestsTable;
