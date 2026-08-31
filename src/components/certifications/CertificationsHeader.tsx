import { DrawUnderline } from "../common/DrawUnderline";

export const CertificationsHeader = () => {
  return (
    <header className="mb-16 md:mb-24 max-w-3xl">
      <h1 className="font-headline text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
        Credentials &amp; <br />
        <DrawUnderline className="text-primary">Continuous Learning</DrawUnderline>
      </h1>
      <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
        A curated archive of formal recognitions and technical milestones, reflecting an ongoing
        commitment to mastering modern AI architectures and workflow automation.
      </p>
    </header>
  );
};
