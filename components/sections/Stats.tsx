import { stats } from "@/data/stats";

export function Stats() {
  return (
    <div className="border-y border-zinc-800/50 bg-zinc-950/80">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent tabular-nums">
              {stat.value}
            </span>
            <span className="mt-2 text-xs font-medium text-zinc-500 uppercase tracking-widest leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
