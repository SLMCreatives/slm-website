"use client";
import React, { useState } from "react";
import MarketingForm from "Sulaiman/S/components/MarketingForm";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Button } from "Sulaiman/S/components/ui/button";

export function FormTwo() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-4 px-4">
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent"
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
        <DialogBackdrop className="fixed inset-0 bg-black/30 px-6" />
        <div className="fixed inset-0 flex  mx-auto items-center justify-center p-4">
          <DialogPanel className="max-w-sm space-y-4 border bg-white p-12 mx-4">
            <MarketingForm />
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
