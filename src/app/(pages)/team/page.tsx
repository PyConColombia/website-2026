import type { Metadata } from "next";

import Team from "@/components/blocks/team/team";
import { getSiteUrl, SITE_KEYWORDS } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Organizers and volunteers behind PyCon Colombia 2026 in Medellín—July 24–26 at Universidad EAFIT.",
  keywords: [...SITE_KEYWORDS, "PyCon organizers", "Python Colombia team"],
  alternates: {
    canonical: `${getSiteUrl()}/team`,
  },
};

const TeamPage = () => {
  return <Team />;
};

export default TeamPage;
