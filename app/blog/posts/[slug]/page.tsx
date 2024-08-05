import * as React from "react";
import { PortableText } from "next-sanity";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "../../../sanity/lib/client";
import Image from "next/image";
import type { Metadata } from "next";
import CodeBlock from "../../../_components/CodeBlock";
import ShareButtons from "../../../_components/ShareButtons";
//import LikeButton from "Sulaiman/app/_components/LikeButton";

const POST_QUERY = `*[
  _type == "post" &&
  slug.current == $slug
][0]{
  _id,
  slug,
  title,
  publishedAt,
  _updatedAt,
  likes,
  body,
  author->,
  mainImage,
    categories[]->,
    category->,
  excerpt,
 "comments": *[_type == "comments" && post._ref == ^._id && approved == true] | order(_createdAt desc){
  _id,
  name,
  email,
  comment,
  _createdAt,
  approved,
  post->{
    title,
    _ref,
} 
  }
}`;

export async function generateStaticParams() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: `*[_type == "post"]{slug} `,
  });
  return posts.map((post: SanityDocument) => ({
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

  const { title, excerpt, mainImage } = post || {};
  return {
    title,
    description: excerpt,
    authors: [{ name: "Sulaiman Shafiq" }],
    creator: "Sulaiman Shafiq",
    robots: { index: true, follow: true, noarchive: true },
    openGraph: {
      title,
      description: excerpt,
      url: `https://slmcreatives.com/blog/posts/${params.slug}`,
    },
    twitter: {
      title,
      description: excerpt,
      images: [urlForImage(mainImage).width(1200).height(630).url()],
    },
  };
}

const builder = imageUrlBuilder(client);
const urlForImage = (source: any) => {
  return builder.image(source);
};

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
    _id,
    _updatedAt,
    publishedAt,
    body,
    likes,
    author,
    categories,
    mainImage,
    slug,
    url,
  } = post || {};

  const comments = post?.comments || [];

  function approvedComments(comment: any) {
    return comments.approved === true;
  }

  const ptComponents = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) {
          return null;
        }

        return (
          <Image
            alt={value.alt || " "}
            loading="lazy"
            height={value.height || 500}
            width={value.width || 500}
            src={urlForImage(value).url()}
            style={{
              width: "100%",
              marginBottom: "24px",
            }}
          />
        );
      },
      code: ({ value }: any) => {
        return <CodeBlock value={value} />;
      },
    },
  };

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

  const urlCurrent = `https://slmcreatives.com/blog/posts/${params.slug}`;

  return (
    <section className="flex flex-row px-8 mt-8">
      {post ? (
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold sticky top-0 bg-white dark:bg-black py-4 z-10">
            {title}
          </h1>
          <div className="flex flex-row gap-4 justify-between -mt-4">
            <p className="text-sm opacity-50">Published on: {dateFormated}</p>
            <p className="text-sm opacity-50">Updated on: {upFormated}</p>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={imagesrc}
              alt={title || "Article"}
              className="aspect-video rounded-lg object-cover w-full"
              height="620"
              width="1100"
              key={mainImage}
            />
          </div>
          <div className="text-left">
            {body && body.length > 0 && (
              <div key={body} className="prose dark:prose-invert text-md">
                <PortableText
                  value={body}
                  components={ptComponents}
                  onMissingComponent={false}
                  key={body}
                />
              </div>
            )}
          </div>
          {/* <div className="flex flex-row items-center justify-between">
            {post.likes < 1 ? (
              <>
                <p className="text-sm opacity-50">No likes yet</p>
              </>
            ) : (
              <p className="text-sm opacity-50">{post.likes} likes</p>
            )}
            <LikeButton likecount={post.likes} />
          </div> */}
          <hr></hr>
          <div className="mt-4 p-2 grid grid-cols-1 gap-24 text-left ">
            <div className="flex flex-row items-center justify-between gap-6">
              <div className="flex flex-row gap-4 items-center">
                <Image
                  src={urlForImage(author?.image).width(200).height(200).url()}
                  className="w-12 h-12 rounded-full"
                  alt={author?.name}
                  key={author?.image}
                  width={300}
                  height={300}
                />
                <div className="flex flex-col justify-center">
                  <p
                    key={author?.name}
                    className="text-lg font-light opacity-90"
                  >
                    <span className="font-bold">{author?.name}</span>
                  </p>{" "}
                  <em className="text-sm opacity-70">Web Dev Freelancer</em>
                </div>
              </div>
              <div className="flex justify-end">
                <ShareButtons urlR={urlCurrent} titleR={title} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
