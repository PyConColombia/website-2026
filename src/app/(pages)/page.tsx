import type { Metadata } from "next";

import { topicsByLocale } from "@/assets/data/trusted-brands";
import Aftermovie from "@/components/blocks/aftermovie/aftermovie";
import Benefits from "@/components/blocks/benefits/benefits";
import CTA from "@/components/blocks/cta/cta";
import Gallery from "@/components/blocks/gallery/gallery";
import Hero from "@/components/blocks/hero-section/hero-section";
import PyconVisualHero from "@/components/blocks/pycon-visual-hero/pycon-visual-hero";
import Sponsors from "@/components/blocks/sponsors/sponsors";
import TrustedBrands from "@/components/blocks/trusted-brands/trusted-brands";

import SectionSeparator from "@/components/section-separator";
import {
  absoluteAssetUrl,
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_LONG,
  SITE_NAME,
  SITE_ORGANIZER,
  websiteJsonLd,
} from "@/lib/site-seo";

export const metadata: Metadata = {
  title: { absolute: SITE_NAME },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: `${getSiteUrl()}/`,
  },
  keywords: [
    "PyCon Colombia 2026",
    "Python conference Medellín",
    "Universidad EAFIT",
    "July 24 2026",
    "July 25 2026",
    "July 26 2026",
  ],
  openGraph: {
    title: { absolute: SITE_NAME },
    description: SITE_DESCRIPTION,
    url: `${getSiteUrl()}/`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    websiteJsonLd(),
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: SITE_NAME,
      description: SITE_DESCRIPTION_LONG,
      url: `${getSiteUrl()}/`,
      image: [absoluteAssetUrl("/images/cfp.jpg")],
      startDate: "2026-07-24",
      endDate: "2026-07-26",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Universidad EAFIT",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Medellín",
          addressRegion: "Antioquia",
          addressCountry: "CO",
        },
      },
      organizer: {
        "@type": "Organization",
        name: SITE_ORGANIZER.name,
        url: SITE_ORGANIZER.url,
      },
      offers: {
        "@type": "Offer",
        url: "https://www.eventbrite.co/e/pycon-colombia-2026-tickets-1986172567616",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

const Home = () => {
  return (
    <>
      <PyconVisualHero />

      <SectionSeparator />

      <Hero />

      <SectionSeparator />

      <TrustedBrands topicsByLocale={topicsByLocale} />

      <SectionSeparator />

      <Benefits />

      <SectionSeparator />

      <Sponsors />

      <SectionSeparator />

      <Aftermovie />

      <SectionSeparator />

      <Gallery />

      <SectionSeparator />

      <CTA />

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

export default Home;
