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
// export async function changePassword() {
//     try {
//       const response = await fetch(`${API_BASE}/user/change-password`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
        
//         credentials: "include", 
//       });
//       return await response.json();
//     } catch (error: any) {
//       console.error(error);
//       return { success: false, message: error.message || "Something went wrong" };
//     }
//   }



export async function blockUser(userId: string) {
  try {
    const res = await fetch(`${API_BASE}/user/block/${userId}`, {
      method: "PATCH",
      credentials: "include",
    });

    return await res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to block user",
    };
  }
}

export async function unblockUser(userId: string) {
  try {
    const res = await fetch(`${API_BASE}/user/unblock/${userId}`, {
      method: "PATCH",
      credentials: "include",
    });

    return await res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to unblock user",
    };
  }
}

/**
 * Helper – auto decide block / unblock
 */
export async function toggleBlockUser(userId: string, isBlocked: boolean) {
  return isBlocked ? unblockUser(userId) : blockUser(userId);
}



export async function getAllUsers(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/user${queryString ? `?${queryString}` : ""}`
    );
    const result=  await response.json();
    return result
  } catch (error: any) {
    console.error("getAllHostEvents error →", {
      message: error?.message,
      stack: error?.stack,
      cause: error?.cause,
    });
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

export const getAllHostRequests = async () => {
  try {
    const res = await fetch(`${API_BASE}/user/request-host`, {
      method: "GET",
      credentials: "include",
    });
    return await res.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message || "Something went wrong", data: [] };
  }
};

export const approveHostRequest = async (userId: string) => {
  try {
    const res = await fetch(`${API_BASE}/user/approve/${userId}`, {
      method: "PATCH",
      credentials: "include",
    });
    return await res.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message || "Something went wrong" };
  }
};