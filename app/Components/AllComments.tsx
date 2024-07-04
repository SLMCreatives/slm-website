import React from "react";
import { Comments } from "../utils/interface";
import { sanityFetch } from "../sanity/lib/client";
import { SanityDocument } from "next-sanity";
import comments from "../sanity/schemaTypes/comments";
import { client } from "../sanity/lib/client";

interface Props {
  comments: Comments[];
}

const AllComments = (comments: Props ) => {
  const { name, email, comment, _createdAt } = comments || {};
  const commentDateFormated = new Date(_createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  console.log(comments, "comments");
  return (
    <div className="bg-white mt-4 lg:mt-10 text-wrap leading-8 text-left w-full">
      <h2 className="text-xl font-semibold leading-tight">Comments:</h2>
      {comments?.length === 0 && <p>No comments yet</p>}
      {comments?.map (comment) => {
        <li key={_id} className="my-5 list-none mt-4">
          <p className="text-md my-2 bg-slate-100 rounded-xl p-4 leading-relaxed text-black">
            {comment}
          </p>
          <h4 className="text-sm mx-4 mb-4 float-left font-semibold leading-tight">
            {name}
          </h4>
          <p className="text-xs ml-2 text-gray-600/50 float-right">
            {" "}
            {commentDateFormated}
          </p>
          <hr className="my-4 mb-8" />
        </li>;
      })}
    </div>
  );
};

export default AllComments;
