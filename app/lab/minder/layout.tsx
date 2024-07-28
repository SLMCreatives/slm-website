import { Suspense } from "react";
import { ThemeProvider } from "../../../S/components/theme-provider";
import Loading from "./loading";

export default function MinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={<Loading />}>{children} </Suspense>
    </section>
  );
}
