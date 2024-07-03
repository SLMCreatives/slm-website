"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";

type Props = {
  postId: string;
};

function AddComments({ postId }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const { name, email, comment } = data;

    const res = await fetch("./api/comments", {
      method: "POST",
      body: JSON.stringify({ name, email, comment, postId }),
    });

    if (!res.ok) {
      console.log("Failed");
      return;
    }
    if (res.ok) {
      console.log("Success");
    }
  };
  return (
    <>
      <form
        className="w-full flex flex-col bg-slate-100 p-4  rounded-xl gap-4 mt-4"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <input {...register("postId")} type="hidden" />
        <label htmlFor="name" className="text-lg px-2 -mb-1 ">
          Name
        </label>
        <input
          {...register("name", { required: true })}
          placeholder="Name"
          className="p-2 rounded-md"
        />
        {errors.name && <p>Name is required.</p>}
        <label htmlFor="email" className="text-lg px-2 -mb-1 ">
          Email
        </label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
          })}
          placeholder="Email"
          className="p-2 rounded-md"
        />
        {errors.email && <p>Valid email is required.</p>}
        <label htmlFor="comment" className="text-lg px-2 -mb-1 ">
          Comment
        </label>
        <input
          {...register("comment", { required: true, minLength: 2 })}
          placeholder="I think ..."
          className="p-2 rounded-md"
        />
        {errors.comment && <p>Enter at least 3 characters.</p>}
        <input
          type="submit"
          value="Submit"
          className="p-2 rounded-md bg-emerald-600 text-gray-200 hover:bg-emerald-900 hover:text-white"
        />
      </form>
    </>
  );
}

export default AddComments;
