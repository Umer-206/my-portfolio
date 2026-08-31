import { DrawUnderline } from "../common/DrawUnderline";

export const EducationHeader = () => {
  return (
    <header className="mb-20 max-w-3xl">
      <p className="font-label text-tertiary uppercase tracking-widest text-sm mb-4 font-semibold flex items-center gap-2">
        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
          menu_book
        </span>
        Academic Foundation
      </p>
      <h1 className="font-headline text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-8">
        Scholarly <DrawUnderline className="text-primary">Pursuits.</DrawUnderline>
      </h1>
      <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
        A rigorous foundation in computational theory and multimedia systems, establishing the
        bedrock for advanced artificial intelligence engineering.
      </p>
    </header>
  );
};
