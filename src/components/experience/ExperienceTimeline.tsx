interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
  tags: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "Bristol Mare Biotech",
    period: "Present · 1+ year",
    current: true,
    points: [
      "Working as an AI Engineer, building AI-driven automations that streamline day-to-day business operations, alongside hands-on full-stack development.",
      "Designed, developed, and deployed the company's e-commerce platform (bristolcosmetics.com) end-to-end, self-hosted on a Hostinger VPS.",
      "Currently building the company's ERP portal in Core PHP from scratch to manage inventory, live customer orders, and internal operations.",
      "Built a fully admin-controlled storefront — every section is managed through a custom admin panel, including automatic removal of out-of-stock products from the live product page.",
      "Developed a production-ready AI chatbot REST API with modular agent architecture, serving live product and FAQ interactions.",
    ],
    tags: ["React", "FastAPI", "Core PHP", "AI Automation"],
  },
  
  {
    role: "AI Chatbot Developer",
    company: "Huawei Certification Training (NAVTTC Collaboration)",
    period: "2026",
    points: [
      "Built AI-powered applications using LangChain, Streamlit, and Ollama with custom memory and UI tuning.",
      "Created a Multi-Agent Task Force system for policy, dataset, and innovation insights.",
      "Designed a RAG-based Q&A system enabling intelligent PDF knowledge retrieval.",
    ],
    tags: ["LangChain", "Streamlit", "Ollama", "RAG"],
  },

  {
    role: "AI Developer Intern",
    company: "Alpha Network – Team Next Internship Project",
    period: "2025",
    points: [
      "Developed One-Click Reordering Assistant for e-commerce platforms using Collaborative Filtering (SVD).",
      "Applied Apriori Algorithm (Association Rules) for smart product bundling (pairs & triplets).",
      "Evaluated models using Precision, Recall, and F1-score to ensure robust performance on Kaggle datasets.",
    ],
    tags: ["Python", "Scikit-learn", "SVD", "Feature Engineering"],
  },
  {
    role: "Web Developer Intern",
    company: "MH Technology",
    period: "2024",
    points: [
      "Built secure login/signup modules and core CRUD operations using Laravel and PHP.",
      "Designed MySQL database schemas and collaborated with the frontend team for seamless API integration.",
    ],
    tags: ["Laravel", "PHP", "MySQL", "Web Development"],
  },
];

export const ExperienceTimeline = () => {
  return (
    <div className="relative border-l border-tertiary/40 ml-4 md:ml-12 flex flex-col gap-16">
      {EXPERIENCE.map((item, idx) => {
        const alt = idx % 2 === 1;

        return (
          <article key={item.role} className="relative pl-8 md:pl-16">
            <span
              className="absolute w-3.5 h-3.5 rounded-full z-20"
              style={{ backgroundColor: "#8a5d12", left: "-7px", top: "8px" }}
            />

            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mt-6 mb-4">
              <h2 className="font-headline text-3xl text-on-surface font-semibold">{item.role}</h2>
              <span
                className={`font-label text-sm uppercase tracking-widest font-semibold ml-0 md:ml-4 ${
                  item.current ? "text-tertiary" : "text-secondary"
                }`}
              >
                {item.period}
              </span>
            </div>

            <h3 className="font-body text-xl text-on-surface-variant mb-6 font-medium">
              {item.company}
            </h3>

            <div
              className={
                alt
                  ? "bg-surface-container-lowest ghost-border p-8 rounded-xl rounded-tl-sm transition-all shadow-sm hover:shadow-md mb-12"
                  : "bg-surface-container-low p-8 rounded-xl rounded-tl-sm transition-all hover:bg-surface-container mb-12"
              }
            >
              <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc list-inside marker:text-primary mb-8">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-sm text-xs font-label uppercase tracking-wider bg-primary/10 text-primary hover:bg-primary hover:text-on-primary transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
