
import EventsManagementHeader from "@/components/modules/EvenetManagement/EventHeader";
import EventsTable from "@/components/modules/EvenetManagement/EventTable";
import RefreshButton from "@/components/modules/Management/RefreshButton";
import SearchFilter from "@/components/modules/Management/SearchFilter";
import SelectFilter from "@/components/modules/Management/SelectFilter";
import TablePagination from "@/components/modules/Management/TablePagination";
import { TableSkeleton } from "@/components/modules/Management/TableSkelaton";
import { queryStringFormatter } from "@/lib/formatter";
import { getAllHostEvents } from "@/service/event/eventManagement";
import { IEvent } from "@/types/event.interface";

import { Suspense } from "react";

const AllEventsManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const result = await getAllHostEvents(queryString); // fetch from API

  const totalPages = Math.ceil(result.data.total / result.data.limit);

  return (
    <div className="space-y-6">
      <EventsManagementHeader />
      <div className="flex space-x-2">
        <SearchFilter paramName="searchTerm" placeholder="Search events..." />
        <SelectFilter
          paramName="type"
          options={[
            { label: "Racing", value: "racing" },
            { label: "Hiking", value: "hiking" },
            { label: "Cycling", value: "cycling" },
          ]}
          placeholder="Filter by type"
        />
        <RefreshButton />
      </div>

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        {result?.data?.result && result.data.result.length > 0 ? (
          <EventsTable events={result.data.result.filter((e:any) => e !== null)} />

        ) : (
          <p>No events found</p>
        )}
      </Suspense>

      <TablePagination
        currentPage={result.data.page}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AllEventsManagementPage;
