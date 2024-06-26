"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import "/app/globals.css";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const HeaderBlog = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SLM Creatives</span>
            <Image
              width={100}
              height={100}
              className=""
              src="/logo.png"
              alt="SLM Creatives"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Breadcrumbs
            aria-label="breadcrumb"
            className="text-md mt-8 font-semibold my-2 flex leading-6 text-gray-900"
          >
            <Link
              href="/"
              className="link:text-emerald-600 link:visited:text-emerald-300"
            >
              SLM Creatives
            </Link>
            <Link
              href="/archive"
              className="link:text-emerald-600 link:visited:text-emerald-300"
            >
              Blog
            </Link>
            <Typography color="text.primary">...</Typography>
          </Breadcrumbs>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/form"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact Me <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Breadcrumbs
                  aria-label="breadcrumb"
                  className="text-md mt-8 font-semibold my-2 flex leading-6 text-gray-900"
                >
                  <Link
                    href="/"
                    className="link:text-emerald-600 link:visited:text-emerald-300"
                  >
                    SLM Creatives
                  </Link>
                  <Link
                    href="/archive"
                    className="link:text-emerald-600 link:visited:text-emerald-300"
                  >
                    Blog
                  </Link>
                  <Typography color="text.primary">...</Typography>
                </Breadcrumbs>
              </div>
              <div className="py-6">
                <a
                  href="/form"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default HeaderBlog;
