"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What we do
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Three crafts, one story.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Great brands aren&apos;t built in silos. We bring brand, marketing
            technology and social together so every touchpoint tells the same
            story.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="font-display text-2xl font-bold">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{service.blurb}</p>
              <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-6 text-sm">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
