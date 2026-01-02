
import EventsManagementHeader from "@/components/modules/EvenetManagement/EventHeader";
import EventsTable from "@/components/modules/EvenetManagement/EventTable";
import RefreshButton from "@/components/modules/Management/RefreshButton";
import SearchFilter from "@/components/modules/Management/SearchFilter";
import SelectFilter from "@/components/modules/Management/SelectFilter";
import TablePagination from "@/components/modules/Management/TablePagination";
import { TableSkeleton } from "@/components/modules/Management/TableSkelaton";
import PendingPaymentsPage from "@/components/modules/user/UserPending";
import { queryStringFormatter } from "@/lib/formatter";
import { getPendingPaymentEvents } from "@/service/event/event";
import { getAllHostEvents } from "@/service/event/eventManagement";
import { IEvent } from "@/types/event.interface";

import { Suspense } from "react";

const UserAllEventsPage = async () => {
 
  const result = await getPendingPaymentEvents(); // fetch from API
    console.log(result);
    
  

  return (
    <div className="space-y-6">
     
    

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        {result?.data && result.data.length > 0 ? (
          <PendingPaymentsPage events={result.data.filter((e:any) => e !== null)} />

        ) : (
          <p>No events found</p>
        )}
      </Suspense>

     
    </div>
  );
};

export default UserAllEventsPage;