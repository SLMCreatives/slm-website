"use client";

import { motion } from "framer-motion";
import { founders } from "@/lib/site";

function initials(name: string) {
  return name.slice(0, 1).toUpperCase();
}

export function Team() {
  return (
    <section id="team" className="border-b border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            The team
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Founded by three specialists.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Each of us leads a craft. Together we cover the full story — from
            the first idea to the numbers that prove it worked.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary font-display text-xl font-bold text-primary-foreground">
                  {initials(founder.name)}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-primary">{founder.role}</p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground">{founder.bio}</p>
              <span className="mt-6 inline-flex w-fit rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {founder.specialty}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
