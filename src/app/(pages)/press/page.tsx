import type { Metadata } from "next";

import CTASection from "@/components/blocks/cta/cta";
import PressCoverage from "@/components/blocks/press/press-coverage";
import SectionSeparator from "@/components/section-separator";
import { getPressCoverageItems } from "@/lib/press-coverage";
import { buildPressPageJsonLd, buildPressPageMetadata } from "@/lib/press-seo";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";

export async function generateMetadata(): Promise<Metadata> {
  const items = getPressCoverageItems();

  return buildPressPageMetadata(STATIC_PRERENDER_LOCALE, items);
}

const PressPage = () => {
  const items = getPressCoverageItems();
  const jsonLd = buildPressPageJsonLd(STATIC_PRERENDER_LOCALE, items);

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
