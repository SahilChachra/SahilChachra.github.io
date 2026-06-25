"use client";

import dynamic from "next/dynamic";
import { FadeIn } from "@/components/ui/fade-in";
import { nowStreams } from "@/data/now";

const GenerativeArtScene = dynamic(
  () => import("@/components/ui/anomalous-matter-hero").then((m) => m.GenerativeArtScene),
  { ssr: false }
);

const ACCENT_BORDER: Record<string, string> = {
  Shipping: "border-t-emerald-400/60",
  "Thinking About": "border-t-sky-400/60",
  Exploring: "border-t-violet-400/60",
};

const DOT: Record<string, string> = {
  Shipping: "bg-emerald-400",
  "Thinking About": "bg-sky-400",
  Exploring: "bg-violet-400",
};

const DOT_GLOW: Record<string, string> = {
  Shipping: "shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]",
  "Thinking About": "shadow-[0_0_6px_2px_rgba(56,189,248,0.6)]",
  Exploring: "shadow-[0_0_6px_2px_rgba(167,139,250,0.6)]",
};

export function Now() {
  return (
    <section
      id="now"
      className="relative min-h-screen flex items-center bg-zinc-950 overflow-hidden"
    >
      {/* Animated shader background */}
      <GenerativeArtScene aria-hidden="true" />

      {/* Subtle dark vignette at edges so content stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_30%,rgba(9,9,11,0.7)_100%)]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <FadeIn>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-3">
              In Progress
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight flex items-center gap-3">
              Now
              <span
                className="inline-block w-[3px] h-8 bg-zinc-100 rounded-sm animate-pulse"
                aria-hidden="true"
              />
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-md">
              What I&apos;m building, thinking about, and poking at right now.
            </p>
          </div>
        </FadeIn>

        {/* Glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {nowStreams.map((stream, si) => (
            <FadeIn key={stream.heading} delay={si * 100}>
              <div
                className={`
                  relative h-full rounded-2xl border-t-2 ${ACCENT_BORDER[stream.heading]}
                  border border-white/10
                  bg-white/5 backdrop-blur-md
                  shadow-[0_4px_32px_rgba(0,0,0,0.4)]
                `}
              >
                <div className="p-6 flex flex-col gap-6 h-full">
                  {/* Column heading */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-1.5 h-1.5 rounded-full ${DOT[stream.heading]} ${DOT_GLOW[stream.heading]}`}
                    />
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-400">
                      {stream.heading}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="flex flex-col gap-5 flex-1">
                    {stream.items.map((item, ii) => (
                      <div
                        key={item.label}
                        className={`flex flex-col gap-1.5 ${ii > 0 ? "pt-5 border-t border-white/10" : ""}`}
                      >
                        <p className="text-sm font-semibold text-zinc-100">{item.label}</p>
                        <p className="text-sm text-zinc-400 leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
