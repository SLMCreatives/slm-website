"use client";

import React, { useState, useEffect } from "react";
import "dotenv/config";

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
      const response = await fetch("/api/nraigen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipeText: recipeText }),
      });
      const data = await response.json();
      if (!response.ok) {
        console.error(data.error);
      } else {
        setGroceryList(data.poem);
        setIsLoading(false);
      }
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
                    placeholder="Write down the first line of your poem."
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
            {groceryList && (
              <section className="flex-row gap-4 mt-12 justify-center items-center">
                <div className="lg:p-8 p-4 mt-4 rounded-xl text-center">
                  <em className="lg:text-3xl text-xl text-slate-100 leading-10 font-serif text-italic">
                    "{groceryList}"
                  </em>
                </div>
              </section>
            )}
          </div>
          <div className="fixed bottom-6 justify-between items-center opacity-50">
            <p className="text-gray-300 text-xs">
              Generated using Google Generative AI
            </p>
            <p className="text-gray-300 text-xs">
              Made by{" "}
              <a href="/" className="text-xs link-decoration-none">
                SLM Creatives
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroceryListGenerator;
