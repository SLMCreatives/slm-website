"use client";
import Link from "next/link";
import { Button } from "Sulaiman/S/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-12 items-left justify-center text-center h-screen px-6">
      <div className="flex flex-col text-left gap-2">
        <h2 className="text-6xl font-black">Oh no!</h2>
        <p className="text-md text-balance">
          I cound't find the page you're looking for. Here are some other links
          you might like.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant={"outline"}
          className="bg-slate-400 text-white hover:bg-slate-200 hover:text-black"
        >
          <Link href="/">Home</Link>
        </Button>
        <Button
          variant={"outline"}
          className="bg-slate-400 text-white hover:bg-slate-200 hover:text-black"
        >
          <Link href="/services">Services</Link>
        </Button>
        <Button
          variant={"outline"}
          className="bg-slate-400 text-white hover:bg-slate-200 hover:text-black"
        >
          <Link href="/blog">Blog</Link>
        </Button>
        <Button
          variant={"outline"}
          className="bg-slate-400 text-white hover:bg-slate-200 hover:text-black"
        >
          <Link href="#" onClick={() => alert("Coming Soon!")}>
            Labs
          </Link>
        </Button>
      </div>
    </div>
  );
}
