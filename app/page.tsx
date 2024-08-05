"use client";

import { HoverCardContent } from "@radix-ui/react-hover-card";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "Sulaiman/S/components/ui/avatar";
import {
  HoverCard,
  HoverCardTrigger,
} from "Sulaiman/S/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "Sulaiman/S/components/ui/tooltip";

const skills = [
  {
    name: "React",
    image: "/svg/react.svg",
    link: "https://reactjs.org",
  },
  {
    name: "Next.js",
    image: "/svg/next.svg",
    link: "https://nextjs.org",
  },
  {
    name: "Vercel",
    image: "/svg/vercel.svg",
    link: "https://vercel.com",
  },
  {
    name: "JavaScript",
    image: "/svg/js.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    image: "/svg/ts.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Sanity",
    image: "/svg/sanity.svg",
    link: "https://www.sanity.io/",
  },
  {
    name: "Drizzle ORM",
    image: "/svg/drizzle.svg",
    link: "https://orm.drizzle.team/",
  },
];
const design = [
  {
    name: "Tailwind CSS",
    image: "/svg/tailwind.svg",
    link: "https://tailwindui.com/",
  },
  {
    name: "Shadcn",
    image: "/svg/shadcn.svg",
    link: "https://ui.shadcn.com/",
  },
  {
    name: "Figma",
    image: "/svg/figma.svg",
    link: "https://www.figma.com/",
  },
  {
    name: "Canva",
    image: "/svg/canva.svg",
    link: "https://www.canva.com/",
  },
  {
    name: "Adobe Illustrator",
    image: "/svg/ai.svg",
    link: "https://www.adobe.com/products/illustrator.html",
  },
  {
    name: "Adobe Photoshop",
    image: "/svg/ap.svg",
    link: "https://www.adobe.com/products/photoshop.html",
  },
];
const works = [
  {
    name: "Rivertron",
    link: "https://rivertron.com",
    imgurl: "/webp/riv_site.webp",
    ind: "Construction",
    logo: "/webp/riv_logo.webp",
    url: "rivertron.com",
  },
  {
    name: "Medik Nur Rahmah Berhad",
    link: "https://mediknur.com",
    imgurl: "/webp/mediknur.webp",
    ind: "Medical Aid Support",
    logo: "/webp/medik-nur-1.webp",
    url: "mediknur.com",
  },
  {
    name: "Melwood Arena",
    link: "https://www.melwoodarena.com",
    imgurl: "/webp/melwood.webp",
    ind: "Football Field Rental",
    logo: "/webp/melwood_icon-01.webp",
    url: "melwoodarena.com",
  },
  {
    name: "LHI Consulting",
    link: "https://lhi-consulting.com",
    imgurl: "/webp/lhi-consulting.webp",
    ind: "Management Consulting",
    logo: "/webp/lhi.webp",
    url: "lhi-consulting.com",
  },
];
const labs = [
  {
    name: "My Fathers Honest Reviews of Restaurants",
    short: "MFHROR",
    link: "/labs/mfhror",
  },
  {
    name: "TMDB Movie Discovery",
    short: "TMDB",
    link: "/labs/movie-search",
  },
  {
    name: "Design Management System",
    short: "DMS",
    link: "/dashboard",
  },
];

export default function NewPage() {
  return (
    <div className=" bg-white dark:bg-black dark:text-slate-50 flex flex-col gap-8 pt-10 px-8">
      <section className="flex flex-col gap-4">
        <em className="">Assalamualaikum & Hello! 🤝🫶</em>
        <HoverCard openDelay={10} closeDelay={0}>
          <HoverCardTrigger>
            <img
              src="/cover_image.jpg"
              alt="cover image"
              className="rounded-xl w-full h-52 object-cover ring-1 dark:ring-slate-700 drop-shadow-lg"
            />
          </HoverCardTrigger>
          <HoverCardContent
            className="bg-white dark:bg-black dark:text-slate-50 px-4 py-1 w-fit rounded-xl ring-slate-700 drop-shadow-xl"
            align="end"
            alignOffset={10}
            sideOffset={-50}
          >
            👋 Hello! It's nice to meet you!
          </HoverCardContent>
        </HoverCard>
        <h2 className="font-bold text-lg -mb-2">About Me:</h2>
        <p>
          My name is{" "}
          <span className="font-extrabold inline text-cyan-500 dark:text-cyan-300">
            Sulaiman Shafiq Bn Abdul Munaff.
          </span>{" "}
          I am a{" "}
          <span className="font-semibold inline">
            full-stack web developer and designer
          </span>{" "}
          based in Malaysia! 🇲🇾 I transitioned from being a digital marketing
          freelance to a full-stack web developer in 2020 and have been learning
          and growing ever since.
        </p>
        <p>
          In total, I have +7 years of working experience in the digital
          marketing industry. I started as an in-house video editor for 4 years
          and then a creative content manager for the next 3 years.
        </p>
        <p>
          Right now, I am passionate about creating beautiful, performant, and
          user-friendly websites, open source projects, and experimental AI
          tools.
        </p>
      </section>
      <hr></hr>
      <h2 className="font-bold text-lg -mb-6">Skills:</h2>
      <p>
        Over the years, I have pcked up a few skills that I am comfortable with.
        Here are a few techonologies I am familiar with:{" "}
      </p>
      <section className="flex flex-row text-nowrap gap-12">
        <h3 className="font-semibold">Tech: </h3>
        <div>
          <ul className="flex flex-row flex-wrap gap-2">
            {skills.map((skill) => (
              <li className="bg-slate-200 dark:bg-slate-800 items-center justify-center pr-4 pl-2 py-1 rounded-full flex text-sm cursor-pointer hover:font-light">
                <Link href={skill?.link} target="_blank" rel="noreferrer">
                  <Image
                    src={skill.image}
                    alt="logo"
                    width={20}
                    height={20}
                    className="inline mr-2 w-6 h-6 rounded-md"
                  />
                  {skill.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="flex flex-row text-nowrap gap-10">
        <h3 className="font-semibold">UI/UX: </h3>
        <div>
          <ul className="flex flex-row flex-wrap gap-2">
            {design.map((item) => (
              <li className="bg-slate-200 dark:bg-slate-800 pr-4 pl-2 py-1 rounded-full text-sm hover:font-light">
                <Link href={item?.link} target="_blank" rel="noreferrer">
                  <Image
                    src={item.image}
                    alt="logo"
                    width={20}
                    height={20}
                    className="inline mr-2 w-6 h-6 rounded-md"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr></hr>
      <h2 className="font-bold text-lg -mb-6">Work Experience:</h2>
      <p>Here are a few of the projects that have worked on. </p>
      <section className="flex flex-row text-nowrap  gap-4">
        <h3 className="font-semibold ">Portfolio: </h3>
        <div className="flex flex-row flex-wrap gap-2">
          {works.map((work) => (
            <div className="flex flex-row flex-wrap gap-2 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full hover:font-light">
              <HoverCard openDelay={10} closeDelay={0}>
                <HoverCardTrigger asChild>
                  <Link
                    href={work.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:font-light text-sm"
                  >
                    {work.name}
                    <ExternalLinkIcon className="w-3 h-3 inline opacity-50 ml-2 mb-2" />
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent
                  side="top"
                  sideOffset={10}
                  align="start"
                  className="w-fit p-4 bg-white dark:bg-slate-800 rounded-xl flex flex-col gap-1 drop-shadow-2xl"
                >
                  <div className="flex flex-row gap-4 items-center justify-left">
                    <Avatar className="w-8 h-8 float-right dark:p-1 dark:bg-slate-200">
                      <AvatarImage src={work.logo}></AvatarImage>
                      <AvatarFallback>{work.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="">
                      <p className="font-semibold">{work.name}</p>
                      <p className="opacity-50 uppercase font-semibold text-xs">
                        {work.ind}
                      </p>
                    </div>
                  </div>
                  {work.imgurl && (
                    <Image
                      src={work.imgurl}
                      alt={work.name}
                      width={250}
                      height={100}
                      className="inline ring-1 ring-slate-200 dark:ring-slate-700 rounded-sm mt-2 drop-shadow-sm"
                    />
                  )}
                  <p className="text-xs font-mono text-right mt-1 absolute bottom-6 right-6 bg-white dark:bg-slate-800 ring-1 ring-slate-500  text-black px-3 py-1 rounded-xl dark:text-white">
                    {work.url}
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-row text-nowrap gap-10">
        <h3 className="font-semibold">Labs: </h3>
        <div>
          <ul className="flex flex-row flex-wrap gap-2">
            {labs.map((lab) => (
              <li className="bg-slate-200 dark:bg-slate-800 px-4 py-1 rounded-full items-center flex text-sm cursor-pointer hover:font-light">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={lab.link} target="_blank" rel="noreferrer">
                        <p className="">{lab.short}</p>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      sideOffset={10}
                      align="start"
                      className="bg-white dark:bg-slate-800 px-2 py-2 rounded-xl items-center flex text-xs cursor-pointer text-wrap hover:font-light"
                    >
                      {lab.link && (
                        <Link href={lab.link} target="_blank" rel="noreferrer">
                          {lab.name}
                        </Link>
                      )}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="flex flex-row text-nowrap  gap-4">
        <h3 className="font-semibold ">Reviews: </h3>
        <div className="flex flex-col gap-4 overflow-scroll scrollbar-hide">
          <div className="flex flex-col gap-2 bg-slate-200 dark:bg-slate-800 p-4 rounded-xl hover:font-light text-sm justify-between items-stretch">
            <em className="text-wrap">
              "Great service, fast response and professional advice. Made a
              website, automated a cert generator and worked with us on
              marketing as well."
            </em>
            <p className="text-xs opacity-50 text-right">
              - Azamil Izzat (LHI Consulting)
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-slate-200 dark:bg-slate-800 p-4 rounded-xl text-sm  hover:font-light justify-between items-stretch">
            <em className="text-wrap">
              "Always available for any questions and help. Replies within the
              hour and always helps out with things beyond scope of work."
            </em>
            <p className="text-xs opacity-50 text-right">
              - Fafa Henry (Klinik Dr G)
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-slate-200 dark:bg-slate-800 p-4 rounded-xl text-sm hover:font-light justify-between items-stretch">
            <em className="text-wrap">
              "Talented web developer, great communication and quick responses.
              Highly recommended!"
            </em>
            <p className="text-xs opacity-50 text-right">
              - Amin Rahman (Rivertron)
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-slate-200 dark:bg-slate-800 p-4 rounded-xl text-sm hover:font-light justify-between items-stretch">
            <em className="text-wrap">
              "You get what you pay for, but you get value for money work. Makes
              sense to work with."
            </em>
            <p className="text-xs opacity-50 text-right">- Ustad Wafi (MNRB)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
