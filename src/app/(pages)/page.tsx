import type { Metadata } from "next";

import { topicsByLocale } from "@/assets/data/trusted-brands";
import Aftermovie from "@/components/blocks/aftermovie/aftermovie";
import Benefits from "@/components/blocks/benefits/benefits";
import CTA from "@/components/blocks/cta/cta";
import Gallery from "@/components/blocks/gallery/gallery";
import Hero from "@/components/blocks/hero-section/hero-section";
import PyconVisualHero from "@/components/blocks/pycon-visual-hero/pycon-visual-hero";
import SpeakersCarousel from "@/components/blocks/speakers/speakers-carousel";
import Sponsors from "@/components/blocks/sponsors/sponsors";
import TrustedBrands from "@/components/blocks/trusted-brands/trusted-brands";

import SectionSeparator from "@/components/section-separator";
import { buildMainConferenceEventJsonLd } from "@/lib/event-jsonld";
import {
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
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
  "@graph": [websiteJsonLd(), buildMainConferenceEventJsonLd()],
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

      <SpeakersCarousel />

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
