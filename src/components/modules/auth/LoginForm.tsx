/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, useEffect, useRef } from "react";



import { loginUser } from "@/service/auth/loginUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { toast } from "sonner";
import InputFieldError from "../shared/InputFieldError";


const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // const getFieldError = (fieldName: string) => {
  //   if (state && state.errors) {
  //     const error = state.errors.find((err: any) => err.field === fieldName);
  //     return error.message;
  //   } else {
  //     return null;
  //   }
  // };
  
//   console.log(state);
//   useEffect(() => {
//     if (state?.success) {
//       toast.success(state.message);
      
//     } else if (state && !state.success) {
//       toast.error(state.message);
//     }
//   }, [state]);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);
  
  const handleDemoLogin = (email: string, password: string) => {
    if (emailRef.current && passwordRef.current && formRef.current) {
      emailRef.current.value = email;
      passwordRef.current.value = password;
      formRef.current.requestSubmit(); 
    }
  };
  return (
    <form action={formAction} ref={formRef}>
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              ref={emailRef}
              name="email"
              type="email"
              placeholder="m@example.com"
              //   required
            />

            {/* {getFieldError("email") && (
              <FieldDescription className="text-red-600">
                {getFieldError("email")}
              </FieldDescription>
            )} */}
            <InputFieldError field="email" state={state}/>
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              ref={passwordRef}
              name="password"
              type="password"
              placeholder="Enter your password"
              //   required
            />
            {/* {getFieldError("password") && (
              <FieldDescription className="text-red-600">
                {getFieldError("password")}
              </FieldDescription>
            )} */}
             <InputFieldError field="password" state={state}/>
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>

            <FieldDescription className="px-6 text-center">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </FieldDescription>
            {/* <FieldDescription className="px-6 text-center">
              <a
                href="/forget-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </FieldDescription> */}
          </Field>
        </FieldGroup>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => handleDemoLogin("yousufshowrov101@gmail.com", "yousuf12")}
          >
            Demo Admin
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => handleDemoLogin("showrov124@gmail.com", "hello12")}
          >
            Demo Host
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => handleDemoLogin("showrov121@gmail.com", "hello123")}
          >
            Demo User
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;