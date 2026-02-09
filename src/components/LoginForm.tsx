"use client";

import { useActionState, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";
import { loginUser } from "@/services/auth/login";
import { Loader } from "lucide-react";
import { toast } from "sonner";

const DEMO_ACCOUNTS = {
  user: {
    email: "ratul@gmail.com",
    password: "Ratul@16",
  },
  host: {
    email: "mehedy@gmail.com",
    password: "Mehedy@16",
  },
  admin: {
    email: "touhidur15-13673@diu.edu.bd",
    password: "Touhid@16",
  },
};

export default function LoginForm({ redirect }: { redirect?: string }) {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getErrorFieldMessage = (fieldName: string) => {
    if (state && state?.errors) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error = state.errors.find((err: any) => err.field === fieldName);
      return error?.message;
    }
  };

  const getDemoLoginCredentials = (role: keyof typeof DEMO_ACCOUNTS) => {
    setEmail(DEMO_ACCOUNTS[role].email);
    setPassword(DEMO_ACCOUNTS[role].password);
  };

  useEffect(() => {
    if (state && state?.success === false) {
      toast.error(state?.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-5">
      <FieldSet>
        {redirect && <input type="hidden" name="redirect" value={redirect} />}
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              value={email}
              type="email"
              placeholder="example@gmail.com"
              className="border-2 focus-visible:border-[#DC143C]"
            />
            {getErrorFieldMessage("email") && (
              <FieldError>{getErrorFieldMessage("email")}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              value={password}
              type="password"
              placeholder="********"
              className=" border-2 focus-visible:border-[#DC143C]"
            />

            {getErrorFieldMessage("password") && (
              <FieldError>{getErrorFieldMessage("password")}</FieldError>
            )}
          </Field>

          <Button
            disabled={isPending}
            type="submit"
            className="w-full bg-[#DC143C] text-white font-bold cursor-pointer outline-2"
            variant="outline"
          >
            {isPending ? <Loader className="animate-spin" /> : "Login"}
          </Button>
        </FieldGroup>
      </FieldSet>

      <div className="space-y-3 border p-2 rounded-lg">
        <div className="space-y-2">
          <h1 className="text-sm text-muted-foreground">Demo Login</h1>
          <p className="text-muted-foreground text-xs">Please use it for checking purpose only.  Don&apos;t Misuse the credentials</p>
        </div>
        <div className="flex flex-col gap-3">
          <Button
            className="w-full bg-[#DC143C] text-white font-bold cursor-pointer outline-2"
            variant="outline"
            type="button"
            onClick={() => getDemoLoginCredentials("admin")}
          >
            Admin
          </Button>
          <Button
            className="w-full bg-[#DC143C] text-white font-bold cursor-pointer outline-2"
            variant="outline"
            type="button"
            onClick={() => getDemoLoginCredentials("host")}
          >
            Host
          </Button>
          <Button
            className="w-full bg-[#DC143C] text-white font-bold cursor-pointer outline-2"
            variant="outline"
            type="button"
            onClick={() => getDemoLoginCredentials("user")}
          >
            User
          </Button>
        </div>
      </div>
    </form>
  );
}
