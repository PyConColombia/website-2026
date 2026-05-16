import keynotesEs from "@/assets/data/keynotes.es.json";
import keynotesEn from "@/assets/data/keynotes.json";
import type { Features } from "@/components/blocks/benefits/benefits";
import type { SiteLocale } from "@/lib/site-messages";

export function getBenefitsFeatures(locale: SiteLocale): Features {
  const keynotes = locale === "es" ? keynotesEs : keynotesEn;

  return keynotes.map((keynote) => ({
    title: keynote.name,
    role: keynote.role,
    country: keynote.country,
    description: keynote.description,
    image: keynote.image,
    flag: keynote.flag,
    linkedin: keynote.linkedin,
    github: keynote.github,
    website: keynote.website,
    youtube: keynote.youtube,
    x: keynote.x,
  }));
}
