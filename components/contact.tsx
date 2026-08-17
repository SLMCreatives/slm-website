import { Mail } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:py-32">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s tell your story.
          </h2>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Tell us a little about your brand and what you want to achieve.
            We&apos;ll get back to you within a couple of days.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4" />
            {siteConfig.email}
          </a>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
