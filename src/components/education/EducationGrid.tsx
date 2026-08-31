const FOCUS_AREAS = [
  "C# Programming",
  "Unity 3D / 2D Engine Architecture",
  "AR Game Development",
  "Software Engineering Principles",
];

const SECONDARY = [
  {
    period: "2020 – 2021",
    degree: "Intermediate (ICS with Physics)",
    icon: "school",
    institution: "Punjab Group of Colleges",
    body: "Foundational studies in Computer Science and classical Physics. This mathematical and physical grounding proved invaluable for understanding vector spaces and neural network mechanics in later AI development.",
  },
  {
    period: "2018 – 2019",
    degree: "Matriculation (Computer Science)",
    icon: "local_library",
    institution: "Allied School Gulberg",
    body: "Early introduction to structured programming, database concepts, and basic computational logic. The genesis of a structured approach to problem-solving.",
  },
];

export const EducationGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
      {/* Primary Degree */}
      <article className="md:col-span-8 bg-surface-container-low rounded-3xl p-10 md:p-14 relative overflow-hidden group hover:bg-surface-container transition-all duration-500 ease-out ghost-border">
        <div className="absolute -right-24 -top-24 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl group-hover:bg-primary-fixed-dim/30 transition-all duration-700 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="font-label text-sm uppercase tracking-wider text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full mb-4 inline-block">
                2021 – 2025
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-2">
                BS Gaming &amp; Multimedia
              </h2>
              <p className="font-body text-lg text-primary font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">account_balance</span>
                Superior University Gold Campus Lahore
              </p>
            </div>

            <div className="flex-shrink-0 bg-surface-container-lowest rounded-2xl p-6 text-center ghost-border self-start md:self-auto transform group-hover:-rotate-2 transition-transform duration-300">
              <span className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                CGPA
              </span>
              <span className="block font-headline text-4xl font-bold text-tertiary">3.3</span>
            </div>
          </div>

          <div className="text-on-surface-variant max-w-none">
            <p className="font-body text-lg leading-relaxed mb-6">
              A comprehensive program bridging the gap between interactive media and computational
              systems. The curriculum demanded rigorous application of algorithmic thinking to
              spatial and temporal problems, laying essential groundwork for complex AI agent
              architectures.
            </p>
            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <h3 className="font-label text-sm uppercase tracking-widest text-on-surface font-semibold mb-4">
                Core Focus Areas
              </h3>
              <div className="flex flex-wrap gap-3">
                {FOCUS_AREAS.map((area) => (
                  <span
                    key={area}
                    className="bg-surface-container-lowest px-4 py-2 rounded-xl text-sm font-body text-on-surface ghost-border"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Secondary Education */}
      <div className="md:col-span-4 flex flex-col gap-8">
        {SECONDARY.map((item) => (
          <article
            key={item.degree}
            className="bg-surface-container-low rounded-3xl p-8 flex-grow ghost-border hover:bg-surface-container transition-colors duration-300"
          >
            <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant mb-3 block">
              {item.period}
            </span>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-2">{item.degree}</h3>
            <p className="font-body text-sm text-on-surface-variant flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
              {item.institution}
            </p>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
          </article>
        ))}
      </div>

      {/* Atmospheric Image */}
      <div className="md:col-span-12 mt-4 rounded-3xl overflow-hidden h-64 md:h-96 relative ghost-border group">
        <div className="absolute inset-0 bg-surface-tint/10 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
        <div
          className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-[20s] ease-linear"
          style={{ backgroundImage: "url('/Education11.jpg')" }}
        />
      </div>
    </div>
  );
};
