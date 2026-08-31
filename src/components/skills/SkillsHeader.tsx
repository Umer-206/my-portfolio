import { DrawUnderline } from "../common/DrawUnderline";

export const SkillsHeader = () => {
  return (
    <header className="mb-16 md:mb-24 max-w-3xl">
      <h1 className="font-headline text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
        Technical <DrawUnderline className="text-primary">Expertise</DrawUnderline>
      </h1>
      <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
        A curated taxonomy of my technical proficiencies, spanning machine learning frameworks,
        orchestration agents, and foundational development languages.
      </p>
    </header>
  );
};
