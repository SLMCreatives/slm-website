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
  return (
    <div className="flex flex-col gap-4 pr-12 py-12">
      <div className="flex flex-col gap-2 items-start group">
        <p className="text-4xl font-bold">{post.title}</p>
        <div className="flex flex-row justify-between w-full">
          <p className="text-sm font-light opacity-60">
            Published On: {post.publishedAt}
          </p>
          <p className="text-sm font-light opacity-60">
            Reading Time: {post.readingTime / 60} mins
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl">{post.body}</p>
      </div>
      <LikeButton post={post} />
    </div>
  );
};
