"use client";

import React, { useState } from "react";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "/app/globals.css";

const Services = [
  { type: "Social Media Marketing" },
  { type: "Paid Ads Marketing" },
  { type: "Website Design" },
  { type: "Graphic Design" },
  { type: "Video Editing" },
  { type: "Blog Writing" },
  { type: "Others" },
];

const RequiredTag = () => {
  return (
    <span className="text-red-500 text-sm font-semibold leading-5">*</span>
  );
};

const MarketingForm = () => {
  const [options, setOptions] = useState("");
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setOptions(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => emailjs.init("9c0ucshiw0AIsRd15"), []);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLInputElement>(null);
  const goalRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const contactRef = useRef<HTMLSelectElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const budgetRef = useRef<HTMLInputElement>(null);
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
        message: messageRef.current?.value,
        options: optionsRef.current?.value,
        goal: goalRef.current?.value,
        date: dateRef.current?.value,
        contact: contactRef.current?.value,
        phone: phoneRef.current?.value,
        budget: budgetRef.current?.value,
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
      optionsRef.current!.value = "";
      goalRef.current!.value = "";
      dateRef.current!.value = "";
      contactRef.current!.value = "";
      messageRef.current!.value = "";
      phoneRef.current!.value = "";
      budgetRef.current!.value = "";
    }
  };

  return (
    <div className="flex m-4 p-4 justify-center align-center rounded-lg border-none">
      <fieldset
        className="flex flex-col gap-6 p-10 lg:w-2/3 border border-gray-300 rounded-lg bg-white shadow-md"
        title="Enquiry Form"
      >
        <h1 className="my-2 text-2xl font-semibold">Enquiry Form</h1>
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
            className="flex col-span-2 w-full p-2 rounded-md  bg-gray-200 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Mohd Ahmad Rahman"
              required
              className="w-full p-2 rounded-md  bg-gray-200 border-none text-sm font-semibold"
              ref={nameRef}
              onChange={(e) => console.log(e.target.value)}
            ></input>
          </label>

          <h1 className=" font-semibold ">
            Email Address <RequiredTag />
          </h1>
          <label
            htmlFor="email"
            className="flex col-span-2 p-2 rounded-md  bg-gray-200 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="mohdahmd@example.com"
              ref={emailRef}
              required
              className="w-full p-2 rounded-md  bg-gray-200 border-none text-sm font-semibold"
              onChange={(e) => console.log(e.target.value)}
            ></input>
          </label>
          <h1 className="font-semibold ">
            Phone Number <RequiredTag />
          </h1>
          <label
            htmlFor="phone"
            className="flex col-span-2 p-2 rounded-md  bg-gray-200 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
          >
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="012-345-6789"
              ref={phoneRef}
              required
              className="w-full p-2 rounded-md  bg-gray-200 border-none text-sm font-semibold"
              onChange={(e) => console.log(e.target.value)}
            ></input>
          </label>
        </div>
        <hr></hr>

        <legend className="sr-only">Services</legend>
        <h1 className="mt-2 text-xl font-bold">Service Requested</h1>

        <p className="-my-2 mb-2 text-sm">
          Give me a brief summary of the problem that you are facing. Provide as
          much detail as possible and ask any questions you may have.
        </p>
        <label
          htmlFor="Message"
          className="block w-full p-2 rounded-md  bg-gray-200 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
        >
          <textarea
            name="Message"
            id="Message"
            placeholder="I have a _________ business and I am launching a new product but I don't have creative materials or a website yet. I am looking for a freelance digital marketer to ...."
            required
            className="w-full p-2 h-min-[10rem] rounded-md  bg-gray-200 border-none text-sm font-semibold"
            ref={messageRef}
            onChange={(e) => console.log(e.target.value)}
          ></textarea>
        </label>

        <h1 className="mt-2 font-semibold ">
          Pick the most appopriate service that are you looking for to solve
          this issue?
        </h1>
        <div className="mt-2 grid grid-cols-2 gap-4 m-0 p-0">
          {Services.map((item) => (
            <label
              htmlFor={item.type}
              className="block w-full p-4 rounded-md  bg-gray-200 shadow-sm  text-sm hover:border-gray-200 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-500 has-[:checked]:text-white cursor-pointer text-black/50"
            >
              <input
                type="radio"
                name="MarketingOptions"
                value={item.type}
                id={item.type}
                className="sr-only"
                ref={optionsRef}
                onChange={handleChange}
              />
              <p className="w-full p-2 h-min-[10rem] rounded-md border-none text-sm font-semibold">
                {item.type}
              </p>
            </label>
          ))}
        </div>
        <h1 className="mt-2 font-semibold">
          What is the most important goal you wish to achieve?
        </h1>
        <label
          htmlFor="Goal"
          className="block w-full p-2 rounded-md  bg-gray-200 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
        >
          <input
            type="text"
            name="MarketingOptions"
            id="Goal"
            ref={goalRef}
            placeholder="My goal is to..."
            className="w-full p-2 h-min-[10rem] rounded-md  bg-gray-200 border-none text-sm font-semibold"
            onChange={(e) => console.log(e.target.value)}
          />
        </label>

        <h1 className="mt-2 font-semibold">
          When would be the best time for me to get back to you?
        </h1>
        <label
          htmlFor="Timeline"
          className="block w-full p-2 rounded-md  bg-gray-200 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm text-black/50 has-[:valid]]:text-black"
        >
          <input
            type="date"
            id="Timeline"
            ref={dateRef}
            className="w-full p-2 h-min-[10rem] rounded-md  bg-gray-200 border-none text-sm font-semibold"
            onChange={(e) => console.log(e.target.value)}
          />
        </label>

        <h1 className="mt-2 font-semibold">
          How would you like me to contact you?
        </h1>
        <label
          htmlFor="contactOptions"
          className="block w-full p-2 rounded-md  bg-gray-200 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
        >
          <select
            name="contactOptions"
            id="contactOptions"
            className="w-full p-2 h-min-[10rem] rounded-md  bg-gray-200 border-none text-sm font-semibold"
            ref={contactRef}
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Chat" defaultChecked>
              WhatsApp / Chat
            </option>
          </select>
        </label>
        <h1 className="mt-2 font-semibold">
          How much are you willing to invest to achieve this goal?
        </h1>
        <label
          htmlFor="Budget"
          className="block w-full p-2 rounded-md  bg-gray-200 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
        >
          <input
            type="range"
            step="250"
            name="Budget"
            id="Budget"
            min="0"
            max="1000"
            aria-label="Budget"
            defaultValue="500"
            ref={budgetRef}
            className="w-full p-2 h-min-[10rem] rounded-md  bg-gray-200 border-none text-sm font-semibold"
            onChange={(e) => console.log(e.target.value)}
          />
          <div className="flex justify-between text-sm">
            <span className="ml-2">RM100</span>
            <span className="ml-2">RM250</span>
            <span className="ml-2">RM500</span>
            <span className="ml-2">RM750</span>
            <span className="ml-2">RM1000+</span>
          </div>
        </label>

        <button
          type="submit"
          id="submit-button"
          onClick={handleSubmit}
          className="w-full mt-4 rounded-lg bg-emerald-500 p-4 font-semibold text-white hover:bg-emerald-700"
        >
          Submit
        </button>
      </fieldset>
    </div>
  );
};

export default MarketingForm;
