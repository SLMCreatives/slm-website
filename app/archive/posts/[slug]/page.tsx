import * as React from "react";
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "../../../sanity/lib/client";
import HeaderBlog from "../../../Components/HeaderBlog";
import Footer from "../../../Components/Footer";
import Link from "next/link";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  CalendarDaysIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import type { Metadata, ResolvingMetadata } from "next";

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
    category->,
    description
  }`;

export async function generateStaticParams() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: `*[_type == "post"]{slug}`,
  });
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: POST_QUERY,
    params,
  });
  const { title, excerpt } = post || {};
  return {
    title,
    description: excerpt,
    robots: { index: true, follow: true, noarchive: true },
    openGraph: {
      title,
      description: excerpt,
      url: `https://slmcreatives.com/archive/posts/${params.slug}`,
    },
    twitter: {
      title,
      description: excerpt,
    },
  };
}

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
  const { title, publishedAt, body, author, categories, mainImage } =
    post || {};

  const eventImageUrl = mainImage
    ? urlFor(mainImage)?.width(550).height(310).url()
    : null;

  const dateFormated = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <HeaderBlog />
      <div className="flex justify-center items-center bg-white">
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
          <div className="mx-auto max-w-full py-32 sm:py-48 lg:py-32">
            {post ? (
              <div className="text-center text-balance visited:text-slate-900">
                <h1 className="my-8 py-2 text-4xl hidden text-balance font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 lg:text-6xl lg:block">
                  Digital Marketing Tips 2024{" "}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-4 lg:mt-20 mx-auto items-top justify-center lg:mx-20 ">
                  <div className="col-span-1 mt-0 lg:mt-4 mx-4 lg:mx-0 ">
                    <div role="presentation" className="sticky top-10 relative">
                      <Image
                        src={
                          eventImageUrl || "https://via.placeholder.com/550x310"
                        }
                        alt={title || "Article"}
                        className="mx-auto aspect-video rounded-xl object-center w-full "
                        height="620"
                        width="1100"
                      />
                      <Breadcrumbs
                        aria-label="breadcrumb"
                        className="text-md mt-8 font-medium my-2 flex leading-6 text-gray-900"
                      >
                        <Link
                          href="/archive"
                          className="link:text-emerald-600 link:visited:text-emerald-300"
                        >
                          Blog
                        </Link>
                        <Link
                          href="#"
                          className="link:text-emerald-600 link:visited:text-emerald-300"
                        >
                          {categories[0]?.title}
                        </Link>
                        <Typography color="text.primary">...</Typography>
                      </Breadcrumbs>
                      <h2 className="text-4xl  lg:text-4xl mt-4 lg:mt-8 text-balance space-y-4 text-left font-bold relative text-gray-900">
                        {title}
                        <hr className="w-full my-4 lg:my-8 "></hr>
                        <div className="flex items-center my-4 pt-4 gap-4">
                          <CalendarDaysIcon className="inline text-emerald-600 w-4 h-4 mr-2 my-auto" />{" "}
                          <p className="text-sm font-medium text-gray-900">
                            Published On: {dateFormated}
                          </p>{" "}
                        </div>
                        <div className="flex items-center justify-start mt-4 gap-4">
                          <UserCircleIcon className="inline text-emerald-600 w-4 h-4 mr-2 my-auto" />{" "}
                          <p className="text-sm font-medium text-gray-900">
                            Written By: {author?.name}
                          </p>{" "}
                        </div>
                      </h2>
                    </div>
                  </div>
                  <div className="bg-slate-100 rounded-xl py-8 px-8 lg:px-12 lg:col-span-2 lg:mt-4 text-wrap leading-8 text-left">
                    {body && body.length > 0 && (
                      <div className="prose max-w-none text-md lg:text-lg lg:mt-4 lg:px-8">
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
