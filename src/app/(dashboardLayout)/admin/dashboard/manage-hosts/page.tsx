import HostRequestsTable from "@/components/modules/HostApproveManage/ApproveTable";
export const dynamic = "force-dynamic"

export default function HostRequestsPage() {
  return (
    <div className="p-6">
      <HostRequestsTable />
    </div>
  );
}
