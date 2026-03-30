import { motion } from "framer-motion";
import { Download } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 w-full mb-12 py-20"
    >
      {/* --- Left Side: Text Content --- */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6"
      >
        <h2 className="text-primary-500 font-semibold tracking-wider uppercase text-sm">
          Available for Freelance Projects
        </h2>
        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight">
          Muhammad
          <br className="hidden md:block" /> Umer Iqbal
        </h1>
        <h3 className="text-2xl md:text-3xl text-slate-400 font-light italic">
          AI Engineer & Full-Stack Developer
        </h3>
        <p className="text-slate-400 max-w-lg leading-relaxed pt-4">
          Transforming complex business problems into intelligent automated
          solutions. Specialized in{" "}
          <span className="text-white">
            AI Agents, Custom Chatbots, and High-Performance Web Apps
          </span>
          using Python and Next.js.
        </p>
        <div className="flex flex-wrap items-center gap-6 pt-6">
          {/* Phone / WhatsApp */}
          <a
            href="https://wa.me/+923330377707"
            target="_blank"
            className="flex items-center gap-2.5 text-slate-300 hover:text-primary-400 transition-colors group"
          >
            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary-500/10 transition-all border border-white/5 group-hover:border-primary-500/20">
              <span className="text-sm">📞</span>
            </div>
            <span className="font-medium text-sm md:text-base tracking-tight">
              +92 333 0377707
            </span>
          </a>

          {/* Vertical Divider (Optional - Hidden on Mobile) */}
          <div className="hidden md:block w-1px h-4 bg-white/10" />

          {/* Email */}
          <a
            href="mailto:aiumeriqbal@gmail.com"
            className="flex items-center gap-2.5 text-slate-300 hover:text-primary-400 transition-colors group"
          >
            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary-500/10 transition-all border border-white/5 group-hover:border-primary-500/20">
              <span className="text-sm">✉️</span>
            </div>
            <span className="font-medium text-sm md:text-base tracking-tight">
              aiumeriqbal@gmail.com
            </span>
          </a>
        </div>
        <div className="flex items-center gap-4 pt-6">
          <a
            href="#projects"
            className="bg-primary-600 px-6 py-3 rounded-lg text-white font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
          >
            View Work
          </a>
          <a
            href="/Umer_Iqbal_AI_Engineer_CV.pdf"
            download
            className="glass-panel px-6 py-3 flex items-center gap-2 text-white border border-white/10 rounded-lg hover:bg-white/5 transition-all"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </motion.div>

      {/* --- Right Side: Image with Animation --- */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end relative"
      >
        {/* Ambient Light Effect behind photo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-600/20 blur-[80px] rounded-full" />

        <motion.img
          src="/umerphoto.png"
          alt="Muhammad Umer Iqbal"
          className="relative z-10 w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-[0_0_25px_rgba(139,92,246,0.3)]"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 85%, transparent 100%)",
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
