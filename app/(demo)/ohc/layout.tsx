import React from "react";
import { ThemeToggle } from "Sulaiman/app/_components/ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute scroll-auto bg-white dark:bg-black dark:text-white top-0 left-0 right-0 z-10">
        {children}
      </div>
    </>
  );
}
