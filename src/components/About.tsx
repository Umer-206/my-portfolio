import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="w-full relative z-10 scroll-mt-32">
      <motion.div
        className="glass-panel p-8 rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Professional Summary
        </h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          I am a specialized{" "}
          <span className="text-primary-500 font-semibold">
            AI Engineer at Bristol Mayer Biotech
          </span>
          , where I bridge the gap between pharmaceutical processes and
          cutting-edge automation. With a robust foundation in{" "}
          <span className="text-primary-500">BS Gaming & Multimedia</span>, I
          build complete frontend and backend solutions while integrating
          advanced AI like
          <span className="text-white font-bold">
            {" "}
            customer support chatbots, email automation, and autonomous calling
            agents.
          </span>
        </p>

        <p className="text-slate-300 leading-relaxed">
          My expertise includes developing multi-agent systems at{" "}
          <span className="text-primary-500"> DeepVision.ai</span> using
          <span className="text-white"> LangChain and n8n</span>. I am dedicated
          to transforming manual business workflows into automated, high-value
          systems, ensuring technological solutions are both innovative and
          user-centric.
        </p>
      </motion.div>
    </section>
  );
};
