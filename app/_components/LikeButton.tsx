"use client";

import { useState } from "react";
import { SanityDocument } from "next-sanity";
import { client, sanityFetch } from "../sanity/lib/client";
import { post } from "../sanity/schemaTypes/post";

export default function LikeButton({ likecount }: { likecount: number }) {
  const [likes, setLikes] = useState(likecount);

  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          setLikes(likes + 1);
          await sanityFetch({
            query: `*[_type == "likes" && post._ref == "${post._id}"][0]`,
            params: { post },
          });
        }}
      >
        Like
      </button>
    </>
  );
}
