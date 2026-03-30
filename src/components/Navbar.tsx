import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // npm install lucide-react agar nahi hai

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      {/* Main Glass Panel */}
      <div className="glass-panel px-4 md:px-6 py-3 flex items-center justify-between md:justify-center gap-8 rounded-full w-full max-w-fit min-w-[300px] md:min-w-0">
        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile View: Logo + Menu Button */}
        <span className="md:hidden text-white font-semibold text-sm pl-2">
          Menu
        </span>
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors pointer-events-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 left-4 right-4 glass-panel p-6 rounded-3xl border border-white/10 flex flex-col gap-4 md:hidden pointer-events-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-2"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
