"use client";

import { Key, useState } from "react";

import axios from "axios";
import { StarIcon } from "@heroicons/react/24/outline";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular?include_adult=true&language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmJkY2MzNGY0MDI1NGRiZDZmODczNWE1ZGQ3Y2E4MCIsIm5iZiI6MTcyMTI1MTE2My4wMzYyMjcsInN1YiI6IjY2OTgzNDc5ODY5MGZiOTBjNWI0ZDEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMouRlRyZUNugIqcf_5v6k2CjT8Dla822jRUsx9obKA",
  },
};
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    movies.push(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

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

const movies: any[] = [];

export default function Minder() {
  const [genre, setGenre] = useState<string>("");
  const [movies, setMovies] = useState<any[]>([]);

  return (
    <main className="flex flex-col p-6 justify-center bg-black">
      <div className="flex flex-col p-6 justify-center bg-black">
        <h1 className="text-white font-black text-6xl">Minder</h1>
        <p className="text-white">Find the perfect movie to watch</p>
      </div>

      <div className="flex lg:flex-col flex-row p-6 justify-left bg-black">
        <form
          className="flex gap-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <select
            name="genres"
            id="genres"
            className="bg-slate-800 text-white p-4"
            onChange={(event) => {
              event.preventDefault();
              console.log(event.target.value);
              setGenre(event.target.value);
            }}
          >
            {genres_names.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={(event) => {
              event.preventDefault();

              console.log(genre);
              const options2 = {
                method: "GET",
                url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=1&with_genres=${genre}`,
                headers: {
                  accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmJkY2MzNGY0MDI1NGRiZDZmODczNWE1ZGQ3Y2E4MCIsIm5iZiI6MTcyMTI1MTE2My4wMzYyMjcsInN1YiI6IjY2OTgzNDc5ODY5MGZiOTBjNWI0ZDEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMouRlRyZUNugIqcf_5v6k2CjT8Dla822jRUsx9obKA",
                },
              };
              axios
                .request(options2)
                .then(function (response) {
                  console.log(response.data);
                  setMovies(response.data.results);
                })
                .catch(function (error) {
                  console.error(error);
                });
            }}
          >
            Discover
          </button>
        </form>
      </div>
      <section className="flex flex-col p-6 justify-center bg-black">
        <h3 className="text-white text-3xl font-bold">Latest Movies</h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-10">
          {movies.length === 0 && (
            <p className="text-white h-screen">Pick a genre</p>
          )}
          {movies.length !== 0 &&
            movies.map((movie, index) => (
              <div
                className="p-6 justify-center bg-slate-800 rounded-lg group"
                key={index}
              >
                <img
                  className="rounded-lg"
                  src={
                    "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                  }
                  alt="images"
                />
                <div
                  className="flex flex-col gap-4 mt-6 justify-between"
                  key={movie.title}
                >
                  <p className="text-white text-2xl font-serif font-semibold">
                    {movie.title}
                  </p>
                  <p className="text-gray-200 text-xs flex gap-1">
                    {movie.genre_ids.map((genreId: Key | null | undefined) => {
                      const genre = genres_names.find(
                        (items) => items.id === genreId
                      );

                      return (
                        <span
                          className="bg-slate-600 px-2 py-1 rounded-xl"
                          key={genreId}
                        >
                          {genre ? genre.name : "Unknown"}
                        </span>
                      );
                    })}
                  </p>
                  <p className="text-gray-200 text-xs font-bold">Summary:</p>
                  <p className="text-white text-sm -mt-2 font-light">
                    {movie.overview}
                  </p>
                  <p className="text-gray-200 text-xs font-bold">
                    Average Rating:
                  </p>
                  <div className="flex flex-row gap-2 items-center">
                    <StarIcon className="w-4 h-4 mb-1.5 text-white" />
                    <p className="text-white text-md -mt-2">
                      {" "}
                      {movie.vote_average.toFixed(1)} {"|"} {movie.vote_count}{" "}
                      ratings
                    </p>
                  </div>
                </div>
              </div>
            ))}{" "}
        </div>
      </section>
      <p className="text-white text-xs relative bottom-2 left-2 opacity-50">
        *This product uses the TMDB API but is not endorsed or certified by
        TMDB.
      </p>
    </main>
  );
}
