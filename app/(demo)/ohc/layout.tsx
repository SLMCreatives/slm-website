import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute bg-white w-full h-full top-0 left-0 right-0 mx-auto z-10">
        {children}
      </div>
    </>
  );
}
