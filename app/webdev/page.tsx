"use client";

import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Coming_Soon } from "next/font/google";
import Link from "next/link";
import React, { Suspense, useState } from "react";
/* import MarketingForm from "Sulaiman/app/_components/MarketingForm";
import { Button } from "Sulaiman/S/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "Sulaiman/S/components/ui/dialog";
import { Input } from "Sulaiman/S/components/ui/input";
import { Label } from "Sulaiman/S/components/ui/label"; */
import { Button } from "Sulaiman/S/components/ui/button";
import { LandingPage } from "./LandingPage";

const services = [
  {
    name: "Landing Page",
    desc: "Single page site to showcase a product, service, event or portfolio. Perfect for getting your name out there.",
    examples: [
      {
        name: "Digital Portfolio",
        desc: "Showcase your talent and work with a professional single page site to attract the right type of customers and grow your online presence.",
        img: "/webp/melwood.webp",
      },
      {
        name: "Product Sales Page",
        desc: "Sell your winning product online with product gallery, descriptions, variations, FAQ's and payment links.",
        img: "/webp/riv_site.webp",
      },
      {
        name: "Event Sign-Up Page",
        desc: "Promote your event online with event details, ticketing and booking links. Suitable for events like conferences, hackathons, webinars and more.",
        img: "/webp/canva.webp",
      },
    ],
    price: 250,
  },
  {
    name: "Corporate Website",
    desc: "Professional and modern corporate website complete with corporate story, timeline and brand identity. Perfect for brick and mortar and startups to big brands and companies.",
    examples: [
      {
        name: "Business Website",
        desc: "Complete standard 5 page website with corporate story, brand vision and mission, team section, blog and contact details.",
        img: "/webp/lhi-consulting.webp",
      },
      {
        name: "Health and Medical",
        desc: "Health and medical website with services, treatments, reviews and contact details.",
        img: "/webp/mediknur.webp",
      },
      {
        name: "Construction & Renovation",
        desc: "Construction and renovation website with services, projects, contact details and more.",
        img: "/webp/riv_site.webp",
      },
    ],
    price: 650,
  },
  {
    name: "E-Commerce",
    desc: "Start selling online with a fully functioning online store with localised shipping and payment gateway of your choice.",
    examples: [
      {
        name: "Physical Product Store",
        desc: "Showcase your products online with product gallery, descriptions, variations, FAQ's and payment links.",
        img: "/webp/melwood.webp",
      },
      {
        name: "Digital Product Store",
        desc: "Sell your digital products online with product gallery, descriptions, variations, FAQ's and payment links.",
        img: "/webp/riv_site.webp",
      },
      {
        name: "Educational Courses System",
        desc: "Build your digital courses online with course gallery, modules, lessons and more.",
        img: "/webp/lhi-consulting.webp",
      },
    ],
    price: 1050,
  },
  {
    name: "MVP",
    desc: "Want to test a new idea? Build your minimum viable product (MVP), a product with enough features to attract early-adopter customers and validate a product idea early in the product development cycle. ",
    examples: [
      {
        name: "AI Tools",
        desc: "Content generator, document analyzer or any other AI based tools.",
        img: "/webp/melwood.webp",
      },
      {
        name: "SaaS",
        desc: "Build your own software as a service (SaaS) or cloud based service.",
        img: "/webp/riv_site.webp",
      },
      {
        name: "Social Media Platform",
        desc: "Build your own social media platform or integrate with existing social media platform.",
        img: "/webp/lhi-consulting.webp",
      },
    ],
    price: 3050,
  },
  {
    name: "Database Management",
    desc: "Website to manage orders, customers, products and more",
    examples: [
      {
        name: "CRM",
        desc: "Build your own CRM or integrate with existing CRM.",
      },
      {
        name: "CMS",
        desc: "Build your own CMS or integrate with existing CMS.",
      },
      {
        name: "Product Catalogue",
        desc: "Build your own product catalogue or integrate with existing product catalogue.",
      },
    ],
    price: 4050,
  },
];

export default function WebDev() {
  const [card, setCard] = useState(services[0]);
  return (
    <div className=" flex flex-col gap-8 my-8 px-4">
      <section className="flex flex-col text-nowrap gap-4 p-2">
        <h1 className="font-bold text-xl">Website Builds:</h1>
        <div className="">
          <ul className="flex flex-row flex-wrap gap-4">
            {services.map((service) => (
              <li className="">
                <Button
                  variant={card.name === service.name ? "outline" : "default"}
                  size="sm"
                  className=" hover:text-cyan-400 bg-transparent px-2 py-1"
                  onClick={() => setCard(service)}
                  key={service.name}
                  disabled={card.name === service.name}
                >
                  {card.name === service.name ? (
                    <p className=" text-cyan-400">{service.name}</p>
                  ) : (
                    service.name
                  )}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr></hr>
      <section className="flex flex-col text-nowrap gap-4 p-2 sticky top-52">
        {card.name === "Landing Page" && (
          <LandingPage
            name={card.name}
            desc={card.desc}
            examples={card.examples}
            price={card.price}
          />
        )}
        {card.name === "Corporate Website" && (
          <LandingPage
            name={card.name}
            desc={card.desc}
            examples={card.examples}
            price={card.price}
          />
        )}
        {card.name === "E-Commerce" && (
          <LandingPage
            name={card.name}
            desc={card.desc}
            examples={card.examples}
            price={card.price}
          />
        )}
        {card.name === "MVP" && (
          <LandingPage
            name={card.name}
            desc={card.desc}
            examples={card.examples}
            price={card.price}
          />
        )}
        {card.name === "Database Management" && (
          <LandingPage
            name={card.name}
            desc={card.desc}
            examples={card.examples}
            price={card.price}
          />
        )}
      </section>
    </div>
  );
}
