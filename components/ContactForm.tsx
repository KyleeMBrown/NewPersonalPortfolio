
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import HCaptcha from "@hcaptcha/react-hcaptcha";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  "h-captcha-response": string;
};

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      "h-captcha-response": "",
    },
  });

  const onHCaptchaChange = (token: string) => {
    setValue("h-captcha-response", token, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        }),
      });

      const responseData = await response.json();

      if (!response.ok || !responseData.success) {
        throw new Error(
          responseData.message || "Unable to send your message."
        );
      }

      setResult("Message sent successfully!");
      reset();
    } catch (error) {
      setResult(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            {...register("message", {
              required: "Message is required",
            })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </Field>

        <input
          type="hidden"
          {...register("h-captcha-response", {
            required: "Please complete the captcha.",
          })}
        />

        <center><HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? ""}
          reCaptchaCompat={false}
          onVerify={onHCaptchaChange}
          onExpire={() =>
            setValue("h-captcha-response", "", {
              shouldValidate: true,
            })
          }
        /></center>

        {errors["h-captcha-response"] && (
          <center><p role="alert">Please complete the captcha.</p></center>
        )}

        <Button
          className="rounded! text-white!"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </Button>

        <center><p role="status" aria-live="polite">
          {result}
        </p>
        </center>
      </FieldGroup>
    </form>
  );
}
