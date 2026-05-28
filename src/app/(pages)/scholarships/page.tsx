import type { Metadata } from "next";

import Scholarships from "@/components/blocks/scholarships/scholarships";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, SITE_KEYWORDS } from "@/lib/site-seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.scholarships;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      ...SITE_KEYWORDS,
      "PyCon scholarships",
      "opportunity scholarships",
      "Python Colombia",
    ],
    alternates: {
      canonical: `${getSiteUrl()}/scholarships`,
    },
  };
}

const ScholarshipsPage = () => {
  return <Scholarships />;
};

export default ScholarshipsPage;
