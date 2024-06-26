import Link from "next/link";
import { SanityDocument } from "next-sanity";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

import { client, sanityFetch } from "../sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POSTS_QUERY = `*[_type == "post"]{title, body, slug, date, mainImage, publishedAt}|order(date desc)`;
const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(client).image(source).auto("format").fit("max").url();
const dateFormated = (publishedAt: string) => {
  const dateFormated = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return dateFormated;
};

export default async function IndexPage() {
  const posts = await sanityFetch<SanityDocument[]>({ query: POSTS_QUERY });
  return (
    <main>
      <Header />

      <div className="flex justify-center items-center bg-white min-h-screen-1/2">
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
                Digital Marketing Tips
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get the latest trends and valuable digital marketing tips.
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
      <div className="flex flex-col gap-12 px-4 lg:px-32 py-8 bg-white justify-center items-center">
        <ul className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {posts.map((post) => (
            <li
              className="bg-slate-100 shadow-sm hover:bg-slate-50 hover:shadow-lg p-8 rounded-lg"
              key={post._id}
            >
              <Link
                className="text-emerald-600 visited:text-emerald-600 "
                href={`/archive/posts/${post?.slug.current}`}
              >
                <Image
                  className="w-full h-60 w-full mr-6 mb-4 object-cover rounded-lg"
                  src={urlFor(post.mainImage)}
                  alt={post.title}
                  width={500}
                  height={500}
                />
                <h2 className="text-xl font-semibold">{post?.title}</h2>
                <p className="text-gray-500 text-sm mt-2">
                  {dateFormated(post.publishedAt)}
                </p>

                <p className="text-gray-500 mt-2 text-sm ">
                  {post?.body[0].children[0].text}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </main>
  );
}
