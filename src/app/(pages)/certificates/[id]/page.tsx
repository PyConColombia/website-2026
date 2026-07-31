import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CertificateDetail from "@/components/blocks/certificates/certificate-detail";
import CTASection from "@/components/blocks/cta/cta";
import SectionSeparator from "@/components/section-separator";
import { getCertificateHref } from "@/lib/certificates";
import {
  getAllCertificateIds,
  getResolvedCertificate,
} from "@/lib/certificates-server";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, webPageJsonLd, websiteJsonLd } from "@/lib/site-seo";

export async function generateStaticParams() {
  const ids = await getAllCertificateIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const certificate = await getResolvedCertificate(id);
  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.certificates;

  if (!certificate) {
    return {
      title: meta.title,
      description: meta.description,
    };
  }

  const title = meta.detailTitle.replace("{name}", certificate.name);
  const description = meta.detailDescription.replace(
    "{name}",
    certificate.name,
  );

  return {
    title,
    description,
    alternates: {
      canonical: `${getSiteUrl()}${getCertificateHref(id)}`,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export const dynamicParams = false;

const CertificatePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const certificate = await getResolvedCertificate(id);

  if (!certificate) {
    notFound();
  }

  const messages = siteMessages[STATIC_PRERENDER_LOCALE];
  const pageUrl = `${getSiteUrl()}${getCertificateHref(id)}`;
  const title = messages.pageMeta.certificates.detailTitle.replace(
    "{name}",
    certificate.name,
  );
  const description = messages.pageMeta.certificates.detailDescription.replace(
    "{name}",
    certificate.name,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      websiteJsonLd(),
      webPageJsonLd({
        name: title,
        description,
        url: pageUrl,
      }),
    ],
  };

  return (
    <>
      <CertificateDetail certificate={certificate} />

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

export default CertificatePage;
