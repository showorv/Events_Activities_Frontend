
import EventsClient from "@/components/modules/Event/EventClient";
import SearchFilter from "@/components/modules/Management/SearchFilter";
import SelectFilter from "@/components/modules/Management/SelectFilter";
import { queryStringFormatter } from "@/lib/formatter";
import { getEvent } from "@/service/event/event";

const EventsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const result = await getEvent(queryString);

  return (
  <div className="max-w-7xl mx-auto mt-25 px-4">
  <div className="flex gap-2 mt-20 mb-3 mx-full">
        <SearchFilter paramName="searchTerm" placeholder="Search events by name type" />
        {/* <SelectFilter
          paramName="type"
          placeholder="Type"
          options={[
            { label: "Racing", value: "Racing" },
            { label: "Hiking", value: "Hiking" },
          ]}
        /> */}
      </div>
    <EventsClient events={result?.data?.result || []} />
    
  </div>
  );
};

export default EventsPage;
