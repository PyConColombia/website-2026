import type { FAQs } from "@/components/blocks/faq/faq";
import type { SiteLocale } from "@/lib/site-messages";

export const faqItemsEn: FAQs = [
  {
    question: "What language should I submit my proposal and give my talk in?",
    answer:
      "PyCon Colombia is a bilingual conference. We accept proposals in both Spanish and English. You can choose the language you feel most comfortable with for your presentation.",
  },
  {
    question: "Can I submit more than one proposal?",
    answer:
      "Yes. You can submit several proposals. However, to ensure a diverse program, we usually limit each speaker to a single presentation in the final lineup.",
  },
  {
    question: "What criteria are used to evaluate proposals?",
    answer:
      "Proposals are evaluated based on relevance to the community, technical quality, clarity of the abstract, and educational value. We aim to balance topics for both beginner and advanced audiences.",
  },
  {
    question: "I have never spoken at a conference. Can I still apply?",
    answer:
      "Of course! We love first-time speakers. We even offer mentorship programs to help you sharpen your presentation before the big day.",
  },
  {
    question: "Are sessions recorded?",
    answer:
      "Yes. Unless explicitly opted out, all talks are recorded and published on our YouTube channel after the conference for the benefit of the global Python community.",
  },
  {
    question: "Are there scholarships available to attend PyCon Colombia?",
    answer:
      "Yes. We offer Opportunity Scholarships every year to help reduce financial barriers. They cover the cost of conference admission for students and members of underrepresented groups within the Python community.",
  },
  {
    question: "When and where is PyCon Colombia 2026 happening?",
    answer:
      "PyCon Colombia 2026 will take place on July 24, 25 and 26, 2026 in Medellín, Colombia, at our venue partner Universidad EAFIT.",
  },
  {
    question: "How can my company become a sponsor?",
    answer:
      "PyCon Colombia is made possible thanks to our sponsors. If your organization is interested in supporting the Python ecosystem and Latin American innovation, please contact us at sponsors@pycon.co.",
  },
];

const faqItemsEs: FAQs = [
  {
    question: "¿En qué idioma debo enviar mi propuesta y dar mi charla?",
    answer:
      "PyCon Colombia es una conferencia bilingüe. Aceptamos propuestas en español y en inglés. Puedes elegir el idioma con el que te sientas más cómodo/a para tu presentación.",
  },
  {
    question: "¿Puedo enviar más de una propuesta?",
    answer:
      "Sí. Puedes enviar varias propuestas. Sin embargo, para mantener un programa diverso, normalmente limitamos a una sola presentación por ponente en la selección final.",
  },
  {
    question: "¿Qué criterios se usan para evaluar las propuestas?",
    answer:
      "Las propuestas se evalúan por relevancia para la comunidad, calidad técnica, claridad del resumen y valor educativo. Buscamos equilibrio entre públicos principiante y avanzado.",
  },
  {
    question: "Nunca he hablado en una conferencia. ¿Puedo postular?",
    answer:
      "¡Por supuesto! Nos encantan las personas que debutan como ponentes. Incluso ofrecemos mentorías para ayudarte a pulir tu presentación antes del evento.",
  },
  {
    question: "¿Las sesiones se graban?",
    answer:
      "Sí. Salvo que se indique explícitamente lo contrario, las charlas se graban y publican en nuestro canal de YouTube después del evento para beneficio de la comunidad Python global.",
  },
  {
    question: "¿Hay becas para asistir a PyCon Colombia?",
    answer:
      "Sí. Cada año ofrecemos becas de oportunidad para reducir barreras económicas; cubren el costo de la entrada para estudiantes y personas de grupos subrepresentados en la comunidad Python.",
  },
  {
    question: "¿Cuándo y dónde será PyCon Colombia 2026?",
    answer:
      "PyCon Colombia 2026 será del 24 al 26 de julio de 2026 en Medellín, Colombia, en nuestra sede aliada Universidad EAFIT.",
  },
  {
    question: "¿Cómo puede mi empresa ser patrocinadora?",
    answer:
      "PyCon Colombia es posible gracias a los patrocinadores. Si tu organización quiere apoyar el ecosistema Python y la innovación en Latinoamérica, escríbenos a sponsors@pycon.co.",
  },
];

export const faqItemsByLocale: Record<SiteLocale, FAQs> = {
  en: faqItemsEn,
  es: faqItemsEs,
};

/** @deprecated use faqItemsByLocale */
export const faqItems = faqItemsEn;
