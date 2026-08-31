import { Hero } from "../components/home/Hero";
import { Expertise } from "../components/home/Expertise";

export const Home = () => {
  return (
    <main className="flex-grow pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      <Hero />
      <Expertise />
    </main>
  );
};
