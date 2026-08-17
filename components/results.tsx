"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/site";

export function Results() {
  return (
    <section id="results" className="border-b border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Results
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Work we&apos;re proud of.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Real businesses, real outcomes. Here&apos;s a taste of what honest,
            focused marketing looks like in practice.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {caseStudies.map((c, i) => {
            const hasMetric = c.metric && c.metric !== "—";
            return (
              <motion.article
                key={c.client}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                <span className="inline-flex w-fit rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {c.industry}
                </span>

                {hasMetric ? (
                  <div className="mt-6">
                    <div className="font-display text-4xl font-bold text-primary">
                      {c.metric}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {c.metricLabel}
                    </div>
                  </div>
                ) : null}

                <h3 className="mt-6 font-display text-lg font-bold">
                  {c.client}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {c.summary}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
