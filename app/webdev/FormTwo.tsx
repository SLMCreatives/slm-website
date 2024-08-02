"use client";
import React, { useState } from "react";
import MarketingForm from "../_components/MarketingForm";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "Sulaiman/S/components/ui/button";

export function FormTwo() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-4 px-4">
        <Button
          variant="default"
          size="sm"
          className="bg-slate-200 dark:bg-slate-700 dark:text-white text-black font-bold text-sm px-4 rounded-full py-1 hover:shadow-md hover:shadow-slate-300"
          onClick={() => setFormOpen(true)}
        >
          Get Started
        </Button>
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
    </div>
  );
}
