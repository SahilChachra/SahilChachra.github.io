interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-3">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-base md:text-lg max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
