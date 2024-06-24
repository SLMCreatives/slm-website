"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import {
  PlayCircleIcon,
  CurrencyDollarIcon,
  MagnifyingGlassCircleIcon,
  ArrowRightCircleIcon,
  SwatchIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import Header from "Sulaiman/app/Components/Header";
import Footer from "Sulaiman/app/Components/Footer";
import Testimonial from "Sulaiman/app/Components/Testimonial";

const features = [
  {
    name: "I am waiting to begin marketing because my product is not ready yet.",
    description:
      "The best time to start your marketing campaign in yesterday. In other words, the best marketing strategy starts even before your have your product ready. You need time for word to spread before people start considering buying from you.",
    icon: BellAlertIcon,
    id: "1",
  },
  {
    name: "All of my marketing material should be sales oriented.",
    description:
      "In reality, channels that only post sales oriented material seldon perform better compared to channels that post a variety of material. Channels that perform well almost always has a clear marketing strategy behind them.",
    icon: BellAlertIcon,
    id: "2",
  },
  {
    name: "My business is doing fine without any marketing.",
    description:
      "Marketing is a part of any business, and digital marketing is proven to be an important aspect of a business long-term survival and success. If you business is doing well without any marketing, then imagine your business with marketing.",
    icon: BellAlertIcon,
    id: "3",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main>
      <Header />
      <div className="flex justify-center -mt-10 items-center bg-white min-h-screen">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-teal-800 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative px-7 rounded-full py-1 text-sm leading-6 bg-white text-gray-600 ring-1 ring-gray-900/10 hover:ring-emerald-400">
                Learn about the next wave of digital marketing.{" "}
                <a href="#" className="font-semibold text-emerald-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center text-balance">
              <h1 className="py-8 -my-8 text-6xl font-extrabold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 ">
                Freelance Creative Digital Marketing
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Building digital brands for businesses with impactful creatives
                and interactive digital experiences that drives growth and
                conversion.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10  transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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
      </div>
      {/* FEATURE MENU */}
      <div className="overflow-hidden bg-slate-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-12 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-emerald-600">
                  One Stop Marketing Solution Provider
                </h2>
                <p className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Everything you need to know in one place.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  I believe that{" "}
                  <span className="font-bold">
                    good, professional and effective
                  </span>{" "}
                  digital marketing <em className="font-bold ">is</em> for
                  everyone. But unfortunately, not everyone knows how to get a
                  good return on investment from it.
                </p>
                <p className="mt-2 text-lg  leading-8 text-gray-600">
                  Here are some of the <span className="font-bold">myths</span>{" "}
                  about how digital marketing works in 2024.
                </p>

                <div className="overflow-scroll xl:overflow-visible lg:overflow-scroll m-2 mt-6 md:max-w-xl scrollbar-hide">
                  <dl className="grid grid-cols-3 gap-8 mt-4 min-w-[80rem] lg:min-w-none text-lg leading-8 text-gray-600">
                    {features.map((feature) => (
                      <div
                        key={feature.name}
                        className="relative bg-white rounded-xl p-8 lg:min-w-[380px] text-balance"
                      >
                        <dt className="block items-center text-2xl text-emerald-600 font-bold">
                          <feature.icon
                            className="block h-12 w-12 mb-6 text-slate-600"
                            aria-hidden="true"
                          />{" "}
                          Myth {feature.id} - {feature.name}
                        </dt>{" "}
                        <dd className="mt-4 text-lg leading-8 text-gray-600 ">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
            <img
              src="/features.jpg"
              alt="Product screenshot"
              className="intems-center -z-9 h-[40rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
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

          <div className="m-6 lg:m-2 grid grid-cols-1 col-width-1 gap-8 gap-y-12 items-center justify-center md:grid-cols-3 lg:grid-cols-3 text-balance ">
            <a
              className="block bg-white rounded-xl border border-gray-200 p-8 shadow-sm transition-all hover:shadow-lg hover:bg-slate-100 group duration-500 ease-in-out"
              href="/content"
            >
              <div className="items-center justify-center text-emerald-600">
                <CalendarDaysIcon className="size-12 text-emerald-600 transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:size-14" />
                <h2 className="mt-4 text-3xl font-semibold transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:font-bold">
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
              className="block bg-white rounded-xl border border-gray-200 p-8 shadow-sm transition-all hover:shadow-lg hover:bg-slate-100 group duration-500 ease-in-out"
              href="/content"
            >
              <div className="items-center justify-center text-emerald-600">
                <CurrencyDollarIcon className="size-12 text-emerald-600 transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:size-14" />
                <h2 className="mt-4 text-3xl font-semibold transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:font-bold">
                  Lead Generation
                </h2>
              </div>
              <p className="mt-4 text-lg text-balance text-gray-900 transition-all duration-500 ease-in-out">
                Generate quality leads and convert them into customers with high
                targeted paid ads for quick short term success.
              </p>
            </a>
            <a
              className="block bg-white rounded-xl border border-gray-200 p-8 shadow-sm transition-all hover:shadow-lg hover:bg-slate-100 group duration-500 ease-in-out"
              href="/content"
            >
              <div className="items-center justify-center text-emerald-600">
                <MagnifyingGlassCircleIcon className="size-12 text-emerald-600 transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:size-14" />
                <h2 className="mt-4 text-3xl font-semibold transition-all duration-500 ease-in-out group-hover:text-slate-900 group-hover:font-bold">
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
          <h2 className="text-center text-lg font-semibold leading-8 text-grey-600">
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
