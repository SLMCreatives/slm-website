"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "Sulaiman/S/components/ui/popover";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "Sulaiman/S/components/ui/avatar";
import { EmailIcon, FacebookIcon, WhatsappIcon, XIcon } from "react-share";
import { Button } from "Sulaiman/S/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import "../globals.css";

const navigation = [
  { name: "SLM", href: "/" },
  { name: "Web Dev", href: "/webdev" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function NewHeader() {
  const [currentNav, setCurrentNav] = useState("");
  return (
    <div className="bg-white dark:bg-black pt-1">
      <section className=" mt-10 z-10 py-2 px-8 mx-auto">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row flex-nowrap gap-1 items-center">
            {navigation.map((item) => (
              <Link href={item.href}>
                <Button
                  variant={currentNav === item.name ? "outline" : "default"}
                  className=" hover:text-cyan-400 bg-transparent px-2 py-1"
                  key={item.name}
                  onClick={() => setCurrentNav(item.name)}
                >
                  {currentNav === item.name ? (
                    <p className=" text-cyan-400">{item.name}</p>
                  ) : (
                    item.name
                  )}
                </Button>
              </Link>
            ))}
          </div>
          <div className="flex flex-row items-center gap-6">
            <ThemeToggle />
            <Popover>
              <PopoverTrigger>
                <Avatar className="w-10 h-10 cursor-pointer hover:ring-1 hover:ring-slate-400">
                  <AvatarImage src="/sulaiman.jpg"></AvatarImage>
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent
                className="pl-3 pr-0 py-1 w-fit rounded-xl drop-shadow-xl shadow-cyan-400/50 dark:bg-black"
                align="start"
                alignOffset={30}
                side="left"
              >
                <section className="w-32 p-1">
                  <p className="font-bold text-lg">Get in Touch:</p>
                  <div className="grid grid-flow-row grid-rows-4 text-right">
                    <Link href="https://twitter.com/SulaimanShafiq">
                      <p className="font-normal text-sm mt-2 flex gap-4 justify-between hover:font-bold pr-2 hover:text-cyan-400">
                        X
                        <XIcon className="w-6 h-6 inline rounded-full ml-4" />
                      </p>
                    </Link>
                    <Link href="https://www.facebook.com/slmcreatives.my/">
                      <p className="font-normal text-sm mt-2 flex justify-between hover:font-bold pr-2 hover:text-cyan-400">
                        Facebook
                        <FacebookIcon className="w-6 h-6 inline rounded-full ml-4" />
                      </p>
                    </Link>
                    <Link href="https://wa.me/601121292383">
                      <p className="font-normal text-sm mt-2 flex justify-between hover:font-bold pr-2 hover:text-cyan-400">
                        Whatsapp
                        <WhatsappIcon className="w-6 h-6 inline rounded-full ml-4" />
                      </p>
                    </Link>
                    <Link href={"mailto:sulaiman@slmcreatives.com"}>
                      <p className="font-normal text-sm mt-2 flex justify-between hover:font-bold pr-2 hover:text-cyan-400">
                        Email
                        <EmailIcon className="w-6 h-6 inline rounded-full ml-4" />
                      </p>
                    </Link>
                  </div>
                </section>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </section>
    </div>
  );
}
