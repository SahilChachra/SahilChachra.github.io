"use client";

import { useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  formspreeId: string;
  email: string;
}

export function ContactForm({ formspreeId, email }: ContactFormProps) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formspreeId) {
      window.location.href = `mailto:${email}`;
      return;
    }

    setState("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("sent");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-emerald-400">
        <CheckCircle size={44} strokeWidth={1.5} />
        <p className="text-base font-medium text-zinc-200">
          Message sent! I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-xs font-medium text-zinc-500 uppercase tracking-widest"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium text-zinc-500 uppercase tracking-widest"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-medium text-zinc-500 uppercase tracking-widest"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell me about your project or what you're building..."
          className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-400 text-center">
          Something went wrong.{" "}
          <a href={`mailto:${email}`} className="underline underline-offset-4">
            Email me directly
          </a>{" "}
          instead.
        </p>
      )}

      <div className="flex justify-center mt-2">
        <LiquidButton
          type="submit"
          size="xl"
          disabled={state === "sending"}
          className="text-zinc-100 font-semibold"
        >
          <Send size={16} />
          {state === "sending" ? "Sending..." : "Send Message"}
        </LiquidButton>
      </div>
    </form>
  );
}
