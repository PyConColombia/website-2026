import type { Metadata } from "next";

import Talks from "@/components/blocks/talks/talks";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, SITE_KEYWORDS } from "@/lib/site-seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.talks;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      ...SITE_KEYWORDS,
      "PyCon talks",
      "Python conference talks",
      "PyCon Colombia sessions",
    ],
    alternates: {
      canonical: `${getSiteUrl()}/talks`,
    },
  };
}

const TalksPage = () => {
  return <Talks />;
};

export default TalksPage;
