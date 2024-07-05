"use client";

import Image from "next/image";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import "/app/globals.css";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "Social Media", href: "/content" },
  { name: "Paid Ads", href: "/paid" },
  { name: "Website Development", href: "/website" },
  { name: "Blog", href: "/archive" },
];

const variants = {
  hidden: {
    y: 0,
    opacity: 1,
    transition: { when: "afterChildren" },
  },
  visible: {
    y: -20,
    opacity: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.5 },
  },
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileOpenButton = () => {
    setMobileMenuOpen(true);
  };
  const mobileCloseButton = () => {
    setMobileMenuOpen(false);
  };
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <motion.a
            initial={{ opacity: 0, x: -50, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 200,
            }}
            href="/"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">SLM Creatives</span>
            <Image
              width={100}
              height={100}
              className=""
              src="/logo.png"
              alt="SLM Creatives"
            />
          </motion.a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => mobileOpenButton()}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/form"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Get Quotation <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        transition
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-[70%] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SLM Creatives</span>
              <img className="h-8 w-auto" src="/logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => mobileCloseButton()}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <motion.a
                    initial="visible"
                    animate="hidden"
                    variants={variants}
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/form"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Get Quotation
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
