import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sahil Chachra — Founding AI Engineer",
  description:
    "Architecting Intelligence, From the Ground Up. Founding AI Engineer building AI platforms that scale.",
  keywords: ["AI Engineer", "Machine Learning", "AI Platform", "LLMs", "AI Consulting"],
  authors: [{ name: "Sahil Chachra" }],
  openGraph: {
    title: "Sahil Chachra — Founding AI Engineer",
    description: "Architecting Intelligence, From the Ground Up.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}
