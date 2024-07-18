import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/app/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SLM Creatives",
  description: "Creative Digital Marketing Freelancer in Selangor, Malaysia.",
  authors: [{ name: "Sulaiman Shafiq" }],
  creator: "SLM Creatives",
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
    description: "Creative Digital Marketing Freelancer in Selangor, Malaysia.",
    url: "https://slmcreatives.com",
    siteName: "SLM Creatives",
    images: [
      {
        url: "https://slmcreatives.com/logo.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <GoogleTagManager gtmId="G-NP6J43WF60" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
