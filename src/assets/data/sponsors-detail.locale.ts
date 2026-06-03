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
      tagline: "We are the technology training hub of Universidad EAFIT",
      paragraphs: [
        "We empower organizations and individuals by building authentic, high-demand capabilities, enabling them to evolve alongside the pace of technology through hands-on learning methodologies focused on real-world challenges. With this strategic approach, we solve today’s complexities while actively shaping an innovative future.By bridging the gap between the public and private sectors, we drive scalable impact and develop transformative solutions that adapt to the demands of an ever- changing environment.",
      ],
      highlights: [],
      faqTopics: [],
    },
    loka: {
      tagline:
        "Loka is the Silicon Valley consultancy named AWS Innovation Partner of the Year for 2024",
      paragraphs: [
        "We solve complex problems for startups and enterprises using cutting-edge tech including GenAI, ML, DevOps and Big Data. As an AWS Premier Tier Partner, we help customers accelerate to production with AWS funding programs. For more info visit loka.com.",
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
    genlogs: {
      paragraphs: [
        "GenLogs is a truck intelligence company that provides real-time data and analytics to optimize logistics operations and combat fraud in the transportation industry. Leveraging a nationwide network of sensors, artificial intelligence, and real-time mobility data, GenLogs offers insights into freight patterns, carrier capacities, and asset tracking. This enables freight brokers, carriers, and shippers to make informed decisions, reduce costs, and enhance operational efficiency.",
        "In addition to operational optimization, GenLogs plays a significant role in asset recovery and fraud prevention. The company has assisted in recovering over 1000 stolen or misused assets and offers investigative services to combat load theft, double brokering, and freight fraud.",
        "Founded in 2022 and based in Washington, D.C., GenLogs has secured substantial funding to expand its sensor network and technological capabilities. The company has raised $21 million since 2023, including a $14.6 million Series A funding round led by Venrock and HOF Capital.",
        "Furthermore, GenLogs collaborates with law enforcement agencies to address issues such as human trafficking, fentanyl smuggling, theft, and fraud, demonstrating its commitment to enhancing safety and security within the freight industry.",
      ],
      highlights: [],
      faqTopics: [],
    },
    "licencias-online": {
      tagline:
        "At Licencias OnLine we drive our partners' growth with technology, strategy, and value",
      paragraphs: [
        "Licencias OnLine is the leading ally for Technology Manufacturers and the ideal partner for service providers that distribute these solutions.",
        "We deliver technology solutions, business development, and support to service providers, system integrators, and independent software vendors (ISVs) so they can add value for their customers.",
        "For more than 20 years we have offered solutions from recognized manufacturers, including Microsoft's robust portfolio, backed by a team of specialists and brand experts who support our partners at every stage of their growth.",
        "We build sustainable, long-term value partnerships through a distribution approach represented by:",
      ],
      highlights: [],
      faqTopics: [
        {
          topic: "Smart Business",
          description:
            "We apply business intelligence through data analytics to design tailored strategies by technology clusters.",
        },
        {
          topic: "Smart Partnerships",
          description:
            "End-to-end Go To Market strategies, including project consulting, positioning tactics, knowledge adoption, and financial support.",
        },
        {
          topic: "SmartHub",
          description:
            "We create fully digital business experiences to simplify and speed up operations management and deliver scalability in subscription models.",
        },
      ],
    },
  },
  es: {
    eafit: {
      tagline:
        "Somos el centro de formación tecnológica de la Universidad EAFIT. ",
      paragraphs: [
        "Formamos y acompañamos a través de la instalación de capacidades reales en organizaciones y personas que se transforman al ritmo de la tecnología con metodologías de aprendizaje prácticas orientadas a los desafíos reales. \n\nCon este enfoque, buscamos resolver los retos del presente y ser parte activa en la construcción de un futuro innovador.A través de nuestra conexión con el sector público y privado, generamos impacto y desarrollamos soluciones que trascienden, adaptándose a las necesidades de un entorno en constante cambio.",
      ],
      highlights: [],
      faqTopics: [],
    },
    loka: {
      tagline:
        "Loka es una empresa de consultoría de software nacida en Silicon Valley nombrada AWS Partner de innovación en el 2024. ",
      paragraphs: [
        "Resolvemos problemas complejos para startups y empresas utilizando tecnología de punta, incluyendo GenAI, ML, DevOps y Big Data. Como AWS Premier Tier Partner, ayudamos a nuestros clientes a acelerar su llegada a producción con los programas de financiamiento de AWS. Para más información, visita loka.com.",
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
    genlogs: {
      paragraphs: [
        "GenLogs es una empresa de inteligencia de transporte de carga que proporciona datos y analítica en tiempo real para optimizar las operaciones logísticas y combatir el fraude en la industria del transporte. Aprovechando una red nacional de sensores, inteligencia artificial y datos de movilidad en tiempo real, GenLogs ofrece información sobre patrones de carga, capacidades de los transportistas y seguimiento de activos. Esto permite a brokers, transportistas y cargadores tomar decisiones informadas, reducir costos y mejorar la eficiencia operativa.",
        "Además de la optimización operativa, GenLogs desempeña un papel clave en la recuperación de activos y la prevención del fraude. La compañía ha contribuido a la recuperación de más de 1000 activos robados o mal utilizados y ofrece servicios de investigación para combatir el robo de carga, el doble corretaje y el fraude en el transporte de mercancías.",
        "Fundada en 2022 y con sede en Washington, D.C., GenLogs ha asegurado una inversión significativa para expandir su red de sensores y sus capacidades tecnológicas. La empresa ha recaudado 21 millones de dólares desde 2023, incluyendo una ronda de financiación Serie A de 14,6 millones de dólares liderada por Venrock y HOF Capital.",
        "Asimismo, GenLogs colabora con agencias de seguridad y autoridades para abordar problemáticas como la trata de personas, el tráfico de fentanilo, el robo y el fraude, demostrando su compromiso con la seguridad y la protección dentro de la industria del transporte de carga.",
      ],
      highlights: [],
      faqTopics: [],
    },
    "licencias-online": {
      tagline:
        'En Licencias OnLine "Impulsamos el crecimiento de nuestros partners con tecnología, estrategia y valor"',
      paragraphs: [
        "Licencias OnLine es el aliado principal de los Fabricantes de Tecnología, y el partner ideal para las empresas prestadoras de servicio que distribuyen estas soluciones.",
        "Proporcionamos soluciones de tecnología, desarrollo de negocios y soporte a proveedores de servicios, a integradores de sistemas y a desarrolladores de software (ISVs) para ayudarlos a entregar valor agregado a sus clientes.",
        "Desde hace más de 20 años ofrecemos soluciones de fabricantes reconocidos, incluyendo el robusto portafolio de Microsoft, respaldado por un equipo de especialistas y colaboradores expertos en la marca que acompañan a nuestros partners en cada etapa de su crecimiento.",
        "Proponemos alianzas de valor sostenibles en el tiempo mediante enfoque de distribución representado en:",
      ],
      highlights: [],
      faqTopics: [
        {
          topic: "Smart Business",
          description:
            "Aplicamos la inteligencia de negocios a través de la analítica de datos para el diseño de estrategias a medida por clusters tecnológicos.",
        },
        {
          topic: "Smart Partnerships",
          description:
            "Desarrollo integral en estrategias Go To Market, incluyendo consultoría de proyectos, tácticas de posicionamiento, adopción de conocimientos y soporte financiero.",
        },
        {
          topic: "SmartHub",
          description:
            "Creamos experiencias de negocio 100% digitales para simplificar, agilizar la gestión de la operación y brindar escalabilidad en modelos de suscripción.",
        },
      ],
    },
  },
};
