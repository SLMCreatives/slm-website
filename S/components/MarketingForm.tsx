"use client";

import React, { createRef, useState } from "react";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "/app/globals.css";
import { Button } from "Sulaiman/S/components/ui/button";
import { Label } from "Sulaiman/S/components/ui/label";
import { Input } from "Sulaiman/S/components/ui/input";

const RequiredTag = () => {
  return (
    <span className="text-red-500 text-sm font-semibold leading-5">*</span>
  );
};

const MarketingForm = () => {
  useEffect(() => emailjs.init("9c0ucshiw0AIsRd15"), []);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const serviceId = "service_fqriky5";
    const templateId = "template_tthfbab";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current?.value,
        recipient: emailRef.current?.value,
      });
      alert(
        "Your request has been submitted! I will get back to you as soon as possible."
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      nameRef.current!.value = "";
      emailRef.current!.value = "";
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border-none w-[400px]">
      <fieldset
        className="flex flex-col gap-4 p-6 border border-gray-300 rounded-lg bg-white dark:bg-black shadow-md"
        title="Enquiry Form"
      >
        <h1 className="mt-2 text-xl font-bold">Contact Form</h1>
        <p>
          Send me your details and I will get back to you as soon as possible.
        </p>
        <div className="grid grid-cols-1 gap-4 justify-center items-center">
          <Label className="sr-only" htmlFor="name">
            Name <RequiredTag />
          </Label>
          <Input
            placeholder="Name"
            className="w-full dark:text-slate-300 dark:bg-slate-800"
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            required
            autoComplete="name"
          />

          <Label className="sr-only" htmlFor="email">
            Email <RequiredTag />
          </Label>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            className="w-full dark:text-slate-300 dark:bg-slate-800"
            required
          />
        </div>
        <Button
          variant="default"
          className="w-full dark:hover:text-slate-300 dark:hover:bg-slate-800"
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </Button>
      </fieldset>
    </div>
  );
};

export default MarketingForm;
