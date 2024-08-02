"use client";

import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Testimonial from "Sulaiman/app/_components/Testimonial";
import { motion, useTransform } from "framer-motion";
import WaterDropGrid from "./_components/WaterGrid";
import ServicesMap from "./_components/ServicesMap";
import { useTime } from "framer-motion";
import Logos from "./_components/Logos";
// import { Articles } from "./_components/Articles";

export default function Home() {
  return (
    <main>
      {/*       <Header />
       */}{" "}
      <div className="flex justify-center items-center bg-white py-32 mt-20">
        <div className="flex gap-6 justify-left items-top">
          <div className="px-12 left-0 text-balance flex flex-col gap-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              className="text-xl font-bold tracking-tight text-slate-950"
            >
              My name is Sulaiman Shafiq and I am a full-stack web developer!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.25 }}
              className="text-sm text-gray-600"
            >
              I transitioned from a digital marketing freelance to a full-stack
              web developer in 2022 and have been learning and growing ever
              since. I am passionate about creating beautiful, performant, and
              user-friendly websites, open source projects, and experimental AI
              tools.
            </motion.p>
            <div className="flex flex-col lg:flex-row gap-4"></div>
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
      {/* FEATURE MENU */}
      <div className="overflow-hidden bg-linear-gradient bg-gradient-to-b from-white to-slate-100 py-24 sm:py-32">
        <div id="my-section" className="mx-auto max-w-7xl px-12 lg:px-8">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-full ">
              <h2 className="text-base font-semibold leading-7 text-emerald-600">
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

            <div className="flex justify-center">
              <ServicesMap />
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

            <p className="mt-6 text-xl leading-8 text-balance text-gray-600">
              8+ Years of experience in various companies, projects and
              industries.
            </p>
          </div>

          <div className="lg:mt-8 mt-12 flex">
            <Logos />
          </div>
        </div>
      </section>
      {/* SERVICES */}
      {/*  <section className="bg-slate-50 text-black">
        <div className="mx-auto max-w-screen-xl lg:max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-8">
          <div className="m-6 pb-8 max-w-lg text-left lg:text-center lg:max-w-none">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">
              FEATURED ARTICLES
            </h2>
            <h2 className="mt-2 text-5xl font-bold text-balance tracking-tight text-gray-900 sm:text-4xl">
              Digital Marketing Tips and Insights
            </h2>
          </div>
          <Articles key="articles" />
        </div>
      </section>  */}
      <Testimonial />
      <Footer />
    </main>
  );
}
