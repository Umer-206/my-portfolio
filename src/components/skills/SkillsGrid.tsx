import type { ReactNode } from "react";

const ML_FRAMEWORKS = [
  { name: "Scikit-learn", icon: "model_training", hoverIcon: "group-hover:text-blue-400" },
  { name: "TensorFlow", icon: "memory", hoverIcon: "group-hover:text-purple-400" },
  { name: "Hugging Face", icon: "psychology", hoverIcon: "group-hover:text-cyan-400" },
  { name: "Groq", icon: "bolt", hoverIcon: "group-hover:text-amber-400" },
];

const AI_AUTOMATION = [
  { name: "LangChain", hover: "group-hover:text-emerald-400" },
  { name: "n8n", hover: "group-hover:text-rose-400" },
  { name: "Voiceflow", hover: "group-hover:text-blue-400" },
  { name: "Botpress", hover: "group-hover:text-amber-400" },
  { name: "Streamlit", hover: "group-hover:text-cyan-400" },
];

const DATA_ANALYSIS = ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau"];

const PROGRAMMING = [
  { name: "Python", dot: "group-hover:bg-blue-500" },
  { name: "C#", dot: "group-hover:bg-purple-500" },
];

const FRONTEND = [
  { name: "React", dot: "group-hover:bg-cyan-500" },
  { name: "Bootstrap", dot: "group-hover:bg-violet-500" },
  { name: "PHP (Laravel)", dot: "group-hover:bg-rose-500" },
];

/** Light card that turns dark (#1b1c1d) on hover. */
const SkillCard = ({ className = "", children }: { className?: string; children: ReactNode }) => (
  <section
    className={`group bg-surface-container-low rounded-xl p-8 border border-outline-variant/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:bg-[#1b1c1d] ${className}`}
  >
    {children}
  </section>
);

const CardHeading = ({ icon, iconColor, children }: { icon: string; iconColor: string; children: ReactNode }) => (
  <div className="flex items-center gap-4 mb-6">
    <span
      className={`material-symbols-outlined text-3xl font-light transition-colors group-hover:text-primary-fixed-dim ${iconColor}`}
      style={{ fontVariationSettings: "'FILL' 0" }}
    >
      {icon}
    </span>
    <h2 className="font-headline text-2xl font-semibold text-on-surface transition-colors group-hover:text-white">
      {children}
    </h2>
  </div>
);

export const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {/* AI & ML Frameworks */}
      <SkillCard className="col-span-1 lg:col-span-2">
        <CardHeading icon="hub" iconColor="text-primary">
          AI &amp; ML Frameworks
        </CardHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {ML_FRAMEWORKS.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-outline-variant/30 transition-all duration-300 group-hover:bg-white/5 group-hover:border-white/10"
            >
              <span
                className={`material-symbols-outlined text-on-surface-variant text-xl transition-colors ${skill.hoverIcon}`}
              >
                {skill.icon}
              </span>
              <span className="font-body text-sm font-medium text-on-surface transition-colors group-hover:text-white/90">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </SkillCard>

      {/* AI & Automation */}
      <SkillCard className="col-span-1">
        <CardHeading icon="smart_toy" iconColor="text-tertiary">
          AI &amp; Automation
        </CardHeading>
        <ul className="space-y-4">
          {AI_AUTOMATION.map((skill, idx) => (
            <li
              key={skill.name}
              className={`flex items-center justify-between pb-2 transition-colors ${
                idx < AI_AUTOMATION.length - 1
                  ? "border-b border-outline-variant/15 group-hover:border-white/10"
                  : ""
              }`}
            >
              <span
                className="font-body text-on-surface font-medium transition-colors group-hover:text-white/90"
              >
                {skill.name}
              </span>
              <span
                className={`material-symbols-outlined text-sm text-on-surface-variant transition-colors ${skill.hover}`}
              >
                check_circle
              </span>
            </li>
          ))}
        </ul>
      </SkillCard>

      {/* Data Analysis */}
      <SkillCard className="col-span-1">
        <CardHeading icon="analytics" iconColor="text-secondary">
          Data Analysis
        </CardHeading>
        <div className="flex flex-wrap gap-2">
          {DATA_ANALYSIS.map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 rounded-full bg-surface-variant text-on-surface-variant font-label text-xs uppercase tracking-wide border border-transparent transition-colors group-hover:bg-primary/15 group-hover:text-primary-fixed-dim group-hover:border-primary/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </SkillCard>

      {/* Languages & Core Dev */}
      <SkillCard className="col-span-1 md:col-span-2">
        <CardHeading icon="code" iconColor="text-primary">
          Languages &amp; Core Dev
        </CardHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Programming", items: PROGRAMMING },
            { title: "Frontend / Web", items: FRONTEND },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="font-label text-sm text-on-surface-variant uppercase tracking-widest mb-3 transition-colors group-hover:text-white/60">
                {col.title}
              </h3>
              <div className="space-y-3">
                {col.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full bg-on-surface transition-colors ${item.dot}`}
                    />
                    <span className="font-body font-medium transition-colors group-hover:text-white/90">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SkillCard>

      {/* Platforms, Tools & Game Dev */}
      <SkillCard className="col-span-1 lg:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              icon: "construction",
              iconHover: "group-hover:text-blue-400",
              title: "Platforms & Tools",
              body: "GitHub, Google Colab, Jupyter Notebooks, VS Code, Vercel, MySQL.",
            },
            {
              icon: "sports_esports",
              iconHover: "group-hover:text-violet-400",
              title: "Game Development",
              body: "Unity 2D, Unity 3D, AR & Mobile Game Development, plus web-based games  with applied AI for games: agent behaviour, pathfinding, and adaptive difficulty systems.",
            },
          ].map((block) => (
            <div key={block.title}>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`material-symbols-outlined text-2xl text-on-surface-variant font-light transition-colors ${block.iconHover}`}
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {block.icon}
                </span>
                <h2 className="font-headline text-xl font-semibold text-on-surface transition-colors group-hover:text-white">
                  {block.title}
                </h2>
              </div>
              <p className="font-body text-on-surface-variant leading-relaxed mb-4 transition-colors group-hover:text-white/70">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </SkillCard>
    </div>
  );
};
