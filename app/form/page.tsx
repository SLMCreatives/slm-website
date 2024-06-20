"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "Sulaiman/app/Components/Header";
import Footer from "Sulaiman/app/Components/Footer";
import FStepOne from "Sulaiman/app/Components/FormField";
import FStepTwo from "Sulaiman/app/Components/FStepTwo";
import { Field, Button } from "@headlessui/react";
import MarketingForm from "../Components/MarketingForm";

export default function Form() {
  return (
    <main>
      <Header />

      <div className="flex justify-center items-center bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-56">
            <div className="text-center">
              <h1 className="py-8 -my-8 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 sm:text-6xl">
                Let's get started
              </h1>
              <p className="mx-auto mb-0 mt-6 max-w-md text-center leading-relaxed text-gray-500">
                Fill in the form below and we will get back to you as soon as
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white lg:-mt-20">
        <div
          className="relative h-min-[30rem] w-[30rem] lg:w-[70rem]  justify-center items-center"
          id="form-container"
        >
          <MarketingForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
