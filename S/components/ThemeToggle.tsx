"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "Sulaiman/S/components/ui/dropdown-menu";
import { Button } from "Sulaiman/S/components/ui/button";
import { Toggle } from "Sulaiman/S/components/ui/toggle";

export function ThemeToggle(): React.JSX.Element {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full w-[1.2rem] h-[1.2rem] bg-transparent border-none"
        >
          <Sun className="flex h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:hidden" />
          <Moon className="dark:flex hidden w-[1.2rem] h-[1.2rem] text-white" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:bg-slate-900 bg-white px-1 py-2 flex flex-col gap-1 rounded-md border-none "
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
