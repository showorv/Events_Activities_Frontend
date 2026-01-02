import { serverFetch } from "@/lib/server-fetch";

export async function getSingleUser(id: string) {
    try {
      const response = await serverFetch.get(
        `/user/${id}`
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