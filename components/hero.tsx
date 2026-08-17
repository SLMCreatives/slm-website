"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      {/* accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-5 py-24 md:py-36">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-primary" />
          Digital marketing agency
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          We create
          <br />
          <span className="text-primary">stories</span> for brands.
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl"
        >
          Three founders, one studio. We blend creative design, digital
          marketing and social to turn companies into brands people remember.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-accent"
          >
            What we do
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
