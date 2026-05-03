import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilchachra.github.io"),
  title: "Sahil Chachra — AI Architect",
  description:
    "Architecting Intelligence, From the Ground Up. AI Architect building AI platforms that scale.",
  keywords: ["AI Engineer", "Machine Learning", "AI Platform", "LLMs", "AI Consulting"],
  authors: [{ name: "Sahil Chachra" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Sahil Chachra — AI Architect",
    description: "Architecting Intelligence, From the Ground Up.",
    type: "website",
    url: "https://sahilchachra.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Chachra — AI Architect",
    description: "Architecting Intelligence, From the Ground Up.",
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
