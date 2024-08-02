"use client";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";
import { FormTwo } from "./FormTwo";

export function LandingPage({
  name,
  desc,
  examples,
  price,
}: {
  name: string;
  desc: string;
  examples: any;
  price: number;
}) {
  return (
    <motion.div
      className="flex flex-col w-full gap-4 p-2"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, stiffness: 100, type: "spring" }}
    >
      <div className="flex flex-col gap-4 mb-8">
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="text-wrap">{desc}</p>

        <div className="flex flex-row justify-between items-center">
          {price && (
            <p className="font-bold text-md">
              Starting Price:{" "}
              <span className="text-red-700 dark:text-red-300 text-sm">
                ${price}
              </span>
            </p>
          )}
          <FormTwo />
        </div>
      </div>
      <hr></hr>
      <p className="font-bold text-xl mt-8">Use Cases:</p>
      <ul className="flex flex-row flex-wrap gap-2 ">
        {examples &&
          examples.map((example: any) => (
            <li className=" py-4 rounded-md  justify-between flex flex-col gap-4 text-sm cursor-pointer">
              <div className="flex flex-col gap-1">
                <p className="font-extrabold text-lg">
                  <ArrowRightCircleIcon className="w-5 h-5 inline mr-2" />
                  {example.name}
                </p>
                <p className="text-md text-wrap">{example.desc}</p>
              </div>
              {example.img && (
                <img
                  src={example.img}
                  alt={example.name}
                  className="w-100 h-100 object-cover rounded-md ring-1 ring-slate-300 dark:ring-slate-700 drop-shadow-lg"
                />
              )}
            </li>
          ))}
      </ul>
      <div className="flex flex-row justify-between items-center">
        {price && (
          <p className="font-bold text-lg">
            Starting Price:{" "}
            <span className="text-sm font-bold text-red-700 dark:text-red-300">
              ${price}
            </span>
          </p>
        )}
        <FormTwo />
      </div>
    </motion.div>
  );
}
