/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import z from "zod";
import { loginUser } from "./loginUser";
import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";

const registerPatientValidationZodSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    location: z.string().optional(),
    email: z.email({ message: "Valid email is required" }),
    password: z.string().min(6, {
        error: "Password is required and must be at least 6 characters long",
    }).max(100, {
        error: "Password must be at most 100 characters long",
    }),
    confirmPassword: z.string().min(6, {
        error: "Confirm Password is required and must be at least 6 characters long",
    }),
}).refine((data: any) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
});


export const register = async (_currentState: any, formData: any): Promise<any> => {
    try {
        console.log(formData.get("address"));
        const payload = {
            name: formData.get('name'),
            location: formData.get('location'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        }

        // const validatedFields = registerValidationZodSchema.safeParse(validationData);

        // console.log(validatedFields, "val");

        // if (!validatedFields.success) {
        //     return {
        //         success: false,
        //         errors: validatedFields.error.issues.map(issue => {
        //             return {
        //                 field: issue.path[0],
        //                 message: issue.message,
        //             }
        //         }
        //         )
        //     }
        // }

        // const registerData = {
        //     password: formData.get('password'),
        //     paitent: {
        //         name: formData.get('name'),
        //         address: formData.get('address'),
        //         email: formData.get('email'),
        //     }
        // }
        if (zodValidator(payload, registerPatientValidationZodSchema).success === false) {
            return zodValidator(payload, registerPatientValidationZodSchema);
        }

        const validatedPayload: any = zodValidator(payload, registerPatientValidationZodSchema).data;
        const registerData = {
           
           
                name: validatedPayload.name,
                email: validatedPayload.email,
                password: validatedPayload.password,
                location: validatedPayload.location,
                
            
        }

        const newFormData = new FormData();

        newFormData.append("data", JSON.stringify(registerData));

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob)
        }
        // const res = await fetch("http://localhost:4000/api/v1/user/create-paitent", {
        //     method: "POST",
        //     body: newFormData,
        // })
        const res = await serverFetch.post("/user/create", {
         
            body: newFormData,
        })

        const result = await res.json();

        console.log(res, "res");

        if (result.success) {
            await loginUser(_currentState, formData);
        }

        return result;



    } catch (error: any) {
        // Re-throw NEXT_REDIRECT errors so Next.js can handle them
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : "Registration Failed. Please try again."}` };
    }
}