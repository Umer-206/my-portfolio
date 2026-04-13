import { motion } from "framer-motion";
import { Award, GraduationCap, Code, ShieldCheck } from "lucide-react";

const CERT_DATA = [
  {
    title: "Huawei AI Certification",
    org: "Artificial Intelligence (HCCDA-AI) - NAVTTC Collaboration",
    icon: <Award size={22} />,
    color: "text-red-500",
    bg: "bg-red-600/10",
  },
  {
    title: "AI and Career Empowerment",
    org: "University of Maryland (Robert H. Smith School of Business), USA",
    icon: <GraduationCap size={22} />,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    title: "Programming in Python",
    org: "Certification Training",
    icon: <Code size={22} />,
    color: "text-orange-500",
    bg: "bg-orange-600/10",
  },
  {
    title: "Data Science & Analytics",
    org: "HP LIFE",
    icon: <ShieldCheck size={22} />,
    color: "text-emerald-500",
    bg: "bg-emerald-600/10",
  },
  {
    title: "AI for Business Professionals",
    org: "HP LIFE",
    icon: <Award size={22} />,
    color: "text-emerald-500",
    bg: "bg-emerald-600/10",
  },

  {
    title: "Quickstart: LangGraph Essentials - Python",
    org: "LangChain Academy",
    icon: <Code size={22} />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "n8n Course: No Code AI Agent Builder",
    org: "Simplilearn",
    icon: <Code size={22} />,
    color: "text-orange-500",
    bg: "bg-orange-600/10",
  },
  {
    title: "Data Science & Analytics",
    org: "HP LIFE",
    icon: <ShieldCheck size={22} />,
    color: "text-emerald-500",
    bg: "bg-emerald-600/10",
  },
  {
    title: "Scrum Fundamentals Certified",
    org: "SCRUMstudy",
    icon: <ShieldCheck size={22} />,
    color: "text-purple-500",
    bg: "bg-purple-600/10",
  },
  {
    title: "AI for Beginners",
    org: "HP LIFE",
    icon: <Award size={22} />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },

  {
    title: "Diploma in Cinematography & Video Production",
    org: "University of South Asia",
    icon: <GraduationCap size={22} />,
    color: "text-blue-500",
    bg: "bg-blue-600/10",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="w-full relative z-10 scroll-mt-32">
      <h2 className="text-3xl font-bold text-white mb-8">
        Certifications <span className="text-primary-500">& Awards</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CERT_DATA.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, borderColor: "rgba(var(--primary-500), 0.3)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass-panel p-5 border border-white/5 flex items-center gap-4 transition-colors"
          >
            <div className={`p-3 ${cert.bg} ${cert.color} rounded-xl shrink-0`}>
              {cert.icon}
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                {cert.title}
              </h3>
              <p className="text-slate-400 text-xs mt-1 uppercase tracking-wider font-medium">
                {cert.org}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
