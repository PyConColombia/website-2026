import type { SiteLocale } from "@/lib/site-messages";

export type CodeOfConductBundle = {
  title: string;
  eyebrow: string;
  description: string;
  updatedAt: string;
  reportSection: {
    id: string;
    title: string;
    intro: string;
    heroCta: string;
    formUrl: string;
    paragraphsAfterForm: string[];
  };
  sections: Array<{
    id: string;
    title: string;
    paragraphs: string[];
    items?: string[];
  }>;
};

const reportFormUrl = "https://forms.gle/Q92DS8RvrzW8sUN67";

export const codeOfConductByLocale: Record<SiteLocale, CodeOfConductBundle> = {
  en: {
    title: "Code of Conduct",
    eyebrow: "PyCon Colombia",
    description:
      "PyCon Colombia is committed to providing a welcoming, respectful, and harassment-free conference experience for everyone in the Python community.",
    updatedAt: "Last updated for PyCon Colombia 2026",
    reportSection: {
      id: "report-form",
      title: "Report form",
      intro:
        "If you have been harassed, if someone else is being harassed, if the PyCon Colombia terms are being violated, or if you have any related concern, submit a report using the form:",
      heroCta: "Open report form",
      formUrl: reportFormUrl,
      paragraphsAfterForm: [
        "Our team at the conference will also be available to collaborate with local security or assist you to ensure your safety. We value your presence at our events.",
        "If you believe an organizer has violated this code of conduct, you may also reach out to the main conference organizer, John Roa, or as a last resort to the PSF.",
      ],
    },
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "PyCon Colombia is a conference organized by the Python Colombia community created for the dissemination of the Python programming language in our country and Latin America, with the objective of sharing knowledge and expanding the spaces for interaction and collaboration of its members.",
          "We value the participation of each member of the community and we want each participant in the conference to enjoy and gain a valuable experience full of knowledge and innovation. According to this code, all participants including organizers, speakers, volunteers and attendees are expected to show respect and courtesy among themselves in all aspects of the conference, its organization and the events taking place in the context of the conference.",
          "The organizers of this event and any event in the future are subject to enforce following and complying with international and Colombian laws and the spirit of the International Python Society (Python Software Foundation).",
        ],
      },
      {
        id: "content",
        title: "Code of Conduct Content",
        paragraphs: [
          "PyCon Colombia is dedicated to providing a conference free of harassment for all members, regardless of gender, sexual orientation, physical abilities, physical appearance, race or religion. No abuse will be tolerated by any conference participant.",
          "All communications should be focused on a professional audience including people with different backgrounds and experiences. Sexual language is not appropriate for any event organized under our rules, including talks.",
        ],
      },
      {
        id: "community-goals",
        title: "Our goal as a community recommends",
        paragraphs: [
          "As participants of the PyCon Colombia community we ask everyone to:",
        ],
        items: [
          "Be kind to other members.",
          "Do not insult or demean the other participants.",
          "Behave professionally.",
          "Remember that any conduct of harassment, sexism, racism or political division, or of any instance, is not appropriate for participation within the conference or community.",
          "Not attending the conference under the influence of alcoholic beverages.",
          "Participants of our community of any type (Organizers, Speakers, Volunteers and Assistants) who do not comply with any of these rules will be expelled from the conference without any reimbursement at the discretion of the organizing committee of the conference.",
        ],
      },
      {
        id: "closing",
        title: "Thank you",
        paragraphs: [
          "Thank you for being subject to these terms and welcome to PyCon Colombia. This is a friendly event for our entire community.",
        ],
      },
    ],
  },
  es: {
    title: "Código de conducta",
    eyebrow: "PyCon Colombia",
    description:
      "PyCon Colombia se compromete a ofrecer una experiencia de conferencia acogedora, respetuosa y libre de acoso para todas las personas de la comunidad Python.",
    updatedAt: "Actualizado para PyCon Colombia 2026",
    reportSection: {
      id: "report-form",
      title: "Formulario de reporte",
      intro:
        "Si has sido acosado/a, si observas que otra persona está siendo acosada, si se vulneran los términos de PyCon Colombia o tienes cualquier inquietud relacionada, envía un reporte con el formulario:",
      heroCta: "Abrir formulario de reporte",
      formUrl: reportFormUrl,
      paragraphsAfterForm: [
        "El equipo durante la conferencia también estará disponible para colaborar con seguridad local o ayudarte a garantizar tu seguridad. Valoramos tu participación en nuestros eventos.",
        "Si observas una vulneración de este código por parte de la organización, también puedes comunicarte con el organizador principal de la conferencia, John Roa, o en último recurso con la PSF.",
      ],
    },
    sections: [
      {
        id: "introduction",
        title: "Introducción",
        paragraphs: [
          "PyCon Colombia es una conferencia organizada por la comunidad Python Colombia para la difusión del lenguaje de programación Python en nuestro país y Latinoamérica, con el objetivo de compartir conocimiento y ampliar los espacios de interacción y colaboración de sus miembros.",
          "Valoramos la participación de cada integrante de la comunidad y queremos que cada asistente disfrute y obtenga una experiencia valiosa, llena de conocimiento e innovación. Según este código, se espera que todas las personas participantes —organización, ponentes, voluntarios y asistentes— muestren respeto y cortesía entre sí en todos los ámbitos de la conferencia, su organización y los eventos relacionados.",
          "Los organizadores de este u otros eventos futuros están obligados a cumplir las leyes internacionales y colombianas y el espíritu de la Python Software Foundation.",
        ],
      },
      {
        id: "content",
        title: "Contenido del código de conducta",
        paragraphs: [
          "PyCon Colombia está dedicada a brindar una conferencia libre de acoso para todas las personas, independientemente de género, orientación sexual, capacidades físicas, apariencia física, raza o religión. No se tolerará ningún tipo de abuso por parte de las personas participantes.",
          "Toda comunicación debe estar dirigida a un público profesional que incluye personas con distintos orígenes y experiencias. El lenguaje sexual no es apropiado en ningún evento organizado bajo nuestras reglas, incluidas las charlas.",
        ],
      },
      {
        id: "community-goals",
        title: "Nuestros objetivos como comunidad",
        paragraphs: [
          "Como parte de la comunidad PyCon Colombia pedimos a todas las personas que:",
        ],
        items: [
          "Sean amables con las demás personas participantes.",
          "No insulten ni menosprecien a otras participantes.",
          "Actúen de manera profesional.",
          "Recuerden que conductas de acoso, sexismo, racismo o división política, entre otras, no son apropiadas dentro de la conferencia ni de la comunidad.",
          "No asistan a la conferencia bajo los efectos del alcohol.",
          "Las personas de la comunidad (organización, ponentes, voluntarios y asistentes) que no cumplan estas normas podrán ser expulsadas de la conferencia sin reembolso, a criterio del comité organizador.",
        ],
      },
      {
        id: "closing",
        title: "Gracias",
        paragraphs: [
          "Gracias por acatar estos términos y bienvenido/a a PyCon Colombia. Este es un evento amistoso para toda nuestra comunidad.",
        ],
      },
    ],
  },
};
