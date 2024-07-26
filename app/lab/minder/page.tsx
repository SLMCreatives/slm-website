"use client";
import * as React from "react";
import { Key, Suspense, useEffect, useState } from "react";
import axios from "axios";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ScrollTop from "Sulaiman/app/_components/ScrollTop";
import { motion, useAnimate, useMotionValue, animate } from "framer-motion";
import {
  CheckIcon,
  ExternalLinkIcon,
  LinkIcon,
  Moon,
  PopcornIcon,
  Sun,
} from "lucide-react";
import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../S/components/ui/card";
import { ChartConfig, ChartContainer } from "../../../S/components/ui/chart";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "Sulaiman/S/components/ui/dropdown-menu";
import { Button } from "Sulaiman/S/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "Sulaiman/S/components/ui/popover";

const initialItems = [0, 1, 2, 3, 4];
const height = 70;
const padding = 10;
const size = 150;

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

export default function Minder() {
  const [movies, setMovies] = useState<any[]>([]);
  const [genre, setGenre] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  function handleReset() {
    setMovies([]);
    setPage(0);
    setGenre("");
  }

  function handleLoad(page: number, genre: string) {
    const options3 = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${page}&with_genres=${genre}`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmJkY2MzNGY0MDI1NGRiZDZmODczNWE1ZGQ3Y2E4MCIsIm5iZiI6MTcyMTI1MTE2My4wMzYyMjcsInN1YiI6IjY2OTgzNDc5ODY5MGZiOTBjNWI0ZDEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMouRlRyZUNugIqcf_5v6k2CjT8Dla822jRUsx9obKA",
      },
    };
    axios
      .request(options3)
      .then(function (response) {
        const movies = response.data.results;
        setMovies(movies);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const y = useMotionValue(0);

  const { top, bottom } = useConstraints(movies);
  const totalScroll = getHeight(movies);
  const scrollContainer = 150;

  async function onDelete(index: number) {
    const newMovies = [...movies];
    newMovies.splice(index, 1);

    const newScrollHeight = getHeight(newMovies);
    const bottomOffset = -y.get() + scrollContainer;
    const bottomWillBeVisible = newScrollHeight < bottomOffset;
    const isScrollHeightLarger = newScrollHeight >= scrollContainer;

    if (bottomWillBeVisible && isScrollHeightLarger) {
      animate(y, -newScrollHeight + scrollContainer);
    }

    setMovies(newMovies);
  }

  return (
    <main className="w-full h-[100vh]">
      <div className="w-full absolute z-10">
        <ScrollTop />
        <ThemeToggle />
      </div>
      <div className="flex flex-col p-6 pb-2 justify-center bg-white dark:bg-black text-slate-900 dark:text-white">
        <h1 className="font-black text-6xl">Movie Search by Genre</h1>
        <p className="pt-4">Find the perfect movie to watch</p>
      </div>

      <div className="flex lg:flex-col flex-row p-6 justify-left bg-white dark:bg-black text-slate-900 dark:text-white">
        <form
          className="flex gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            handleReset();
            setPage(1);
            handleLoad(page, genre);
            return setMovies([...movies]);
          }}
        >
          <select
            name="genres"
            id="genres"
            className="bg-slate-300 dark:bg-slate-700 p-4 font-black rounded uppercase "
            onChange={(event) => {
              event.preventDefault();
              setGenre(event.target.value);
            }}
          >
            {genres_names.map((genre) => (
              <option key={genre.id} value={genre.id} className="p-6">
                {genre.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-700 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-900 font-bold py-2 px-4 rounded"
          >
            Discover
          </button>
          {movies.length !== 0 && (
            <button
              type="submit"
              className="ring-1 ring-slate-300 hover:bg-slate-500 text-slate-300 font-bold py-2 px-4 rounded hover:text-white hover:ring-0"
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </form>
      </div>
      <section className="flex flex-col min-h-[90vh] p-6  justify-top bg-white dark:bg-black text-slate-900 dark:text-white relative">
        <h3 className=" text-2xl font-semibold">Results List</h3>
        {movies.length === 0 && (
          <p className="py-8 pb-[50%] opacity-50">
            Pick a Genre and hit the discover button
          </p>
        )}
        <Suspense fallback={<Loading />}>
          {movies.length !== 0 && (
            <div className="flex flex-col p-1 justify-center" key={page}>
              <div>
                <MovieCard
                  movies={movies}
                  total={movies.length}
                  onDelete={onDelete}
                  key={movies.length}
                />
              </div>
            </div>
          )}
        </Suspense>
        {movies.length > 1 && (
          <button
            className=" bg-slate-700 hover:bg-slate-800 font-bold py-3 rounded-xl mt-8"
            onClick={() => {
              setPage((prevPage) => prevPage + 1);
              handleLoad(page + 1, genre);
              return setMovies((prevMovies) => [...prevMovies, ...movies]);
            }}
          >
            Load More
          </button>
        )}
        <p className="text-xs relative bottom-1 opacity-50">
          *This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </section>
    </main>
  );
}

function MovieCard({ movies, index, onDelete }: any) {
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
      {movies.length === 0 && (
        <p className="text-white h-screen">Pick a genre</p>
      )}
      {movies.length !== 0 &&
        movies?.map((movie: any) => (
          <motion.div
            className="grid grid-cols-1 gap-8 mt-10"
            whileTap={{ cursor: "grabbing" }}
            layout
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
          >
            <motion.div
              className="p-6 flex flex-col justify-top bg-slate-50 ring-1 ring-slate-300 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl group"
              key={index}
              drag="x"
              dragDirectionLock
              onDragEnd={handleDragEnd}
              ref={scope}
            >
              <img
                className="rounded-lg ring-1 ring-slate-300 dark:ring-slate-700 shadow-md"
                src={
                  "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                }
                alt={movie.title}
              />
              <div
                className="flex flex-col gap-4 mt-6 justify-between"
                key={movie.title}
              >
                <p className=" text-2xl font-black">{movie.title}</p>
                <div className=" text-xs flex flex-wrap gap-2 overflow-auto scrollbar-hide">
                  <span className=" bg-slate-700 text-white dark:text-slate-700 dark:bg-slate-200 px-3 py-1 text-nowrap rounded-xl font-bold">
                    {movie.release_date.slice(0, 4)}
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
                <p className=" text-xs font-bold">Overview:</p>
                <p className=" text-sm -mt-2 font-light">{movie.overview}</p>
                <div className="grid grid-cols-6 gap-2 ">
                  <button
                    className="text-red-700 dark:text-red-200 hover:bg-red-100 font-bold py-3 rounded-xl col-span-2"
                    onClick={() => onDelete(scope.current.index)}
                  >
                    <XMarkIcon className="w-6 h-6 inline" />
                  </button>
                  {/* <button
                    className="text-green-700 dark:text-green-200  hover:bg-green-100 font-bold py-3 rounded-xl col-span-2"
                    onClick={() =>
                      window.open(
                        `https://www.themoviedb.org/movie/${movie.id}` + `_blank`
                      )
                    }
                  >
                    <CheckIcon className="w-6 h-6 inline" />
                  </button> */}
                  <RatingToggle rating={movie.vote_average} key={movie.id} />
                  <button
                    className="dark:text-slate-100 text-sm dark:ring-1 dark:ring-slate-700 py-3 rounded-xl col-span-2 hover:bg-slate-200 "
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
        ))}{" "}
    </motion.div>
  );
}

function getHeight(movies: any) {
  const totalHeight = movies.length * height;
  const totalPadding = (movies.length - 1) * padding;
  const totalScroll = totalHeight + totalPadding;
  return totalScroll;
}

function useConstraints(movies: any) {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    setConstraints({ top: size - getHeight(movies), bottom: 0 });
  }, [movies]);

  return constraints;
}

const chartData = [{ browser: "safari", visitors: 1260, fill: "#9ae6b4" }];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "#9ae6b4",
  },
} satisfies ChartConfig;
function Component(rating: any) {
  const data = (rating.rating / 10) * 360;
  const perct = (rating.rating / 10) * 100;
  const roundperct = Math.round(perct);
  return (
    <Card className="flex flex-col w-full bg-transparent border-none shadow-none">
      <CardContent className="flex-1 flex-col">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
          <RadialBarChart
            data={chartData}
            endAngle={data}
            innerRadius={80}
            outerRadius={130}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="fill-slate-900 shadow-2xl shadow-slate-900/50"
              polarRadius={[80, 74]}
            />
            <RadialBar dataKey="visitors" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-5xl font-bold"
                        >
                          {roundperct}
                          {"%"}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 25}
                          className="fill-white text-md mt-4"
                        >
                          TMDB Rating
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="absolute top-4 right-4 w-[1.2rem] h-[1.2rem]"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-slate-900 bg-white ring-0 focus:none" />
          <Moon className="absolute  w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-200 bg-black  focus:none" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:bg-slate-900 bg-white p-2 flex flex-col gap-2 rounded-md absolute isolate top-2 right-2"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
function RatingToggle(rating: any) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <motion.button
          className="dark:text-slate-100 text-sm dark:ring-1 dark:ring-slate-700 py-3 rounded-xl hover-ring-1 hover:bg-yellow-100 col-span-2"
          initial={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
        >
          <StarIcon className="w-5 h-5 inline text-yellow-500" />
        </motion.button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-transparent border-none shadow-none p-0"
        side="top"
        sideOffset={-50}
      >
        <motion.div
          className="relative w-[300px] h-[300px] flex"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Component rating={rating.rating} />
        </motion.div>
      </PopoverContent>
    </Popover>
  );
}
function Loading() {
  return <div className="animate-pulse">Loading...</div>;
}
