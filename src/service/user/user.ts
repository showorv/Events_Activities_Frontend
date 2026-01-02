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



export const getMe = async () => {
  const res = await serverFetch.get("/user/me");
  return res.json();
};

// export const updateUser = async (id: string, formData: FormData) => {
//   const res = await serverFetch.patch(`/user/${id}`, {
//     body: formData,
//   });
//   return res.json();
// };
const API_BASE = process.env.NEXT_PUBLIC_API_URL


export async function updateUser(id: string,formData: FormData) {
    try {
      const response = await fetch(`${API_BASE}/user/${id}`, {
        method: "PATCH",
        // headers: { "Content-Type": "application/json" },
        body: formData,
        credentials: "include", 
      });
      return await response.json();
    } catch (error: any) {
      console.error(error);
      return { success: false, message: error.message || "Something went wrong" };
    }
  }