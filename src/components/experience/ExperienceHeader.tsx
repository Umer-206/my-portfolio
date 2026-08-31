import { DrawUnderline } from "../common/DrawUnderline";

export const ExperienceHeader = () => {
  return (
    <header className="mb-20 text-center">
      <h1 className="font-headline text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
        Professional <DrawUnderline className="text-primary">Experience</DrawUnderline>
      </h1>
      <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
        From production AI systems to full-stack platforms shipped end to end  a track record
        of building software that businesses run on.
      </p>
    </header>
  );
};
