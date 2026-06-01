import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CTASection from "@/components/blocks/cta/cta";
import SponsorDetail from "@/components/blocks/sponsors/sponsor-detail";
import SectionSeparator from "@/components/section-separator";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import {
  getSiteUrl,
  SITE_KEYWORDS,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/site-seo";
import {
  getAllSponsorSlugs,
  getSponsorBySlug,
  getSponsorPageDescription,
} from "@/lib/sponsors";

export async function generateStaticParams() {
  return getAllSponsorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sponsor = getSponsorBySlug(slug);

  if (!sponsor) {
    return {};
  }

  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.sponsorDetail;
  const description = getSponsorPageDescription(
    slug,
    STATIC_PRERENDER_LOCALE,
    sponsor.name,
  );

  return {
    title: `${sponsor.name} — ${meta.titleSuffix}`,
    description,
    keywords: [
      ...SITE_KEYWORDS,
      sponsor.name,
      "PyCon sponsors",
      "Python Colombia",
    ],
    alternates: {
      canonical: `${getSiteUrl()}/sponsors/${slug}`,
    },
  };
}

export const dynamicParams = false;

const SponsorDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const sponsor = getSponsorBySlug(slug);

  if (!sponsor) {
    notFound();
  }

  const messages = siteMessages[STATIC_PRERENDER_LOCALE];
  const sponsorUrl = `${getSiteUrl()}/sponsors/${slug}`;
  const description = getSponsorPageDescription(
    slug,
    STATIC_PRERENDER_LOCALE,
    sponsor.name,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      websiteJsonLd(),
      webPageJsonLd({
        name: `${sponsor.name} — PyCon Colombia 2026`,
        description,
        url: sponsorUrl,
      }),
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
            name: messages.nav.sponsors,
            item: `${getSiteUrl()}/#sponsors`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: sponsor.name,
            item: sponsorUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SponsorDetail slug={slug} />

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

export default SponsorDetailPage;
