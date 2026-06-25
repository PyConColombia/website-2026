import type { SiteLocale } from "@/lib/site-messages";

export type PressCoverageType = "article" | "poster";

export type PressCoverageItem = {
  id: string;
  type: PressCoverageType;
  outlet: string;
  url: string;
  image: string;
  publishedAt: string;
  title: Record<SiteLocale, string>;
  description: Record<SiteLocale, string>;
};

export const pressCoverageItems: PressCoverageItem[] = [
  {
    id: "guapacho-pycon-2026-decima-edicion",
    type: "article",
    outlet: "Guapacho.com",
    url: "https://guapacho.com/pycon-colombia-2026-llega-a-medellin-con-su-decima-edicion/",
    image: "/images/press/guapacho-pycon-2026.webp",
    publishedAt: "2026-06-25",
    title: {
      en: "PyCon Colombia 2026 celebrates its tenth edition in Medellín: three days of Python, AI, data, and community",
      es: "PyCon Colombia 2026 celebrará su décima edición en Medellín: tres días para vivir Python, IA, datos y comunidad",
    },
    description: {
      en: "Medellín hosts PyCon Colombia 2026 at Universidad EAFIT, July 24–26, with international keynotes, workshops, talks, and more than 600 attendees expected.",
      es: "PyCon Colombia 2026 se realizará del 24 al 26 de julio en la Universidad EAFIT de Medellín, con keynotes internacionales, talleres, charlas y más de 600 asistentes esperados.",
    },
  },
  {
    id: "andresospina-pycon-2026",
    type: "article",
    outlet: "andresospina.co",
    url: "https://andresospina.co/eventos-ia/evento/pycon-colombia-2026/",
    image: "/images/press/andresospina-pycon-2026.webp",
    publishedAt: "2026-03-15",
    title: {
      en: "PyCon Colombia 2026 — Medellín's flagship Python conference",
      es: "PyCon Colombia 2026 — la conferencia Python de referencia en Medellín",
    },
    description: {
      en: "Colombia's largest annual Python conference returns to EAFIT in Medellín, July 24–26, with keynotes, workshops, and talks on AI, data science, DevOps, and intelligent agents.",
      es: "La conferencia anual de Python más grande de Colombia regresa al NODO de la Universidad EAFIT en Medellín, del 24 al 26 de julio, con keynotes, talleres y charlas sobre IA, data science, DevOps y agentes inteligentes.",
    },
  },
];
