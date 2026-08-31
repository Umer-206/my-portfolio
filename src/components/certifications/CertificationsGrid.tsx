import { useEffect, useState } from "react";

type Variant = "featured" | "standard" | "highlighted";

interface Cert {
  label: string;
  title: string;
  description: string;
  icon: string;
  variant: Variant;
  span?: string;
  /** Certificate image in /public/certificates/. Omit if not available yet. */
  image?: string;
}

const CERTS: Cert[] = [
  {
    label: "Huawei",
    title: "Huawei Certified Cloud Developer Associate – AI",
    description:
      "Rigorous validation of comprehensive AI principles, deep learning frameworks, and practical deployment strategies within enterprise cloud environments.",
    icon: "workspace_premium",
    variant: "featured",
    span: "md:col-span-2",
    image: "/certificates/huawei-hccda-ai.png",
  },
  {
    label: "University of Maryland",
    title: "AI and Career Empowerment",
    description:
      "Strategic application of artificial intelligence to enhance professional workflows and drive career innovation.",
    icon: "school",
    variant: "standard",
    image: "/certificates/ai-career-empowerment.png",
  },
  {
    label: "Dubai Future Foundation",
    title: "One Million Prompters Initiative",
    description:
      "Advanced prompt engineering across leading generative AI models, part of the UAE's national programme to build AI fluency at scale.",
    icon: "tips_and_updates",
    variant: "standard",
    image: "/certificates/one-million-prompters.png",
  },
  {
    label: "Technical Core",
    title: "Programming in Python",
    description:
      "Foundational mastery of Python syntax, data structures, and algorithmic logic essential for robust backend development.",
    icon: "terminal",
    variant: "standard",
  },
  {
    label: "HP LIFE",
    title: "Data Science & Analytics",
    description:
      "Techniques for extracting actionable insights from complex datasets using modern analytical frameworks.",
    icon: "analytics",
    variant: "standard",
    image: "/certificates/data-science-analytics.png",
  },
  {
    label: "HP LIFE",
    title: "AI for Business Professionals",
    description:
      "Translating technical AI capabilities into strategic business value and operational efficiency.",
    icon: "corporate_fare",
    variant: "standard",
    image: "/certificates/ai-for-business.png",
  },
  {
    label: "LangChain",
    title: "LangGraph Essentials – Python",
    description:
      "Architecting sophisticated, stateful multi-agent systems using LangGraph for complex problem-solving.",
    icon: "account_tree",
    variant: "highlighted",
    span: "md:col-span-2 lg:col-span-1",
  },
  {
    label: "Simplilearn",
    title: "n8n Course: No Code AI Agent Builder",
    description:
      "Designing robust, automated workflows and intelligent agents without extensive custom coding overhead.",
    icon: "schema",
    variant: "highlighted",
    image: "/certificates/n8n-no-code-agent.png",
  },
  {
    label: "SCRUMstudy",
    title: "Scrum Fundamentals Certified",
    description:
      "Core principles of agile methodology, iterative development, and effective cross-functional collaboration.",
    icon: "group_work",
    variant: "standard",
  },
  {
    label: "HP LIFE",
    title: "AI for Beginners",
    description:
      "Fundamental concepts of machine learning, neural networks, and the societal impact of artificial intelligence.",
    icon: "psychology",
    variant: "standard",
    image: "/certificates/ai-for-beginners.png",
  },
];

export const CERT_COUNT = CERTS.length;

const cardBase =
  "cert-card rounded-2xl p-8 flex flex-col shadow-sm border border-outline-variant/15 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

const CertCard = ({ cert, onView }: { cert: Cert; onView: (c: Cert) => void }) => {
  const isFeatured = cert.variant === "featured";
  const [imgOk, setImgOk] = useState(true);
  useEffect(() => setImgOk(true), [cert.image]);
  const hasImage = Boolean(cert.image) && imgOk;

  return (
    <article
      className={`${cardBase} ${cert.span ?? ""} bg-surface-container-low hover:bg-surface-container`}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700" />
      )}

      <div className="flex items-start justify-between mb-8 z-10 relative">
        <div
          className={
            isFeatured
              ? "p-3 bg-surface-container rounded-xl text-primary"
              : "p-3 bg-surface-container rounded-xl text-on-surface-variant group-hover:text-primary transition-colors"
          }
        >
          <span
            className="material-symbols-outlined text-3xl"
            style={isFeatured ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            {cert.icon}
          </span>
        </div>
        {isFeatured && (
          <span className="font-label text-xs font-bold uppercase tracking-wider text-tertiary bg-tertiary-fixed px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {cert.image && (
        <button
          type="button"
          onClick={() => onView(cert)}
          className={`relative z-10 mb-6 block w-full overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-lowest ${
            hasImage ? "" : "hidden"
          }`}
          aria-label={`View ${cert.title} certificate`}
        >
          <img
            src={cert.image}
            alt={`${cert.title} certificate`}
            loading="lazy"
            onError={() => setImgOk(false)}
            className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] ${
              isFeatured ? "h-56 md:h-72" : "h-44"
            }`}
          />
          <span className="absolute inset-0 flex items-center justify-center bg-on-surface/0 transition-colors duration-300 group-hover:bg-on-surface/40">
            <span className="flex items-center gap-1.5 rounded-full bg-surface-container-lowest/95 px-4 py-2 font-label text-xs uppercase tracking-widest text-on-surface opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="material-symbols-outlined text-[18px]">zoom_in</span>
              View Certificate
            </span>
          </span>
        </button>
      )}

      <div className="z-10 relative mt-auto">
        <p className="font-label text-sm text-on-surface-variant mb-2">{cert.label}</p>
        {isFeatured ? (
          <h2 className="font-headline text-2xl md:text-3xl font-semibold text-on-surface mb-4 leading-tight">
            {cert.title}
          </h2>
        ) : (
          <h3 className="font-headline text-xl font-semibold text-on-surface mb-3 leading-snug">
            {cert.title}
          </h3>
        )}
        <p
          className={`font-body text-on-surface-variant leading-relaxed ${
            isFeatured ? "text-base max-w-xl" : "text-sm"
          }`}
        >
          {cert.description}
        </p>
        {hasImage && (
          <button
            type="button"
            onClick={() => onView(cert)}
            className="mt-5 inline-flex items-center gap-1.5 font-label text-xs uppercase tracking-widest text-primary transition-colors hover:text-primary-container"
          >
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            View Certificate
          </button>
        )}
      </div>
    </article>
  );
};

const CertLightbox = ({ cert, onClose }: { cert: Cert; onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-on-surface/80 p-4 backdrop-blur-sm md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.title} certificate`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest text-on-surface shadow-lg transition-transform hover:scale-105"
        aria-label="Close"
      >
        <span className="material-symbols-outlined">close</span>
      </button>
      <figure
        className="max-h-full max-w-4xl overflow-hidden rounded-xl bg-surface-container-lowest shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={cert.image} alt={`${cert.title} certificate`} className="max-h-[80vh] w-full object-contain" />
        <figcaption className="flex items-center justify-between gap-4 px-6 py-4">
          <span className="font-headline text-base font-semibold text-on-surface">{cert.title}</span>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            {cert.label}
          </span>
        </figcaption>
      </figure>
    </div>
  );
};

export const CertificationsGrid = () => {
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {CERTS.map((cert) => (
          <CertCard key={cert.title + cert.label} cert={cert} onView={setActive} />
        ))}
      </section>
      {active && <CertLightbox cert={active} onClose={() => setActive(null)} />}
    </>
  );
};
