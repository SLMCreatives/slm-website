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
            <Link href="/contact">
              <Avatar className="w-10 h-10 cursor-pointer hover:ring-1 hover:ring-slate-400">
                <AvatarImage src="/sulaiman.jpg"></AvatarImage>
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
