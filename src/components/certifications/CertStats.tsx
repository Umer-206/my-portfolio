import { useCountUp } from "../../hooks/useCountUp";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 10, label: "Certifications Earned" },
  { value: 8, label: "Issuing Organizations" },
  { value: 8, label: "AI-Focused Credentials" },
];

const StatItem = ({ value, suffix = "", label }: Stat) => {
  const { ref, value: display } = useCountUp<HTMLDivElement>(value);

  return (
    <div ref={ref} className="px-4 first:pl-0 last:pr-0">
      <span className="block font-headline text-5xl md:text-6xl font-bold text-tertiary tabular-nums leading-none mb-2">
        {display}
        {suffix}
      </span>
      <span className="font-label text-xs md:text-sm uppercase tracking-widest text-on-surface-variant">
        {label}
      </span>
    </div>
  );
};

export const CertStats = () => {
  return (
    <div className="mb-16 md:mb-20 grid grid-cols-3 divide-x divide-outline-variant/30">
      {STATS.map((stat) => (
        <StatItem key={stat.label} {...stat} />
      ))}
    </div>
  );
};
