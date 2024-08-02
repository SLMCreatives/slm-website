"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FormTwo } from "../webdev/FormTwo";
import "/app/globals.css";

export default function Contact() {
  return (
    <div className=" flex flex-col gap-8 my-8 px-4 h-[70vh]">
      <section className="flex flex-col text-nowrap gap-4 p-2">
        <h1 className="font-bold text-xl">Contact Info:</h1>
        <div className="grid grid-cols-2 gap-4 px-4">
          <p>WhatsApp</p>
          <Link
            href="https://wa.me/+601121292383"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <p>WhatsApp Chat Link</p>
          </Link>
          <p>Work Email</p>
          <Link
            href="mailto:sulaiman@slmcreatives"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <p>sulaiman@slmcreatives.com</p>
          </Link>
          <p>Personal Email</p>
          <Link
            href="mailto:namialus.shafiq@gmail"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <p>namialus.shafiq@gmail.com</p>
          </Link>
          <p>X/Twitter</p>
          <Link
            href="https://x.com/SulaimanShafiq"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <p>@SulaimanShafiq</p>
          </Link>
          <p>Facebook & Instagram</p>
          <Link
            href="https://www.facebook.com/slmcreatives.my/"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <p>@slmcreatives.my</p>
          </Link>
        </div>
      </section>
      <section className="flex flex-col text-nowrap gap-4 p-2">
        <h1 className="font-bold text-xl">Want me to contact you?</h1>
        <div className="grid grid-cols-2 gap-4 px-4">
          <p className="">Please fill up this form:</p>
          <FormTwo />
        </div>
      </section>
    </div>
  );
}
