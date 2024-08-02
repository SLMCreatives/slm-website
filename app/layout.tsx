import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "/app/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "./_components/theme-provider";
import NewHeader from "./_components/NewHeader";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SLM Creatives",
  description: "Sulaiman Shafiq - Freelance Web Developer and Designer",
  authors: [{ name: "Sulaiman Shafiq" }],
  creator: "Sulaiman Shafiq",
  keywords: ["Web Developer", "Web Designer", "Freelance Web Developer"],
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "SLM Creatives",
    description: "Sulaiman Shafiq - Freelance Web Developer and Designer",
    url: "https://slmcreatives.com",
    siteName: "SLM Creatives",
    images: [
      {
        url: "/cover_image.jpg",
        width: 1500,
        height: 500,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "SLM Creatives",
    card: "summary_large_image",
    description: "Sulaiman Shafiq - Freelance Web Developer and Designer",
    creator: "Sulaiman Shafiq",
    images: [
      {
        url: "/cover_image.jpg",
        width: 1500,
        height: 500,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <GoogleTagManager gtmId="G-NP6J43WF60" />
        <GoogleAnalytics gaId="G-NP6J43WF60" />
      </head>

      <body className={titillium.className}>
        <div className="bg-white dark:bg-black h-full pt-4">
          <div className="max-w-xl min-w-0 mx-auto">
            <ThemeProvider
              attribute="class"
              defaultTheme=""
              enableSystem
              disableTransitionOnChange
            >
              <NewHeader />
              {children}
            </ThemeProvider>
            <div className="flex flex-col gap-4 p-6 dark:bg-black">
              <hr></hr>
              <p className="relative bottom-0 text-xs opacity-50 text-right">
                {" "}
                Copyright © SLM Creatives 2024
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
