"use client";

import React from "react";
import { FieldValues, useForm, UseFormReset } from "react-hook-form";
import { useRouter } from "next/navigation";

type Props = {
  postId: string;
};

export default function AddComments({ postId }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name, email, comment, postId } = data;

    const res = await fetch("./api/comments", {
      method: "POST",
      body: JSON.stringify({ name, email, comment, postId }),
    });

    if (!res.ok) {
      console.log("Failed");
      return;
    }
    reset();

    router.refresh();
  };
  return (
    <>
      <form
        className="w-full flex flex-col bg-slate-100 px-8 py-8 rounded-xl gap-4 mt-4"
        id="comment-form"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <p className="text-xl font-semibold my-2 leading-relaxed text-gray-800">
          Leave a comment:
        </p>
        <input {...register("postId")} type="hidden" value={postId} />
        <label htmlFor="name" className="text-md font-md -mb-1">
          Name:
        </label>
        <input
          {...register("name", { required: true })}
          className="p-2 rounded-md shadow-sm border border-gray-300 focus:border-emerald-100"
        />
        {errors.name && (
          <p className="text-red-500 text-xs -mt-10 px-2 text-right">
            Name is required.
          </p>
        )}
        <label htmlFor="email" className="text-md font-md -mb-1 ">
          Email:
        </label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
          })}
          className="p-2 rounded-md shadow-sm border border-gray-300 focus:border-emerald-100"
        />
        {errors.email && (
          <p className="text-red-500 text-xs -mt-10 px-2 text-right">
            Valid email is required.
          </p>
        )}
        <label htmlFor="comment" className="text-md  font-md -mb-1 ">
          Your Comment:
        </label>
        <input
          {...register("comment", { required: true, minLength: 2 })}
          className="p-2 rounded-md shadow-sm border border-gray-300 focus:border-emerald-100"
        />
        {errors.comment && (
          <p className="text-red-500 text-xs -mt-10 px-2 text-right">
            Enter at least 2 characters.
          </p>
        )}
        <input
          type="submit"
          value={isSubmitting ? "Submitting..." : "Submit"}
          disabled={isSubmitting}
          className={`py-2 mt-4 font-light text-lg tracking-widest uppercase rounded-md bg-emerald-600 text-gray-200 hover:bg-emerald-900 hover:text-white ${isSubmitting ? "opacity-50" : ""}`}
        />
      </form>
    </>
  );
}