"use client";

import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SwitchCamera } from "lucide-react";

export default function ProfileForm() {
  return (
    <form action="">
      <div>
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>
            This appears on invoices and emails.
          </FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
              <FieldDescription>
                This appears on invoices and emails.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" autoComplete="off" aria-invalid />
              <FieldError>Choose another username.</FieldError>
            </Field>
            <Field orientation="horizontal">
              <SwitchCamera id="newsletter" />
              <FieldLabel htmlFor="newsletter">
                Subscribe to the newsletter
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </form>
  );
}
