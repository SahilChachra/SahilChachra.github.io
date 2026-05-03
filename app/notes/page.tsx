"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { notes, noteCategories } from "@/data/notes";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Inference: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Training: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  RAG: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Agents: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Models: "text-rose-400 bg-rose-500/10 border-rose-500/20",
};

export default function NotesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? notes
      : notes.filter((n) => n.category === activeCategory);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <div className="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={15} />
            Back
          </Link>
          <span className="text-zinc-100 font-semibold text-lg tracking-tight">SC</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        {/* Page heading */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
              Knowledge Base
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            My Notes
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Engineering notes and deep dives I've written on LLMs, inference, RAG, and agentic systems — things I actually use and build with.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {noteCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
                activeCategory === cat
                  ? "bg-zinc-100 text-zinc-900 border-zinc-100"
                  : "bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-zinc-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((note) => (
            <a
              key={note.filename}
              href={`/notes/${note.filename}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col gap-3 hover:border-zinc-700 transition-colors"
            >
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={50}
                inactiveZone={0.01}
                borderWidth={1.5}
              />

              <div className="relative z-10 flex flex-col gap-3 h-full">
                {/* Category badge */}
                <span
                  className={cn(
                    "self-start text-xs font-medium px-2.5 py-0.5 rounded-full border",
                    categoryColors[note.category] ?? "text-zinc-400 bg-zinc-800 border-zinc-700"
                  )}
                >
                  {note.category}
                </span>

                {/* Title */}
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-base font-semibold text-zinc-100 leading-snug group-hover:text-white transition-colors">
                    {note.title}
                  </h2>
                  <ExternalLink
                    size={14}
                    className="shrink-0 mt-0.5 text-zinc-600 group-hover:text-zinc-400 transition-colors"
                  />
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                  {note.description}
                </p>

                {/* Read indicator */}
                <div className="flex items-center gap-1.5 text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors mt-auto pt-2 border-t border-zinc-800">
                  <BookOpen size={12} />
                  Open note
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs tracking-widest text-zinc-700 mt-16 uppercase">
          {notes.length} notes · Updated regularly
        </p>
      </div>
    </main>
  );
}
