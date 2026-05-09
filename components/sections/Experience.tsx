import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/SectionHeader";
import { experiences } from "@/data/experience";
import { MapPin, CalendarDays } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Career"
            title="Experience"
            subtitle="Where I've built things that matter."
          />
        </FadeIn>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 120}>
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative z-10 p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-zinc-100">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </span>
                            Current
                          </span>
                        )}
                      </div>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 font-medium hover:text-white transition-colors"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className="text-zinc-400 font-medium">{exp.company}</p>
                      )}
                      <p className="text-zinc-500 text-sm">{exp.companyDesc}</p>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-zinc-500 shrink-0">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={13} />
                        {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-zinc-300 text-sm leading-relaxed">
                        <span className="text-zinc-600 mt-1 shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 border border-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-zinc-300"
                        style={{
                          boxShadow:
                            "0 0 8px rgba(0,0,0,0.03),0 2px 6px rgba(0,0,0,0.08),inset 3px 3px 0.5px -3.5px rgba(255,255,255,0.09),inset -3px -3px 0.5px -3.5px rgba(255,255,255,0.85),inset 1px 1px 1px -0.5px rgba(255,255,255,0.6),inset -1px -1px 1px -0.5px rgba(255,255,255,0.6),inset 0 0 6px 6px rgba(255,255,255,0.12),inset 0 0 2px 2px rgba(255,255,255,0.06),0 0 12px rgba(0,0,0,0.15)",
                        }}
                      >
                        {tag}
                      </span>
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
