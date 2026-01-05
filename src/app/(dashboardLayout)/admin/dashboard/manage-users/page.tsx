
import SearchFilter from "@/components/modules/Management/SearchFilter";
import SelectFilter from "@/components/modules/Management/SelectFilter";
import TablePagination from "@/components/modules/Management/TablePagination";

import { queryStringFormatter } from "@/lib/formatter";
import UsersTable from "@/components/modules/UserManagement/UserTable";
import { getAllUsers } from "@/service/user/user";
export const dynamic = "force-dynamic"

const UserManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const query = queryStringFormatter(params);

  const res = await getAllUsers(query);
  const totalPages = Math.ceil(res.metaData.total / res.metaData.limit);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">User Management</h1>

      <div className="flex gap-2">
        <SearchFilter paramName="search" placeholder="Search users..." />
        <SelectFilter
          paramName="role"
          placeholder="Role"
          options={[
            { label: "User", value: "USER" },
            { label: "Host", value: "HOST" },
            { label: "Admin", value: "ADMIN" },
          ]}
        />
      </div>

      <UsersTable users={res.data} />

      <TablePagination
        currentPage={res.metaData.page}
        totalPages={totalPages}
      />
    </div>
  );
};

export default UserManagementPage;
