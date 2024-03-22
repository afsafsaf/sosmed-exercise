"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useFormik } from "formik";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { appConfig } from "@/utils/config";
import { waitForDebugger } from "inspector";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { RegisterValidationSchema } from "./schemas/RegisterValidationSchema";
import { Input } from "@/components/ui/input";
import FormInput from "@/components/forms/Forminput";

const Register: React.FC = () => {
  const router = useRouter();
  const { baseUrl } = appConfig;

  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: RegisterValidationSchema,
      onSubmit: async (values) => {
        const { data } = await axios.get(
          baseUrl + `/users?email=${values.email}`,
        );

        if (data.length) {
          return toast.error("Email already exist");
        }

        await axios.post(baseUrl + "/users", {
          name: values.name,
          email: values.email,
          password: values.password,
          isVerify: false,
        });

        toast.success("Register success");
        router.push("/login");
      },
    });

  return (
    <main className="container mx-auto px-4">
      <div className="flex justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Registration Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* NAME */}
                <FormInput
                  name="name"
                  error={errors.name}
                  isError={!!touched.name && !!errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Name"
                  type="text"
                  value={values.name}
                />

                {/* EMAIL */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    placeholder="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  {/* PASSWORD */}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    placeholder="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
              </div>
              <Button className="mt-6 w-full">Register</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Register;
