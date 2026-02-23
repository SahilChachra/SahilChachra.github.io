"use client";

import dynamic from "next/dynamic";
import { ArrowDown, Sparkles } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { profile } from "@/data/profile";

const ShaderAnimation = dynamic(
  () =>
    import("@/components/ui/shader-animation").then((m) => m.ShaderAnimation),
  { ssr: false }
);

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Shader background */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <ShaderAnimation />
      </div>

      {/* Dark overlay — tones down the shader so text is readable */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(9,9,11,0.75) 0%, rgba(9,9,11,0.55) 50%, rgba(9,9,11,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 backdrop-blur-sm px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
            <Sparkles size={11} className="text-emerald-400" />
            {profile.availability}
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white mb-5 leading-none">
          {profile.name}
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light italic mb-4">
          &ldquo;{profile.tagline}&rdquo;
        </p>

        {/* Role */}
        <p className="text-sm sm:text-base font-medium text-zinc-400 tracking-widest uppercase mb-12">
          {profile.role} &nbsp;·&nbsp; {profile.roleDetail}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <LiquidButton
            size="xl"
            onClick={() => scrollTo("projects")}
            className="text-zinc-100 font-semibold"
          >
            View My Work
          </LiquidButton>
          <LiquidButton
            size="xl"
            onClick={() => scrollTo("contact")}
            className="text-zinc-100 font-semibold"
          >
            Let&apos;s Talk
          </LiquidButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("experience")}
        className="absolute bottom-8 z-20 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors animate-bounce"
        aria-label="Scroll to experience"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
