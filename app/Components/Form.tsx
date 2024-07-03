"use client";

import Link from "next/link";
import { useState } from "react";

const [formData, setFormData] = useState();

// Sets up our form states
const [isSubmitting, setIsSubmitting] = useState(false);
const [hasSubmitted, setHasSubmitted] = useState(false);

// Prepares the functions from react-hook-form
const { register, handleSubmit, watch, errors } = useForm();

// Function for handling the form submission

const onSubmit = async (data) => {
  setIsSubmitting(true);

  setFormData(data);

  try {
    await fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
      type: "application/json",
    });
    setIsSubmitting(false);
    setHasSubmitted(true);
  } catch (err) {
    setFormData(err);
  }
};
if (isSubmitting) {
  // Returns a "Submitting comment" state if being processed
  alert("Submitting comment...");
}
if (hasSubmitted) {
  // Returns the data that the user submitted for them to preview after submission
  alert("Thank you for your comment!");
}

export default function Form({ _id }) {
  return (
    <div className="w-full max-w-lg flex">
      <form
        className="w-full max-w-lg"
        action="/api/createComment"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap text-left -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input ref={register} type="hidden" name="_id" value={_id} />
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              name="name"
              placeholder="John Appleseed"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="email"
              name="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Comment
            </label>
            <textarea
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              type="text"
              name="comment"
              placeholder="Enter some long form content."
            />
          </div>
          <div className="w-full px-3">
            <button
              type="submit"
              className="shadow bg-emerald-600 hover:bg-emerald-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
function useForm(): {
  register: any;
  handleSubmit: any;
  watch: any;
  errors: any;
} {
  throw new Error("Function not implemented.");
}
