import Link from "next/link";
import { SanityDocument } from "next-sanity";
import HeaderBlog from "../_components/Header";
import Footer from "../_components/Footer";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { Metadata } from "next";
import { client, sanityFetch } from "../sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POSTS_QUERY = `*[_type == "post" && !(_id in path("drafts.**")) ]{title, body, author->, slug, excerpt, date, mainImage, publishedAt, categories[]->, category->}| order(publishedAt desc)`;

const builder = imageUrlBuilder(client);

function urlForPosts(source: SanityImageSource) {
  return builder.image(source).width(200).height(200).url();
}

function dateFormated(publishedAt: string) {
  const dateFormated = new Date(publishedAt).toLocaleDateString("en-MY", {
    day: "numeric",
    month: "short",
    year: "numeric",
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
    <div className=" flex flex-col gap-8 my-8 px-4">
      <section className="flex flex-col text-nowrap gap-4 p-2">
        <h1 className="font-bold text-xl">Latest Articles:</h1>
      </section>
      <div className="flex px-4">
        <ul className="grid grid-cols-1 gap-6">
          {posts.map((post: SanityDocument) => (
            <li className="flex flex-col" key={post?._id}>
              <Link
                className="link:text-emerald-600 link:visited:text-emerald-300 cursor-pointer"
                href={`/blog/posts/${post?.slug.current}`}
              >
                <div className="grid grid-cols-5 gap-4 items-start group">
                  <p className="text-sm font-light opacity-60 text-nowrap justify-self-end px-4 py-1 group-hover:opacity-100 rounded-xl">
                    {dateFormated(post.publishedAt)}
                  </p>
                  <p className="text-sm col-span-4 group-hover:font-bold ">
                    {post?.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
