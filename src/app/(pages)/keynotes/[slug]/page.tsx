import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTASection from "@/components/blocks/cta/cta";
import KeynoteDetail from "@/components/blocks/keynotes/keynote-detail";
import SectionSeparator from "@/components/section-separator";
import {
  buildKeynoteJsonLd,
  buildKeynotePageMetadata,
  getKeynoteShareImageUrl,
} from "@/lib/keynote-seo";
import { getAllKeynoteSlugs, getLocalizedKeynote } from "@/lib/keynotes";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, webPageJsonLd, websiteJsonLd } from "@/lib/site-seo";

export async function generateStaticParams() {
  return getAllKeynoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  return buildKeynotePageMetadata(slug, STATIC_PRERENDER_LOCALE);
}

export const dynamicParams = false;

const KeynoteSlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const keynote = getLocalizedKeynote(slug, STATIC_PRERENDER_LOCALE);

  if (!keynote) {
    notFound();
  }

  const messages = siteMessages[STATIC_PRERENDER_LOCALE];
  const keynoteUrl = `${getSiteUrl()}/keynotes/${slug}`;
  const shareImageUrl = getKeynoteShareImageUrl(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      websiteJsonLd(),
      webPageJsonLd({
        name: `${keynote.name} — PyCon Colombia 2026 Keynote`,
        description: keynote.description,
        url: keynoteUrl,
        image: shareImageUrl,
      }),
      buildKeynoteJsonLd(keynote, STATIC_PRERENDER_LOCALE, keynoteUrl),
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
            name: messages.nav.keynotes,
            item: `${getSiteUrl()}/#benefits`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: keynote.name,
            item: keynoteUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <KeynoteDetail slug={slug} />

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

export default KeynoteSlugPage;
