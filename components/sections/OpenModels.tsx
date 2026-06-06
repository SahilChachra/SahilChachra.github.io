import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/ui/link-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { modelFamilies as models, modelStats as stats } from "@/data/models";

export function OpenModels() {
  return (
    <section id="open-models" className="py-16 lg:py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="HuggingFace"
            title="Open Models"
            subtitle="I port open-source models to MLX — quantizing them into every variant, and occasionally merging or uncensoring them — so anyone on Apple Silicon can run frontier models locally without writing a line of quantization code."
          />
        </FadeIn>

        {/* Stats strip */}
        <FadeIn delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((s) => (
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
                <p className="text-2xl font-bold text-zinc-100 tracking-tight">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Model cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {models.map((model, i) => (
            <FadeIn key={model.base} delay={i * 100}>
              <a
                href={model.hfUrl}
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
                  <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors mb-1">
                    {model.base}
                  </h3>
                  <p className="text-xs text-zinc-500 mb-1">{model.origin}</p>
                  <p className="text-xs text-zinc-400 mb-4">{model.task}</p>

                  {/* Variant tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {model.variants.map((v) => (
                      <span
                        key={v}
                        className="text-[11px] text-zinc-400 bg-zinc-800 rounded-md px-2 py-0.5"
                      >
                        {v}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-zinc-500 leading-relaxed flex-1 italic">
                    {model.note}
                  </p>

                  <span className="mt-4 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center gap-1">
                    Explore variants <ExternalLink size={11} />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Pipeline note */}
        <FadeIn delay={400}>
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
            {" "}— a model-agnostic pipeline for MLX quantization and benchmarking. Point it at any HuggingFace repo, get every variant and a side-by-side perf/quality report.
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
