import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Marcus Marincek — Agentic AI Engineer",
  description:
    "AI Engineer who builds AI projects from zero and delivers them deployed in production. 5 AI platforms shipped in 2026. Agentic AI, LLMs, RAG, Computer Vision, IT/OT.",
  openGraph: {
    title: "Marcus Marincek — Agentic AI Engineer",
    description:
      "From zero to production: agentic AI systems with measurable results. Factory floor + production AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} scroll-smooth`}>
      <body className="bg-ink text-gray-100 antialiased font-sans">{children}</body>
    </html>
  );
}
