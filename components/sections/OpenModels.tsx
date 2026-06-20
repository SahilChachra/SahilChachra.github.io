"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/ui/link-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { modelFamilies, modelStats } from "@/data/models";
import { fetchHFModels, modelDisplayName, type HFModel } from "@/lib/huggingface";

const FEATURED_COUNT = 4;

const enrichmentMap = new Map(
  modelFamilies.map((f) => [f.flagshipId, f])
);

const staticStats = modelStats;

export function OpenModels() {
  const [liveModels, setLiveModels] = useState<HFModel[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchHFModels("sahilchachra")
      .then(setLiveModels)
      .catch(() => setError(true));
  }, []);

  const loading = liveModels === null && !error;

  const featuredModels = liveModels?.slice(0, FEATURED_COUNT) ?? [];
  const otherModels = liveModels?.slice(FEATURED_COUNT, FEATURED_COUNT + 6) ?? [];

  const liveStats = liveModels
    ? [
        { value: `${liveModels.length}+`, label: "Models published" },
        ...staticStats.slice(1),
      ]
    : staticStats;

  return (
    <section id="open-models" className="py-16 lg:py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="HuggingFace"
            title="Open Models"
            subtitle="Quantizing and fine-tuning open-source models for the community — every variant benchmarked and published to HuggingFace, ready to run."
          />
        </FadeIn>

        {/* Stats strip */}
        <FadeIn delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {liveStats.map((s) => (
              <div
                key={s.label}
                className="relative rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 text-center"
              >
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={50}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <p className="text-xl font-bold text-zinc-100 tracking-tight">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Featured model cards — 2×2 grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {Array.from({ length: FEATURED_COUNT }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 animate-pulse h-52"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {featuredModels.map((model, i) => {
              const enrich = enrichmentMap.get(model.id);
              const displayName = enrich?.base ?? modelDisplayName(model.id);
              const hfUrl = `https://huggingface.co/${model.id}`;

              return (
                <FadeIn key={model.id} delay={i * 80}>
                  <a
                    href={hfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col h-full rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 hover:border-zinc-700 transition-colors"
                  >
                    <GlowingEffect
                      spread={35}
                      glow={true}
                      disabled={false}
                      proximity={60}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                          {displayName}
                        </h3>
                        <span className="shrink-0 text-[10px] text-zinc-500 bg-zinc-800/80 rounded-full px-2 py-0.5 mt-0.5">
                          ↓ {model.downloads.toLocaleString()}
                        </span>
                      </div>

                      {enrich && (
                        <>
                          <p className="text-xs text-zinc-500 mb-1">{enrich.origin}</p>
                          <p className="text-xs text-zinc-400 mb-4">{enrich.task}</p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {enrich.variants.map((v) => (
                              <span
                                key={v}
                                className="text-[11px] text-zinc-400 bg-zinc-800 rounded-md px-2 py-0.5"
                              >
                                {v}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-zinc-500 leading-relaxed flex-1 italic">
                            {enrich.note}
                          </p>
                        </>
                      )}

                      {!enrich && model.task && (
                        <p className="text-xs text-zinc-400 mb-4 flex-1">
                          {model.task.replace(/-/g, " ")}
                        </p>
                      )}

                      <span className="mt-4 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center gap-1">
                        Explore on HuggingFace <ExternalLink size={11} />
                      </span>
                    </div>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        )}

        {/* Also published — compact chip strip */}
        <FadeIn delay={400}>
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-6 py-5 mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-600 mb-4">
              Also Published
            </p>

            {loading ? (
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-7 rounded-lg bg-zinc-800 animate-pulse"
                    style={{ width: `${80 + (i % 4) * 20}px` }}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {otherModels.map((m) => {
                  const enrich = enrichmentMap.get(m.id);
                  const name = enrich?.base ?? modelDisplayName(m.id);
                  return (
                    <a
                      key={m.id}
                      href={`https://huggingface.co/${m.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 hover:border-zinc-600 hover:bg-zinc-800 transition-colors px-3 py-1.5"
                    >
                      <span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
                        {name}
                      </span>
                      <span className="text-[10px] text-zinc-600 group-hover:text-zinc-500 transition-colors">
                        ↓{m.downloads}
                      </span>
                    </a>
                  );
                })}
                <a
                  href={profile.socials.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-lg border border-dashed border-zinc-700 px-3 py-1.5 text-xs text-zinc-600 hover:text-zinc-400 hover:border-zinc-600 transition-colors"
                >
                  View all <ExternalLink size={10} />
                </a>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Pipeline note */}
        <FadeIn delay={500}>
          <p className="text-xs text-zinc-600 text-center mb-8">
            Quantized with{" "}
            <a
              href="https://github.com/SahilChachra/mlx-bench"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 underline underline-offset-4 transition-colors"
            >
              mlx-bench
            </a>
            {" "}— a model-agnostic pipeline for MLX quantization and benchmarking across affine, MX, and OptiQ formats.
          </p>
        </FadeIn>

        {/* CTA */}
        <div className="flex justify-center">
          <LinkButton
            href={profile.socials.huggingface}
            external
            className="text-zinc-100 font-semibold"
          >
            View All Models on HuggingFace
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
