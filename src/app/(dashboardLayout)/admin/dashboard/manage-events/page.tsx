
import SearchFilter from "@/components/modules/Management/SearchFilter";
import SelectFilter from "@/components/modules/Management/SelectFilter";
import TablePagination from "@/components/modules/Management/TablePagination";
import RefreshButton from "@/components/modules/Management/RefreshButton";

import { queryStringFormatter } from "@/lib/formatter";
import AdminEventsTable from "@/components/modules/AdminEventManagement/AdminEventtable";
import { getAllAdminEvents } from "@/service/event/eventManagement";

const AdminEventsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const queryString = queryStringFormatter(params);

  const res = await getAllAdminEvents(queryString);
  const totalPages = Math.ceil(res.data.total / res.data.limit);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">All Events</h1>

      <div className="flex gap-2">
        <SearchFilter paramName="searchTerm" placeholder="Search events..." />
        <SelectFilter
          paramName="type"
          placeholder="Type"
          options={[
            { label: "Racing", value: "Racing" },
            { label: "Hiking", value: "Hiking" },
            { label: "Cycling", value: "Cycling" },
          ]}
        />
        <RefreshButton />
      </div>

      <AdminEventsTable events={res.data.result} />

      <TablePagination
        currentPage={res.data.page}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AdminEventsPage;
