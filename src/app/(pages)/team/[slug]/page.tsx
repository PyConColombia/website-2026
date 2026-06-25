import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CTASection from "@/components/blocks/cta/cta";
import TeamMemberDetail from "@/components/blocks/team/team-member-detail";
import SectionSeparator from "@/components/section-separator";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, webPageJsonLd, websiteJsonLd } from "@/lib/site-seo";
import { getAllTeamMemberSlugs, getTeamMemberBySlug } from "@/lib/team";
import {
  buildTeamMemberJsonLd,
  buildTeamMemberPageMetadata,
  getTeamMemberShareImageUrl,
} from "@/lib/team-seo";

export async function generateStaticParams() {
  return getAllTeamMemberSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  return buildTeamMemberPageMetadata(slug, STATIC_PRERENDER_LOCALE);
}

export const dynamicParams = false;

const TeamMemberSlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const messages = siteMessages[STATIC_PRERENDER_LOCALE];
  const memberUrl = `${getSiteUrl()}/team/${slug}`;
  const shareImageUrl = getTeamMemberShareImageUrl(slug);
  const personJsonLd = buildTeamMemberJsonLd(slug, memberUrl);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      websiteJsonLd(),
      webPageJsonLd({
        name: `${member.name} — ${messages.pageMeta.team.title}`,
        description: messages.pageMeta.team.description,
        url: memberUrl,
        image: shareImageUrl,
      }),
      ...(personJsonLd ? [personJsonLd] : []),
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: messages.nav.home,
            item: `${getSiteUrl()}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: messages.nav.team,
            item: `${getSiteUrl()}/team`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: member.name,
            item: memberUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <TeamMemberDetail slug={slug} />

      <SectionSeparator />

      <CTASection />

      <script
        type="application/ld+json"
        /* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is static structured data */
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
};

export default TeamMemberSlugPage;
