"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import {
  PlayCircleIcon,
  CurrencyDollarIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  MagnifyingGlassCircleIcon,
  SwatchIcon,
  CalendarDaysIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Header } from "Sulaiman/Components/Header";
import { Footer } from "Sulaiman/Components/Footer";
import { Testimonial } from "Sulaiman/Components/Testimonial";

const features = [
  {
    name: "My Undivided Attention.",
    description:
      " I will never go 'RADIO SILENCE' on you. I will try to answer any questions you might have at any given time, even after the project has completed.",
    icon: CheckCircleIcon,
  },
  {
    name: "Low Client Capacity.",
    description:
      "I service a total of 5 'big' clients each month. This gives me the time to really concentrate on each project that I work on and provide the best service possible to my clients.",
    icon: CheckCircleIcon,
  },
  {
    name: "Complete Project Documentation.",
    description:
      "Every important detail of each project will documented and updated as and when necessary, so that you have complete knowledge of what we are trying to achieve.",
    icon: CheckCircleIcon,
  },
  {
    name: "Clear Communication.",
    description:
      "Trust, Respect and Understanding. Those 3 principles will always be at the core of everything that I do and I hope to receive that same treatment in return.",
    icon: CheckCircleIcon,
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main>
      <div className="flex justify-center -mt-10 items-center bg-white min-h-screen">
        <Header />

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
            <div className="text-center">
              <h1 className="py-8 -my-8 text-4xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 ">
                Freelance Creative Digital Marketing
              </h1>
              <p className="mt-6 text-md leading-8 text-gray-600">
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
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-emerald-600">
                  One Stop Marketing Solution
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Everything you need in a trusted freelancer
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Hiring a digital marketing freelancer like me gives a few
                  advantages to your usual freelancer. Here are a few things you
                  can expect when starting a project with me.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-emerald-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="/features.jpg"
              alt="Product screenshot"
              className="intems-center z-10 h-[40rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      {/* STATS */}
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by local and international clients
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
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

                <dd className="text-4xl font-bold text-emerald-500 md:text-5xl">
                  560
                </dd>
              </div>

              <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Video Editing Projects
                </dt>

                <dd className="text-4xl font-bold text-emerald-500 md:text-5xl">
                  180
                </dd>
              </div>

              <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Websites Projects
                </dt>

                <dd className="text-4xl font-bold text-emerald-500 md:text-5xl">
                  15
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-8">
          <div className="mx-auto pb-8 max-w-lg text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">
              My Services
            </h2>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kickstart your marketing
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive marketing services to help your business grow that
              are tailored made to suit your exact needs, even if you are
              starting from zero or to revitalise your business.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 gap-y-12 md:grid-cols-3 lg:grid-cols-3">
            <h2 className="px-2 text-center text-xl font-semibold leading-7 col-span-1 md:col-span-3 lg:col-span-3 -mb-6 ">
              Digital Marketing Solutions
            </h2>
            <a
              className="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-emerald-500/10 hover:shadow-emerald-500/10 hover:bg-emerald-50"
              href="/content"
            >
              <CalendarDaysIcon className="size-10 text-emerald-600" />

              <h2 className="mt-4 text-l font-semibold text-gray-900">
                Content Marketing
              </h2>
              <p className="mt-1 text-sm text-gray-900">
                Stategise your social content to attract the right attention to
                your brand and build <em>long-term relationship </em> with your
                audience.
              </p>
            </a>

            <a
              className="block rounded-xl  border border-gray-200 p-8 shadow-xl transition hover:border-emerald-500/10 hover:shadow-emerald-500/10 hover:bg-emerald-50"
              href="#"
            >
              <CurrencyDollarIcon className="size-10 text-emerald-600" />

              <h2 className="mt-4 text-l font-semibold text-gray-900">
                Paid Ads Marketing
              </h2>

              <p className="mt-1 text-sm text-gray-900">
                Generate quality leads and convert them into customers with
                highly targeted ads for <em>quick short-term</em> success.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-emerald-500/10 hover:shadow-emerald-500/10 hover:bg-emerald-50"
              href="#"
            >
              <MagnifyingGlassCircleIcon className="size-10 text-emerald-600" />

              <h2 className="mt-4 text-l font-semibold text-gray-900">
                Search Marketing
              </h2>

              <p className="mt-1 text-sm text-gray-900">
                Build a digital home, a place where your audience can learn more
                and discover the latest news about your brand.
              </p>
            </a>

            <h2 className="grid-col-span-3 grid px-2 text-center text-xl font-semibold leading-7 col-span-1 md:col-span-3 lg:col-span-3 -mb-6">
              Content Generation Solutions
            </h2>

            <a
              className="block rounded-xl hover:bg-emerald-50 border border-gray-200 p-8 shadow-xl transition hover:border-emerald-500/10 hover:shadow-emerald-500/10"
              href="#"
            >
              <SwatchIcon className="size-10 text-emerald-600" />

              <h2 className="mt-4 text-l font-semibold text-gray-900">
                Graphic Design
              </h2>

              <p className="mt-1 text-sm text-gray-900">
                Create stunning visuals that make your brand stand out from the
                crowd and bring your message to life.
              </p>
            </a>

            <a
              className="block rounded-xl hover:bg-emerald-50 border border-gray-200 p-8 shadow-xl transition hover:border-emerald-500/10 hover:shadow-emerald-500/10"
              href="#"
            >
              <PlayCircleIcon className="size-10 text-emerald-600" />

              <h2 className="mt-4 text-l font-semibold text-gray-900">
                Video/Motion Graphics
              </h2>

              <p className="mt-1 text-sm text-gray-900">
                The best way to send a message across multiple platforms with
                videos having a higher engagement and impact.
              </p>
            </a>

            <a
              className="block rounded-xl hover:bg-emerald-50 border border-gray-200 p-8 shadow-xl transition hover:border-emerald-500/10 hover:shadow-emerald-500/10 "
              href="#"
            >
              <UserGroupIcon className="size-10 text-emerald-600" />

              <h2 className="mt-4 text-l font-semibold text-gray-900">
                Lead Generation
              </h2>

              <p className="mt-1 text-sm text-gray-900">
                Complete package that generate quality leads that converts and a
                system to manage client data.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get A Quotation Today
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
