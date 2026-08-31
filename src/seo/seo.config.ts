/**
 * Single source of truth for all crawler-facing metadata.
 *
 * Keys must match the route paths declared in App.tsx and the <loc> entries in
 * public/sitemap.xml — if a route is added in one place, add it in all three.
 */

export const SITE_URL = "https://muhammadumeriqbal.com";
export const SITE_NAME = "Muhammad Umer Iqbal";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/11.png`;

export interface PageSeo {
  title: string;
  description: string;
}

/** Falls back to the Home entry for any path not listed (e.g. an unmatched URL). */
export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title: "Muhammad Umer Iqbal | AI Engineer & Automation Developer",
    description:
      "AI Engineer building intelligent systems for business — AI agents, custom chatbots, and high-performance web apps with Python, LangChain, and React.",
  },
  "/experience": {
    title: "Experience | Muhammad Umer Iqbal",
    description:
      "Professional experience of Muhammad Umer Iqbal: AI Engineer at Bristol Mare Biotech, AI Chatbot Developer for Huawei/NAVTTC training, and developer internships.",
  },
  "/skills": {
    title: "Skills | Muhammad Umer Iqbal",
    description:
      "Technical skills of Muhammad Umer Iqbal — Python, LangChain, TensorFlow, Hugging Face, n8n, Voiceflow, Power BI, React, and C# for AI and web engineering.",
  },
  "/education": {
    title: "Education | Muhammad Umer Iqbal",
    description:
      "Academic background of Muhammad Umer Iqbal — BS in Gaming & Multimedia (CGPA 3.2) from Superior University Lahore, with a focus on systems and algorithms.",
  },
  "/certifications": {
    title: "Certifications | Muhammad Umer Iqbal",
    description:
      "Ten professional certifications earned by Muhammad Umer Iqbal across eight issuing organizations, including eight AI-focused credentials.",
  },
  "/projects": {
    title: "Projects | Muhammad Umer Iqbal",
    description:
      "Selected projects by Muhammad Umer Iqbal — AI agents, chatbots, automation pipelines, data dashboards, and production web applications.",
  },
};
