import { motion } from "framer-motion";
import {
  ExternalLink,
  GitBranch,
  Code2,
  Terminal,
  Cpu,
  Database,
} from "lucide-react";

const PROJECTS = [
  {
    title: "AI Product Chatbot API",
    company: "Bristol Mare Biotech",
    description:
      "AI-powered product chatbot with modular agent architecture. Developed production-ready REST API for scalable interaction with product datasets.",
    tech: ["Python", "FastAPI", "Vercel"],
    github: "https://github.com/Umer-206/chatbot-api",
    link: "https://umer-206.github.io/chatbot-api/",
    icon: <Terminal size={20} />,
  },
  {
    title: "WhatsApp Restaurant Assistant",
    company: "n8n + Gemini AI",
    description:
      "Intelligent WhatsApp chatbot for menu updates and order management. Logs data directly into Google Sheets via n8n workflows.",
    tech: ["n8n", "Gemini AI", "WhatsApp API"],
    icon: <Code2 size={20} />,
  },
  {
    title: "AI Medical Booking System",
    company: "DeepVision.AI",
    description:
      "Voice-based appointment booking using ElevenLabs + VAPI. Automated workflows for booking, emails, and Twilio call handling.",
    tech: ["n8n", "ElevenLabs", "VAPI"],
    icon: <Cpu size={20} />,
  },
  {
    title: "YouTube Video Summarizer",
    company: "Personal Project",
    description:
      "Streamlit app summarizing YouTube videos via AI transcript parsing with summary download and history tracking features.",
    tech: ["Streamlit", "Python", "LLM"],
    github: "https://github.com/Umer-206/YouTube-Video-Summarizer-Agent",
    icon: <Terminal size={20} />,
  },
  {
    title: "Multi-Agent Task Force",
    company: "Huawei Training",
    description:
      "Multi-agent system with News, Data, Policy, and Innovation agents providing sustainability insights and policy analysis.",
    tech: ["LangChain", "Python", "Multi-Agent"],
    github: "https://github.com/Umer-206/Multi-Agent-Task-Force",
    icon: <Database size={20} />,
  },
  {
    title: "Reordering Assistant",
    company: "Alpha Network",
    description:
      "E-commerce solution for reordering and smart bundling using Collaborative Filtering (SVD) and Apriori-based rules.",
    tech: ["SVD", "Apriori", "Scikit-learn"],
    icon: <Database size={20} />,
  },
  {
    title: "Facebook Lead Scraper",
    company: "Automation Tool",
    description:
      "Automated scraper using Selenium and BS4 to extract Marketplace leads and export clean CSV data.",
    tech: ["Selenium", "BeautifulSoup", "Python"],
    icon: <Terminal size={20} />,
  },
  {
    title: "AI Customer Support",
    company: "Voiceflow Integration",
    description:
      "Voice and text-based AI assistant for product inquiries and FAQs, embedded into custom store websites.",
    tech: ["Voiceflow", "HTML/JS"],
    icon: <Code2 size={20} />,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="w-full relative z-10 scroll-mt-32">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
        <Code2 className="text-primary-500" />
        Featured <span className="text-primary-500">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400">
                {project.icon}
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <GitBranch size={18} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-primary-500 text-xs font-medium mb-3 uppercase tracking-wider">
                {project.company}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {project.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-1 bg-white/5 text-slate-300 text-[10px] rounded-md border border-white/10 group-hover:border-primary-500/20"
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
