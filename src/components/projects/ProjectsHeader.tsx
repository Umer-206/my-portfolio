import { DrawUnderline } from "../common/DrawUnderline";

export const ProjectsHeader = () => {
  return (
    <header className="mb-20 text-center max-w-3xl mx-auto">
      <h1 className="font-headline text-5xl md:text-6xl font-bold mb-6 text-on-surface leading-tight tracking-tight">
        Selected <DrawUnderline className="text-primary">Projects</DrawUnderline>
      </h1>
      <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
        A curated exhibition of artificial intelligence engineering, showcasing production-ready
        APIs, multi-agent systems, and robust automation pipelines.
      </p>
      <div className="h-px w-24 bg-tertiary-fixed-dim mx-auto mt-12 opacity-50" />
    </header>
  );
};
