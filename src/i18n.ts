import type { Lang, Text } from "./config";

/** Devuelve el texto en el idioma pedido (o el español si falta la traducción). */
export function t(value: Text | undefined | null, lang: Lang): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.es || "";
}

export type TabKey = "about" | "publications" | "projects" | "teaching" | "cv";

/** Pestañas en orden. Ruta en cada idioma (el español vive en la raíz). */
export const tabs: Array<{ key: TabKey; label: Record<Lang, string>; path: Record<Lang, string> }> = [
  { key: "about", label: { es: "Sobre mí", en: "About" }, path: { es: "/", en: "/en/" } },
  { key: "publications", label: { es: "Publicaciones", en: "Publications" }, path: { es: "/publicaciones/", en: "/en/publications/" } },
  { key: "projects", label: { es: "Proyectos", en: "Projects" }, path: { es: "/proyectos/", en: "/en/projects/" } },
  { key: "teaching", label: { es: "Docencia", en: "Teaching" }, path: { es: "/docencia/", en: "/en/teaching/" } },
  { key: "cv", label: { es: "CV", en: "CV" }, path: { es: "/cv/", en: "/en/cv/" } },
];

export function tabPath(key: TabKey, lang: Lang): string {
  return tabs.find((tab) => tab.key === key)!.path[lang];
}

/** Textos fijos de la interfaz. */
export const ui = {
  researchInterests: { es: "Líneas de investigación", en: "Research interests" },
  education: { es: "Formación", en: "Education" },
  news: { es: "Noticias", en: "News" },
  designBy: { es: "Diseño inspirado en el sitio de", en: "Design inspired by the website of" },
  contact: { es: "Contacto", en: "Contact" },
  contactText: {
    es: "¿Quieres colaborar en investigación o conversar sobre mi trabajo? Escríbeme.",
    en: "Would you like to collaborate on research or talk about my work? Get in touch.",
  },
  pubsIntro: {
    es: "Publicaciones, tesis y presentaciones. La lista completa y actualizada está en",
    en: "Publications, theses and talks. The complete, up-to-date list is on",
  },
  and: { es: "y", en: "and" },
  journal: { es: "Artículos en revista", en: "Journal articles" },
  conference: { es: "Artículos en conferencia", en: "Conference papers" },
  thesis: { es: "Tesis", en: "Theses" },
  talks: { es: "Presentaciones", en: "Talks" },
  view: { es: "Ver", en: "View" },
  researchProjects: { es: "Proyectos de investigación", en: "Research projects" },
  codeProjects: { es: "Proyectos de código", en: "Code projects" },
  codeProjectsIntro: {
    es: "Software y herramientas que desarrollé, con su código en GitHub.",
    en: "Software and tools I have developed, with their code on GitHub.",
  },
  teachingIntro: {
    es: "Docencia universitaria, asesoría de tesis y cursos en los que fui pre docente.",
    en: "University teaching, thesis advising and courses I supported as a teaching assistant.",
  },
  cvIntro: { es: "Resumen de mi trayectoria.", en: "A summary of my career." },
  downloadCv: { es: "Descargar CV (PDF)", en: "Download CV (PDF)" },
  experience: { es: "Experiencia", en: "Experience" },
  specializations: { es: "Especializaciones", en: "Specialized training" },
  scholarships: { es: "Becas y financiamiento", en: "Scholarships and funding" },
  awards: { es: "Premios y distinciones", en: "Honors and awards" },
  skills: { es: "Técnicas", en: "Skills" },
  languages: { es: "Idiomas", en: "Languages" },
  rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  langName: { es: "Español", en: "English" },
  switchTo: { es: "Read in English", en: "Leer en español" },
} satisfies Record<string, Record<Lang, string>>;

export const otherLang = (lang: Lang): Lang => (lang === "es" ? "en" : "es");
