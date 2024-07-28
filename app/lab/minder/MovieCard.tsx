"use client";
import * as React from "react";
import { Key } from "react";
import { PlayIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, useAnimate } from "framer-motion";
import { ExternalLinkIcon, Star } from "lucide-react";
import { Suspense } from "react";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const genres_names = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV-Film",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export function MovieCard({ movies, index, onDelete }: any) {
  const [scope, animate] = useAnimate();

  function handleDragEnd(_: any, info: any) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      animate(scope.current, { x: "-100%" }, { duration: 0.2 });
      setTimeout(() => onDelete(scope.current.index), 200);
    } else {
      animate(scope.current, { x: 0, opacity: 1 }, { duration: 0.5 });
    }
  }
  return (
    <motion.div>
      {movies.length !== 0 &&
        movies?.map((movie: any) => (
          <Suspense fallback={<div>Loading...</div>}>
            <motion.div
              className="grid grid-cols-1 gap-8 p-2 pb-32"
              whileTap={{ cursor: "grabbing" }}
              layout
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 30,
              }}
            >
              <motion.div
                className="p-8 flex flex-col justify-top bg-slate-50 ring-1 ring-slate-300 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl group shadow-xl dark:shadow-gray-500/50"
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                drag="x"
                dragDirectionLock
                onDragEnd={handleDragEnd}
                ref={scope}
                viewport={{ once: true }}
              >
                <div className="flex flex-row">
                  <img
                    className="rounded-lg ring-1 ring-slate-300 dark:ring-slate-700 shadow-md"
                    src={
                      "https://image.tmdb.org/t/p/original" +
                      movie.backdrop_path
                    }
                    alt={movie.title}
                  />
                </div>

                <div
                  className="flex flex-col gap-4 mt-6 justify-between"
                  key={movie.title}
                >
                  <p className=" text-2xl font-black">{movie.title}</p>
                  <div className=" text-xs flex flex-nowrap gap-2 overflow-auto scrollbar-hide">
                    <span className=" bg-slate-700 text-white dark:text-slate-700 dark:bg-slate-200 px-3 py-1 text-nowrap rounded-xl font-bold">
                      {movie.release_date.slice(0, 4)}
                    </span>
                    <span className=" bg-slate-700 text-white dark:text-slate-700 dark:bg-slate-200 px-3 py-1 text-nowrap rounded-xl font-bold">
                      {movie.vote_average.toFixed(1) * 10}%
                    </span>
                    {movie.genre_ids.map((genreId: Key | null | undefined) => {
                      const genre = genres_names.find(
                        (items) => items.id === genreId
                      );
                      return (
                        <span
                          className="bg-slate-200 dark:bg-slate-700 px-3 py-1 text-nowrap rounded-xl"
                          key={genreId}
                        >
                          {genre ? genre.name : "Unknown"}
                        </span>
                      );
                    })}
                  </div>
                  <p className=" text-sm font-bold">Overview :</p>
                  <p className=" text-sm -mt-2 font-light">
                    {movie.overview.slice(0, 150)} ...
                  </p>

                  <div className="grid grid-cols-6 gap-2 mt-2">
                    <button
                      className="text-red-700 dark:text-red-200 hover:bg-red-100 font-bold py-3 rounded-xl col-span-2"
                      onClick={() => onDelete(scope.current.index)}
                    >
                      <XMarkIcon className="w-6 h-6 inline" />
                    </button>
                    <button
                      className="dark:text-slate-100 text-sm py-3 rounded-xl col-span-2 hover:bg-slate-200 "
                      onClick={() =>
                        window.open(
                          `https://www.themoviedb.org/movie/${movie.id}` +
                            `_blank`
                        )
                      }
                    >
                      <PlayIcon className="w-6 h-6 inline text-green-700" />
                    </button>
                    <button
                      className="dark:text-slate-100 text-sm py-3 rounded-xl col-span-2 hover:bg-slate-200 "
                      onClick={() =>
                        window.open(
                          `https://www.themoviedb.org/movie/${movie.id}` +
                            `_blank`
                        )
                      }
                    >
                      <ExternalLinkIcon className="w-4 h-4 inline" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Suspense>
        ))}{" "}
    </motion.div>
  );
}
