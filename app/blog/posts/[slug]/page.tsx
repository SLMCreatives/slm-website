import * as React from "react";
import { PortableText } from "next-sanity";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "../../../sanity/lib/client";
import Image from "next/image";
import type { Metadata } from "next";
import CodeBlock from "../../../_components/CodeBlock";
import ShareButtons from "../../../_components/ShareButtons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "Sulaiman/S/components/ui/popover";
import { Button } from "Sulaiman/S/components/ui/button";
import { Form } from "Sulaiman/S/components/ui/form";
import { Label } from "Sulaiman/S/components/ui/label";
import { Input } from "Sulaiman/S/components/ui/input";
import { Textarea } from "Sulaiman/S/components/ui/textarea";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerPortal,
  DrawerTrigger,
} from "Sulaiman/S/components/ui/drawer";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "Sulaiman/S/components/ui/avatar";

const POST_QUERY = `*[
  _type == "post" &&
  slug.current == $slug
][0]{
  _id,
  slug,
  title,
  publishedAt,
  _updatedAt,
  readingTime,
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
    readingTime,
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
            <p className="text-sm">
              <span className="opacity-50">Reading Time:</span>{" "}
              {readingTime / 60} mins
            </p>
            <p className="text-sm">
              <span className="opacity-50">Published On: </span> {dateFormated}
            </p>
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
          <div className="flex flex-row items-center justify-between">
            <Popover>
              <PopoverTrigger>
                <Button variant="secondary" className="text-sm">
                  Continue the Discussion
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                side="top"
                className="dark:bg-black"
              >
                <div className="w-[300px] flex flex-col gap-2">
                  <p className="font-bold">Continue the Discussion </p>
                  <Label className="text-sm mt-2">Email:</Label>
                  <Input
                    className="w-full dark:bg-slate-800"
                    placeholder="name@example.com"
                    id="email"
                    name="email"
                  ></Input>
                  <Label className="text-sm mt-2">Comment:</Label>
                  <Textarea
                    className="w-full dark:bg-slate-800"
                    placeholder="Leave a comment"
                    id="comment"
                    name="comment"
                  ></Textarea>
                  <Button type="submit" variant="secondary" className="mt-2">
                    Submit
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <Drawer>
              <DrawerTrigger>
                <Button variant="secondary" className="text-sm">
                  Discussion Board
                </Button>
              </DrawerTrigger>
              <DrawerContent className="rounded-t-xl -ml-2 bg-black dark:bg-white text-white dark:text-black w-3/4 lg:w-1/4 md:w-1/2 h-[95%] ">
                <div className="flex flex-col px-12 pt-4 pb-10 gap-4">
                  <p className="text-xl font-bold">Discussion Board</p>
                  <hr></hr>
                  {comments && approvedComments(comments) ? (
                    <div className="flex flex-col gap-4 min-h-[300px]">
                      {comments.map((comment: any) => (
                        <CommentCard
                          name={comment.name}
                          comment={comment.comment}
                          updatedAt={comment.updatedAt}
                          key={comment._id}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col py-2 gap-4">
                      <div className="flex flex-row gap-4 justify-left items-start">
                        <em className="text-sm">So far all clear!</em>
                      </div>
                    </div>
                  )}
                </div>
                <DrawerClose className="text-sm" />
              </DrawerContent>
            </Drawer>
          </div>
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

const CommentCard = ({
  name,
  comment,
  updatedAt,
}: {
  name: string;
  comment: string;
  updatedAt: string;
}) => {
  return (
    <div className="flex flex-col py-2 gap-4">
      <div className="flex flex-row gap-4 justify-left items-start">
        <Avatar className="w-6 h-6">
          <AvatarImage src="/sulaiman.jpg" alt="profile" />
          <AvatarFallback>SS</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center">
          <p>{comment}</p>
          <p className="font-bold text-sm opacity-50">
            {name} {""}
            <span className="text-xs font-normal">on {updatedAt}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
