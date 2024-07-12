"use client";

import React from "react";
import {
  CurrencyDollarIcon,
  MagnifyingGlassCircleIcon,
  ArrowRightCircleIcon,
  CalendarDaysIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import Header from "Sulaiman/app/_components/Header";
import Footer from "Sulaiman/app/_components/Footer";
import Testimonial from "Sulaiman/app/_components/Testimonial";
import { motion, Variants } from "framer-motion";
import WaterDropGrid from "../_components/WaterGrid";

const itemsVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.5 },
  },
};

const features = [
  {
    name: "Social Media Management",
    description:
      "Take control of your social platoforms and get it to generate useful value to your organisation. I cam help you set realistic targets that you can achieve in 3 months and teach you how to measure your progress.",
    icon: BellAlertIcon,
    id: "1",
  },
  {
    name: "Website Development and Design",
    description:
      "Claim your piece of the digital market 'pie' with a fully functioning website optimized for SEO to attract the right audience and the right demographic.",
    icon: BellAlertIcon,
    id: "2",
  },
  {
    name: "Lead Generation Package",
    description:
      "Get short term success with targated ads designed to engage with potential clients and fitted with easy to use CRM and other tools that can populate your client database with high quality leads.",
    icon: BellAlertIcon,
    id: "3",
  },
  {
    name: "Ad Hoc Services",
    description:
      "Includes services like Brand & Logo Design Guide, Presentation Design, Product Mockup, Packaging and Merchendise Design and more. ",
    icon: BellAlertIcon,
    id: "4",
  },
];

const revalidate = 10;

export default function Test() {
  return (
    <main>
      <Header />
      <motion.div
        className="flex justify-center items-center h-[110vh] w-[100vw] bg-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, damping: 10 }}
      >
        <div className=" ">
          <div className="flex gap-6 justify-left items-center">
            <div className="hidden lg:flex absolute  -z-5 top-10 right-28  bg-white">
              <WaterDropGrid />
            </div>
            <div className="text-left z-10 px-12 lg:w-1/2 left-0 text-balance space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="py-8 -my-8 text-6xl font-extrabold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-emerald-600 to-emerald-900 "
              >
                Freelance Creative Digital Marketing
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.25 }}
                className="mt-6 text-xl leading-8 text-gray-600"
              >
                Building digital brands for businesses with impactful creatives
                and interactive digital experiences that drives growth and
                conversion.
              </motion.p>
              <button
                onClick={() => {
                  const element = document.getElementById("my-section");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="bg-gradient-to-br from-emerald-600 to-emerald-900 opacity-90 hover:opacity-100 hover:from-emerald-900 hover:to-emerald-600 text-white font-medium rounded-lg px-5 py-3 mt-12 shadow-lg"
              >
                Marketing Solutions
              </button>
            </div>
          </div>
          <div
            className="lg:hidden absolute inset-x-0 top-[calc(100%-13rem)] -z-9  transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-teal-800 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* FEATURE MENU */}
      <div className="overflow-hidden bg-linear-gradient bg-gradient-to-b from-white to-slate-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-12 lg:px-8">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-full ">
              <h2
                className="text-base font-semibold leading-7 text-emerald-600"
                id="my-section"
              >
                One Stop Marketing Solution Provider
              </h2>
              <p className="mt-2 text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-4xl">
                Everything you need to know in one place.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get everything you need to launch your product or service,
                including social media management, website development and
                design as well as lead generation packages.
              </p>
            </div>

            <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 justify-center items-center w-full">
              {features.map((feature) => (
                <dl className="gap-5 m-2 text-gray-600">
                  <motion.div
                    variants={itemsVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className=" bg-white rounded-xl p-8 my-4 mt-12 md:p-10 lg:p-12 lg:min-w-[380px] min-w-[300px] text-balance shadow-xl"
                  >
                    <dt
                      className="items-center  text-xl lg:text-md text-emerald-600 font-bold"
                      key={feature.id}
                    >
                      {feature.name}
                    </dt>{" "}
                    <dd className="mt-4 text-sm lg:text-sm leading-6 text-gray-600 ">
                      {feature.description}
                    </dd>
                  </motion.div>
                </dl>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">
              EXPERIENCED & TRUSTWORTHY
            </h2>
            <h2 className="mt-2 text-4xl font-bold text-balance tracking-tight text-gray-900 lg:text-6xl">
              Trusted by local and international clients
            </h2>

            <p className="mt-6 text-xl leading-8 text-gray-600">
              8+ Years of experience in various types of digital marketing
              campaigns in all sizes big and small. I have been involved in...
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Graphic Designs Projects
                </dt>

                <dd className="text-6xl font-bold text-emerald-500 lg:text-6xl xl:text-7xl">
                  560
                </dd>
              </div>

              <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Video Editing Projects
                </dt>

                <dd className="text-6xl font-bold text-emerald-500 lg:text-6xl xl:text-7xl">
                  180
                </dd>
              </div>

              <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Websites Projects
                </dt>

                <dd className="text-6xl font-bold text-emerald-500 lg:text-6xl xl:text-7xl">
                  15
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 text-black">
        <div className="mx-auto max-w-screen-xl lg:max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-8">
          <div className="m-6 pb-8 max-w-lg text-left lg:text-center lg:max-w-none">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">
              AREA OF FOCUS
            </h2>
            <h2 className="mt-2 text-5xl font-bold text-balance tracking-tight text-gray-900 sm:text-4xl">
              Kickstart your marketing journey
            </h2>

            <p className="mt-6 text-lg text-balance leading-8 text-gray-600">
              Comprehensive marketing advice that covers all aspects of your
              digital marketing structure and addresses all types of
              posibilities and budget requirements.
            </p>
          </div>

          <div className="m-6 lg:m-2 grid grid-cols-1 col-width-1 gap-8 gap-y-12 items-top justify-center md:grid-cols-3 lg:grid-cols-3 text-balance lg:mx-12">
            <a
              className="block bg-white rounded-xl justify-top border border-gray-200 p-8 shadow-sm transition-all hover:shadow-lg hover:bg-slate-300 group duration-500 ease-in-out"
              href="/content"
            >
              <div className="items-center justify-top text-emerald-600">
                <CalendarDaysIcon className="size-12 text-emerald-600 transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:size-14" />
                <h2 className="mt-4 text-2xl font-semibold transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:font-bold">
                  Social Media
                </h2>
              </div>
              <p className="mt-4 text-lg text-balance text-gray-900 transition-all duration-500 ease-in-out">
                Stategise your social content to attract the right attention to
                your brand and build <em>long-term relationship </em> with your
                audience.
              </p>
            </a>
            <a
              className="block bg-white rounded-xl justify-top border border-gray-200 p-8 shadow-sm transition-all hover:shadow-lg hover:bg-slate-100 group duration-500 ease-in-out"
              href="/paid"
            >
              <div className="items-center justify-center text-emerald-600">
                <CurrencyDollarIcon className="size-12 text-emerald-600 transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:size-14" />
                <h2 className="mt-4 text-2xl font-semibold transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:font-bold">
                  Lead Gen
                </h2>
              </div>
              <p className="mt-4 text-lg text-balance text-gray-900 transition-all duration-500 ease-in-out">
                Generate quality leads and convert them into customers with high
                targeted paid ads for quick short term success.
              </p>
            </a>
            <a
              className="block bg-white rounded-xl justify-top border border-gray-200 p-8 shadow-sm transition-all hover:shadow-lg hover:bg-slate-100 group duration-500 ease-in-out"
              href="/website"
            >
              <div className="items-center justify-center text-emerald-600">
                <MagnifyingGlassCircleIcon className="size-12 text-emerald-600 transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:size-14" />
                <h2 className="mt-4 text-2xl font-semibold transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:font-bold">
                  Website Design
                </h2>
              </div>
              <p className="mt-4 text-lg text-left text-gray-900 transition-all duration-500 ease-in-out">
                Develop your digital home, a place where your customers can
                learn more about your brand and discover the latest news and
                updates.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-600">
            I have worked on big projects with MNCs and small businesses alike
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-6 items-center gap-x-8 gap-y-10 sm:max-w-xl md:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-3 max-h-12 w-full object-contain md:col-span-1 lg:col-span-1"
              src="/Client Logos/TM.png"
              alt="TM"
              width={158}
              height={48}
            />
            <img
              className="col-span-3 max-h-12 w-full object-contain md:col-span-1 lg:col-span-1"
              src="/Client Logos/BR.png"
              alt="Bank Rakyat"
              width={158}
              height={48}
            />
            <img
              className="col-span-3 max-h-12 w-full object-contain md:col-span-1 lg:col-span-1"
              src="/Client Logos/AS.png"
              alt="Air Selangor"
              width={158}
              height={48}
            />
            <img
              className="col-span-3 max-h-12 w-full object-contain md:col-span-1 lg:col-span-1"
              src="/Client Logos/lhi.png"
              alt="LHI Consulting"
              width={158}
              height={48}
            />
            <img
              className="col-span-6 max-h-12 w-full object-contain sm:col-start-auto md:col-span-1 lg:col-span-1"
              src="/Client Logos/drg.png"
              alt="Dr Gafoor Penang"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      <Testimonial />

      <Footer />
    </main>
  );
}
