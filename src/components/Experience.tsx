import { motion } from "framer-motion";
import { Briefcase, Calendar, Globe, GitBranch } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Bristol Mare Biotech",
      role: "AI Product Chatbot API",
      duration: "Present",
      points: [
        "Developed a production-ready REST API with modular agent architecture in Python for website and mobile integration.",
        "Implemented a serverless backend using Vercel and hosted a static chat widget via GitHub Pages.",
        "Created endpoints for chat logic and health checks, enabling scalable interaction with product and FAQ datasets.",
      ],
      tech: ["Python", "FastAPI", "Vercel", "REST API"],
      link: "https://umer-206.github.io/chatbot-api/",
    },
    {
      company: "Huawei Certification Training (NAVTTC Collaboration)",
      role: "AI Chatbot Developer",
      duration: "2026",
      points: [
        "Built AI-powered applications using LangChain, Streamlit, and Ollama with custom memory and UI tuning.",
        "Created a Multi-Agent Task Force system for policy, dataset, and innovation insights.",
        "Designed a RAG-based Q&A system enabling intelligent PDF knowledge retrieval.",
      ],
      tech: ["LangChain", "Streamlit", "Ollama", "RAG"],
      github: "https://github.com/Umer-206/Multi-Agent-Task-Force",
    },
    {
      company: "Alpha Network – Team Next Internship Project",
      role: "AI Developer Intern",
      duration: "2025",
      points: [
        "Developed One-Click Reordering Assistant for e-commerce platforms using Collaborative Filtering (SVD).",
        "Applied Apriori Algorithm (Association Rules) for smart product bundling (pairs & triplets).",
        "Evaluated models using Precision, Recall, and F1-score to ensure robust performance on Kaggle datasets.",
      ],
      tech: ["Python", "Scikit-learn", "SVD", "Feature Engineering"],
      github: "https://github.com/Umer-206/Reordering-Assistant",
    },
    {
      company: "MH Technology",
      role: "Web Developer Intern",
      duration: "2024",
      points: [
        "Built secure login/signup modules and core CRUD operations using Laravel and PHP.",
        "Designed MySQL database schemas and collaborated with the frontend team for seamless API integration.",
      ],
      tech: ["Laravel", "PHP", "MySQL", "Web Development"],
    },
  ];

  return (
    <section id="experience" className="w-full relative z-10 scroll-mt-32">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-primary-500/10 rounded-xl">
          <Briefcase className="text-primary-500" size={28} />
        </div>
        <h2 className="text-3xl font-bold text-white">
          Professional <span className="text-primary-500">Experience</span>
        </h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-white/10 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full bg-primary-500 shadow-[0_0_10px_#8b5cf6] group-hover:scale-150 transition-transform" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-primary-500 font-medium text-lg">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <GitBranch size={18} />
                  </a>
                )}
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Globe size={18} />
                  </a>
                )}
                <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded bg-white/5">
                  <Calendar size={12} />
                  {exp.duration}
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.points.map((point, pIdx) => (
                <li
                  key={pIdx}
                  className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"
                >
                  <span className="text-primary-500 mt-1.5 font-bold">•</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 bg-primary-500/10 text-primary-400 text-[10px] uppercase tracking-wider font-bold rounded border border-primary-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
