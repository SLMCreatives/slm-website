import Link from "next/link";
import { SanityDocument } from "next-sanity";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { Metadata } from "next";

import { client, sanityFetch } from "../sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const POSTS_QUERY = `*[_type == "post"]{title, body, author->, slug, date, mainImage, publishedAt, categories[]->, category->}|order(date desc)`;
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

export const metadata: Metadata = {
  title: "Digital Marketing Tips | SLM Creatives",
  description: "Archive",
  openGraph: {
    title: "Digital Marketing Tips | SLM Creatives",
    description: "Archive",
  },
};

export default async function IndexPage() {
  const posts = await sanityFetch<SanityDocument[]>({ query: POSTS_QUERY });
  return (
    <main>
      <Header />

      <div className="flex justify-center items-center bg-white">
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
          <div className="mx-auto max-w-2xl pt-24 lg:py-56">
            <div className="text-left lg:text-center text-balance ml-4">
              <h1 className="py-8 -my-8 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 sm:text-6xl">
                Digital Marketing Tips
              </h1>
              <p className="mt-4 text-md lg:text-lg text-gray-600">
                Get the latest trends and valuable digital marketing tips.
              </p>
            </div>
          </div>
          <hr className="lg:hidden mt-8"></hr>
        </div>
      </div>
      <div className="flex flex-col gap-12 sm:-mt-12 px-4 lg:px-32 py-8 bg-white justify-center items-center">
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <li
              className="bg-white shadow-sm items-center justify-center lg:justify-left hover:bg-slate-50 hover:shadow-lg p-8 lg:p-8 rounded-lg"
              key={post._id}
            >
              <Link
                className="link:text-emerald-600 link:visited:text-emerald-300"
                href={`/archive/posts/${post?.slug.current}`}
              >
                <div className="flex flex-row items-center justify-left">
                  <Image
                    className="hidden lg:block lg:h-32 lg:w-32 mr-6 object-cover rounded-sm"
                    src={urlFor(post.mainImage)}
                    alt={post.title}
                    width={500}
                    height={500}
                  />
                  <h2 className="text-xl text-gray-800 lg:text-3xl my-4 leading-2 font-semibold">
                    {post?.title}
                    <p className="text-gray-500 text-sm font-light mt-2">
                      {post?.categories[0].title} -{" "}
                      {dateFormated(post.publishedAt)}
                    </p>
                    <a
                      href={`/archive/posts/${post?.slug.current}`}
                      className="text-emerald-600 visited:text-emerald-600 text-sm"
                    >
                      Read Now
                      <ArrowRightIcon className="inline text-emerald-600 ml-4 w-4 h-4 my-auto" />
                    </a>
                  </h2>
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
