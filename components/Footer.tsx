import { Github, Linkedin, Twitter, BookOpen } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; shipped with intent.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <Twitter size={18} />
          </a>
          <a
            href={profile.socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <BookOpen size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
