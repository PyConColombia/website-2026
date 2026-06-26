import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import CTASection from "@/components/blocks/cta/cta";
import SpeakerDetail from "@/components/blocks/speakers/speaker-detail";
import SectionSeparator from "@/components/section-separator";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, webPageJsonLd, websiteJsonLd } from "@/lib/site-seo";
import {
  buildSpeakerJsonLd,
  buildSpeakerPageMetadata,
  getSpeakerShareImageUrl,
} from "@/lib/speaker-seo";
import {
  getAllSpeakerSlugs,
  getCanonicalSpeakerSlug,
  getLocalizedSpeaker,
} from "@/lib/speakers";

export async function generateStaticParams() {
  return getAllSpeakerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  return buildSpeakerPageMetadata(slug, STATIC_PRERENDER_LOCALE);
}

export const dynamicParams = false;

const SpeakerSlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const canonicalSlug = getCanonicalSpeakerSlug(slug);

  if (slug !== canonicalSlug) {
    redirect(`/speakers/${canonicalSlug}`);
  }

  const speaker = getLocalizedSpeaker(canonicalSlug, STATIC_PRERENDER_LOCALE);

  if (!speaker) {
    notFound();
  }

  const messages = siteMessages[STATIC_PRERENDER_LOCALE];
  const speakerUrl = `${getSiteUrl()}/speakers/${slug}`;
  const shareImageUrl = getSpeakerShareImageUrl(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      websiteJsonLd(),
      webPageJsonLd({
        name: `${speaker.name} — ${speaker.talkTitle}`,
        description: speaker.talkDescription,
        url: speakerUrl,
        image: shareImageUrl,
      }),
      buildSpeakerJsonLd(speaker, STATIC_PRERENDER_LOCALE, speakerUrl),
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
            name: messages.nav.speakers,
            item: `${getSiteUrl()}/speakers`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: speaker.name,
            item: speakerUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SpeakerDetail slug={canonicalSlug} />

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

export default SpeakerSlugPage;
