import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/app/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

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

const onLoad = () => {
  console.log("GTM Loaded");
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
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KP6LQJP"
          strategy="afterInteractive"
        />
        <GoogleTagManager gtmId="GTM-KP6LQJP" />
      </head>
      <body className={inter.className}>
        {process.env.NODE_ENV === "production" && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KP6LQJP" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
        )}
        {children}
      </body>
    </html>
  );
}
