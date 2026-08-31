import { Link } from "react-router-dom";
import { useTypewriter } from "../../hooks/useTypewriter";

const TYPEWRITER_WORDS = [
  "Businesses.",
  "Startups.",
  "Scale.",
  "Efficiency.",
  "Enterprises.",
  "Operations.",
];

export const Hero = () => {
  const typedWord = useTypewriter({ words: TYPEWRITER_WORDS });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
      <div className="lg:col-span-7 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-sm text-tertiary font-label text-xs tracking-widest uppercase">
          <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>
            auto_awesome
          </span>
          Muhammad Umer Iqbal.
        </div>

        <h1 className="font-headline text-on-surface tracking-tight">
          <span className="block text-3xl md:text-4xl lg:text-5xl font-medium leading-snug mb-1">
            <span className="underline decoration-tertiary decoration-2 underline-offset-4">
              Building Intelligent Systems
            </span>{" "}
            for
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl font-bold italic text-primary leading-tight min-h-[1.15em]">
            {typedWord}
            <span className="inline-block w-[2px] h-[0.8em] align-middle bg-primary ml-1 animate-pulse" />
          </span>
        </h1>

        <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-2xl">
          Transforming complex business problems into intelligent automated solutions. Specialized in AI Agents, Custom Chatbots, and High-Performance Web Appsusing Python and Next.js.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            to="/projects"
            className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-sm font-label uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <a
            href="/Umer_Iqbal_AI_Engineer_CV.pdf"
            download
            className="bg-surface-container-high text-primary px-8 py-3 rounded-sm font-label uppercase tracking-widest text-sm hover:bg-surface-container transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <div
          className="aspect-[4/5] rounded-2xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #eef2f3 0%, #8e9eab 100%)",
          }}
        >
          <img
            src="/11.png"
            alt="M. Umer Iqbal, AI Engineer"
            className="w-full h-full object-cover object-top scale-[1.1] origin-top -translate-y-[9%]"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tertiary-fixed-dim/20 rounded-full blur-2xl" />
      </div>
    </section>
  );
};
