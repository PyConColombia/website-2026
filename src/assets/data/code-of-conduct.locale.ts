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

const reportFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdIdwmicMIIM1LIx8W-N8R0JDyeMfo7BwxRy9LrjCuhC2LR2g/viewform?usp=send_form";

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
          "PyCon Colombia is a conference organized by members of this country's Python community to promote this programming language throughout the national territory and in Latin America. The goal of this space is to position Colombia as a global technology reference point, creating a collaborative knowledge network that expands opportunities for interaction and exchange among attendees and community members.",
          "To fulfill this purpose, it's important that every conference attendee has an enriching experience full of learning. We believe that each person who is part of this space has something valuable to contribute. For this reason, the following code of conduct specifies what is expected of all participants; at the conference and related events, everyone, regardless of role, must comply with these rules to guarantee an environment free of prejudice and harassment, where all interactions take place within a framework of respect, dignity, and dialogue. Additionally, those organizing this event are obligated to comply with Colombian and international laws, as well as those of the Python Software Foundation.",
        ],
      },
      {
        id: "content",
        title: "Code of Conduct Content",
        paragraphs: [
          "PyCon Colombia is dedicated to providing a harassment-free conference for everyone, regardless of sexual orientation, gender identity, ethnic or racial origin, disabilities or health conditions, religion or beliefs, age, social class, and physical appearance. No form of discrimination or abuse by participants will be tolerated.",
          "Communication and opinions expressed at the conference and other events must take into account the diversity of backgrounds and experiences of the participating audience. Sexual language is not appropriate at any event organized under our rules, including talks.",
        ],
      },
      {
        id: "community-goals",
        title: "Our Goals as a Community",
        paragraphs: [
          "Promoting a respectful and safe environment for everyone is a priority for PyCon Colombia. For this reason, we promote behaviors and attitudes consistent with this goal, including:",
        ],
        items: [
          "Active and respectful listening to other participants, even when they hold different points of view",
          "Kindness and openness to collaborate with others",
          "Constructive contributions that strengthen the community and its experiences",
          "Recognizing and valuing the time and effort of other participants and volunteers",
          "Expressing opinions respectfully, calmly, and constructively",
          "Using inclusive language that respects people's identities",
          "Promoting the inclusion and participation of all people regardless of differences in age, sexual orientation, gender identity, ethnic or racial origin, social class, disabilities or health conditions, religion or beliefs, and physical appearance",
          "Making use of conference resources and materials while citing sources",
        ],
      },
      {
        id: "inappropriate-conduct",
        title: "Inappropriate Conduct",
        paragraphs: [
          "Below is a list of examples of inappropriate behaviors that will not be accepted at the conference and related events:",
        ],
        items: [
          "Discriminatory, offensive, or aggressive comments or behaviors that reinforce stereotypes or prejudices based on class, gender, race, physical appearance, among others",
          "Any form of harassment (physical, sexual, digital, discriminatory)",
          "Physical contact without consent or unwanted advances",
          "Use of sexual or intimidating language, including anecdotes, sexual jokes, and comments about clothing or body parts",
          "Using participants' private information without their consent",
          "Any form of violence against others",
        ],
      },
      {
        id: "enforcement",
        title: "Enforcement",
        paragraphs: [
          "If someone fails to comply with the norms and accepted behaviors at the PyCon Colombia conference and related events, they will be warned about it, and depending on the severity of the behavior, their expulsion from the event without refund will be considered.",
          "Thank you for abiding by these norms, which help create a respectful, kind, and constructive environment for all PyCon Colombia participants.",
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
          "PyCon Colombia es una conferencia organizada por miembros de la comunidad Python de este país para la difusión de este lenguaje de programación a lo largo del territorio nacional y en Latinoamérica. El objetivo de este espacio es posicionar a Colombia como referente tecnológico a nivel mundial creando una red colaborativa de conocimientos que permita ampliar los espacios de interacción e intercambio entre sus asistentes y las personas que hacen parte de esta comunidad.",
          "Para cumplir con este propósito, es importante que cada asistente a la conferencia tenga una experiencia enriquecedora y llena de aprendizajes. Consideramos que cada una de las personas que hace parte de este espacio tiene algo valioso que aportar. Por esto, en el siguiente código de conducta se especifica qué se espera de todas las personas participantes: en la conferencia y eventos relacionados, sin importar su rol, deben cumplir con estas reglas y así garantizar un ambiente libre de prejuicios y acoso donde todas las interacciones estén en el marco del respeto, la dignidad y el diálogo. Adicionalmente, quienes organizan este evento están en la obligación de cumplir las leyes colombianas e internacionales y de la Python Software Foundation.",
        ],
      },
      {
        id: "content",
        title: "Contenido del código de conducta",
        paragraphs: [
          "PyCon Colombia está dedicada a brindar una conferencia libre de acoso para todas las personas, independientemente de la orientación sexual, la identidad de género, el origen étnico o racial, las discapacidades o condiciones de salud, la religión o las creencias, la edad, la clase social y la apariencia física. No se tolerará ningún tipo de discriminación o abuso por parte de las personas participantes.",
          "La comunicación y las opiniones expresadas en la conferencia y demás eventos deben tener en cuenta la diversidad de orígenes y experiencias del público participante. El lenguaje sexual no es apropiado en ningún evento organizado bajo nuestras reglas, incluidas las charlas.",
        ],
      },
      {
        id: "community-goals",
        title: "Nuestros objetivos como comunidad",
        paragraphs: [
          "Promover un ambiente respetuoso y seguro para todas las personas es prioridad para PyCon Colombia, por esto promovemos comportamientos y actitudes acordes con esto que incluyen:",
        ],
        items: [
          "Escucha activa y respetuosa de los y las demás participantes, incluso cuando tengan puntos de vista diferentes",
          "Amabilidad y apertura para colaborar con las demás personas",
          "Aportes constructivos que contribuyan al fortalecimiento y experiencias de la comunidad",
          "Reconocer y valorar el tiempo y esfuerzo de los demás participantes y personas voluntarias",
          "Expresar las opiniones de forma respetuosa, serena y constructiva",
          "Utilizar lenguaje incluyente y respetuoso con las identidades de las personas",
          "Promover la inclusión y participación de todas las personas sin importar diferencias de edad, orientación sexual, identidad de género, origen étnico o racial, clase social, discapacidades o condiciones de salud, religión o creencias y apariencia física",
          "Hacer uso de los recursos y materiales de la conferencia citando las fuentes",
        ],
      },
      {
        id: "inappropriate-conduct",
        title: "Conductas inapropiadas",
        paragraphs: [
          "A continuación se presenta una lista con ejemplos de comportamientos inapropiados que no serán aceptados en el marco de la conferencia y los eventos relacionados:",
        ],
        items: [
          "Comentarios o comportamientos discriminatorios, ofensivos o agresivos que refuercen estereotipos o prejuicios de clase, género, raza, apariencia física, entre otros",
          "Cualquier tipo de acoso (físico, sexual, digital, discriminatorio)",
          "Contacto físico sin consentimiento o insinuaciones",
          "Uso de lenguaje sexual o intimidatorio, esto incluye anécdotas, chistes sexuales y comentarios sobre la vestimenta o partes del cuerpo",
          "Hacer uso de la información privada de las personas participantes en el evento sin su consentimiento",
          "Cualquier forma de violencia contra otras personas",
        ],
      },
      {
        id: "enforcement",
        title: "Aplicación",
        paragraphs: [
          "En caso de no cumplir con las normas y comportamientos aceptados en la conferencia PyCon Colombia y eventos relacionados, la persona será advertida sobre esto y según la gravedad del comportamiento se considerará su expulsión del evento sin derecho a reembolso.",
          "Gracias por acatar estas normas que contribuyen a crear un ambiente respetuoso, amable y constructivo para todos y todas las participantes de PyCon Colombia.",
        ],
      },
    ],
  },
};
