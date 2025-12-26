/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { IEvent } from "@/types/event.interface";
import {
  createEventZodSchema,
  updateEventZodSchema,
} from "@/zod/eventzodschema";

export async function createEvent(_prevState: any, formData: FormData) {
  try {
    const payload: IEvent = {
      name: formData.get("name") as string,
      type: formData.get("type") as string,

      date: new Date(formData.get("date") as string),
      time: formData.get("time") as string,

      location: formData.get("location") as string,

      minParticipants: Number(formData.get("minParticipants")),
      maxParticipants: Number(formData.get("maxParticipants")),

      joiningFee: formData.get("joiningFee")
        ? Number(formData.get("joiningFee"))
        : undefined,

      description: formData.get("description") as string,
    };

    const validation = zodValidator(payload, createEventZodSchema);
    if (!validation.success) {
      return validation;
    }

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(validation.data));

    if (formData.get("file")) {
      newFormData.append("file", formData.get("file") as Blob);
    }

    const response = await serverFetch.post("/event/create", {
      body: newFormData,
    });

    const result=  await response.json();
    return result
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}


export async function getAllHostEvents(queryString?: string) {
    try {
      const response = await serverFetch.get(
        `/event/hostEvent${queryString ? `?${queryString}` : ""}`
      );
      const result=  await response.json();
      return result
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        message:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Something went wrong",
      };
    }
  }
  
  export async function updateEvent(
    id: string,
    _prevState: any,
    formData: FormData
  ) {
    try {
      const payload: Partial<IEvent> = {
        name: formData.get("name") as string,
        type: formData.get("type") as string,
  
        date: formData.get("date")
          ? new Date(formData.get("date") as string)
          : undefined,
  
        time: formData.get("time") as string,
        location: formData.get("location") as string,
  
        minParticipants: formData.get("minParticipants")
          ? Number(formData.get("minParticipants"))
          : undefined,
  
        maxParticipants: formData.get("maxParticipants")
          ? Number(formData.get("maxParticipants"))
          : undefined,
  
        joiningFee: formData.get("joiningFee")
          ? Number(formData.get("joiningFee"))
          : undefined,
  
        description: formData.get("description") as string,
      };
  
      const validation = zodValidator(payload, updateEventZodSchema);
      if (!validation.success) {
        return validation;
      }
  
      const response = await serverFetch.patch(`/event/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });
  
      const result=  await response.json();
    return result
    } catch (error: any) {
      console.log(error);
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
      const response = await serverFetch.get(`/event/${id}`);
      const result=  await response.json();
      return result
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        message:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Something went wrong",
      };
    }
  }
  
  export async function deleteEvent(id: string) {
    try {
      const response = await serverFetch.delete(`/event/${id}`);
      const result=  await response.json();
    return result
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        message:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Something went wrong",
      };
    }
  }
  