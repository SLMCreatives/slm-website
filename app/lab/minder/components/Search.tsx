"use client";

import * as React from "react";
import { cn } from "../../../../S/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "../../../../S/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../../S/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../S/components/ui/popover";
import axios from "axios";
import { useState } from "react";

const genres = [
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

export default function Search({ search }: any) {
  console.log(search.genre);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [genre, setGenre] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  function handleLoad(page: number, genre: string) {
    setMovies([]);
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

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] justify-between dark:bg-slate-950 dark:hover:text-slate-200"
        >
          {value
            ? genres.find((genre) => genre.name === value)?.name
            : "Select genre..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0 dark:bg-slate-950">
        <Command>
          <CommandInput
            placeholder="Search genre..."
            className="p-2 focus:outline-none"
          />
          <CommandEmpty>No genre found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {genres.map((genre) => (
                <CommandItem
                  className=" p-2"
                  key={genre.id}
                  value={genre.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setGenre(currentValue);
                    setPage(1);
                    handleLoad(page, genre.id.toString());
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === genre.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {genre.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <Command></Command>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
