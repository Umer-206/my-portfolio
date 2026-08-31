import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Seo } from "./components/layout/Seo";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { Skills } from "./pages/Skills";
import { Education } from "./pages/Education";
import { Certifications } from "./pages/Certifications";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div className="font-body antialiased min-h-screen flex flex-col bg-surface-container-lowest text-on-surface">
      <Seo />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
