import { useCountUp } from "../../hooks/useCountUp";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

// Counts from CERT_DATA/PROJECTS in the pre-redesign components; freelance
// client count has no source of truth yet — update here once confirmed.
const STATS: StatItem[] = [
  { value: 10, suffix: "+", label: "Certifications" },
  { value: 14, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Freelance Clients" },
];

const StatCounter = ({ value, suffix = "", label }: StatItem) => {
  const { ref, value: display } = useCountUp<HTMLDivElement>(value);

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-1 px-4">
      <span className="font-headline text-4xl md:text-5xl font-bold text-tertiary tabular-nums">
        {display}
        {suffix}
      </span>
      <span className="font-label text-xs uppercase tracking-widest text-inverse-on-surface/70">
        {label}
      </span>
    </div>
  );
};

export const StatsBar = () => {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-inverse-surface py-12 mb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-white/10 px-6 sm:px-8">
        {STATS.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
};
