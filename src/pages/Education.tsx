import { EducationHeader } from "../components/education/EducationHeader";
import { EducationGrid } from "../components/education/EducationGrid";

export const Education = () => {
  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto w-full">
      <EducationHeader />
      <EducationGrid />
    </main>
  );
};
