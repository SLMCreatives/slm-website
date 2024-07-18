import { Card, CardContent } from "@mui/material";
import Link from "next/link";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import { Metadata } from "next";

const products = [
  {
    id: 1,
    name: "Video Editing Ebook",
    href: "/store/products/video-editing-book",
    price: "48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const metadata: Metadata = {
  title: "Store | SLM Creatives",
  description: "Store",
};

export default function Store() {
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
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center text-balance">
              <h1 className="py-8 -my-8 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 sm:text-6xl">
                SLM Online Store
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Assets, Templates and Digital Products.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 sm:mt-0 px-6 md:px-24 lg:px-32 py-8 bg-white bg-linear-gradient bg-gradient-to-b from-white to-slate-200">
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-1 lg:gap-12 lg:w-[70%] w-[95%] mx-auto">
          {products.map((product) => (
            <li
              className="bg-white shadow-lg items-between justify-between hover:ring-1 hover:ring-emerald-600 hover:shadow-xl p-4 lg:p-4 ring-1 ring-gray-200 rounded-lg cursor-pointer"
              key={product?.id}
            >
              <Link
                className="link:text-emerald-600 link:visited:text-emerald-300 cursor-pointer"
                href={product?.href}
              >
                <div className="sm:flex-flow-row md:flex-auto lg:flex  lg:my-4  mx-auto items-center justify-left w-full">
                  <div className="flex flex-col w-full p-2 mr-4">
                    <h2 className="text-md text-gray-800 lg:text-3xl leading-2 font-semibold line-clamp-2">
                      {product?.name}
                    </h2>
                    <p className="parse text-gray-500 lg:mr-8 text-sm mt-4 font-light line-clamp-2">
                      {product?.description}
                    </p>
                    <p className="parse text-gray-500 lg:mr-8 text-sm mt-4 font-light line-clamp-2">
                      RM {product?.price}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </main>
  );
}
