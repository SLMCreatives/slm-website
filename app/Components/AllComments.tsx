import React from "react";
import { Comments } from "../utils/interface";

interface Props {
  comments: Array<Comments>;
}

const AllComments = ({ comments }: Props) => {
  const { _id, _createdAt } = comments[0] || {};
  const commentDateFormated = new Date(_createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div>
      <div className="bg-white mt-4 lg:mt-10 text-wrap leading-8 text-left w-full">
        <h2 className="text-xl font-semibold leading-tight">Comments:</h2>
        {comments?.length === 0 && <p>No comments yet</p>}
        {comments?.map((comment) => (
          <li key={_id} className="my-5 list-none mt-4">
            <p className="text-md my-2 bg-slate-100 rounded-xl p-4 leading-relaxed text-black">
              {comment?.comment}
            </p>
            <h4 className="text-sm mx-4 mb-4 float-left font-semibold leading-tight">
              {comment?.name}
            </h4>
            <p className="text-xs ml-2 text-gray-600/50 float-right">
              {" "}
              {commentDateFormated}
            </p>
            <hr className="my-4 mb-8" />
          </li>
        ))}
      </div>
    </div>
  );
};
export default AllComments;
