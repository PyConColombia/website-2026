import { blocksEn } from "@/lib/i18n/blocks-en";
import { blocksEs } from "@/lib/i18n/blocks-es";

export type SiteLocale = "en" | "es";

export type NavTitleKey =
  | "home"
  | "agenda"
  | "speakers"
  | "keynotes"
  | "sponsors"
  | "scholarships"
  | "team"
  | "codeOfConduct";

export type SiteMessagesShape = {
  nav: Record<NavTitleKey, string>;
  header: {
    getTickets: string;
    getTicketsSrOnly: string;
    getTicketsTooltip: string;
    yearPlaceholder: string;
    selectYearAria: string;
    pyconByYear: string;
  };
  footer: {
    legal: string;
    contact: string;
    links: string;
    codeOfConduct: string;
    scholarships: string;
    home: string;
    keynoteSpeakers: string;
    gallery: string;
    team: string;
    descriptionLead: string;
    descriptionJoin: string;
    copyright: string;
  };
  alert: {
    line: string;
    applyNow: string;
    dismissAria: string;
  };
  heroVisual: {
    ariaLabel: string;
    locationLine1: string;
    locationLine2: string;
  };
  hero: {
    badge: string;
    titlePrefix: string;
    subtitle: string;
    getTickets: string;
    flipWords: string[];
  };
  pageMeta: {
    blog: {
      title: string;
      description: string;
      jsonLdName: string;
    };
    team: {
      title: string;
      description: string;
    };
    speakers: {
      title: string;
      description: string;
    };
    pricing: {
      title: string;
      description: string;
      jsonLdName: string;
    };
    codeOfConduct: {
      title: string;
      description: string;
    };
    scholarships: {
      title: string;
      description: string;
    };
    sponsorDetail: {
      titleSuffix: string;
    };
  };
  blocks: typeof blocksEn;
};

export const siteMessages: Record<SiteLocale, SiteMessagesShape> = {
  en: {
    nav: {
      home: "Home",
      agenda: "Agenda",
      speakers: "Speakers",
      keynotes: "Keynotes",
      sponsors: "Sponsors",
      scholarships: "Scholarships",
      team: "Team",
      codeOfConduct: "Code of Conduct",
    },
    header: {
      getTickets: "GET YOUR TICKETS",
      getTicketsSrOnly: "Get your tickets",
      getTicketsTooltip: "Get your tickets",
      yearPlaceholder: "Year",
      selectYearAria: "Select year",
      pyconByYear: "PyCon by year",
    },
    footer: {
      legal: "Legal",
      contact: "Contact",
      links: "Links",
      codeOfConduct: "Code of Conduct",
      scholarships: "Scholarships",
      home: "Home",
      keynoteSpeakers: "Keynote Speakers",
      gallery: "Gallery",
      team: "Team",
      descriptionLead:
        "PyCon Colombia is the annual Colombian conference that gathers professionals, enthusiasts and amateur users of the Python programming language.",
      descriptionJoin:
        "Join us to learn, share, and connect with Python professionals from across the globe.",
      copyright: "©{year} PyCon Colombia. All rights reserved.",
    },
    alert: {
      line: "PyCon Colombia 2026 — Opportunity Scholarships are open.",
      applyNow: "Apply now",
      dismissAria: "Dismiss alert",
    },
    heroVisual: {
      ariaLabel: "PyCon Colombia 2026",
      locationLine1: "MEDELLIN, COLOMBIA",
      locationLine2: "24, 25 & 26 JULY - 2026",
    },
    hero: {
      badge: "Medellin, Colombia · 24, 25 & 26 July, 2026",
      titlePrefix: "Ready to dive into the world of",
      subtitle:
        "The biggest Python conference in Colombia. Come explore, learn, and connect with others just as passionate as you are.",
      getTickets: "GET YOUR TICKETS",
      flipWords: [
        "Python",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "DevOps",
        "Core Python",
        "Scientific Computing",
        "Computer Vision",
        "Community",
        "Open Source",
      ],
    },
    pageMeta: {
      blog: {
        title: "Blog",
        description:
          "News, speaker stories, and updates from PyCon Colombia 2026—July 24–26 in Medellín at Universidad EAFIT.",
        jsonLdName: "Blog — PyCon Colombia 2026",
      },
      team: {
        title: "Team",
        description:
          "Organizers and volunteers behind PyCon Colombia 2026 in Medellín—July 24–26 at Universidad EAFIT.",
      },
      speakers: {
        title: "Speakers",
        description:
          "Meet the speakers at PyCon Colombia 2026—talks on Python, AI, community, and more in Medellín, July 24–26.",
      },
      pricing: {
        title: "Tickets",
        description:
          "Ticket and add-on options for PyCon Colombia 2026—three days of Python in Medellín, July 24–26 at Universidad EAFIT.",
        jsonLdName: "Tickets — PyCon Colombia 2026",
      },
      codeOfConduct: {
        title: "Code of Conduct",
        description:
          "Read the PyCon Colombia Code of Conduct, enforcement procedure, and health and safety policy.",
      },
      scholarships: {
        title: "Scholarships",
        description:
          "Apply for PyCon Colombia opportunity scholarships—financial support for students and underrepresented groups in the Python community.",
      },
      sponsorDetail: {
        titleSuffix: "Sponsor",
      },
    },
    blocks: blocksEn,
  },
  es: {
    nav: {
      home: "Inicio",
      agenda: "Agenda",
      speakers: "Ponentes",
      keynotes: "Oradores principales",
      sponsors: "Patrocinadores",
      scholarships: "Becas",
      team: "Equipo",
      codeOfConduct: "Código de conducta",
    },
    header: {
      getTickets: "COMPRA TUS ENTRADAS",
      getTicketsSrOnly: "Comprar entradas",
      getTicketsTooltip: "Comprar entradas",
      yearPlaceholder: "Año",
      selectYearAria: "Seleccionar año",
      pyconByYear: "PyCon por año",
    },
    footer: {
      legal: "Legal",
      contact: "Contacto",
      links: "Enlaces",
      codeOfConduct: "Código de conducta",
      scholarships: "Becas",
      home: "Inicio",
      keynoteSpeakers: "Oradores principales",
      gallery: "Galería",
      team: "Equipo",
      descriptionLead:
        "PyCon Colombia es la conferencia anual que reúne a profesionales, entusiastas y usuarios del lenguaje de programación Python en Colombia.",
      descriptionJoin:
        "Únete para aprender, compartir y conectar con la comunidad Python de todo el mundo.",
      copyright: "©{year} PyCon Colombia. Todos los derechos reservados.",
    },
    alert: {
      line: "PyCon Colombia 2026 — Becas de oportunidad abiertas.",
      applyNow: "Postúlate aquí",
      dismissAria: "Cerrar aviso",
    },
    heroVisual: {
      ariaLabel: "PyCon Colombia 2026",
      locationLine1: "MEDELLÍN, COLOMBIA",
      locationLine2: "24, 25 Y 26 DE JULIO - 2026",
    },
    hero: {
      badge: "Medellín, Colombia · 24, 25 y 26 de julio de 2026",
      titlePrefix: "¿Listo para sumergirte en el mundo de",
      subtitle:
        "La conferencia de Python más grande de Colombia. Explora, aprende y conecta con personas tan apasionadas como tú.",
      getTickets: "COMPRA TUS ENTRADAS",
      flipWords: [
        "Python",
        "Ciencia de datos",
        "Machine Learning",
        "Inteligencia artificial",
        "DevOps",
        "Python core",
        "Computación científica",
        "Visión por computador",
        "Comunidad",
        "Código abierto",
      ],
    },
    pageMeta: {
      blog: {
        title: "Blog",
        description:
          "Noticias, historias de ponentes y novedades de PyCon Colombia 2026—del 24 al 26 de julio en Medellín en la Universidad EAFIT.",
        jsonLdName: "Blog — PyCon Colombia 2026",
      },
      team: {
        title: "Equipo",
        description:
          "Organizadores y voluntarios detrás de PyCon Colombia 2026 en Medellín—del 24 al 26 de julio en la Universidad EAFIT.",
      },
      speakers: {
        title: "Ponentes",
        description:
          "Conoce a los ponentes de PyCon Colombia 2026—charlas sobre Python, IA, comunidad y más en Medellín, del 24 al 26 de julio.",
      },
      pricing: {
        title: "Entradas",
        description:
          "Opciones de boletos y complementos para PyCon Colombia 2026—tres días de Python en Medellín, del 24 al 26 de julio en la Universidad EAFIT.",
        jsonLdName: "Entradas — PyCon Colombia 2026",
      },
      codeOfConduct: {
        title: "Código de conducta",
        description:
          "Consulta el código de conducta de PyCon Colombia, el procedimiento de aplicación y la política de salud y seguridad.",
      },
      scholarships: {
        title: "Becas",
        description:
          "Postúlate a las becas de oportunidad de PyCon Colombia—apoyo económico para estudiantes y grupos subrepresentados en la comunidad Python.",
      },
      sponsorDetail: {
        titleSuffix: "Patrocinador",
      },
    },
    blocks: blocksEs,
  },
};
