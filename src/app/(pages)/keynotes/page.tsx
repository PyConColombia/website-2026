import type { Metadata } from "next";

import Keynotes from "@/components/blocks/keynotes/keynotes";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, SITE_KEYWORDS } from "@/lib/site-seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.keynotes;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...SITE_KEYWORDS, "PyCon keynotes", "keynote speakers"],
    alternates: {
      canonical: `${getSiteUrl()}/keynotes`,
    },
  };
}

const KeynotesPage = () => {
  return <Keynotes />;
};

export default KeynotesPage;
