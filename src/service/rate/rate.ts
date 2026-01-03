
const API_BASE = process.env.NEXT_PUBLIC_API_URL
export const rateHost = async (payload: { hostId: string; eventId: string; stars: number }) => {
    try {
      const res = await fetch(`${API_BASE}/rating/rate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
  
      return await res.json();
    } catch (error: any) {
      console.error(error);
      return { success: false, message: error.message || "Something went wrong" };
    }
  };
  
  export const getHostRatings = async () => {
    try {
      const res = await fetch(`${API_BASE}/rating/getRating`, {
        method: "GET",
        credentials: "include", // include cookies for auth
      });
      return await res.json();
    } catch (err: any) {
      console.error(err);
      return { success: false, message: err.message || "Something went wrong" };
    }
  };