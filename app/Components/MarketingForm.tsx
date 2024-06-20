"use client";

import React, { useState } from "react";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Services = [
  { type: "Content Marketing" },
  { type: "Paid Ads Marketing" },
  { type: "Website Development" },
  { type: "Lead Generation" },
];

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
        options: optionsRef.current?.value,
        goal: goalRef.current?.value,
        date: dateRef.current?.value,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      nameRef.current!.value = "";
      emailRef.current!.value = "";
      optionsRef.current!.value = "";
      goalRef.current!.value = "";
      dateRef.current!.value = "";
    }
  };

  return (
    <div className="flex w-[100%] h-[100%]">
      <fieldset className="flex flex-wrap gap-3">
        <h1 className="my-2 font-semibold">Your Name</h1>

        <input
          type="text"
          name="name"
          id="name"
          className="block w-full my-2 py-2 px-2 rounded-md border-gray-300 shadow-sm active:border-emerald-500 active:ring-emerald-500 text-sm"
          placeholder="Your Name"
          ref={nameRef}
          onChange={(e) => console.log(e.target.value)}
        ></input>
        <h1 className="my-2 font-semibold "> Your Email</h1>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full my-2 py-2 px-2 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
          placeholder="Your Email"
          ref={emailRef}
          onChange={(e) => console.log(e.target.value)}
        ></input>
        <legend className="sr-only">Form</legend>
        <h1 className="my-2 font-semibold ">
          What type of marketing solution are you looking for?
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {Services.map((item) => (
            <label
              htmlFor={item.type}
              className="flex cursor-pointer rounded-md border border-gray-100 bg-white px-3 py-4 text-gray-900 hover:border-gray-200 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-500 has-[:checked]:text-white"
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
              <p className="text-sm font-medium">{item.type}</p>
            </label>
          ))}
        </div>

        <div>
          <h1 className="my-2 font-semibold">
            What is the most important goal you wish to achieve?
          </h1>
          <div>
            <label
              htmlFor="Goal"
              className="flex mt-2 w-full cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
            >
              <input
                type="text"
                name="MarketingOptions"
                id="Goal"
                ref={goalRef}
                placeholder="My goal is to..."
                className="w-full text-sm font-medium"
                onChange={(e) => console.log(e.target.value)}
              />
            </label>
          </div>
          <div>
            <h1 className="my-2 font-semibold">
              When do you wish to launch your marketing solution?
            </h1>
            <div>
              <label
                htmlFor="Timeline"
                className="flex mt-2 w-full cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
              >
                <input
                  type="date"
                  name="Timeline"
                  id="Timeline"
                  ref={dateRef}
                  className="w-full text-sm font-medium"
                  onChange={(e) => console.log(e.target.value)}
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
            id="submit-button"
            onClick={handleSubmit}
            className="w-full mt-4 rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
          >
            Submit
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default MarketingForm;
