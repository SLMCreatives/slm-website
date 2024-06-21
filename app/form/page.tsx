"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "Sulaiman/app/Components/Header";
import Footer from "Sulaiman/app/Components/Footer";
import FStepOne from "Sulaiman/app/Components/FormField";
import FStepTwo from "Sulaiman/app/Components/FStepTwo";
import { Field, Button } from "@headlessui/react";
import MarketingForm from "../Components/MarketingForm";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Form() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <main>
      <Header />

      <div className="flex justify-center items-center bg-white">
        <div className="absolute isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="absolute left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-teal-800 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-12 mt-10 sm:py-32 lg:py-56">
            <div className="text-center">
              <h1 className="py-8 -my-8 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 sm:text-6xl">
                Let's get started
              </h1>
              <p className="mx-auto mb-0 mt-6 max-w-md text-center leading-relaxed text-gray-500">
                Fill in the form below and we will get back to you as soon as
                possible.
              </p>
              <button
                type="button"
                className="bg-emerald-600 hover:bg-emerald-500 justify-center items-center text-white font-bold py-2 px-8 rounded-full mt-5"
                onClick={() => setFormOpen(true)}
              >
                Open Form
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={formOpen}
        onClose={() => setFormOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen h-screen items-center justify-center">
          <DialogPanel className=" m-0 w-full h-full overflow-scroll border-none bg-black/40">
            <MarketingForm />
            <div className="absolute top-[4rem] right-[6rem] lg:right-[23rem] ">
              <button
                onClick={() => setFormOpen(false)}
                className="bg-gray-300 hover:bg-emerald-500 justify-center items-center text-white font-bold p-2 text-sm rounded-full mt-5"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <Footer />
    </main>
  );
}
