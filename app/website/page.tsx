import React from "react";
import Image from "next/image";
import Header from "Sulaiman/app/Components/Header";
import Footer from "Sulaiman/app/Components/Footer";
import {
  ArrowUpRightIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import { Chip } from "@mui/material";
import Testimonial from "../Components/Testimonial";
import MasonryImageList from "../content/components/imageList";

const features = [
  {
    name: "Strategic Planning",
    description:
      "A clear marketing strategy that suits your brand with realistic targets, specific goals and timeframes. ",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Creative Content Production",
    description:
      "Creative support in designing and producing visuals (graphic design or videos) that are consistent with the rest of your brand identity.",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Content Scheduling",
    description:
      "A consistent schedule that ensures that your content is produced in a timely manner and that you never miss a festival, event or announcement.",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Audience Engagement",
    description:
      "Socializing with your audience by replying comments, sharing content and providing feedback in a consistent voice.",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Project Management",
    description:
      "Professional project management that ensures everything task is completed on time and in budget.",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Measurement & Reporting",
    description:
      "Monthly reports on the performance of the project and provide adjustments as well as suggestions for improvement.",
    icon: ArrowUpRightIcon,
  },
];

const faqs = [
  {
    question: "What does a social media manager do?",
    answer:
      "A social media content manager helps you to strategize your content production and create content that is consistent with your brand identity. They also ensure that your content is produced in a timely manner and that you never miss a festival, event or announcement.",
  },
  {
    question: "What are the benefits of hiring a social media content manager?",
    answer:
      "Strategic planning, creative content production, content scheduling, audience engagement, project management, measurement & reporting.",
  },
  {
    question:
      "Why should I hire a social media content manager if I already have a graphic designer?",
    answer:
      "Because most social teams have a high turn-around, and you don't want your social to be left hanging or change strategy everytime you need to hire a new graphic designer. Plus, it's a great way to maintain consistency.",
  },
  {
    question:
      "Are likes and shares the only way to measure the success of a social media content manager?",
    answer:
      "While 'engagement' is a popular measurement, it's not always the best way to measure success. Sometimes, a low engagement channel with high quality content is better that a high engagement channel with low quality content.",
  },
  {
    question:
      "What do I need to prepare before hiring you as a social media content manager?",
    answer:
      "All current marketing and brand materials that you already have, social media accounts and any other relevant documents that would help me get a clear picture of your brand identity and marketing strategy.",
  },
];

export default function Website() {
  return (
    <main className="bg-white px-4">
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
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center text-balance">
              <h1 className="py-8 -my-8 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 sm:text-6xl">
                Website Development & Design
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Hire your very own{" "}
                <span className="text-emerald-600 font-bold">
                  Web Developer
                </span>{" "}
                to grow and manager your corporate website.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/form"
                className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Get FREE Quotation
              </a>

              <a
                href="#elements"
                rel="noreferrer"
                className="scroll-behavior-smooth text-sm font-semibold leading-6 text-gray-900"
                id="scroll"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white justify-center items-center">
        <MasonryImageList />
      </div>

      {/* ELEMENTS */}
      <div className="bg-white py-24 sm:py-32" id="elements">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">
              KEY ELEMENTS
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What to expect from hiring a Social Media Content Manager like me.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Here are some the things that I do for my existing clients.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-2xl font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100">
                      <feature.icon
                        className="h-5 w-5 text-emerald-600"
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

      {/* Initiation */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
              <h2 className="text-base font-semibold leading-7 text-emerald-600">
                INITIATION PROCESS
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                This is the general process of me taking over your socials.
              </p>
              <div className="my-6">
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="font-medium text-emerald-500 mb-1 sm:mb-0">
                    Discovery Meeting
                  </div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      Step 1
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
                      Step 2
                    </time>
                    <div className="text-xl font-bold text-slate-900">
                      Agreement of the scope of work
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
                      Step 3
                    </time>
                    <div className="text-xl font-bold text-slate-900">
                      Issue invoice and transfer of assets
                    </div>
                  </div>
                  <div className="text-slate-500">
                    Once initial payment is receives, you can proceed to
                    handover your digital assets along with control over your
                    social media channels.
                  </div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="font-medium text-emerald-500 mb-1 sm:mb-0">
                    Project Initiation
                  </div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      Step 4
                    </time>
                    <div className="text-xl font-bold text-slate-900">
                      The start of the project
                    </div>
                  </div>
                  <div className="text-slate-500">
                    I will begin work on crafting your social media strategy,
                    start designing your posts and schedule them on your
                    platforms.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      {/* PRICING */}
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto justify-center items-center">
        <div className="mx-auto mb-8 max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-600">
            PRICING PLANS
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compared with the competition
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm bg-white  hover:shadow-lg">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-bold text-gray-900">
                Fresh Gradutate
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">
                Cheaper but low value. Usually priced below
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-xl font-semibold text-gray-900 sm:text-4xl">
                  RM 900
                </strong>{" "}
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>

              <a
                className="mt-4 flex items-center justify-between rounded-xl border border-emerald-600 bg-slate-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-slate-900  focus:outline-none focus:ring active:text-white sm:mt-6"
                href="/form"
              >
                Convince Me{" "}
                <ChatBubbleBottomCenterTextIcon className=" ml-4 h-5 w-5" />
              </a>
            </div>

            <div className="p-6 ml-4 sm:px-8">
              <p className="text-md font-medium text-gray-900 sm:text-lg">
                What to expect:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-gray-700"> Free Template Designs </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-gray-700">
                    Generic Marketing Strategy
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-gray-700"> Outdated SEO Strategy </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-gray-700"> Basic Documentation </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-gray-700"> Office Hour Support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-gray-700"> Slow Responce Time </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm bg-white hover:bg-emerald-50/50 hover:shadow-lg">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-bold text-gray-900">
                My Starting Price
                <span className="sr-only">Plan</span>
                <Chip
                  label="BEST VALUE"
                  variant="filled"
                  size="small"
                  className="ml-14 p-2 rounded-full  bg-emerald-200 text-emerald-700 text-xs font-medium"
                />
              </h2>

              <p className="mt-2 text-gray-700">
                No extra charges, no hidden fees. My pricing starts at
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {" "}
                  RM 1,500{" "}
                </strong>

                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>

              <a
                className="mt-4 flex items-between justify-between rounded-xl hover:cursor-pointer border  border-emerald-600 bg-emerald-600 px-4 py-3 text-center text-sm font-medium text-white  hover:font-bold hover:bg-emerald-900 focus:outline-none focus:ring active:text-emerald-500 sm:mt-6 transition-all duration-500"
                href="/form"
              >
                Get Started{" "}
                <ChatBubbleBottomCenterTextIcon className=" ml-4 h-5 w-5" />
              </a>
            </div>

            <div className="p-6 ml-4 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-lg">
                What you get:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-emerald-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700">
                    {" "}
                    Custom Creative Designs{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-emerald-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700">
                    Trending Marketing Strategy
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-emerald-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700">
                    {" "}
                    Expert In Field Analysis{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-emerald-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700">
                    {" "}
                    Complete Project Documentation{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-emerald-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> 24/7 Support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-emerald-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> Quick Responce Time </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm bg-white  hover:shadow-lg">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-bold text-gray-900">
                Big DM Agency
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">
                For large agencies and big projects. Fees and quality vary from
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {" "}
                  RM 2k-RM 10k{" "}
                </strong>

                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>

              <a
                className="mt-4 flex items-center justify-between rounded-xl border border-emerald-600 bg-slate-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-slate-900  focus:outline-none focus:ring active:text-white sm:mt-6"
                href="/form"
              >
                Introduce Me{" "}
                <ChatBubbleBottomCenterTextIcon className=" ml-4 h-5 w-5" />
              </a>
            </div>

            <div className="p-6 ml-4 sm:px-8">
              <p className="text-md font-medium text-gray-900 sm:text-lg">
                What to expect:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {" "}
                    Complicated Initiaion Process{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-gray-700">
                    {" "}
                    Hidden Charges and Fees
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-gray-700"> Long Term Contract </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {" "}
                    Shared Customer Support{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-gray-700"> Expensive Solutions </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-gray-700"> Long Waiting Time </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:p-16 justify-center">
          <div className="space-y-4">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="my-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Make sure you have everything you need to begin our work together.
            </p>
            <div className="p-4 bg-white">
              {faqs.map((faq) => (
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 rounded-lg bg-slate-200/50 focus:bg-emerald-100 px-8 py-4 my-4 text-gray-900">
                    <h2 className="font-semibold">{faq.question}</h2>
                    <svg
                      className="size-5 text-emerald-600 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 px-8 my-4 leading-relaxed text-gray-700">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
