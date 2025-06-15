import React from "react";
import Panel from "../_components/Panel";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute z-20 dark:bg-black bg-white top-0 left-0 right-0">
        <div className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Panel />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
}
