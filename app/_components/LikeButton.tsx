"use client";

import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "Sulaiman/S/components/ui/button";
import { createClient } from "../utils/supabase/client";

export default function LikeButton({ post }: any) {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const supabase = createClient();

  const handleLike = async (post: any) => {
    const newLikes = liked ? likes - 1 : likes + 1;
    const { error } = await supabase
      .from("posts")
      .update({ likes: newLikes })
      .eq("slug", post.slug)
      .select();
    console.log(newLikes);
    setLikes(newLikes);
    setLiked(!liked);
    return null;
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between gap-2">
        <p>{likes} likes</p>
        <Button variant="outline" size="icon" onClick={() => handleLike(post)}>
          {!liked && <ThumbsUpIcon className="h-4 w-4 text-green-600" />}
          {liked && <ThumbsDownIcon className="h-4 w-4 opacity-50" />}
        </Button>
      </div>
    </>
  );
}
