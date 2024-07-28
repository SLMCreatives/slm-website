"use client";
import { Suspense } from "react";
import { ThemeProvider } from "../../S/components/theme-provider";
import Loading from "./loading";

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </Suspense>
    </section>
  );
}
