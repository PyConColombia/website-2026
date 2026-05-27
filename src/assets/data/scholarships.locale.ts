import type { SiteLocale } from "@/lib/site-messages";

export const SCHOLARSHIP_FORM_URL =
  "https://docs.google.com/forms/d/11yGDwLiRIOWYP93iGw-gJ5hlkIjFhSF61Jph36I5H98/";

export type ScholarshipsSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type ScholarshipsBundle = {
  eyebrow: string;
  title: string;
  description: string;
  intro: {
    paragraphs: string[];
    applyLead: string;
    formUrl?: string;
    formLabel: string;
    formFallback: string;
  };
  sections: ScholarshipsSection[];
};

export const scholarshipsByLocale: Record<SiteLocale, ScholarshipsBundle> = {
  en: {
    eyebrow: "PyCon Colombia",
    title: "Diversity Scholarships",
    description:
      "Financial support for students and members of underrepresented groups in the Python community to attend PyCon Colombia.",
    intro: {
      paragraphs: [
        "Python's presence in software development worldwide continues to increase, leading to new outcomes changing our time. At PyCon Colombia, in addition to promoting open source and sharing among all attendees, we strive every year to ensure that our community is as accessible and diverse as possible. We see diversity and inclusion as a benefit to the ecosystem and its individuals.",
        "We aim for PyCon Colombia to be inclusive of the entire Python community in our country. In order to help alleviate financial barriers to attending the conference, the PyCon organizing committee is offering scholarships to individuals who face financial obstacles, including students and members of underrepresented groups within the Python community. These scholarships cover the cost of conference admission.",
        "It should be noted that scholarship recipients will be responsible for covering all other expenses, such as travel, accommodations, visa fees, and transportation.",
      ],
      applyLead: "If you want to apply, please go to this form:",
      formUrl: SCHOLARSHIP_FORM_URL,
      formLabel: "Application form",
      formFallback:
        "The application form for PyCon Colombia 2026 will be published here when applications open. For questions, contact scholarships@pycon.co.",
    },
    sections: [
      {
        id: "eligibility",
        title: "Eligibility",
        paragraphs: [
          "These scholarships are aimed at individuals facing financial barriers, including students and individuals from underrepresented groups in the technology community, such as women, LGBTQIA+ individuals, persons with disabilities, and racial and ethnic minorities. We encourage all of you to apply for our scholarships.",
          "Please read the following instructions and complete the form to apply for the scholarship.",
          "Please note that each application will be individually reviewed by the PyCon Colombia Organizing Team and classified according to the application form and letter of intent responses. All personal information collected will be kept confidential.",
          "Submitting your application doesn't guarantee immediate eligibility. Please review the terms and conditions.",
        ],
      },
      {
        id: "acknowledgments",
        title: "Acknowledgments",
        paragraphs: [
          "The PyCon Colombia 2026 Diversity Program is made possible thanks to the support of PyCon Colombia 2026 sponsors.",
          "If your organization is interested in participating in the Diversity Program, please contact: scholarships@pycon.co",
        ],
      },
      {
        id: "important-dates",
        title: "Important Dates",
        items: [
          "Application opening, deadline, and selection dates for PyCon Colombia 2026 will be announced on this page and on our social channels.",
        ],
      },
      {
        id: "terms-and-conditions",
        title: "Terms and Conditions",
        paragraphs: ["For your application to be accepted:"],
        items: [
          "You must submit it within the dates and deadlines.",
          "You must provide a letter of interest following the suggested format.",
          "You must be available to attend the entire PyCon Colombia Conference (July 24, 25 and 26, 2026).",
          "You must attach a legalized authorization from your parents if you are a minor.",
        ],
      },
      {
        id: "selected-help",
        title: "You were selected. Do you want to help the conf?",
        paragraphs: [
          "For accepted scholarship recipients attending the conference, we would love for you to share your experience with the world about how PyCon Colombia 2026 was and encourage more people to apply for the scholarships next year. Possible ways to help us are:",
        ],
        items: [
          "Posts on social media about your journey and details about the conference. Please add the tag @PyConColombia",
          "Write a blog or record a video sharing your experience at the conference.",
          "Interview in a blog or video format.",
          "Please note that in either of these formats, you can choose to remain anonymous.",
        ],
      },
    ],
  },
  es: {
    eyebrow: "PyCon Colombia",
    title: "Becas de Diversidad",
    description:
      "Apoyo económico para estudiantes y personas de grupos subrepresentados en la comunidad Python para asistir a PyCon Colombia.",
    intro: {
      paragraphs: [
        "La presencia de Python en el desarrollo de software a nivel mundial sigue creciendo, dando lugar a nuevos resultados que cambian nuestro tiempo. En PyCon Colombia, además de promover el código abierto y el compartir entre todos los asistentes, nos esforzamos cada año para que nuestra comunidad sea lo más accesible y diversa posible. Vemos la diversidad y la inclusión como un beneficio para el ecosistema y sus individuos.",
        "Buscamos que PyCon Colombia sea inclusiva para toda la comunidad Python en nuestro país. Para ayudar a aliviar las barreras financieras para asistir a la conferencia, el comité organizador de PyCon está ofreciendo becas a personas que enfrentan obstáculos económicos, incluyendo estudiantes y miembros de grupos subrepresentados dentro de la comunidad Python. Estas becas cubren el costo de la admisión a la conferencia.",
        "Cabe aclarar que los beneficiarios de las becas serán responsables de cubrir todos los demás gastos, como transporte, alojamiento, visa y traslados.",
      ],
      applyLead: "Si quieres aplicar, por favor ingresa a este formulario:",
      formUrl: SCHOLARSHIP_FORM_URL,
      formLabel: "Formulario",
      formFallback:
        "El formulario de postulación para PyCon Colombia 2026 se publicará aquí cuando abran las convocatorias. Para consultas, escribe a scholarships@pycon.co.",
    },
    sections: [
      {
        id: "eligibility",
        title: "Elegibilidad",
        paragraphs: [
          "Estas becas están dirigidas a personas que enfrentan barreras financieras, incluyendo estudiantes y personas de grupos subrepresentados en la comunidad tecnológica, como mujeres, personas LGBTQIA+, personas con discapacidades, y minorías raciales y étnicas. Les animamos a todos a postularse a nuestras becas.",
          "Por favor, lea las siguientes instrucciones y complete el formulario para solicitar la beca.",
          "Tenga en cuenta que cada solicitud será revisada individualmente por el equipo organizador de PyCon Colombia y clasificada de acuerdo con el formulario de solicitud y las respuestas a la carta de intención. Toda la información personal recopilada se mantendrá confidencial.",
          "Enviar su solicitud no garantiza elegibilidad inmediata. Por favor, revise los términos y condiciones.",
        ],
      },
      {
        id: "acknowledgments",
        title: "Agradecimientos",
        paragraphs: [
          "El Programa de Diversidad de PyCon Colombia 2026 es posible gracias al apoyo de los patrocinadores de PyCon Colombia 2026.",
          "Si su organización está interesada en participar en el Programa de Diversidad, por favor contacte: scholarships@pycon.co",
        ],
      },
      {
        id: "important-dates",
        title: "Fechas importantes",
        items: [
          "Las fechas de apertura, cierre y selección de postulaciones para PyCon Colombia 2026 se anunciarán en esta página y en nuestras redes sociales.",
        ],
      },
      {
        id: "terms-and-conditions",
        title: "Términos y condiciones",
        paragraphs: ["Para que su solicitud sea aceptada:"],
        items: [
          "Debe enviarse dentro de las fechas y plazos establecidos.",
          "Debe proporcionar una carta de interés siguiendo el formato sugerido.",
          "Debe estar disponible para asistir a toda la Conferencia PyCon Colombia (24, 25 y 26 de julio de 2026).",
          "Debe adjuntar una autorización legalizada de sus padres si es menor de edad.",
        ],
      },
      {
        id: "selected-help",
        title: "Fuiste seleccionado. ¿Quieres ayudar a la conferencia?",
        paragraphs: [
          "Para los beneficiarios aceptados que asistan a la conferencia, nos encantaría que compartieras tu experiencia con el mundo sobre cómo fue PyCon Colombia 2026 y motivar a más personas a postularse para las becas el próximo año. Algunas formas de ayudarnos son:",
        ],
        items: [
          "Publicar en redes sociales tu recorrido y detalles sobre la conferencia. Por favor agrega la etiqueta @PyConColombia",
          "Escribir un blog o grabar un video compartiendo tu experiencia en la conferencia.",
          "Entrevista en formato blog o video.",
          "Por favor ten en cuenta que en cualquiera de estos formatos puedes elegir permanecer en anonimato.",
        ],
      },
    ],
  },
};
