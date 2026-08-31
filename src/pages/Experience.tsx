import { ExperienceHeader } from "../components/experience/ExperienceHeader";
import { ExperienceTimeline } from "../components/experience/ExperienceTimeline";

export const Experience = () => {
  return (
    <main className="flex-grow w-full max-w-4xl mx-auto px-6 pt-32 pb-24">
      <ExperienceHeader />
      <ExperienceTimeline />
    </main>
  );
};
