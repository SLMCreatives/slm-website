"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { painPoints } from "@/lib/site";

export function Problem() {
  return (
    <section className="border-b border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Sound familiar?
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Marketing shouldn&apos;t feel like a black box.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Most founders and family businesses we meet have been burned
              before — by agencies that overcomplicate everything and can&apos;t
              point to a single new customer. We do the opposite.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {painPoints.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm text-card-foreground">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
