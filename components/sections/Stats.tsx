import { stats } from "@/data/stats";

export function Stats() {
  return (
    <div className="border-y border-zinc-800/50 bg-zinc-950/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800/60">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center px-6 ${
                i >= 2 ? "mt-0 md:mt-0" : ""
              } ${i === 2 ? "border-t border-zinc-800/60 pt-8 md:border-t-0 md:pt-0" : ""} ${
                i === 3 ? "border-t border-zinc-800/60 pt-8 md:border-t-0 md:pt-0" : ""
              }`}
            >
              <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-transparent tabular-nums">
                {stat.value}
              </span>
              <span className="mt-2 text-xs font-medium text-zinc-500 uppercase tracking-widest leading-tight max-w-[120px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
