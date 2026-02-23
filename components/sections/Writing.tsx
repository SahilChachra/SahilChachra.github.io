import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/ui/link-button";
import { fetchMediumPosts } from "@/lib/medium";
import { profile } from "@/data/profile";
import { Clock, ExternalLink } from "lucide-react";

export async function Writing() {
  const articles = await fetchMediumPosts("sahilchachra", 4);

  return (
    <section id="writing" className="py-24 lg:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Medium"
          title="Writing"
          subtitle="Thoughts on AI, engineering craft, and what it takes to build at the frontier."
        />

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {articles.map((article, i) => (
              <a
                key={i}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden hover:border-zinc-700 transition-colors"
              >
                <GlowingEffect
                  spread={35}
                  glow={true}
                  disabled={false}
                  proximity={60}
                  inactiveZone={0.01}
                  borderWidth={2}
                />

                {/* Thumbnail — real image or gradient fallback */}
                <div className="relative z-10 h-40 overflow-hidden">
                  {article.thumbnail ? (
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                    />
                  )}
                </div>

                {/* Card content */}
                <div className="relative z-10 p-5">
                  <h3 className="text-sm font-semibold text-zinc-100 leading-snug mb-2 group-hover:text-white transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>{article.pubDate}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Hover label */}
                <div className="relative z-10 px-5 pb-4">
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center gap-1">
                    Read on Medium <ExternalLink size={11} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-zinc-500 text-sm mb-10">
            Articles could not be loaded. Visit{" "}
            <a
              href={profile.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 underline underline-offset-4"
            >
              Medium
            </a>{" "}
            to read them directly.
          </p>
        )}

        {/* View all */}
        <div className="flex justify-center">
          <LinkButton
            href={profile.socials.medium}
            external
            className="text-zinc-100 font-semibold"
          >
            View All Articles
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
