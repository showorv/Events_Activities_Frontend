"use server"

import { serverFetch } from "@/lib/server-fetch";


// export async function getEvent(queryString?: string) {
//   try {
//     // const params = new URLSearchParams();

//     // if (query?.searchTerm) {
//     //   params.append("searchTerm", query.searchTerm);
//     // }

//     const response = await serverFetch.get(
//       `/event/userEvent${queryString ? `?${queryString}` : ""}`
//     );

    
//     return response.json();
//   } catch (error: any) {
//     console.error("Fetch error:", error);

//     return {
//       success: false,
//       message:
//         process.env.NODE_ENV === "development"
//           ? error.message
//           : "Something went wrong",
//       data: null,
//     };
//   }
// }
export async function getEvent(queryString?: string) {
  try {
    const response = await fetch(`${API_BASE}/event/userEvent${queryString ? `?${queryString}` : ""}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      
    });
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message || "Something went wrong" };
  }
}

export async function getTopEvent() {
  try {
    const response = await fetch(`${API_BASE}/event/userEvent`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      
    });
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message || "Something went wrong" };
  }
}

export async function getSingleEvent(id: string) {
  try {
    const response = await fetch(`${API_BASE}/event/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      
    });
    return await response.json();
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
// export async function joinEvent(id: string) {
//   try {
//     const response = await serverFetch.post(
//       `/participation/join/${id}`
//     );
//     const result = await response.json();
//     return result
//   } catch (error: any) {
//     console.error(error);
//     return {
//       success: false,
//       message:
//         process.env.NODE_ENV === "development"
//           ? error.message
//           : "Something went wrong",
//     };
//   }
// }

const API_BASE = process.env.NEXT_PUBLIC_BASE_API_URL

export async function joinEvent(id: string) {
  try {
    const response = await fetch(`${API_BASE}/participation/join/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
    });
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message || "Something went wrong" };
  }
}

export async function leaveEvent(id: string) {
  try {
    const response = await fetch(`${API_BASE}/participation/leave/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
    });
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message || "Something went wrong" };
  }
}
export async function initialPayment(id: string) {
  try {
    const response = await fetch(`${API_BASE}/payment/init-payment/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
    });
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message || "Something went wrong" };
  }
}

// export async function initialPayment(id: string) {
//   try {
//     const response = await serverFetch.post(
//       `/payment/init-payment/${id}`
//     );
//     const result = await response.json();
//     return result
//   } catch (error: any) {
//     console.error(error);
//     return {
//       success: false,
//       message:
//         process.env.NODE_ENV === "development"
//           ? error.message
//           : "Something went wrong",
//     };
//   }
// }
// export async function getSingleEvent(id: string) {
//   try {
//     const response = await serverFetch.get(
//       `/event/${id}`
//     );
//     return await response.json();
//   } catch (error: any) {
//     console.error(error);
//     return {
//       success: false,
//       message:
//         process.env.NODE_ENV === "development"
//           ? error.message
//           : "Something went wrong",
//     };
//   }
// }

export async function getClientSingleEvent(id: string) {
  try {
    const response = await fetch(`${API_BASE}/event/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
    });
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message || "Something went wrong" };
  }
}
export async function getPendingPaymentEvents() {
  try {
    const response = await serverFetch.get(
      `/event/pendingPaymentEvent`
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
export async function getAllJoinedEvents() {
  try {
    const response = await serverFetch.get(
      `/event/userJoinedEvent`
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

