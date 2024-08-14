export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

/* import React from "react";
import { ThemeToggle } from "Sulaiman/app/_components/ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute top-0 w-screen flex bg-white dark:bg-black dark:text-white z-10">
        {children}
      </div>
    </>
  );
}
 */
