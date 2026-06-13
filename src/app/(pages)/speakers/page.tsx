import type { Metadata } from "next";

import Speakers from "@/components/blocks/speakers/speakers";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, SITE_KEYWORDS } from "@/lib/site-seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.speakers;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...SITE_KEYWORDS, "PyCon speakers", "Python talks"],
    alternates: {
      canonical: `${getSiteUrl()}/speakers`,
    },
  };
}

const SpeakersPage = () => {
  return <Speakers />;
};

export default SpeakersPage;
