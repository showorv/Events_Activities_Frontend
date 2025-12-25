/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"


import { UserInfo } from "@/types/user.interface";
import { serverFetch } from "@/lib/server-fetch";

export const getUserInfo = async (): Promise<UserInfo | null> => {

    try {
  

        const res = await serverFetch.get("/user/me")

        const result = await res.json()

   
        return result
    } catch (error: any) {
        console.log(error);
        return null;
    }

}