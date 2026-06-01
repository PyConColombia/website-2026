import type { SiteLocale } from "@/lib/site-messages";

export type SponsorHighlight = {
  title: string;
  description: string;
};

export type SponsorDetailContent = {
  tagline?: string;
  paragraphs: string[];
  highlights: SponsorHighlight[];
};

export type SponsorDetailBySlug = Record<string, SponsorDetailContent>;

export const sponsorDetailsByLocale: Record<SiteLocale, SponsorDetailBySlug> = {
  en: {
    loka: {
      paragraphs: [
        "Loka is the Silicon Valley consultancy named AWS Innovation Partner of the Year for 2024. We solve complex problems for startups and enterprises using cutting-edge tech including GenAI, ML, DevOps and Big Data. As an AWS Premier Tier Partner, we help customers accelerate to production with AWS funding programs. For more info visit loka.com.",
      ],
      highlights: [],
    },
  },
  es: {
    loka: {
      paragraphs: [
        "Loka es una empresa de consultoría de software nacida en Silicon Valley nombrada AWS Partner de innovación en el 2024. Resolvemos problemas complejos para startups y empresas utilizando tecnología de punta, incluyendo GenAI, ML, DevOps y Big Data. Como AWS Premier Tier Partner, ayudamos a nuestros clientes a acelerar su llegada a producción con los programas de financiamiento de AWS. Para más información, visita loka.com.",
      ],
      highlights: [],
    },
  },
};
