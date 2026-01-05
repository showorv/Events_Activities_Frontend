import HostRatingsTable from "@/components/modules/shared/HostRatingTable";

export const dynamic = "force-dynamic"

export default function HostDashboardPage() {
  return (
    <div className="p-6">
      <HostRatingsTable />
    </div>
  );
}
