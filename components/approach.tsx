"use client";

import { motion } from "framer-motion";
import { principles, processSteps } from "@/lib/site";

export function Approach() {
  return (
    <section id="approach" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            How we work
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Honest. Simple. Effective.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Those aren&apos;t just words on a page — they&apos;re the three
            promises we hold ourselves to on every project.
          </p>
        </div>

        {/* Principles */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="size-5" />
              </div>
              <h3 className="font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-bold tracking-tight">
            A simple way of working together
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative rounded-2xl border border-border p-6"
              >
                <span className="font-display text-sm font-bold text-primary">
                  {s.step}
                </span>
                <s.icon className="mt-4 size-6 text-foreground" />
                <h4 className="mt-4 font-display text-lg font-bold">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
