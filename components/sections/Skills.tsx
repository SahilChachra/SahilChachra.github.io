import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/SectionHeader";
import { skillCategories } from "@/data/skills";
import { Code2, Layers, Brain, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Brain,
  Server,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Capabilities"
            title="Skills"
            subtitle="The tools and technologies I work with every day."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon];
            return (
              <FadeIn key={category.id} delay={i * 100} className="h-full">
                <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 min-h-[220px] h-full">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={60}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Icon + title */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-2.5">
                        {Icon && <Icon size={16} className="text-zinc-300" />}
                      </div>
                      <h3 className="text-sm font-semibold text-zinc-200">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-zinc-800/80 border border-zinc-700/60 px-2.5 py-1 text-xs font-medium text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
