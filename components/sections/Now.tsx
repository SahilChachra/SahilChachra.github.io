"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { nowStreams, nowUpdatedDate } from "@/data/now";

const ACCENT_BORDER: Record<string, string> = {
  Shipping: "border-t-emerald-500/70",
  "Thinking About": "border-t-sky-500/70",
  Exploring: "border-t-violet-500/70",
};

const ACCENT_SHADOW: Record<string, string> = {
  Shipping:
    "0 -1px 12px 0 rgba(52,211,153,0.35), 0 -1px 4px 0 rgba(52,211,153,0.2)",
  "Thinking About":
    "0 -1px 12px 0 rgba(56,189,248,0.35), 0 -1px 4px 0 rgba(56,189,248,0.2)",
  Exploring:
    "0 -1px 12px 0 rgba(167,139,250,0.35), 0 -1px 4px 0 rgba(167,139,250,0.2)",
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
    <section id="now" className="py-16 lg:py-20 bg-zinc-950 border-b border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
            <div>
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
              <p className="text-zinc-500 text-sm mt-3 max-w-md">
                What I&apos;m building, thinking about, and poking at right now.
              </p>
            </div>
            <p className="text-xs text-zinc-600 font-mono shrink-0 pb-1">
              Last updated: {nowUpdatedDate}
            </p>
          </div>
        </FadeIn>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {nowStreams.map((stream, si) => (
            <FadeIn key={stream.heading} delay={si * 100}>
              <div
                className={`relative h-full rounded-2xl border border-zinc-800 bg-zinc-900/50 border-t-2 ${ACCENT_BORDER[stream.heading]}`}
                style={{ boxShadow: ACCENT_SHADOW[stream.heading] }}
              >
                <GlowingEffect
                  spread={45}
                  glow={true}
                  disabled={false}
                  proximity={72}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative z-10 p-6 flex flex-col gap-6 h-full">
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
                        className={`flex flex-col gap-1.5 ${ii > 0 ? "pt-5 border-t border-zinc-800" : ""}`}
                      >
                        <p className="text-sm font-semibold text-zinc-200">{item.label}</p>
                        <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
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
