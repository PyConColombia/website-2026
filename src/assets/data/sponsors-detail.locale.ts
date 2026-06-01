import type { SiteLocale } from "@/lib/site-messages";

export type SponsorHighlight = {
  title: string;
  description: string;
};

export type SponsorFaqTopic = {
  topic: string;
  description?: string;
};

export type SponsorDetailContent = {
  tagline?: string;
  paragraphs: string[];
  highlights: SponsorHighlight[];
  faqTopics?: SponsorFaqTopic[];
};

export type SponsorDetailBySlug = Record<string, SponsorDetailContent>;

export const sponsorDetailsByLocale: Record<SiteLocale, SponsorDetailBySlug> = {
  en: {
    eafit: {
      paragraphs: [
        "We are the technology training hub of Universidad EAFIT.",
        "We empower organizations and individuals by building authentic, high-demand capabilities, enabling them to evolve alongside the pace of technology through hands-on learning methodologies focused on real-world challenges.",
        "With this strategic approach, we solve today's complexities while actively shaping an innovative future. By bridging the gap between the public and private sectors, we drive scalable impact and develop transformative solutions that adapt to the demands of an ever-changing environment.",
      ],
      highlights: [],
      faqTopics: [],
    },
    loka: {
      paragraphs: [
        "Loka is the Silicon Valley consultancy named AWS Innovation Partner of the Year for 2024. We solve complex problems for startups and enterprises using cutting-edge tech including GenAI, ML, DevOps and Big Data. As an AWS Premier Tier Partner, we help customers accelerate to production with AWS funding programs. For more info visit loka.com.",
      ],
      highlights: [],
      faqTopics: [],
    },
    lovelytics: {
      paragraphs: [
        "Lovelytics is a team of elite data and AI professionals who know how to make complex problems feel manageable—and even enjoyable. We bring clarity, speed, and heart to every project, partnering with clients to solve real problems with smart, sustainable solutions.",
      ],
      highlights: [],
      faqTopics: [],
    },
  },
  es: {
    eafit: {
      paragraphs: [
        "Somos el centro de formación tecnológica de la Universidad EAFIT.",
        "Formamos y acompañamos a través de la instalación de capacidades reales en organizaciones y personas que se transforman al ritmo de la tecnología con metodologías de aprendizaje prácticas orientadas a los desafíos reales.",
        "Con este enfoque, buscamos resolver los retos del presente y ser parte activa en la construcción de un futuro innovador. A través de nuestra conexión con el sector público y privado, generamos impacto y desarrollamos soluciones que trascienden, adaptándose a las necesidades de un entorno en constante cambio.",
      ],
      highlights: [],
      faqTopics: [],
    },
    loka: {
      paragraphs: [
        "Loka es una empresa de consultoría de software nacida en Silicon Valley nombrada AWS Partner de innovación en el 2024. Resolvemos problemas complejos para startups y empresas utilizando tecnología de punta, incluyendo GenAI, ML, DevOps y Big Data. Como AWS Premier Tier Partner, ayudamos a nuestros clientes a acelerar su llegada a producción con los programas de financiamiento de AWS. Para más información, visita loka.com.",
      ],
      highlights: [],
      faqTopics: [],
    },
    lovelytics: {
      paragraphs: [
        "Somos una empresa 100% especializada en Data & AI. Contamos con un equipo de primer nivel compuesto por más de 550 personas, con clientes en Estados Unidos, LATAM y Europa.",
      ],
      highlights: [],
      faqTopics: [],
    },
  },
};
