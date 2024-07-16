"use client";
import React, { useState, useEffect } from "react";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "dotenv/config";
import Header from "../_components/Header";
import { Metadata } from "next";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// const apiKey = "AIzaSyDnQevxvnpRUMFuLT4A7OkNQ-RrP7LSpbw";

const GroceryListGenerator: React.FC = () => {
  const [recipeText, setRecipeText] = useState("");
  const [groceryList, setGroceryList] = useState("" || []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLinkChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRecipeText(event.target.value);
  };

  const enterKey = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event as any);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(false);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);

      async function run() {
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
        });
        const prompt = `
        Generate a childrens story in poem format for bedtime with the following things.
        ${recipeText}
        Make the poem as simple as possible but, it must rhyme. Also include a moral lesson attached to the end of the story.
        poem of 16 lines. Start each line on a new line. Localise to Malaysia.
        `;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const ingredients = response.text;
        // const data = JSON.parse(ingredients);
        setGroceryList(ingredients);
        setIsLoading(false);
        // console.log(data);
      }
      run();
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <main>
      <div className="flex-row justify-center items-center bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center text-balance">
              <h1 className="py-8 -my-8 text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl">
                Nursery Rhyme AI Generator
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Generate your own nursery rhymes for bedtime!
              </p>
              {/* Prompt Section */}

              <section className="hero flex-row gap-4 mt-10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <label htmlFor="recipeText"></label>
                  <textarea
                    id="recipeText"
                    value={recipeText}
                    onChange={handleLinkChange}
                    onKeyDown={(e) => e.key === "Enter" && enterKey(e)}
                    required
                    className="border border-slate-400 bg-slate-600 text-gray-300 rounded-xl p-2"
                    placeholder="Write down any particular things you want to have in your story."
                  />
                  <button
                    type="submit"
                    className="py-4 mt-4 bg-slate-500 text-white rounded-xl disabled:bg-slate-900"
                    disabled={isLoading}
                  >
                    {isLoading ? "Generating..." : "Generate Nursery Rhyme"}
                  </button>
                </form>
                {error && <p className="error">{error}</p>}
              </section>

              {/* Display the generated grocery list */}
            </div>
            {groceryList.length === 0 && <p></p>}
            {groceryList.length > 0 && (
              <section className="flex-row gap-4 mt-12 h-[100vh] justify-center items-center">
                <div className="p-8 mt-4 rounded-xl text-center">
                  <em className="text-3xl text-slate-100 leading-10 font-serif text-italic">
                    "{groceryList}"
                  </em>
                </div>
              </section>
            )}
          </div>
          <div className="w-[100vw] fixed bottom-6 justify-between items-center opacity-50">
            <p className="text-gray-300 text-xs">Generated using GenimiAI</p>
            <p className="text-gray-300 text-xs">
              Made by <a href="/">SLM Creatives</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroceryListGenerator;
