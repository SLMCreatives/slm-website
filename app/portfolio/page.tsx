"use client";

import { PlayIcon } from "@heroicons/react/24/outline";
import { DownloadIcon, ExternalLinkIcon, ViewIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "Sulaiman/S/components/ui/avatar";
import { Button } from "Sulaiman/S/components/ui/button";

const categories = [
  {
    name: "Websites",
  },
  {
    name: "Design",
  },
  {
    name: "Presentations",
  },
  {
    name: "Video/Animation",
  },
  {
    name: "Social Media",
  },
];

const websites = [
  {
    name: "Medik Nur Rahmah Berhad",
    industry: "Medical Aid & Support",
    link: "https://www.mediknur.com",
    image: "/webp/mediknur.webp",
    logo: "/webp/medik-nur-1.webp",
  },
  {
    name: "Rivertron Construction",
    industry: "Construction & Renovation",
    link: "https://www.rivertron.com",
    image: "/webp/riv_site.webp",
    logo: "/webp/riv_logo.webp",
  },
  {
    name: "LHI Consulting",
    industry: "Management Consulting",
    link: "https://www.lhi-consulting.com",
    image: "/webp/lhi-consulting.webp",
    logo: "/webp/lhi.webp",
  },
  {
    name: "Melwood Arena",
    industry: "Football Field Rental",
    link: "https://www.melwoodarena.com",
    image: "/webp/melwood.webp",
    logo: "/webp/melwood_icon-01.webp",
  },
  {
    name: "AKH Partners PLT",
    industry: "Accounting & Audit",
    link: "https://akhpartnersplt.com.my/",
    image: "/webp/akh_website.webp",
    logo: "/webp/akh_logo.webp",
  },
  {
    name: "DrH WoodWork Interior",
    industry: "Interior Design",
    link: "https://www.drhwoodworks.com/",
    image: "/webp/drh_website.webp",
    logo: "/webp/drh_logo.webp",
  },
];

const videos = [
  {
    name: "TM Animated Video Series",
    type: "TM (Telekom Malaysia)",
    link: "https://drive.google.com/file/d/1juy7u1rMXMfGR30ZdkFVnaaPuZ__QGKN/view?usp=sharing",
    views: "Internal Distribution",
    desc: "12 episode animated explainer video to showcase corporate new values to all staff and employees.",
  },
  {
    name: "Kra Thong Thai Restaurant",
    type: "Menu Promo",
    link: "https://drive.google.com/file/d/1bDZq5oetz84cYdXVjvLMadq_0C-wemes/view?usp=drive_link",
    views: "Facebook & Instagram",
    desc: "Reels that showcase resturant menu and best selling dishes.",
  },
  {
    name: "MNRB Events Update",
    type: "Event Video",
    link: "https://www.facebook.com/reel/384173380704719",
    views: "Facebook & Instagram",
    desc: "Social media reels that explains corporate story and who they help.",
  },
  {
    name: "LHI Consulting Content",
    type: "Content Marketing",
    link: "https://www.youtube.com/watch?v=m6kMJFnwUjs&t=40s",
    views: "YouTube",
    desc: "Motivational video that tries to provide inspiration and increase passion for not giving up.",
  },
];

const socmed = [
  {
    name: "Golden Retreat Lombok Villa",
    platforms: ["Facebook", "TikTok", "Instagram"],
    description: "Launch campaign for new investment property project.",
    industry: "Investment Property",
  },
  {
    name: "Medik Nur Rahmah Berhad",
    platforms: ["Facebook", "Instagram"],
    description:
      "Official social media manager who created the content strategy, managed the creatives as well as all scheduling and posting.",
    industry: "Medical Aid & Support",
  },
  {
    name: "AnaBuild Sdn. Bhd.",
    platforms: ["Facebook", "Instagram"],
    description:
      "Official social media manager who created the content strategy, managed the creatives as well as all scheduling and posting.",
    industry: "Construction & Renovation",
  },
  {
    name: "Adizaidee Sdn. Bhd.",
    platforms: ["Facebook", "Instagram", "TikTok"],
    description:
      "Official social media manager who created the content strategy, managed the creatives as well as all scheduling and posting.",
    industry: "Construction & Renovation",
  },
  {
    name: "Melwood Arena",
    platforms: ["Facebook", "Instagram"],
    description:
      "Official social media manager who created the content strategy, managed the creatives as well as all scheduling and posting.",
    industry: "Football Field Rental",
  },
  {
    name: "Kra Thong Thai Restaurant",
    platforms: ["Facebook", "Instagram"],
    description:
      "Official social media manager who created the content strategy, managed the creatives as well as all scheduling and posting.",
    industry: "Restaurant",
  },
  {
    name: "RUMEE",
    platforms: ["Facebook", "TikTok", "Instagram"],
    description: "Launch campaign for several products.",
    industry: "Family Business",
  },
  {
    name: "LHI Consulting",
    platforms: ["Facebook", "Instagram", "YouTube", "LinkedIn"],
    description:
      "Launched several marketing campaigns, managed daily content scheduling and posting.",
    industry: "Management Consulting",
  },
];

const designs = [
  {
    image: "/content/content_2.png",
  },
  {
    image: "/content/content_3.png",
  },
  {
    image: "/content/content_4.png",
  },
  {
    image: "/content/content_5.png",
  },
  {
    image: "/content/content_6.png",
  },
  {
    image: "/content/content_7.png",
  },
  {
    image: "/content/content_8.png",
  },
  {
    image: "/content/content_9.png",
  },
  {
    image: "/content/dp_6.jpg",
  },
  {
    image: "/content/dp_5.jpg",
  },
  {
    image: "/content/dp_4.jpg",
  },
  {
    image: "/content/dp_3.jpg",
  },
  {
    image: "/content/dp_2.jpg",
  },
  {
    image: "/content/dp_1.jpg",
  },
  {
    image: "/content/ebook_5.jpg",
  },
  {
    image: "/content/ebook_4.jpg",
  },
  {
    image: "/content/ebook_3.jpg",
  },
  {
    image: "/content/ebook_2.jpg",
  },
  {
    image: "/content/ebook_1.jpg",
  },
  {
    image: "/content/lombok_6.jpg",
  },
  {
    image: "/content/lombok_5.jpg",
  },
  {
    image: "/content/lombok_4.jpg",
  },
  {
    image: "/content/lombok_3.jpg",
  },
  {
    image: "/content/lombok_2.jpg",
  },
  {
    image: "/content/lombok_1.jpg",
  },
];
const presentations = [
  {
    name: "Module Training Material",
    comp: "Maybank",
    link: "https://www.canva.com/design/DAGNz-pD0SQ/Jh1HEsZb53w9plT7nspWuQ/view?utm_content=DAGNz-pD0SQ&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    desc: "Source material for human rights training presentation.",
    cover: "/content/bhr-cover.jpg",
  },
  {
    name: "Corporate Report Template",
    comp: "Wordwide Holdings",
    link: "https://www.canva.com/design/DAFpiKvlBpk/FzadJeb_WXAadayMOf0lUg/view?utm_content=DAFpiKvlBpk&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    desc: "Design template for in-house corporate reporting.",
    cover: "/content/corporate-template.jpg",
  },
  {
    name: "Sales Deck",
    comp: "OctoClean Express",
    link: "https://www.canva.com/design/DAFskjAipdU/44fCt46HgGQNz1h3AbvDMA/view?utm_content=DAFskjAipdU&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    desc: "Official deck for corporate and sales presentation.",
    cover: "/content/oce_cover.jpg",
  },
];

const rdesigns = designs.reverse();

export default function Portfolio() {
  const [cats, setCats] = useState(categories[0]);
  return (
    <div className=" bg-white dark:bg-black dark:text-slate-50 flex flex-col gap-8 pt-10 px-8">
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-lg">Choose a category:</h1>
      </section>
      <section className="flex flex-row flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            variant={cats.name === category.name ? "outline" : "default"}
            size="sm"
            className=" hover:text-cyan-400 bg-transparent px-2 py-1"
            key={category.name}
            onClick={() => setCats(category)}
            disabled={cats.name === category.name}
          >
            {category.name}
          </Button>
        ))}
      </section>
      <section className="flex flex-col text-nowrap gap-4 p-2">
        <GridList name={cats.name} websites={websites} />
      </section>
      <section className="flex flex-col gap-4">
        <p className="font-bold text-xl">Offline Version</p>
        <p className="text-sm">
          {" "}
          If you want to get an offline version to share, you can download it
          from the button below.
        </p>
        <Link
          href="https://www.canva.com/design/DAGNDRm06Bg/mIwPxTn1Ne_F3DdyopwIvw/view?utm_content=DAGNDRm06Bg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          target="_blank"
        >
          <Button
            size="sm"
            className="rounded-lg ring-1 ring-slate-400/50 w-fit"
          >
            View General Portfolio{" "}
            <ExternalLinkIcon className="w-4 h-4 inline-flex ml-4" />
          </Button>
        </Link>
      </section>
    </div>
  );
}

function GridList({ name, websites }: { name: string; websites: any[] }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-xl">{name}</p>
      <div className="grid grid-col-1 md:grid-cols-2 gap-4">
        {name === "Websites" &&
          websites.map((website) => (
            <WebsiteCard
              name={website.name}
              logo={website.logo}
              image={website.image}
              link={website.link}
              industry={website.industry}
            />
          ))}
      </div>
      {name === "Video/Animation" &&
        videos.map((video) => (
          <VideoCard
            name={video.name}
            type={video.type}
            link={video.link}
            views={video.views}
            desc={video.desc}
          />
        ))}
      {name === "Social Media" &&
        socmed.map((social) => (
          <SocialCard
            name={social.name}
            platforms={social.platforms}
            description={social.description}
            industry={social.industry}
          />
        ))}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {name === "Design" &&
          rdesigns.map((design) => <DesignCard image={design.image} />)}
      </div>
      {name === "Presentations" &&
        presentations.map((presentation) => (
          <PresCard
            name={presentation.name}
            link={presentation.link}
            comp={presentation.comp}
            desc={presentation.desc}
            cover={presentation.cover}
          />
        ))}
    </div>
  );
}

function WebsiteCard({
  name,
  logo,
  image,
  link,
  industry,
}: {
  name: string;
  logo: string;
  image: string;
  link: string;
  industry: string;
}) {
  return (
    <div className="flex flex-col bg-white dark:bg-black dark:text-slate-50 group relative cursor-pointer">
      <a href={link} target="_blank" className="">
        <div className="group-hover:flex absolute z-50 bottom-0 left-0 bg-gradient-to-t from-white to-80% dark:from-black/70 to-transparent  w-full h-full px-4 hidden items-end">
          <div className="flex flex-row my-4 items-center gap-4">
            <Avatar>
              <AvatarImage
                src={logo}
                alt={name}
                className="w-10 h-10 object-contain"
              ></AvatarImage>
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <p className="font-bold text-md flex flex-col">
              {name}{" "}
              {industry && (
                <em className="font-normal text-sm opacity-50">{industry}</em>
              )}
            </p>
          </div>
        </div>
        <img
          className="ring-1 ring-slate-400/50 dark:ring-slate-600  rounded-md md:aspect-video aspect-auto object-cover h-[15rem] md:h-[10rem] w-full object-top"
          src={image}
          alt={name}
        />
      </a>
      {/* <div className="flex flex-row my-4 items-center gap-4">
        <Avatar>
          <AvatarImage
            src={logo}
            alt={name}
            className="w-10 h-10 object-contain"
          ></AvatarImage>
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <p className="font-bold text-md flex flex-col">
          {name}{" "}
          {industry && (
            <em className="font-normal text-sm opacity-50">{industry}</em>
          )}
        </p>
      </div> */}
    </div>
  );
}

function VideoCard({
  name,
  type,
  link,
  views,
  desc,
}: {
  name: string;
  type: string;
  link: string;
  views: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col bg-white dark:bg-black dark:text-slate-50 rounded-lg group relative hover:ring-1 ring-slate-400/50 p-4">
      <a
        href={link}
        target="_blank"
        className="grid grid-cols-5 gap-8 w-full justify-start items-center"
      >
        <div className="flex flex-col gap-3 col-span-4">
          <p className="font-bold text-md -mb-2">{name}</p>
          <p>
            Overview: <em className="text-sm text-wrap opacity-80">{desc}</em>
          </p>
          <div className="flex flex-row gap-2">
            <p>Tags: </p>
            <em className="text-sm  bg-slate-400/50 rounded-full px-3 py-1">
              {type}
            </em>
            <em className="text-sm  bg-slate-400/50 px-3 py-1 rounded-full">
              {views}
            </em>
          </div>
        </div>
        <Button className="rounded-lg ring-1 ring-slate-400/50 col-span-1 hidden md:flex">
          <PlayIcon className="w-6 h-6" />
        </Button>
      </a>
    </div>
  );
}

function SocialCard({
  name,
  platforms,
  description,
  industry,
}: {
  name: string;
  platforms: string[];
  description: string;
  industry: string;
}) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white dark:bg-black dark:text-slate-50 rounded-lg group relative hover:ring-1 ring-slate-400/50">
      <p className="font-bold text-md">
        {name} <em className="text-sm opacity-50 font-normal">- {industry}</em>
      </p>
      <p className="text-sm font-bold">
        Overview:{" "}
        <em className="text-sm font-normal text-wrap">{description}</em>
      </p>
      <div className="flex flex-row gap-2">
        <p className="text-sm font-bold -mb-3">Platforms:</p>
        {platforms.map((platform) => (
          <p className="text-xs bg-slate-200 dark:bg-slate-800 rounded-full px-2 py-1">
            {platform}
          </p>
        ))}
      </div>
    </div>
  );
}

function DesignCard({ image }: { image: string }) {
  return (
    <div>
      <Link href={image} target="_blank">
        <img
          className="hover:ring-1 ring-slate-400/50 dark:ring-slate-600 rounded-md"
          src={image}
          alt="portfolio"
        />
      </Link>
    </div>
  );
}

function PresCard({
  name,
  link,
  comp,
  desc,
  cover,
}: {
  name: string;
  link: string;
  comp: string;
  desc: string;
  cover: string;
}) {
  return (
    <div className="flex flex-row bg-white dark:bg-black dark:text-slate-50 rounded-lg group hover:ring-1 ring-slate-400/50 p-2 cursor-pointer">
      <a href={link} target="_blank" className="">
        <div className="flex flex-row gap-8">
          <img
            src={cover}
            alt={name}
            className="w-30 md:w-48 aspect-video object-cover rounded-lg ring-1 ring-slate-400/50"
          />
          <div className="flex flex-col gap-2 text-wrap justify-center">
            <p className="font-bold text-md ">{name}</p>
            <em className="inline text-sm font-normal text-wrap opacity-60 -mt-1">
              {desc}
            </em>

            <Button
              className="rounded-lg ring-1 ring-slate-400/50 hidden md:flex w-fit"
              size="sm"
            >
              View On Canva
            </Button>
          </div>
        </div>
      </a>
    </div>
  );
}
