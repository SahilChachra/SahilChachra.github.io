import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { Github, ExternalLink, Star } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Work"
            title="Projects"
            subtitle="Things I've built, shipped, and open-sourced."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 100} className="h-full">
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 h-full">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative z-10 p-6 md:p-7 h-full flex flex-col">
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-semibold text-zinc-100">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400">
                          <Star size={9} fill="currentColor" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub: ${project.title}`}
                          className="text-zinc-500 hover:text-zinc-200 transition-colors"
                        >
                          <Github size={17} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo: ${project.title}`}
                          className="text-zinc-500 hover:text-zinc-200 transition-colors"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-800 border border-zinc-700 px-2.5 py-1 text-xs font-medium text-zinc-300"
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
