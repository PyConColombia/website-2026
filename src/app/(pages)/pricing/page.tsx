import type { Metadata } from "next";

import { plans, pricingFeatures } from "@/assets/data/pricing-details";
import CTASection from "@/components/blocks/cta/cta";
import PricingDetail from "@/components/pricing/pricing-detail";
import {
  getSiteUrl,
  SITE_KEYWORDS,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/site-seo";

const pricingDescription =
  "Ticket and add-on options for PyCon Colombia 2026—three days of Python in Medellín, July 24–26 at Universidad EAFIT.";

export const metadata: Metadata = {
  title: "Tickets",
  description: pricingDescription,
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    websiteJsonLd(),
    webPageJsonLd({
      name: "Tickets — PyCon Colombia 2026",
      description: pricingDescription,
      url: `${getSiteUrl()}/pricing`,
    }),
  ],
};

const PricingPage = () => {
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
