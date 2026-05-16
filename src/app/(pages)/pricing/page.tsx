import type { Metadata } from "next";

import { plans, pricingFeatures } from "@/assets/data/pricing-details";
import CTASection from "@/components/blocks/cta/cta";
import PricingDetail from "@/components/pricing/pricing-detail";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import {
  getSiteUrl,
  SITE_KEYWORDS,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/site-seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.pricing;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      ...SITE_KEYWORDS,
      "PyCon tickets",
      "conference registration",
      "Eventbrite",
    ],
    alternates: {
      canonical: `${getSiteUrl()}/pricing`,
    },
  };
}

const PricingPage = async () => {
  const pageMeta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.pricing;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      websiteJsonLd(),
      webPageJsonLd({
        name: pageMeta.jsonLdName,
        description: pageMeta.description,
        url: `${getSiteUrl()}/pricing`,
      }),
    ],
  };

  return (
    <>
      <PricingDetail plans={plans} features={pricingFeatures} />

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

export default PricingPage;
