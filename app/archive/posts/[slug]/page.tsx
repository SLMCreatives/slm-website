import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "../../../sanity/lib/client";

import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[
    _type == "post" &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    publishedAt,
    body,
    author->,
    mainImage,
    categories[]->,
    category->
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await sanityFetch<SanityDocument>({
    query: POST_QUERY,
    params,
  });
  const {
    title,
    publishedAt,
    body,
    author,
    categories,
    category,
    slug,
    mainImage,
  } = post;
  const eventImageUrl = mainImage
    ? urlFor(mainImage)?.width(550).height(310).url()
    : null;
  const dateFormated = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="">
      <Header />
      <div className="flex justify-center items-center bg-white min-h-screen">
        <div className="relative isolate px-6 pt-140 lg:px-8">
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
          <div className="mx-auto max-w-full py-32 sm:py-48 lg:py-56">
            {post ? (
              <div className="text-center text-balance">
                <a href="/archive"> Back to blog</a>

                <h1 className="py-8 -my-2 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 sm:text-6xl">
                  {title}
                </h1>
                <div className="flex mt-4 items-center gap-4 justify-center">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {dateFormated}
                  </p>{" "}
                  |
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {categories[0]?.title}
                  </p>
                  |
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    By: {author?.name}
                  </p>{" "}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8 mx-auto items-top justify-center lg:mx-20 ">
                  <div className="col-span-1 mt-8">
                    <Image
                      src={
                        eventImageUrl || "https://via.placeholder.com/550x310"
                      }
                      alt={title || "Article"}
                      className="mx-auto aspect-video overflow-hidden sticky top-10 rounded-xl object-center w-full "
                      height="620"
                      width="1100"
                    />
                  </div>
                  <div className="bg-slate-50 rounded-xl py-8 px-12 lg:col-span-2 lg:mt-8 text-wrap leading-8 text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sticky top-10">
                      {title}
                    </h2>
                    {body && body.length > 0 && (
                      <div className="prose max-w-none text-lg mt-4">
                        <PortableText value={body} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
