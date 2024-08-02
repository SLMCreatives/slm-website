"use client";

import React, { createRef, useState } from "react";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "/app/globals.css";

const RequiredTag = () => {
  return (
    <span className="text-red-500 text-sm font-semibold leading-5">*</span>
  );
};

const MarketingForm = () => {
  useEffect(() => emailjs.init("9c0ucshiw0AIsRd15"), []);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

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
        phone: phoneRef.current?.value,
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
      phoneRef.current!.value = "";
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border-none w-[450px] ">
      <fieldset
        className="flex flex-col gap-4 p-6 border border-gray-300 rounded-lg bg-white dark:bg-black shadow-md"
        title="Enquiry Form"
      >
        <h1 className="my-2 text-xl font-black">Enquiry Form</h1>
        <p className="-my-2 mb-2 text-balance text-sm">
          Fill up the details below to get a free quote that will solve your
          marketing problem. Expect a call or messsage on WhatsApp if I need
          more information regarding your request.
        </p>
        <hr></hr>
        <h1 className="mt-2 text-xl font-bold">Basic Information</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 justify-center items-center">
          <h1 className=" font-semibold">
            Your Name <RequiredTag />
          </h1>
          <label
            htmlFor="name"
            className="flex col-span-2 w-full p-2 rounded-md  bg-gray-200 dark:bg-slate-700 shadow-sm  text-sm"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Mohd Ahmad Rahman"
              required
              className="w-full p-2 rounded-md border-none bg-transparent text-sm font-semibold"
              ref={nameRef}
              onChange={(e) => console.log(e.target.value)}
            ></input>
          </label>

          <h1 className=" font-semibold ">
            Email Address <RequiredTag />
          </h1>
          <label
            htmlFor="email"
            className="flex col-span-2 p-2 rounded-md  bg-gray-200 dark:bg-slate-700 shadow-sm  text-sm"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="mohdahmd@example.com"
              ref={emailRef}
              required
              className="w-full p-2 rounded-md  bg-transparent border-none text-sm font-semibold"
              onChange={(e) => console.log(e.target.value)}
            ></input>
          </label>
          <h1 className="font-semibold ">
            Phone Number <RequiredTag />
          </h1>
          <label
            htmlFor="phone"
            className="flex col-span-2 p-2 rounded-md  bg-gray-200 dark:bg-slate-700 shadow-sm text-sm"
          >
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="012-345-6789"
              ref={phoneRef}
              required
              className="w-full p-2 rounded-md  bg-transparent border-none text-sm font-semibold"
              onChange={(e) => console.log(e.target.value)}
            ></input>
          </label>
        </div>
        <button
          type="submit"
          id="submit-button"
          onClick={handleSubmit}
          className="w-full mt-4 rounded-lg bg-slate-400 p-4 font-semibold text-white hover:bg-slate-700"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </fieldset>
    </div>
  );
};

export default MarketingForm;
