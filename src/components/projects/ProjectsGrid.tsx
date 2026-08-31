import { useEffect, useState } from "react";

type Variant = "feature" | "media" | "wide" | "compact";

interface Project {
  title: string;
  description: string;
  tech: string[];
  variant: Variant;
  span?: string;
  featured?: boolean;
  /** Cover image in /public/projects/. Falls back to a tonal gradient if missing. */
  image?: string;
  /** Icon for compact (imageless) cards. */
  icon?: string;
  href?: string;
  cta?: string;
  /** Result highlights — small stat row that surfaces the project's outcomes. */
  stats?: { value: string; label: string }[];
}

const PROJECTS: Project[] = [
  {
    title: "AI Product Chatbot API",
    description:
      "Developed a production-ready REST API with modular agent architecture for product datasets. Implemented a serverless backend via Vercel for scalable interaction and intelligent dataset querying.",
    tech: ["Python", "FastAPI", "Vercel"],
    variant: "feature",
    span: "md:col-span-2",
    featured: true,
    image: "/projects/ai-product-chatbot-api.jpg",
    href: "https://github.com/Umer-206/chatbot-api",
    cta: "View Technical Details",
  },
  {
    title: "WhatsApp Restaurant Assistant",
    description:
      "Automated order management system integrating n8n workflow automation with Gemini AI for natural language processing and seamless customer interactions.",
    tech: ["n8n", "Gemini AI"],
    variant: "media",
    image: "/projects/whatsapp-restaurant-assistant.png",
  },
  {
    title: "Bristol Cosmetics E-Commerce Platform",
    description:
      "End to end ecommerce platform for Bristol Cosmetics, built and shipped to production solo. Next.js 14 + FastAPI + MySQL: customer storefront (cart, wishlist, guest checkout, order tracking, reviews) plus a full admin dashboard for products, inventory, orders, returns, review moderation and a Cloudinary image pipeline.",
    tech: ["Next.js 14", "FastAPI", "MySQL", "TypeScript", "Cloudinary"],
    variant: "wide",
    span: "md:col-span-2",
    image: "/projects/bristol-cosmetics.jpg",
    href: "https://bristolcosmetics.com/",
    cta: "Visit Live Site",
  },
  {
    title: "AI Medical Booking System",
    description:
      "A sophisticated voice-based booking solution utilizing ElevenLabs for natural speech synthesis and VAPI for robust conversational orchestration.",
    tech: ["ElevenLabs", "VAPI"],
    variant: "media",
    image: "/projects/ai-medical-booking-system.jpg",
  },
  {
    title: "Fuel Station Audit System Shell",
    description:
      "Self-practice computer-vision project that monitors fuel-station CCTV in real time: YOLOv8 detection with ByteTrack IDs for vehicle counting and service-time tracking, plus staff uniform-compliance checks (shirt, pants, cap, shoes) and action recognition (greeting, engine-oil offer), streamed to a live Flask dashboard.",
    tech: ["YOLOv8", "ByteTrack", "OpenCV", "PyTorch", "Flask"],
    variant: "wide",
    span: "md:col-span-2",
    image: "/projects/shell-fuel-audit.jpg",
    href: "https://github.com/Umer-206/Shell-ComputerVesion/tree/main",
    cta: "View on GitHub",
  },
  {
    title: "YouTube Video Summarizer",
    description:
      "Streamlit application designed for rapid transcript parsing and intelligent summarization of long-form video content.",
    tech: ["Streamlit", "NLP"],
    variant: "compact",
    icon: "movie",
    image: "/projects/youtube-video-summarizer.jpg",
    href: "https://github.com/Umer-206/YouTube-Video-Summarizer-Agent",
    cta: "View on GitHub",
  },
  {
    title: "Multi-Agent Task Force",
    description:
      "Engineered a complex multi-agent system designed to extract and analyze sustainability insights. Built on advanced language models to coordinate discrete tasks across specialized AI nodes.",
    tech: ["LangChain", "Multi-Agent", "Python"],
    variant: "wide",
    span: "md:col-span-2",
    image: "/projects/multi-agent-task-force.jpg",
    href: "https://github.com/Umer-206/Multi-Agent-Task-Force",
    cta: "Explore Architecture",
  },
  {
    title: "Reordering Assistant",
    description:
      "AI recommendation system from the Team Next Internship: Collaborative Filtering (SVD) for personalised reorder suggestions, plus Apriori association rules for smart product bundles (pairs & triplets).",
    tech: ["SVD", "Apriori", "Scikit-learn"],
    variant: "compact",
    icon: "shopping_cart",
    image: "/projects/reordering-assistant.jpg",
    href: "https://github.com/Umer-206/Reordering-Assistant/tree/main",
    cta: "View on GitHub",
    stats: [
      { value: "16 / 16", label: "Assoc. rules valid" },
      { value: "0", label: "Failed rules" },
      { value: "Top-10", label: "Recs / user" },
    ],
  },
  {
    title: "AI Resume & Job Coach",
    description:
      "An AI-powered resume and job-coaching web app built with Streamlit and LangChain: resume generation, CV analysis, cover-letter writing, LinkedIn summary generation, and a mock-interview chatbot powered by a local Ollama LLM.",
    tech: ["Streamlit", "LangChain", "Ollama"],
    variant: "compact",
    icon: "description",
    image: "/projects/ai-resume-job-coach.jpg",
    href: "https://github.com/Umer-206/-AI-Resume-Builder-Job-Coach",
    cta: "View on GitHub",
  },
  {
    title: "PDF RAG — Ask Questions from a PDF",
    description:
      "A Streamlit RAG app: upload a PDF and ask questions about its content. LangChain for the retrieval pipeline, FAISS for vector search, and local LLMs via Ollama for grounded answers.",
    tech: ["LangChain", "FAISS", "Ollama"],
    variant: "compact",
    icon: "picture_as_pdf",
    image: "/projects/pdf-rag.jpg",
    href: "https://github.com/Umer-206/RAG-App-Ask-Questions-from-PDF",
    cta: "View on GitHub",
  },
  {
    title: "Facebook Lead Scraper",
    description:
      "Automated data extraction tool utilizing Selenium and BeautifulSoup to gather and structure lead information efficiently.",
    tech: ["Selenium", "BeautifulSoup"],
    variant: "compact",
    icon: "search",
    image: "/projects/facebook-lead-scraper.jpg",
  },
  {
    title: "AI Customer Support",
    description:
      "Intelligent FAQ resolution system built via Voiceflow integration, designed to handle routine product inquiries autonomously.",
    tech: ["Voiceflow", "Automation"],
    variant: "compact",
    icon: "support_agent",
    image: "/projects/ai-customer-support.jpg",
  },
  {
    title: "Titanic Survival Prediction",
    description:
      "Practice ML project on the Kaggle Titanic dataset — the full workflow from cleaning and EDA through feature engineering to benchmarking five classifiers (Logistic Regression, Decision Tree, Random Forest, SVM, KNN). Random Forest won at 82.1% accuracy.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    variant: "compact",
    icon: "directions_boat",
    image: "/projects/titanic-survival-prediction.jpg",
    href: "https://github.com/Umer-206/Titanic-ML-Project",
    cta: "View on GitHub",
    stats: [
      { value: "82.1%", label: "Best acc. (Random Forest)" },
      { value: "5", label: "Models compared" },
      { value: "7", label: "Features used" },
    ],
  },
  {
    title: "Iris Flower Classification",
    description:
      "CodeAlpha Data Science internship task — an end-to-end pipeline on the classic Iris dataset: EDA, StandardScaler preprocessing, benchmarking Logistic Regression / Decision Tree / Random Forest, then deploying the best model as an interactive Streamlit app.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    variant: "compact",
    icon: "local_florist",
    image: "/projects/iris-flower-classification.jpg",
    href: "https://github.com/Umer-206/CodeAlpha-Iris-Flower-Classification",
    cta: "View on GitHub",
    stats: [
      { value: "93.3%", label: "Best acc. (LogReg)" },
      { value: "3", label: "Models compared" },
      { value: "4", label: "Features" },
    ],
  },
];

const cardBase =
  "group flex bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:bg-surface-container";

const Tags = ({ tech }: { tech: string[] }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {tech.map((t) => (
      <span
        key={t}
        className="text-xs font-label px-3 py-1 bg-surface-container text-on-surface-variant rounded-full transition-colors group-hover:bg-surface-container-high"
      >
        {t}
      </span>
    ))}
  </div>
);

const Stats = ({ project }: { project: Project }) =>
  project.stats ? (
    <div className="mb-6 grid grid-cols-3 divide-x divide-outline-variant/30 rounded-lg bg-surface-container/60 py-3">
      {project.stats.map((s) => (
        <div key={s.label} className="px-2 text-center">
          <div className="font-headline text-lg font-bold leading-none text-primary tabular-nums">
            {s.value}
          </div>
          <div className="mt-1 font-label text-[10px] uppercase tracking-wider text-on-surface-variant">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  ) : null;

const Cta = ({ project }: { project: Project }) =>
  project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-2 w-max mt-auto font-label text-sm uppercase tracking-wide font-semibold text-primary hover:text-primary-container transition-colors"
    >
      {project.cta ?? "Explore"}
      <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">
        arrow_forward
      </span>
    </a>
  ) : null;

const CoverImage = ({ project, className }: { project: Project; className: string }) => {
  const [ok, setOk] = useState(true);
  useEffect(() => setOk(true), [project.image]);
  return (
    <div className={`relative overflow-hidden bg-surface-container-highest ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #e9e8e9 0%, #f5f3f4 45%, #d9e2ff 120%), radial-gradient(circle at 25% 20%, rgba(9,76,178,0.18), transparent 55%)",
          backgroundBlendMode: "multiply",
        }}
      />
      {project.image && ok && (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={() => setOk(false)}
          className="relative object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      {project.featured && (
        <div className="absolute top-4 left-4">
          <span className="bg-surface-container-lowest/90 backdrop-blur-sm text-tertiary px-3 py-1 rounded-sm text-xs font-label uppercase tracking-wider font-semibold shadow-sm">
            Featured
          </span>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  if (project.variant === "compact") {
    return (
      <article className={`${cardBase} flex-col ${project.span ?? "col-span-1"}`}>
        {project.image && <CoverImage project={project} className="aspect-[16/9] w-full" />}
        <div className="p-8 flex flex-col flex-grow">
          {!project.image && (
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined">{project.icon}</span>
            </div>
          )}
          <h3 className="font-headline text-xl font-bold mb-3 text-on-surface transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>
          <Stats project={project} />
          <Tags tech={project.tech} />
          <Cta project={project} />
        </div>
      </article>
    );
  }

  if (project.variant === "wide") {
    return (
      <article className={`${cardBase} flex-col md:flex-row ${project.span ?? ""}`}>
        <CoverImage project={project} className="aspect-[16/9] md:aspect-auto md:h-auto md:w-2/5 shrink-0" />
        <div className="p-8 md:w-3/5 flex flex-col flex-grow justify-center">
          <h3 className="font-headline text-2xl font-bold mb-3 text-on-surface transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>
          <Stats project={project} />
          <Tags tech={project.tech} />
          <Cta project={project} />
        </div>
      </article>
    );
  }

  const isFeature = project.variant === "feature";
  return (
    <article className={`${cardBase} flex-col ${project.span ?? ""}`}>
      <CoverImage project={project} className="aspect-[16/9] w-full" />
      <div className="p-8 flex flex-col flex-grow">
        <h2
          className={`font-headline font-bold mb-3 text-on-surface transition-colors group-hover:text-primary ${
            isFeature ? "text-3xl" : "text-2xl"
          }`}
        >
          {project.title}
        </h2>
        <p
          className={`font-body text-on-surface-variant leading-relaxed mb-6 flex-grow ${
            isFeature ? "" : "text-sm"
          }`}
        >
          {project.description}
        </p>
        <Stats project={project} />
        <Tags tech={project.tech} />
        <Cta project={project} />
      </div>
    </article>
  );
};

export const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};
