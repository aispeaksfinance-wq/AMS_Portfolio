import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMS Web Designer | Portfolio",
  description: "Web designer crafting high-end, modern digital experiences.",
};

import { DotGrid } from "@/components/ui/DotGrid";
import { ScenicBackground } from "@/components/ui/ScenicBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground transition-colors duration-300 overflow-x-hidden`}
      >
        <div className="noise-overlay" />
        <DotGrid />
        <ScenicBackground />
        {children}
      </body>
    </html>
  );
}
