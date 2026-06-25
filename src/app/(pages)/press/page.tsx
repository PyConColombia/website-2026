import type { Metadata } from "next";
import CTASection from "@/components/blocks/cta/cta";
import PressCoverage from "@/components/blocks/press/press-coverage";
import SectionSeparator from "@/components/section-separator";
import { getPressCoverageItems } from "@/lib/press-coverage";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import {
  getSiteUrl,
  SITE_KEYWORDS,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/site-seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.press;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      ...SITE_KEYWORDS,
      "PyCon press",
      "media coverage",
      "Python conference news",
    ],
    alternates: {
      canonical: `${getSiteUrl()}/press`,
    },
  };
}

const PressPage = () => {
  const pageMeta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.press;
  const items = getPressCoverageItems();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      websiteJsonLd(),
      webPageJsonLd({
        name: pageMeta.jsonLdName,
        description: pageMeta.description,
        url: `${getSiteUrl()}/press`,
      }),
    ],
  };

  return (
    <>
      <PressCoverage items={items} />

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

export default PressPage;
