import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="glass-panel px-6 py-3 flex items-center gap-8 rounded-full pointer-events-auto">
        <a
          href="#hero"
          className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          Home
        </a>

        <a
          href="#experience"
          className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          Experience
        </a>
        <a
          href="#skills"
          className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          Skills
        </a>
        <a
          href="#education"
          className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          Education
        </a>
        <a
          href="#certifications"
          className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          Certifications
        </a>
        <a
          href="#projects"
          className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          Projects
        </a>
      </div>
    </motion.nav>
  );
};
