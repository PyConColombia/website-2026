import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CTASection from "@/components/blocks/cta/cta";
import TalkDetail from "@/components/blocks/talks/talk-detail";
import Talks from "@/components/blocks/talks/talks";
import SectionSeparator from "@/components/section-separator";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, webPageJsonLd, websiteJsonLd } from "@/lib/site-seo";
import { getAllSpeakerTrackSlugs, isSpeakerTrack } from "@/lib/speaker-tracks";
import {
  buildTalkJsonLd,
  buildTalkPageMetadata,
  buildTalkTrackPageMetadata,
  getTalkShareImageUrl,
} from "@/lib/talk-seo";
import { getAllTalkIds, getTalkById, getTalkHref, isTalkId } from "@/lib/talks";

export async function generateStaticParams() {
  return [
    ...getAllSpeakerTrackSlugs().map((slug) => ({ id: slug })),
    ...getAllTalkIds().map((id) => ({ id: String(id) })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  if (isSpeakerTrack(id)) {
    return buildTalkTrackPageMetadata(id, STATIC_PRERENDER_LOCALE);
  }

  if (isTalkId(id)) {
    return buildTalkPageMetadata(id, STATIC_PRERENDER_LOCALE);
  }

  return {};
}

export const dynamicParams = false;

const TalkIdPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (isSpeakerTrack(id)) {
    return <Talks activeTrack={id} />;
  }

  const talk = getTalkById(id);

  if (!talk) {
    notFound();
  }

  const messages = siteMessages[STATIC_PRERENDER_LOCALE];
  const talkUrl = `${getSiteUrl()}${getTalkHref(talk.id)}`;
  const shareImageUrl = getTalkShareImageUrl(talk.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      websiteJsonLd(),
      webPageJsonLd({
        name: talk.talkTitle,
        description: talk.talkDescription,
        url: talkUrl,
        image: shareImageUrl,
      }),
      buildTalkJsonLd(talk, STATIC_PRERENDER_LOCALE, talkUrl),
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
            name: messages.nav.talks,
            item: `${getSiteUrl()}/talks`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: talk.talkTitle,
            item: talkUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <TalkDetail talkId={talk.id} />

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

export default TalkIdPage;
