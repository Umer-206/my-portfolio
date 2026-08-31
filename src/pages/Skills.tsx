import { SkillsHeader } from "../components/skills/SkillsHeader";
import { SkillsGrid } from "../components/skills/SkillsGrid";

export const Skills = () => {
  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <SkillsHeader />
      <SkillsGrid />
    </main>
  );
};
