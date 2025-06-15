import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Dashboard",
  description:
    "Upload your data, and get a live, interactive dashboard—fast & affordable.",
  authors: [{ name: "SLM Creatives" }],
  creator: "Sulaiman Shafiq",
  keywords: ["Data Dashboard", "Service", "Data Visualiser"],
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

export default function DataLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="absolute z-50 inset-0 bg-white">{children}</div>;
}
