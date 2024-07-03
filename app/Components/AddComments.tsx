"use client";

import React from "react";
import { FieldValues, useForm, UseFormReset } from "react-hook-form";

type Props = {
  postId: string;
};

function AddComments({ postId }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name, email, comment } = data;

    const res = await fetch("./api/comments", {
      method: "POST",
      body: JSON.stringify({ name, email, comment, postId }),
    });

    if (!res.ok) {
      console.log("Failed");
      return;
    }
    const form = document.getElementById("comment-form");
    form.name.value = "";
    form.email.value = "";
    form.comment.value = "";
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
        <input {...register("postId")} type="hidden" />
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
          className={`p-4 mt-4 font-bold text-lg uppercase rounded-md bg-emerald-600 text-gray-200 hover:bg-emerald-900 hover:text-white ${isSubmitting ? "opacity-50" : ""}`}
        />
      </form>
    </>
  );
}

export default AddComments;
