import { useCountUp } from "../../hooks/useCountUp";
import { StatsBar } from "./StatsBar";

export const Expertise = () => {
  const { ref: certRef, value: certCount } = useCountUp<HTMLDivElement>(10);

  return (
    <section className="mb-32">
      <StatsBar />

      <div className="flex items-baseline justify-between mb-12 border-b border-surface-container-high pb-4">
        <h2 className="font-headline text-3xl font-bold text-on-surface">Curated Expertise</h2>
        <a
          href="#"
          className="font-label text-sm uppercase tracking-widest text-tertiary hover:underline decoration-tertiary underline-offset-4"
        >
          Full Technical Stack
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-8 rounded-lg ghost-border flex flex-col justify-between hover:bg-surface-container transition-colors">
          <div>
            <span
              className="material-symbols-outlined text-primary mb-6 block"
              style={{ fontSize: "2.5rem", fontVariationSettings: "'FILL' 1" }}
            >
              hub
            </span>
            <h3 className="font-headline text-xl font-semibold mb-3">Multi-Agent Systems</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Developing complex orchestrations using LangChain and n8n to enable autonomous
              reasoning, data retrieval, and task execution across disparate platforms.
            </p>
          </div>
        </div>

        <div className="bg-surface-container-low p-8 rounded-lg ghost-border flex flex-col justify-between hover:bg-surface-container transition-colors md:col-span-2">
          <div>
            <span
              className="material-symbols-outlined text-primary mb-6 block"
              style={{ fontSize: "2.5rem", fontVariationSettings: "'FILL' 1" }}
            >
              api
            </span>
            <h3 className="font-headline text-xl font-semibold mb-3">AI Product Chatbot API</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-xl">
              Production-ready REST API with modular agent architecture for Bristol Mayer
              Biotech. Built with Python and FastAPI, featuring a serverless backend on Vercel
              for scalable interactions with complex product datasets.
            </p>
          </div>
          <div className="mt-8 flex gap-2 flex-wrap">
            {["Python", "FastAPI", "Vercel"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-sm font-label text-xs uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={certRef}
          className="bg-surface-dim p-8 rounded-lg ghost-border text-center flex flex-col items-center justify-center"
        >
          <span className="font-headline text-4xl font-bold text-tertiary mb-2 tabular-nums">
            {certCount}+
          </span>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            Certifications
          </span>
        </div>

        <div className="bg-surface-container-low p-8 rounded-lg ghost-border flex flex-col justify-between hover:bg-surface-container transition-colors md:col-span-2">
          <div>
            <span
              className="material-symbols-outlined text-primary mb-6 block"
              style={{ fontSize: "2.5rem", fontVariationSettings: "'FILL' 1" }}
            >
              schema
            </span>
            <h3 className="font-headline text-xl font-semibold mb-3">RAG &amp; Knowledge Retrieval</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-xl">
              Designing Retrieval-Augmented Generation systems for intelligent PDF parsing and
              specific knowledge extraction, utilized in policy and dataset task forces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
