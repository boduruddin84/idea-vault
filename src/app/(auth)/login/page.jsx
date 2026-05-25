"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function LogInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error("Email or Password went wrong");
    }
    else {
      toast.success("Login Successful");
    }
  };

  const handleGoogleLogIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
    toast.success("Login Successful");
  };

  return (
    <Card className="border w-80 md:w-96 mx-auto py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Login</h1>

      <Form className="flex w-70 md:w-80 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[a-z]/.test(value)) {
              return "Password must contain at least one lowercase letter";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 lowercase
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button className={"w-full"} type="submit">
            Login
          </Button>
        </div>
      </Form>
      <div className="flex justify-between">
        <Link href={"/register"}>
        <p className="text-blue-500 font-bold">Register</p>
        </Link>
        <p className="text-blue-500 font-bold">Forget Password</p>
      </div>
      <p className="text-center text-2xl font-semibold">Or</p>
      <Button
        onClick={handleGoogleLogIn}
        variant="outline"
        className={"w-full font-semibold"}
      >
        <GrGoogle /> Login With Google
      </Button>
    </Card>
  );
}