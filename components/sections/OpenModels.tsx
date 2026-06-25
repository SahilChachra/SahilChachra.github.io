"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/ui/link-button";
import { ExternalLink, SendHorizonal, Sparkles, TrendingUp } from "lucide-react";
import { profile } from "@/data/profile";
import { modelFamilies, modelStats } from "@/data/models";
import { fetchHFModels, modelDisplayName, type HFModel } from "@/lib/huggingface";

const ThermodynamicGrid = dynamic(
  () => import("@/components/ui/interactive-thermodynamic-grid"),
  { ssr: false }
);

const CHATBOT_API_URL =
  process.env.NEXT_PUBLIC_CHATBOT_API_URL ??
  "https://sahil-chachra-github-io.vercel.app/api/chat";

interface HFResult {
  id: string;
  downloads: number;
  task: string | null;
  url: string;
}

interface ChatMsg {
  role: "user" | "assistant";
  content: string;
  hfResults?: HFResult[];
}

const MAX_USER_TURNS = 5;

const enrichmentMap = new Map(
  modelFamilies.map((f) => [f.flagshipId, f])
);

function useCountUp(target: number, duration = 1400, enabled = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!enabled || target === 0) return;
    let startTime: number | null = null;
    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, enabled]);
  return val;
}

function formatDownloads(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

export function OpenModels() {
  const [liveModels, setLiveModels] = useState<HFModel[] | null>(null);
  const [error, setError] = useState(false);
  const [barsVisible, setBarsVisible] = useState(false);

  const [chatQuery, setChatQuery] = useState("");
  const [chatMsgs, setChatMsgs] = useState<ChatMsg[]>([]);
  const [chatSummary, setChatSummary] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  function scrollToBottom() {
    setTimeout(() => chatBottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 80);
  }

  async function summarizeAndCompress(msgs: ChatMsg[]) {
    try {
      const res = await fetch(CHATBOT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "summarize",
          messages: msgs.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = await res.json();
      return (data.summary as string) ?? "";
    } catch {
      return "";
    }
  }

  async function handleAsk(e: React.FormEvent) {
    e.preventDefault();
    const query = chatQuery.trim();
    if (!query || chatLoading) return;
    setChatQuery("");
    setChatLoading(true);

    const userMsg: ChatMsg = { role: "user", content: query };
    const nextMsgs = [...chatMsgs, userMsg];
    setChatMsgs(nextMsgs);
    scrollToBottom();

    const userTurnCount = nextMsgs.filter((m) => m.role === "user").length;

    let activeSummary = chatSummary;
    let historyToSend = nextMsgs;
    if (userTurnCount > MAX_USER_TURNS) {
      const msgsToSummarize = nextMsgs.slice(0, -1);
      const summary = await summarizeAndCompress(msgsToSummarize);
      activeSummary = summary;
      setChatSummary(summary);
      historyToSend = [userMsg];
      setChatMsgs([
        { role: "assistant", content: "_(Conversation summarized to save context — continuing below)_" },
        userMsg,
      ]);
    }

    try {
      const res = await fetch(CHATBOT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "chat",
          messages: historyToSend.map(({ role, content }) => ({ role, content })),
          summary: activeSummary || undefined,
        }),
      });
      const data = await res.json();
      const assistantMsg: ChatMsg = {
        role: "assistant",
        content: data.answer ?? "No response.",
        hfResults: data.hfResults ?? [],
      };
      setChatMsgs((prev) => [...prev, assistantMsg]);
      scrollToBottom();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setChatMsgs((prev) => [...prev, { role: "assistant", content: `Error: ${msg}` }]);
    } finally {
      setChatLoading(false);
    }
  }

  useEffect(() => {
    fetchHFModels("sahilchachra")
      .then((models) => {
        setLiveModels(models);
        setTimeout(() => setBarsVisible(true), 200);
      })
      .catch(() => setError(true));
  }, []);

  const loading = liveModels === null && !error;

  const totalDownloads = liveModels?.reduce((sum, m) => sum + m.downloads, 0) ?? 0;
  const modelCount = liveModels?.length ?? 0;
  const topLeaderboard = liveModels?.slice(0, 5) ?? [];
  const maxDownloads = topLeaderboard[0]?.downloads ?? 1;

  const animatedDownloads = useCountUp(totalDownloads, 1600, !!liveModels);
  const animatedModelCount = useCountUp(modelCount, 1000, !!liveModels);

  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const otherModels = liveModels?.slice(4, 10) ?? [];

  const liveStats = [
    {
      value: liveModels ? formatDownloads(animatedDownloads) : modelStats[0].value,
      label: "Total downloads",
      live: true,
    },
    {
      value: liveModels ? `${animatedModelCount}+` : modelStats[0].value,
      label: "Models published",
      live: true,
    },
    { value: modelStats[2].value, label: modelStats[2].label, live: false },
    { value: modelStats[3].value, label: modelStats[3].label, live: false },
  ];

  return (
    <section id="open-models" className="relative py-16 lg:py-20 bg-[#050505] overflow-hidden">
      {/* Thermodynamic interactive background */}
      <ThermodynamicGrid resolution={18} coolingFactor={0.97} aria-hidden="true" />
      {/* Fade edges so content reads cleanly */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_20%,rgba(5,5,5,0.75)_100%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="HuggingFace"
            title="Open Models"
            subtitle="Quantizing and fine-tuning open-source models for the community — every variant benchmarked and published to HuggingFace, ready to run."
          />
        </FadeIn>

        {/* Stats strip — animated live counters */}
        <FadeIn delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {liveStats.map((s) => (
              <div
                key={s.label}
                className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 text-center shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
              >
                <p className="text-xl font-bold text-zinc-100 tracking-tight tabular-nums">
                  {s.value}
                </p>
                <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
                {s.live && liveModels && (
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Download leaderboard */}
        <FadeIn delay={180}>
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 mb-8 shadow-[0_4px_32px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp size={13} className="text-zinc-500" />
              <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
                Downloads by Model
              </p>
              {liveModels && (
                <span className="ml-auto text-[10px] text-zinc-600">live · sorted by downloads</span>
              )}
            </div>

            {loading ? (
              <div className="space-y-2.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-4 h-3 rounded bg-zinc-800 animate-pulse" />
                    <div className="flex-1 h-6 rounded-md bg-zinc-800/60 animate-pulse" style={{ maxWidth: `${90 - i * 8}%` }} />
                    <div className="w-10 h-3 rounded bg-zinc-800 animate-pulse" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {topLeaderboard.map((m, i) => {
                  const pct = (m.downloads / maxDownloads) * 100;
                  const enrich = enrichmentMap.get(m.id);
                  const name = enrich?.base ?? modelDisplayName(m.id);
                  const isTop = i === 0;
                  const isHot = hoveredBar === i;

                  // Fire intensity dims as rank drops; hover ignites any bar
                  const baseFrom = isTop ? "from-orange-600/70" : i === 1 ? "from-red-700/55" : "from-red-900/40";
                  const baseTo   = isTop ? "to-yellow-500/45"   : i === 1 ? "to-orange-600/30"  : "to-orange-800/20";

                  return (
                    <a
                      key={m.id}
                      href={`https://huggingface.co/${m.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3"
                      onMouseEnter={() => setHoveredBar(i)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      <span className={`text-xs w-4 text-right shrink-0 tabular-nums transition-colors duration-200 ${
                        isHot ? "text-orange-400 font-semibold" : isTop ? "text-zinc-400 font-semibold" : "text-zinc-600"
                      }`}>
                        {i + 1}
                      </span>

                      <div className="flex-1 relative h-7 rounded-md bg-zinc-800/50 overflow-hidden">
                        {/* Base fire bar */}
                        <div
                          className={`absolute inset-y-0 left-0 rounded-md transition-all duration-700 ease-out bg-gradient-to-r ${
                            isHot
                              ? "from-orange-400/90 to-yellow-300/70"
                              : `${baseFrom} ${baseTo}`
                          }`}
                          style={{
                            width: barsVisible ? `${pct}%` : "0%",
                            transitionDelay: isHot ? "0ms" : `${i * 50}ms`,
                          }}
                        />
                        {/* Glow bloom on hover */}
                        {isHot && (
                          <div
                            className="absolute inset-y-0 left-0 rounded-md bg-gradient-to-r from-orange-500/30 to-yellow-400/20 blur-sm"
                            style={{ width: `${pct}%` }}
                          />
                        )}
                        <span className={`absolute inset-0 flex items-center px-2.5 text-[11px] font-medium transition-colors duration-200 truncate ${
                          isHot ? "text-yellow-100" : "text-zinc-300"
                        }`}>
                          {name}
                        </span>
                      </div>

                      <span className={`text-xs transition-colors duration-200 w-12 text-right shrink-0 tabular-nums ${
                        isHot ? "text-orange-400" : "text-zinc-500"
                      }`}>
                        {formatDownloads(m.downloads)}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </FadeIn>

        {/* Also published — compact chip strip */}
        <FadeIn delay={400}>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 mb-10 shadow-[0_4px_32px_rgba(0,0,0,0.5)]">
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

        {/* Find Your Model chatbot */}
        <FadeIn delay={550}>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-6 mb-10 shadow-[0_4px_32px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={14} className="text-zinc-500" />
              <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
                Find Your Model
              </p>
            </div>

            {chatMsgs.length > 0 && (
              <div className="space-y-4 mb-4 max-h-80 overflow-y-auto pr-1">
                {chatMsgs.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] space-y-2 ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                      <div
                        className={`rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-zinc-700 text-zinc-100"
                            : "bg-zinc-800/60 border border-zinc-700/50 text-zinc-300"
                        }`}
                      >
                        {msg.content}
                      </div>
                      {msg.hfResults && msg.hfResults.length > 0 && (
                        <div className="w-full space-y-1.5">
                          <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600">
                            Also on HuggingFace
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {msg.hfResults.map((r) => (
                              <a
                                key={r.id}
                                href={r.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 hover:border-zinc-600 px-2.5 py-1 transition-colors"
                              >
                                <span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
                                  {r.id.split("/").pop()}
                                </span>
                                <span className="text-[10px] text-zinc-600">↓{r.downloads?.toLocaleString()}</span>
                                <ExternalLink size={9} className="text-zinc-700 group-hover:text-zinc-500" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {chatLoading && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl px-4 py-3 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce"
                          style={{ animationDelay: `${i * 120}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div ref={chatBottomRef} />
              </div>
            )}

            <form onSubmit={handleAsk} className="flex gap-2">
              <input
                type="text"
                value={chatQuery}
                onChange={(e) => setChatQuery(e.target.value)}
                placeholder={chatMsgs.length === 0 ? "e.g. best coding model for M4 Pro 24GB…" : "Ask a follow-up…"}
                className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              />
              <button
                type="submit"
                disabled={chatLoading || !chatQuery.trim()}
                className="flex items-center gap-1.5 rounded-lg bg-zinc-700 hover:bg-zinc-600 disabled:opacity-40 disabled:cursor-not-allowed px-4 py-2.5 text-sm text-zinc-200 transition-colors shrink-0"
              >
                <SendHorizonal size={14} />
                {chatLoading ? "…" : "Ask"}
              </button>
            </form>
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
