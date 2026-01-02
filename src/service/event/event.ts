import { serverFetch } from "@/lib/server-fetch";


export async function getEvent(query?: { searchTerm?: string }) {
  try {
    const params = new URLSearchParams();

    if (query?.searchTerm) {
      params.append("searchTerm", query.searchTerm);
    }

    const response = await serverFetch.get(
      `/event/userEvent?${params.toString()}`
    );

    
    return response.json();
  } catch (error: any) {
    console.error("Fetch error:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
      data: null,
    };
  }
}

export async function joinEvent(id: string) {
  try {
    const response = await serverFetch.get(
      `/participation/join/${id}`
    );
    return response.json();
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
export async function getSingleEvent(id: string) {
  try {
    const response = await serverFetch.get(
      `/event/${id}`
    );
    return response.json();
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}