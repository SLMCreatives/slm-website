import LikeButton from "Sulaiman/app/_components/LikeButton";
import { createClient } from "../../utils/supabase/server";

const revalidate = 60;

export default async function Page({ params }: any) {
  const supabase = createClient();
  const { data: post } = await supabase
    .from("posts")
    .select()
    .eq("slug", params.slug)
    .single();
  return (
    <div className="relative flex flex-col items-left justify-center ml-10">
      <Article post={post} />
    </div>
  );
}

const Article = ({ post }: any) => {
  const dateFormated = (post: any) => {
    return new Date(post.publishedAt).toLocaleDateString("en-MY", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div className="flex flex-col gap-4 pr-12 py-12">
      <div className="flex flex-col gap-2 items-start group">
        <p className="md:text-8xl text-6xl font-bold font-serif dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-cyan-500 to-blue-500">
          {post.title}
        </p>
        <div className="flex flex-row justify-between w-full py-4 text-md md:text-lg">
          <p className=" font-light opacity-60">
            Published On: {dateFormated(post)}
          </p>
          <p className="font-light opacity-60">
            Reading Time: {post.readingTime / 60} mins
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl first-letter:text-3xl first-letter:font-black first-letter:font-serif font-bold leading-8">
          {post.body}
        </p>
      </div>
      <LikeButton post={post} />
    </div>
  );
};
