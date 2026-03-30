import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "AI & ML Frameworks",
    skills: ["Scikit-learn", "TensorFlow", "Hugging Face", "Groq"],
    color: "from-purple-900/20",
    text: "text-purple-400",
    span: "md:col-span-2",
  },
  {
    category: "AI & Automation",
    skills: ["LangChain", "n8n", "Voiceflow", "Botpress", "Streamlit"],
    color: "from-blue-900/20",
    text: "text-blue-400",
    span: "md:col-span-2",
  },
  {
    category: "Data Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau"],
    color: "from-emerald-900/20",
    text: "text-emerald-400",
    span: "md:col-span-4", // Isay bara kar diya taake list columns mein fit aye
  },
  {
    category: "Languages",
    skills: ["Python", "C#", "React", "Bootstrap"],
    color: "from-orange-900/20",
    text: "text-orange-400",
    span: "md:col-span-1",
  },
  {
    category: "Platforms & Tools",
    skills: ["GitHub", "Google Colab", "Jupyter", "VS Code"],
    color: "from-rose-900/20",
    text: "text-rose-400",
    span: "md:col-span-2",
  },
  {
    category: "Game Development",
    skills: ["Unity2D", "Unity3D", "AR Games"],
    color: "from-cyan-900/20",
    text: "text-cyan-400",
    span: "md:col-span-1",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="w-full relative z-10 scroll-mt-32 px-4">
      <h2 className="text-3xl font-bold text-white mb-8">
        Technical <span className="text-primary-500">Expertise</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-panel ${group.span} p-6 flex flex-col relative overflow-hidden group border border-white/5 hover:border-primary-500/30 transition-all`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${group.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <p
              className={`${group.text} uppercase tracking-widest text-[10px] font-bold mb-4 z-10`}
            >
              {group.category}
            </p>

            {/* Ye raha main change: Grid use kiya hai columns ke liye */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 z-10">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-gray-300 text-sm md:text-base font-medium flex items-center gap-2 group-hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
