import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "/app/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "Sulaiman/S/components/theme-provider";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
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
      follow: true
    }
  }
};

import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
          <GoogleTagManager gtmId="G-NP6J43WF60" />
          <GoogleAnalytics gaId="G-NP6J43WF60" />
          <meta property="og:image" content="/cover_image.jpg" />
          <meta property="og:image:type" content="/cover_image.jpg" />
          <meta property="og:image:width" content="/cover_image.jpg" />
          <meta property="og:image:height" content="/cover_image.jpg" />
          <meta name="twitter:image" content="/cover_image.jpg" />
          <meta name="twitter:image:type" content="/cover_image.jpg" />
          <meta name="twitter:image:width" content="/cover_image.jpg" />
          <meta name="twitter:image:height" content="/cover_image.jpg" />
        </head>

        <body className={titillium.className}>
          <div className="bg-white dark:bg-black ">
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
