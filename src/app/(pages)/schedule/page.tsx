import type { Metadata } from "next";

import Schedule from "@/components/blocks/schedule/schedule";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, SITE_KEYWORDS } from "@/lib/site-seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.schedule;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      ...SITE_KEYWORDS,
      "PyCon schedule",
      "Python conference agenda",
      "PyCon Colombia talks",
    ],
    alternates: {
      canonical: `${getSiteUrl()}/schedule`,
    },
  };
}

const SchedulePage = () => {
  return <Schedule />;
};

export default SchedulePage;
