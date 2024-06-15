import React from "react";
import Image from "next/image";
import { Header } from "Sulaiman/components/header";
import { Footer } from "Sulaiman/components/footer";

export default function Blog() {
  return (
    <main>
      <Header />
      <div className="flex justify-center -mt-10 items-center bg-white min-h-screen">
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
                  SLM Creatives Blog
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Building digital brands for businesses with impactful
                  creatives and interactive digital experiences that drives
                  growth and conversion.
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
      </div>

      <div className="mx-8 my-4 grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center ">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="h-56 w-full object-cover"
          />
          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              10th Oct 2022{" "}
            </time>
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                How to position your furniture for positivity
              </h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="h-56 w-full object-cover"
          />
          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              10th Oct 2022{" "}
            </time>
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                How to position your furniture for positivity
              </h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="h-56 w-full object-cover"
          />
          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              10th Oct 2022{" "}
            </time>
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                How to position your furniture for positivity
              </h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
