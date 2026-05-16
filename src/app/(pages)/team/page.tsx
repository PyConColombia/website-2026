import type { Metadata } from "next";

import Team from "@/components/blocks/team/team";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, SITE_KEYWORDS } from "@/lib/site-seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.team;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...SITE_KEYWORDS, "PyCon organizers", "Python Colombia team"],
    alternates: {
      canonical: `${getSiteUrl()}/team`,
    },
  };
}

const TeamPage = () => {
  return <Team />;
};

export default TeamPage;
