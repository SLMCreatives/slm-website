"use client";

import { PlayIcon } from "@heroicons/react/24/outline";
import { DownloadIcon, ExternalLinkIcon, ViewIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "Sulaiman/S/components/ui/avatar";
import { Button } from "Sulaiman/S/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "Sulaiman/S/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "Sulaiman/S/components/ui/dialog";
import { Input } from "Sulaiman/S/components/ui/input";
import { Label } from "Sulaiman/S/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "Sulaiman/S/components/ui/popover";
import { WebGLBindingStates } from "three/src/renderers/webgl/WebGLBindingStates";

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
    index: 0,
  },
  {
    name: "Rivertron Construction",
    industry: "Construction & Renovation",
    link: "https://www.rivertron.com",
    image: "/webp/riv_site.webp",
    logo: "/webp/riv_logo.webp",
    index: 1,
  },
  {
    name: "LHI Consulting",
    industry: "Management Consulting",
    link: "https://www.lhi-consulting.com",
    image: "/webp/lhi-consulting.webp",
    logo: "/webp/lhi.webp",
    index: 2,
  },
  {
    name: "Melwood Arena",
    industry: "Football Field Rental",
    link: "https://www.melwoodarena.com",
    image: "/webp/melwood.webp",
    logo: "/webp/melwood_icon-01.webp",
    index: 3,
  },
  {
    name: "AKH Partners PLT",
    industry: "Accounting & Audit",
    link: "https://akhpartnersplt.com.my/",
    image: "/webp/akh_website.webp",
    logo: "/webp/akh_logo.webp",
    index: 4,
  },
];

const videos = [
  {
    name: "TM Animated Video Series",
    type: "TM (Telekom Malaysia)",
    link: "https://drive.google.com/file/d/1juy7u1rMXMfGR30ZdkFVnaaPuZ__QGKN/view?usp=sharing",
    views: "Internal",
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
    name: "Marketing Proposal",
    comp: "SLM Creatives",
    link: "https://www.canva.com/design/DAGNQA5ZJrU/y1aCiQ-g48KfaNwCRggxNw/view?utm_content=DAGNQA5ZJrU&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    desc: "Marketing proposal deck with timeline and quotation",
    cover: "/content/mproposal.jpg",
  },
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
  {
    name: "Virtual Group Treasure Hunt",
    comp: "LHI Consulting",
    link: "https://www.canva.com/design/DAEoinHEYT8/Od4YAOQCoU_J8n_zo4CqDA/view?utm_content=DAEoinHEYT8&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    desc: "Training material for digital group activity.",
    cover: "/content/vth.jpg",
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
        {!name && <p>Choose a category</p>}
        {name === "Websites" &&
          websites.map((website) => (
            <WebsiteCard
              name={website.name}
              logo={website.logo}
              image={website.image}
              link={website.link}
              industry={website.industry}
              key={website.name}
              index={website.index}
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
            key={video.name}
          />
        ))}
      {name === "Social Media" &&
        socmed.map((social) => (
          <SocialCard
            name={social.name}
            platforms={social.platforms}
            description={social.description}
            industry={social.industry}
            key={social.name}
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
  index,
}: {
  name: string;
  logo: string;
  image: string;
  link: string;
  industry: string;
  index: number;
}) {
  return (
    <div className="flex flex-col bg-white dark:bg-black dark:text-slate-50 group relative cursor-pointer">
      <div className="group-hover:flex absolute z-50 bottom-0 left-0 bg-gradient-to-t from-white to-80% dark:from-black/70 to-transparent  w-full h-full px-4 hidden items-end">
        <div className="flex flex-row my-4 items-center gap-4">
          <OpenCard moviecard={moviecard} name={name} index={index} />
        </div>
      </div>
      <img
        className="ring-1 ring-slate-400/50 dark:ring-slate-600  rounded-md md:aspect-video aspect-auto object-cover h-[15rem] md:h-[10rem] w-full object-top"
        src={image}
        alt={name}
      />
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
        <div className="flex flex-row gap-4">
          <img
            src={cover}
            alt={name}
            className="w-40 md:w-48 aspect-video object-cover rounded-lg ring-1 ring-slate-400/50"
          />
          <div className="flex flex-col gap-2 text-wrap justify-center">
            <p className="font-bold text-md ">{name}</p>
            <em className="inline text-sm font-normal text-wrap opacity-60 -mt-1">
              {desc}
            </em>

            <Button
              className="rounded-lg px-0 mx-0 hidden md:flex w-fit group"
              variant="default"
              size="icon"
            >
              <ExternalLinkIcon className="w-4 h-4 ml-2" />{" "}
              <p className="ml-2 opacity-50 text-sm hidden group-hover:inline">
                Preview on Canva
              </p>
            </Button>
          </div>
        </div>
      </a>
    </div>
  );
}

const moviecard = [
  {
    nameCard: "Medik Nur Rahmah Berhad (MNRB)",
    logo: "/webp/medik-nur-1.webp",
    intro:
      "As part of a collaboration with The Pejabat (Digital), I was given the task to design, structure and develop the official website for MNRB. They needed a website that was modern, responsive and functional to ease their daily operations.",
    time: "Feb - Apr 2023",
    ind: "Medical Aid & Financial Support",
    tags: [
      "Web Dev",
      "Modern Design",
      "Responsive",
      "Copy-Writing",
      "SEO",
      "Data Showcase",
    ],
    objective: [
      "Develop & design an official corporate website",
      "Website needs to be modern, responsive and user-friendly.",
      "To increase brand trust and reputation with fund management",
    ],
    goals: [
      "Developed a corporate website with modern design which includes creative assets and clear structure",
      "Digitised and structured company operations data and fund management",
      "Optimized website for search engines",
    ],
    link: "https://www.mediknur.com",
    gallery: [
      "/webp/mediknur.webp",
      "/webp/mnrb_blog.webp",
      "/webp/mnrb_info.webp",
      "/webp/mnrb_contact.webp",
    ],
  },
  {
    nameCard: "Rivertron Construction",
    logo: "/webp/riv_logo.webp",
    intro:
      "As part of a collaboration with The Pejabat (Digital), I was given the task to design, structure and develop the official website for Rivertron Constructin. They needed a basic website to showcase their services, testimonials and capture leads from potential clients",
    time: "Apr - March 2023",
    ind: "Constructions & Renovation",
    tags: [
      "Web Dev",
      "Modern Design",
      "Responsive",
      "Copy-Writing",
      "SEO",
      "Image Showcase",
    ],
    objective: [
      "Develop & design an official corporate website",
      "Website needs to be modern, responsive and user-friendly.",
      "To increase brand trust and reputation with fund management",
    ],
    goals: [
      "Developed a corporate website with modern design which includes creative assets and clear structure",
      "Digitised and structured company operations data and fund management",
      "Optimized website for search engines",
    ],
    link: "https://www.rivertron.com",
    gallery: [
      "/webp/riv_site.webp",
      "/webp/riv_services.webp",
      "/webp/riv_services_2.webp",
      "/webp/riv_form.webp",
      "/webp/riv_feature.webp",
    ],
  },
  {
    nameCard: "LHI Consulting",
    logo: "/webp/lhi.webp",
    intro:
      "I was tasked to restructure and design a corporate website for LHI. They needed a website that was modern, responsive and functional to ease their daily operations.",
    time: "Okt - Dec 2022",
    ind: "Management Consultant",
    tags: [
      "Web Dev",
      "Modern Design",
      "Responsive",
      "Copy-Writing",
      "SEO",
      "Data Showcase",
    ],
    objective: [
      "Develop & design an official corporate website",
      "Website needs to be modern, responsive and user-friendly.",
      "To increase brand trust and reputation with fund management",
    ],
    goals: [
      "Developed a corporate website with modern design which includes creative assets and clear structure",
      "Digitised and structured company operations data and fund management",
      "Optimized website for search engines",
    ],
    link: "https://www.lhi-consulting.com",
    gallery: ["/webp/lhi-consulting.webp"],
  },
  {
    nameCard: "Melwood Arena",
    logo: "/webp/melwood_icon-01.webp",
    intro:
      "As part of a collaboration with The Pejabat (Digital), I was given the task to design, structure and develop the official website for Rivertron Constructin. They needed a basic website to showcase their services, testimonials and capture leads from potential clients",
    time: "Jan - Feb 2023",
    ind: "Sports Field Rental",
    tags: [
      "Web Dev",
      "Modern Design",
      "Responsive",
      "Booking Rental",
      "Payment Gateway",
      "Product Showcase",
    ],
    objective: [
      "Develop & design an official corporate website",
      "Website needs to be modern, responsive and user-friendly.",
      "To increase brand trust and reputation with fund management",
    ],
    goals: [
      "Developed a corporate website with modern design which includes creative assets and clear structure",
      "Digitised and structured company operations data and fund management",
      "Optimized website for search engines",
    ],
    link: "https://www.melwoodarena.com",
    gallery: ["/webp/melwood.webp"],
  },
  {
    nameCard: "AKH & Partners PLT",
    logo: "/webp/akh_logo.webp",
    intro:
      "I was tasked to restructure and design a corporate website for AKH & Partners PLT. They needed a website that was modern, responsive and functional to ease their daily operations.",
    time: "Jan - Feb 2023",
    ind: "Accounting & Finance",
    tags: [
      "Web Dev",
      "Modern Design",
      "Responsive",
      "Copy-Writing",
      "SEO",
      "Data Showcase",
    ],
    objective: [
      "Develop & design an official corporate website",
      "Website needs to be modern, responsive and user-friendly.",
      "To increase brand trust and reputation with fund management",
    ],
    goals: [
      "Developed a corporate website with modern design which includes creative assets and clear structure",
      "Digitised and structured company operations data and fund management",
      "Optimized website for search engines",
    ],
    link: "https://www.akhpartnersplt.com.my",
    gallery: [
      "/webp/akh_home.webp",
      "/webp/akh_cta.webp",
      "/webp/akh_services.webp",
      "/webp/akh_service.webp",
      "/webp/akh_team.webp",
      "/webp/akh_portfolio.webp",
    ],
  },
  {
    nameCard: "DRH WoodWorks Interior",
    logo: "/webp/drh_logo.webp",
    intro:
      "As part of a collaboration with The Pejabat (Digital), I was given the task to design, structure and develop the official website for DrH WoodWorks Interior. They needed a basic website to showcase their services, testimonials and capture leads from potential clients",
    time: "Feb - March 2023",
    ind: "Furniture & Decor",
    tags: [
      "Web Dev",
      "Modern Design",
      "Responsive",
      "Booking Rental",
      "Payment Gateway",
      "Product Showcase",
    ],
    objective: [
      "Develop & design an official corporate website",
      "Website needs to be modern, responsive and user-friendly.",
      "To increase brand trust and reputation with fund management",
    ],
    goals: [
      "Developed a corporate website with modern design which includes creative assets and clear structure",
      "Digitised and structured company operations data and fund management",
      "Optimized website for search engines",
    ],
    link: "https://www.drhwoodworks.com/",
    gallery: ["/webp/drh_website.webp"],
  },
];

function OpenCard({
  moviecard,
  name,
  index,
}: {
  moviecard: any;
  name: string;
  index: number;
}) {
  const x = index % moviecard.length;
  const {
    nameCard,
    logo,
    intro,
    time,
    ind,
    tags,
    objective,
    goals,
    link,
    gallery,
  } = moviecard[x];
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="dark:hover:text-white">
            Read Full Story
          </Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm">
            <DialogContent className="fixed w-full h-screen top-5 left-0 right-0 mx-auto px-10 md:px-12 dark:bg-slate-800 border-0 rounded-md overflow-y-auto">
              <DialogHeader className="text-left gap-2">
                <DialogTitle className="flex flex-row gap-2 items-center justify-left py-4">
                  <Image
                    src={logo}
                    alt={nameCard}
                    className="w-10 h-10 rounded-full object-cover"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col">
                    <p className="text-fold text-xl">{nameCard}</p>
                    <p className="text-sm font-normal uppercase opacity-50">
                      {ind}
                    </p>
                  </div>
                </DialogTitle>
                <DialogDescription className="text-left">
                  <div className="flex flex-row flex-wrap gap-2">
                    {tags.map((tag: string) => (
                      <p className="text-xs font-bold bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded-md">
                        #{tag}
                      </p>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="hidden md:block">
                <Carousel
                  className="w-full max-w-full pr-2"
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                >
                  <CarouselContent className="w-full peer">
                    {gallery.map((img: string) => (
                      <CarouselItem key={img} className="basis-full">
                        <Image
                          src={img}
                          alt={nameCard}
                          className="w-full aspect-video rounded-lg "
                          width={500}
                          height={500}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className=" absolute -left-4 w-5 h-5 dark:bg-transparent" />
                  <CarouselNext className=" absolute -right-6 w-5 h-5 dark:bg-transparent" />
                </Carousel>
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <p className="text-sm font-bold -mb-2">Overview:</p>
                <p className="text-sm">{intro}</p>
                <ul>
                  <p className="text-sm font-bold">Objective:</p>
                  {objective.map((obj: string) => (
                    <li className="text-sm font-normal list-outside ml-4 list-disc">
                      {obj}
                    </li>
                  ))}
                </ul>
                <ul>
                  <p className="text-sm font-bold">Goals:</p>
                  {goals.map((goal: string) => (
                    <li className="text-sm font-normal list-outside list-disc ml-4">
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-row justify-end gap-0">
                <Link href="/contact">
                  <Button
                    variant="ghost"
                    className="w-fit opacity-50 hover:opacity-100 dark:hover:text-white"
                  >
                    Get In Touch
                  </Button>
                </Link>
                <Link href={link}>
                  <Button
                    variant="outline"
                    className="w-fit dark:hover:bg-slate-900 dark:text-black dark:hover:text-white border-0"
                  >
                    Visit Website
                  </Button>
                </Link>
              </div>
            </DialogContent>
          </DialogOverlay>
        </DialogPortal>
      </Dialog>
    </div>
  );
}
