import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";
import { siteGraph } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

const title = "SLM Creatives — Honest Digital Marketing Agency in Malaysia";
const description =
  "An honest, simple and effective digital marketing agency in Malaysia. We help founders and family businesses grow through brand, marketing technology and social.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s · SLM Creatives",
  },
  description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "digital marketing agency Malaysia",
    "marketing agency for small business",
    "marketing for family business",
    "brand strategy",
    "marketing technology",
    "social media marketing",
    "SLM Creatives",
  ],
  authors: [{ name: "SLM Creatives" }],
  creator: "SLM Creatives",
  publisher: "SLM Creatives",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title,
    description,
    siteName: "SLM Creatives",
    locale: "en_MY",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <JsonLd data={siteGraph()} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-NP6J43WF60" />
    </html>
  );
}
