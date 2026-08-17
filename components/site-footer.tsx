import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">
            {siteConfig.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
