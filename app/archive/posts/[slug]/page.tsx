import * as React from "react";
import { PortableText } from "next-sanity";
import { SanityDocument } from "next-sanity";
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
import AddComments from "../../../Components/AddComments";
import { text } from "stream/consumers";
import { type } from "os";

const POST_QUERY = `*[
  _type == "post" &&
  slug.current == $slug
][0]{
  _id,
  title,
  publishedAt,
  _updatedAt,
  body,
  author->,
  mainImage,
    categories[]->,
    category->,
  excerpt,
  comments[]->{
    _id,
    name,
    email,
    comment
  }
}`;

const COMMENT_QUERY = `*[_type == "comments" && post->slug.current == $slug  && approved == true] {
  _id,
  name,
  email,
  comment,
  _createdAt,
  post->{
    title,
  }
} | order(_createdAt desc)`;

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

const builder = imageUrlBuilder(client);
const urlForImage = (source: any) => {
  return builder.image(source);
};

const revalidate = 20;

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await sanityFetch<SanityDocument>({
    query: POST_QUERY,
    params,
  });

  const comments = await sanityFetch<SanityDocument[]>({
    query: COMMENT_QUERY,
    params,
  });

  const {
    title,
    _id,
    _updatedAt,
    publishedAt,
    body,
    author,
    categories,
    mainImage,
  } = post || {};

  const dateFormated = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const upFormated = new Date(_updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imagesrc = urlForImage(mainImage).width(800).height(450).url();

  console.log(post?._id);

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
                    <div className="sticky top-20">
                      <Image
                        src={imagesrc}
                        alt={title || "Article"}
                        className="mx-auto aspect-video rounded-xl object-center w-full text-md font-medium text-gray-900"
                        height="620"
                        width="1100"
                        key={mainImage}
                      />
                      <Breadcrumbs
                        aria-label="breadcrumb"
                        className="text-md mt-8 font-medium my-2 flex leading-6 text-gray-900"
                      >
                        <Link
                          href="/archive"
                          className="text-md font-medium text-emerald-700 hover:underline cursor-pointer"
                        >
                          Blog
                        </Link>
                        <Link
                          href="#"
                          className="text-md font-medium text-gray-700"
                          key={categories[0]?.title}
                        >
                          {categories[0]?.title}
                        </Link>
                        <Typography color="text.primary">...</Typography>
                      </Breadcrumbs>
                      <h2
                        key={title}
                        className="text-4xl  lg:text-4xl mt-4 lg:mt-8 text-balance space-y-4 text-left font-bold relative text-gray-900"
                      >
                        {title}
                        <hr className="w-full hidden my-4 lg:my-4 "></hr>
                        <div className="hidden lg:flex items-center my-4 pt-4 gap-4">
                          <CalendarDaysIcon className="inline text-emerald-600 w-4 h-4 mr-2 my-auto" />{" "}
                          <p
                            key={publishedAt}
                            className="text-sm font-light text-gray-900"
                          >
                            Published:{" "}
                            <span className="font-medium">
                              {dateFormated || "N/A"}
                            </span>
                          </p>{" "}
                        </div>
                        {dateFormated === upFormated && <p></p>}
                        {dateFormated !== upFormated && (
                          <div className="hidden lg:flex items-center my-4 gap-4">
                            <CalendarDaysIcon className="inline text-emerald-600 w-4 h-4 mr-2 my-auto" />{" "}
                            <p
                              key={_updatedAt}
                              className="text-sm font-light text-gray-900"
                            >
                              Updated:{" "}
                              <span className="font-medium">
                                {upFormated || "N/A"}
                              </span>
                            </p>{" "}
                          </div>
                        )}

                        <div className="flex justify-left items-center gap-6">
                          <Image
                            src={urlForImage(author?.image)
                              .width(200)
                              .height(200)
                              .url()}
                            className="w-20 h-20 mt-6 rounded-full"
                            alt={author?.name}
                            key={author?.image}
                            width={200}
                            height={200}
                          />
                          <div className="flex-row justify-center items-center">
                            <p
                              key={author?.name}
                              className="text-lg font-light text-gray-900"
                            >
                              <span className="font-medium">
                                {author?.name}
                              </span>
                            </p>{" "}
                            <p className="text-sm font-light text-gray-900">
                              Freelance Digital Marketer
                            </p>
                          </div>
                          {/*                           <p>{author?.bio.children.text}</p>
                           */}{" "}
                        </div>
                      </h2>
                    </div>
                  </div>
                  <div className="bg-slate-100 rounded-xl py-8 px-8 lg:px-12 lg:col-span-2 lg:mt-4 text-wrap leading-8 text-left">
                    {body && body.length > 0 && (
                      <div
                        key={body}
                        className="prose max-w-none text-md lg:text-md lg:mt-4 lg:px-4"
                      >
                        <PortableText value={body} onMissingComponent={false} />
                      </div>
                    )}
                  </div>
                  <div className="mt-4 p-2  lg:col-span-3 grid lg:grid-cols-2 gap-24 text-left ">
                    <div className="bg-white mt-4 m-4 lg:mt-10 text-wrap leading-8 text-left w-full">
                      <h2 className="text-xl font-semibold leading-tight">
                        Comments:
                      </h2>
                      <ul className="list-none">
                        {comments?.length === 0 && (
                          <p className="mt-4 -mb-20">No comments yet</p>
                        )}
                        {comments?.map(({ name, email, comment }) => (
                          <li key={comment._id} className="my-5 list-none mt-4">
                            <p className="text-md my-2  bg-slate-100 rounded-xl p-4 leading-relaxed text-black">
                              {comment}
                            </p>
                            <h4 className="text-sm ml-4 mb-4 float-right font-semibold leading-tight">
                              {name}
                              <a
                                href={`mailto:${email}`}
                                className="font-medium text-xs ml-2 text-gray-600/50"
                              >
                                / {email}
                              </a>
                            </h4>
                            <hr className="my-4 mb-8" />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <AddComments postId={_id} />
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
