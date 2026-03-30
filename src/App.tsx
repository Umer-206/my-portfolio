import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { FloatingCV } from "./components/FloatingCV";
import { Education } from "./components/Education";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-zinc-950 text-slate-300 font-sans">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-900/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />

        <main className="w-full max-w-5xl mx-auto px-6 sm:px-8 mt-24 mb-32 flex flex-col gap-32">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Education />
          <FloatingCV />
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default App;
