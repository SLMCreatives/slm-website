import Link from "next/link";
import { SanityDocument } from "next-sanity";
import HeaderBlog from "../_components/Header";
import Footer from "../_components/Footer";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { Metadata } from "next";
import { client, sanityFetch } from "../sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const POSTS_QUERY = `*[_type == "post" && !(_id in path("drafts.**")) ]{title, body, author->, slug, excerpt, date, mainImage, publishedAt, categories[]->, category->}| order(publishedAt desc)`;

const builder = imageUrlBuilder(client);

function urlForPosts(source: SanityImageSource) {
  return builder.image(source).width(200).height(200).url();
}

function dateFormated(publishedAt: string) {
  const dateFormated = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    formatMatcher: "best fit",
  });
  return dateFormated;
}

export const metadata: Metadata = {
  title: "Digital Marketing Tips | SLM Creatives",
  description:
    "The latest trends and valuable insight on current digital marketing tips by a freelancer creative digital marketer in Malaysia",
  openGraph: {
    title: "Digital Marketing Tips | SLM Creatives",
    description:
      "The latest trends and valuable insight on current digital marketing tips by a freelancer creative digital marketer in Malaysia",
  },
};

export default async function IndexPage() {
  const posts = await sanityFetch<SanityDocument[]>({ query: POSTS_QUERY });
  return (
    <main>
      <HeaderBlog />

      <div className="flex justify-center items-center bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 lg:pt-32 lg:pb-12">
            <div className="text-left lg:text-center text-balance ml-4">
              <h1 className="py-8 -my-8 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 sm:text-6xl">
                Digital Marketing Blog Malaysia
              </h1>
              <p className="mt-4 text-md lg:text-lg text-gray-600">
                Get the latest trends and valuable digital marketing tips.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 px-6 md:px-24 lg:px-12 py-8 bg-linear-gradient bg-gradient-to-b from-white to-slate-200">
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-1 lg:gap-12 lg:w-[70%] w-[95%] mx-auto">
          {posts.map((post: SanityDocument) => (
            <li
              className="bg-slate-100 shadow-lg items-between justify-between hover:ring-1 hover:ring-emerald-600 hover:shadow-xl p-4 lg:p-4 ring-1 ring-gray-200 rounded-lg cursor-pointer"
              key={post?._id}
            >
              <Link
                className="link:text-emerald-600 link:visited:text-emerald-300 cursor-pointer"
                href={`/blog/posts/${post?.slug.current}`}
              >
                <div
                  className="sm:flex-flow-row  md:flex-auto lg:flex  lg:my-4  mx-auto items-center justify-left w-full"
                  key={post?._id}
                >
                  <Image
                    className="hidden lg:block lg:max-h-36 w-1/2 lg:mr-12 lg:ml-8 object-cover rounded-lg"
                    src={urlForPosts(post?.mainImage) || "/logo.png"}
                    alt={post.title}
                    width={500}
                    height={1000}
                  />
                  <div className="flex flex-col w-full p-2 mr-4">
                    <h2 className="text-xl text-gray-800 lg:text-2xl leading-2 font-semibold line-clamp-2">
                      {post?.title}
                    </h2>
                    <p className="parse text-gray-500 lg:mr-8 text-sm mt-4 font-light line-clamp-3">
                      {post?.excerpt}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-sm font-light  text-gray-700">
                        By {post?.author?.name} |{" "}
                        {dateFormated(post.publishedAt)}
                      </p>
                      <p className="text-emerald-600 link:text-emerald-600 visited:text-emerald-600 text-sm text-right">
                        Read Now
                        <ArrowRightIcon className="inline text-emerald-600 ml-4 w-4 h-4 my-auto" />
                      </p>
                    </div>
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