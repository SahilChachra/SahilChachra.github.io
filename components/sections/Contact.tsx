import { LinkButton } from "@/components/ui/link-button";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";
import { Github, Linkedin, Twitter, Mail, BookOpen } from "lucide-react";

const socials = [
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "Twitter / X", href: profile.socials.twitter, icon: Twitter },
  { label: "Medium", href: profile.socials.medium, icon: BookOpen },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader
            label="Get In Touch"
            title="Let's Build Something"
            subtitle="Open for AI consulting, platform architecture reviews, and genuinely interesting problems. If you're building at the frontier of AI, I'd love to hear about it."
          />

          {/* Primary CTA */}
          <div className="mb-12">
            <LinkButton
              href={`mailto:${profile.email}`}
              className="text-zinc-100 font-semibold"
            >
              Send Me a Message
            </LinkButton>
          </div>

          {/* Divider */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-zinc-950 px-4 text-sm text-zinc-600">
                or find me on
              </span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center flex-wrap gap-6">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors group"
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
