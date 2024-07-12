"use client";

import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { signIn } from "../../auth";

const ModalSignIn = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const mobileOpenButton = () => {
    setMobileMenuOpen(true);
  };
  const mobileCloseButton = () => {
    setMobileMenuOpen(false);
  };
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="fixed inset-0 bg-emerald-700 z-50"
    >
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-[70%] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl">
        <div className="flex flex-col gap-4 justify-center w-full h-[100vh] items-left">
          <p className="text-3xl">Sign In With Google</p>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default ModalSignIn;
