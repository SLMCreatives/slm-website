import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { createClient } from "../utils/supabase/server";

export default async function Posts() {
  const supabase = createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select()
    .order("publishedAt", { ascending: false });

  return (
    <div className="relative flex flex-col items-left justify-center ml-10">
      <p className="font-bold text-xl py-4">Latest Articles</p>
      <Archive posts={posts} />
    </div>
  );
}

const Archive = ({ posts }: any) => {
  return (
    <div className="flex flex-col gap-2 mx-auto px-12">
      {posts.map((post: any) => (
        <div key={post.id}>
          <li className="flex flex-col" key={post?._id}>
            <Link
              className="link:text-emerald-600 link:visited:text-emerald-300 cursor-pointer"
              href={`/blogtwo/${post.slug}`}
              key={post._id}
            >
              <div className="grid grid-cols-5 gap-2 items-start group">
                <em className="opacity-60 text-sm mr-2 justify-self-end group-hover:opacity-100">
                  {post.publishedAt &&
                    new Date(post.publishedAt).toLocaleDateString("en-MY", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                </em>
                <p className="text-sm group-hover:font-bold group-hover:text-cyan-500  hover:transition-all duration-[2500ms] ease-in-out col-span-4">
                  {post.title && post.publishedAt && <>{post.title}</>}
                </p>
              </div>
            </Link>
          </li>
        </div>
      ))}
    </div>
  );
};
