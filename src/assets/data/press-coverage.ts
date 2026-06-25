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
];
