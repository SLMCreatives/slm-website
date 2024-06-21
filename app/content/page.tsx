import React from "react";
import Image from "next/image";
import Header from "Sulaiman/app/Components/Header";
import Footer from "Sulaiman/app/Components/Footer";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import MasonryImageList from "Sulaiman/app/content/components/imageList";

const features = [
  {
    name: "Value Focused",
    description:
      "Post content that targets the rights type of audience, attack their pain points and brings valuable content.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Corporate Voice",
    description:
      "Professional copy that speaks in a consistent corporate voice.",
    icon: LockClosedIcon,
  },
  {
    name: "On-Brand Creatives",
    description:
      "Visuals that suit your corporate brand that is consistent with the rest of your brand.",
    icon: ArrowPathIcon,
  },
  {
    name: "Consistent Posting",
    description:
      "Never miss an important date, a new launch or a major announcement with scheduled posting.",
    icon: FingerPrintIcon,
  },
];

export default function Content() {
  return (
    <main>
      <Header />

      <div className="flex justify-center items-center bg-white min-h-screen">
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
          <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-56">
            <div className="text-center text-balance">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative px-7 rounded-full py-1 text-sm leading-6 bg-white text-gray-600 ring-1 ring-gray-900/10 hover:ring-emerald-400">
                  Learn about the next wave of digital marketing.{" "}
                  <a href="#" className="font-semibold text-emerald-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="py-8 -my-8 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 sm:text-6xl">
                Social Media Marketing for Businesses
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Build your social media platform with a clear marketing strategy
                that attracts the right target audience for your business.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/form"
                  className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Get FREE Quotation
                </a>
                <a
                  href="/blog"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-20 flex justify-center">
            <MasonryImageList />
          </div>

          <div
            className="relative inset-x-0 top-[calc(100%-13rem)] -z-10  transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">
              SOCIAL MEDIA
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Finding the best social media strategy for your business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We will help you find the right social media strategy for your
              business.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
              <h2 className="text-base font-semibold leading-7 text-emerald-600">
                ONBOARDING PROCESS
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                This is how I begin to manage your social media platforms.
              </p>
              <div className="my-6">
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="font-medium text-emerald-500 mb-1 sm:mb-0">
                    Discovery Meeting
                  </div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      Day 1
                    </time>
                    <div className="text-xl font-bold text-slate-900">
                      Get to know your business and brand identity
                    </div>
                  </div>
                  <div className="text-slate-500">
                    Sit down with me in a virtual meeting to get to know each
                    other, discuss the scope of work and goals.
                  </div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="font-medium text-emerald-500 mb-1 sm:mb-0">
                    Project Documentation
                  </div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      Day 3
                    </time>
                    <div className="text-xl font-bold text-slate-900">
                      Contract Agreement
                    </div>
                  </div>
                  <div className="text-slate-500">
                    Finalization of the contract details, project agreements,
                    scope of work and agreed payment amount.
                  </div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="font-medium text-emerald-500 mb-1 sm:mb-0">
                    Invoice and Payment
                  </div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      Day 7
                    </time>
                    <div className="text-xl font-bold text-slate-900">
                      Issue Invoice and Payment Terms
                    </div>
                  </div>
                  <div className="text-slate-500">
                    Project will be initiated after the first payment is made.
                  </div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="font-medium text-emerald-500 mb-1 sm:mb-0">
                    Project Initiation
                  </div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      Week 2
                    </time>
                    <div className="text-xl font-bold text-slate-900">
                      Work Begins
                    </div>
                  </div>
                  <div className="text-slate-500">
                    I will begin work on crafting your social media strategy,
                    start designing your posts and schedule them on your
                    platofrms.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
