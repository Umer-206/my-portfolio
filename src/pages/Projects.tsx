import { ProjectsHeader } from "../components/projects/ProjectsHeader";
import { ProjectsGrid } from "../components/projects/ProjectsGrid";

export const Projects = () => {
  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <ProjectsHeader />
      <ProjectsGrid />
    </main>
  );
};
