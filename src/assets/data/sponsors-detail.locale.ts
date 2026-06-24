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
  caseStudiesLink?: {
    href: string;
    label: string;
  };
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
    aimpoint: {
      tagline:
        "Aimpoint Digital is a data and AI consulting firm that helps organizations unlock the value of their data through analytics, machine learning, optimization, and cloud technologies. The company partners with businesses to solve complex challenges, improve decision-making, and drive measurable results.",
      paragraphs: [
        "Aimpoint Digital is a leading data and AI consulting firm that helps organizations transform data into actionable insights and business value. By combining expertise in data engineering, analytics, artificial intelligence, machine learning, and optimization, Aimpoint Digital designs and delivers innovative solutions that enable smarter decisions, greater operational efficiency, and sustainable growth.",
        "The company partners with organizations across a wide range of industries to build modern data platforms, develop advanced analytics capabilities, and implement AI-driven solutions that address complex business challenges. From strategy and solution design to implementation and enablement, Aimpoint Digital helps clients maximize the impact of their data and accelerate their digital transformation journeys.",
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
    provectus: {
      tagline: "AI-first Technology Consultancy & Solutions Provider",
      paragraphs: [
        "We bring the power of cloud, data and AI to reimagine the way businesses operate, compete, and deliver customer value.",
      ],
      caseStudiesLink: {
        href: "https://provectus.com/case-studies/",
        label: "Case studies",
      },
      highlights: [],
      faqTopics: [],
    },
    epam: {
      paragraphs: [
        "EPAM Systems is a global leader in software engineering, digital transformation, and AI-based solutions. The company works with organizations from the Forbes Global 2000 list, as well as high-growth companies, to develop high-impact products, platforms, and digital experiences.",
        "With over thirty years of experience in software engineering and custom platform development, EPAM helps organizations evolve toward AI-driven business models, generating tangible value from innovation and digital investment.",
        "Recognized by leading industry analysts and various industry rankings, EPAM combines global scale with a strong local presence to drive the future of its clients, partners, and teams.",
      ],
      highlights: [],
      faqTopics: [],
    },
    nequi: {
      paragraphs: [
        "Nequi is a Colombian neobank that is transforming the way people manage their money by building a digital financial ecosystem that goes far beyond a traditional account or digital wallet. Through a simple, customer-centric, and fully digital experience, Nequi offers solutions for saving, making payments, transferring funds, receiving remittances, accessing credit, managing personal finances, and connecting users with a wide range of services that simplify everyday life. With more than 28 million users, Nequi has established itself as a world of financial and non-financial possibilities, fostering inclusion, empowerment, and access to opportunities, enabling people to achieve their goals in an easier, safer, and more convenient way.",
      ],
      highlights: [],
      faqTopics: [],
    },
    interledger: {
      paragraphs: [
        "The Interledger Foundation works to create the conditions for financial access at a global scale. We build the tech, grow the movement and shift the system to advance financial infrastructure that is open, connected, and designed to serve people.",
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
    slalom: {
      paragraphs: [
        "Slalom is a fiercely human business and technology consulting company that leads with outcomes and partners with leaders—bringing more together. From strategy through delivery, our agile teams across 54 offices in 12 countries collaborate with clients to bring powerful customer experiences, innovative ways of working, and new products and services to life. We are trusted by leaders across the Global 1000, many successful enterprise and mid-market companies, and 500+ public sector organizations to improve operations, drive growth, and create value. At Slalom, we believe that together, we can move faster, dream bigger, and build better tomorrows for all.",
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
    aimpoint: {
      tagline:
        "Aimpoint Digital es una firma de consultoría en datos e inteligencia artificial que ayuda a las organizaciones a desbloquear el valor de sus datos mediante analítica, aprendizaje automático, optimización y tecnologías en la nube. La compañía colabora con empresas para resolver desafíos complejos, mejorar la toma de decisiones e impulsar resultados medibles.",
      paragraphs: [
        "Aimpoint Digital es una firma líder en consultoría de datos e inteligencia artificial que ayuda a las organizaciones a transformar sus datos en información accionable y valor de negocio. Al combinar experiencia en ingeniería de datos, analítica, inteligencia artificial, aprendizaje automático y optimización, Aimpoint Digital diseña e implementa soluciones innovadoras que permiten tomar decisiones más inteligentes, lograr mayor eficiencia operativa y un crecimiento sostenible.",
        "La compañía colabora con organizaciones de diversos sectores para construir plataformas de datos modernas, desarrollar capacidades avanzadas de analítica e implementar soluciones impulsadas por IA que abordan desafíos empresariales complejos. Desde la estrategia y el diseño de soluciones hasta la implementación y la habilitación, Aimpoint Digital ayuda a sus clientes a maximizar el impacto de sus datos y acelerar sus procesos de transformación digital.",
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
    provectus: {
      tagline:
        "Consultoría tecnológica y proveedor de soluciones con enfoque en IA",
      paragraphs: [
        "Impulsamos la transformación empresarial con el poder de la nube, los datos y la inteligencia artificial, reinventando la forma en que las compañías operan, compiten y entregan valor a sus clientes.",
      ],
      caseStudiesLink: {
        href: "https://provectus.com/case-studies/",
        label: "Casos de estudio",
      },
      highlights: [],
      faqTopics: [],
    },
    epam: {
      paragraphs: [
        "EPAM Systems es una empresa global líder en ingeniería de software, transformación digital y soluciones basadas en inteligencia artificial. La compañía trabaja con organizaciones de la lista Forbes Global 2000, así como con empresas de alto crecimiento, para desarrollar productos, plataformas y experiencias digitales de alto impacto.",
        "Con más de treinta años de experiencia en ingeniería de software y desarrollo de plataformas personalizadas, EPAM ayuda a las organizaciones a evolucionar hacia modelos de negocio impulsados por la IA, generando valor tangible a partir de la innovación y la inversión digital.",
        "Reconocida por analistas líderes del sector y por diversos rankings de la industria, EPAM combina escala global con una sólida presencia local para impulsar el futuro de sus clientes, socios y equipos.",
      ],
      highlights: [],
      faqTopics: [],
    },
    nequi: {
      paragraphs: [
        "Nequi es un neobanco colombiano que está transformando la manera en que las personas gestionan su plata, construyendo un ecosistema financiero digital que va más allá de una cuenta o una billetera. A través de una experiencia simple, cercana y 100% digital, ofrece soluciones para ahorrar, pagar, transferir, recibir remesas, acceder a créditos, administrar finanzas y conectar con múltiples servicios que facilitan la vida diaria. Con más de 28 millones de usuarios, Nequi se ha consolidado como un mundo de posibilidades financieras y no financieras que impulsa la inclusión, la autonomía y el acceso a oportunidades, permitiendo que cada persona alcance sus metas de forma más fácil, segura y conveniente.",
      ],
      highlights: [],
      faqTopics: [],
    },
    interledger: {
      paragraphs: [
        "Interledger Foundation impulsa el acceso financiero global mediante el desarrollo de tecnología abierta, el fortalecimiento de las comunidades, y la promoción de cambios estructurales en el ecosistema financiero. Nuestro objetivo es construir una infraestructura financiera interoperable, conectada y centrada en las personas, que facilite el movimiento de valor a través de fronteras, plataformas y sistemas.",
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
    slalom: {
      paragraphs: [
        "Slalom es una empresa de consultoría de negocio y tecnología profundamente humana que lidera con resultados y se asocia con líderes para unir más. Desde la estrategia hasta la entrega, nuestros equipos ágiles en 54 oficinas en 12 países colaboran con los clientes para dar vida a experiencias de cliente potentes, formas innovadoras de trabajar y nuevos productos y servicios. Líderes de las Global 1000, muchas empresas exitosas de mercado enterprise y mid-market, y más de 500 organizaciones del sector público confían en nosotros para mejorar operaciones, impulsar el crecimiento y crear valor. En Slalom creemos que juntos podemos avanzar más rápido, soñar en grande y construir mejores mañanas para todos.",
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
