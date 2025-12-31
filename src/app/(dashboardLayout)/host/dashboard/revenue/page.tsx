import RevenueOverview from "@/components/modules/EvenetManagement/RevenueOverview";

const RevenuePage =async () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Event Revenue Dashboard</h1>
        <RevenueOverview />
      </div>
    );
  };
  
  export default RevenuePage;