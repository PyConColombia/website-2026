import { keynoteList } from "@/assets/data/keynotes";
import { keynoteContentByLocale } from "@/assets/data/keynotes-content.locale";
import type { Features } from "@/components/blocks/benefits/benefits";
import type { SiteLocale } from "@/lib/site-messages";

export function getBenefitsFeatures(locale: SiteLocale): Features {
  const content = keynoteContentByLocale[locale];

  return keynoteList.map((keynote) => {
    const localized = content[keynote.slug];

    return {
      slug: keynote.slug,
      title: localized.name,
      role: localized.role,
      country: localized.country,
      description: localized.description,
      image: keynote.image,
      flag: keynote.flag,
      linkedin: keynote.linkedin,
      github: keynote.github,
      website: keynote.website,
      youtube: keynote.youtube,
      x: keynote.x,
    };
  });
}
