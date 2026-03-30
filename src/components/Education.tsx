import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EDUCATION_DATA = [
  {
    degree: "BS Gaming & Multimedia",
    institution: "Superior University Gold Campus Lahore",
    duration: "2021 – 2025",
    details: "CGPA: 3.3",
    icon: <GraduationCap size={20} />,
  },
  {
    degree: "Intermediate (ICS with Physics)",
    institution: "Punjab Group of Colleges",
    duration: "2020 – 2021",
    details: "Core Sciences & Programming Foundation",
    icon: <Calendar size={20} />,
  },
  {
    degree: "Matric (Computer Science)",
    institution: "Allied School Gulberg",
    duration: "2018 – 2019",
    details: "Computer Science Major",
    icon: <MapPin size={20} />,
  },
];

export const Education = () => {
  return (
    <section id="education" className="w-full relative z-10 scroll-mt-32">
      <h2 className="text-3xl font-bold text-white mb-8">
        Educational <span className="text-primary-500">Background</span>
      </h2>

      <div className="space-y-6">
        {EDUCATION_DATA.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel p-6 border border-white/5 flex flex-col md:flex-row md:items-center gap-4 hover:border-primary-500/30 transition-all group"
          >
            {/* Icon Box */}
            <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0 group-hover:scale-110 transition-transform">
              {edu.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  {edu.degree}
                </h3>
                <span className="text-primary-500 font-medium text-sm bg-primary-500/5 px-3 py-1 rounded-full border border-primary-500/10">
                  {edu.duration}
                </span>
              </div>

              <p className="text-slate-300 font-medium mt-1 italic">
                {edu.institution}
              </p>

              <p className="text-slate-400 text-sm mt-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
