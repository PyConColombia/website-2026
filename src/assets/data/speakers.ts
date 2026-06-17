export type SpeakerTrack =
  | "artificial-intelligence"
  | "machine-learning"
  | "data-science"
  | "core-python"
  | "web"
  | "security"
  | "devops"
  | "community"
  | "open-source"
  | "scientific-computing";

export const speakerTrackOrder: SpeakerTrack[] = [
  "artificial-intelligence",
  "machine-learning",
  "data-science",
  "core-python",
  "web",
  "security",
  "devops",
  "community",
  "open-source",
  "scientific-computing",
];

export type Speaker = {
  slug: string;
  name: string;
  image?: string;
  title: string;
  description: string;
  tracks: SpeakerTrack[];
  github?: string;
  linkedin?: string;
  talkTitle: string;
  country: string;
  language: string;
  level: string;
  talkDescription: string;
};

const speakerList: Speaker[] = [
  {
    slug: "cristhian-david-recalde-arevalo",
    name: "Cristhian David Recalde Arévalo",
    image: "/images/speakers/cristhian-david-recalde-arevalo.jpg",
    title: "Mobile Developer @ HomeTeam Network",
    description:
      "Soy un desarrollador Full Stack apasionado por crear soluciones digitales elegantes y funcionales. Mi enfoque está en escribir código limpio, mantenible y escalable que no solo funcione, sino que también proporcione una excelente experiencia de usuario. Trabajo principalmente con tecnologías modernas que me permitieron construir aplicaciones robustas y de alto rendimiento para StartUps de Estados Unidos y Ecuador. Además del desarrollo, disfruto aprendiendo continuamente, compartiendo conocimiento en comunidades tecnológicas y contribuyendo a proyectos open source cuando es posible.",
    tracks: ["artificial-intelligence", "community"],
    github: "https://github.com/crycodex",
    linkedin: "https://www.linkedin.com/in/isnotcristhianr/",
    talkTitle: "Empleabilidad en la era de la IA",
    country: "Ecuador",
    language: "Spanish / Español",
    level: "Beginner / Principiante",
    talkDescription:
      "La inteligencia artificial está cambiando el mercado laboral más rápido que nunca. Muchos desarrolladores se preguntan: ¿la IA me reemplazará o me potenciará? En esta charla compartiré mi experiencia real pasando de ser desarrollador en Latinoamérica a trabajar para empresas de Estados Unidos, enfrentando entrevistas, optimizando mi perfil profesional y adaptándome a un entorno donde la IA ya es parte del día a día.",
  },
  {
    slug: "jeronimo-hoyos-botero",
    name: "Jerónimo Hoyos Botero",
    image: "/images/speakers/jeronimo-hoyos-botero.png",
    title: "Estudiante @ Universidad Nacional de Colombia Sede Medellín",
    description:
      "Soy estudiante en la Universidad Nacional, con un gran interés en el machine learning. Me gusta crear animaciones en Manim porque son súper chéveres y me permiten enseñar cómo funcionan estos sistemas por dentro. Mi intención es tomar conceptos que suelen parecer raros o abstractos y mostrarlos de forma visual y animada para que resulten mucho más claros y accesibles.",
    tracks: ["machine-learning", "artificial-intelligence"],
    github: "https://github.com/JeroHoyos",
    linkedin:
      "https://www.linkedin.com/in/jer%C3%B3nimo-hoyos-botero-8b692928b/",
    talkTitle: "Construyendo un Transformer con Rust",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Advanced / Avanzado",
    talkDescription:
      "Los Transformers suelen percibirse como gigantes incomprensibles. Esta charla propone demostrar lo contrario: no son cajas negras, sino mecanismos elegantes que pueden entenderse y dominarse desde sus fundamentos. Presentamos Molinete AI, un modelo tipo GPT-2 construido estrictamente desde cero en Rust. Sin frameworks de deep learning: solo tensores, matemáticas y control total. Inspirado en Feste de Tag1 Consulting (entrenado con Shakespeare), este proyecto plantea un reto distinto: entrenar la red con la obra de Miguel de Cervantes para generar texto con el estilo del Siglo de Oro. A lo largo de la sesión, desmontaremos el modelo pieza por pieza. Con el apoyo de una presentación animada en Manim (más de 4.000 líneas de código), haremos visible cómo fluye la información dentro de la red. Partiremos desde la tokenización (BPE) y la construcción de operaciones básicas, para luego adentrarnos en el núcleo del modelo: embeddings, máscara causal y Multi-Head Self-Attention. Finalmente, exploraremos el proceso de aprendizaje, observando cómo los gradientes recorren la red durante el entrenamiento. Más que una demostración, esta charla busca proporcionar una visión clara y operativa de los Transformers, conectando la teoría con una implementación real desde cero.",
  },
  {
    slug: "brayan-echenique-ardila",
    name: "Brayan Echenique Ardila",
    image: "/images/speakers/brayan-echenique-ardila.jpg",
    title: "AI Software Engineer @ Proteccion S.A",
    description:
      "Soy Brayan Echenique, AI Software Engineer en Protección, donde diseño e implemento soluciones de inteligencia artificial integrando tecnologías emergentes con arquitecturas robustas. Soy defensor del pragmatismo técnico y creo firmemente que la mejor solución no siempre es la más compleja, sino la que resuelve el problema correcto con las herramientas correctas.",
    tracks: ["artificial-intelligence"],
    linkedin: "https://www.linkedin.com/in/brayan-echenique-3ba556205",
    talkTitle:
      "No todo clavo necesita un martillo de IA: Arquitecturas que piensan antes de generar",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "Vivimos en la era donde todo “necesita IA generativa”… o eso nos venden. En esta charla desmonto el hype para hablar de lo que realmente importa: diseñar arquitecturas limpias, intencionadas y sostenibles. Vamos a explorar cómo combinar lo mejor del mundo tradicional con las herramientas emergentes sin caer en el over-engineering. Porque a veces, un regex bien puesto le gana a un LLM de millones de parámetros. Si estás cansado de ver Ferraris estacionados en el supermercado, esta charla es para ti.",
  },
  {
    slug: "daniel-arango-sohm",
    name: "Daniel Arango Sohm",
    image: "/images/speakers/daniel-arango-sohm.jpg",
    title: "Python Junior Software Engineer @ Epam",
    description:
      "I have won 3 times the best project award in Systems Engineering at EAFIT. I have given talks at Medellín JS, Python Medellín twice, Medellín AI, PyCon Colombia, Python Moscow, and BarNLP. I am half Colombian, I also have German and Russian heritage, and I speak Russian and German.",
    tracks: ["core-python"],
    linkedin: "https://www.linkedin.com/in/daniel-arango-sohm-352b4822a/",
    talkTitle: "Leverage your Python skill using the Python interpreter",
    country: "Colombia",
    language: "English / Inglés",
    level: "Advanced / Avanzado",
    talkDescription:
      "In this talk, I'll challenge the audience's mindset about Python. Python is not an interpreter, and in fact, there are multiple Python interpreters—each with its own architecture and purpose. I'll walk through Python's core internals and show how programming languages interact beneath the surface. We'll explore how to write better Python by understanding the garbage collector, what you can build using the AST, how to read and leverage the disassembler, and the practical implications of Python's transition from its old LL(1) parser to the current PEG parser. We'll also dive into lesser-known features of Python interpreters, what a PEP really is and how it shapes the language, and conclude with a deep look at Python without the GIL—what changes, what breaks, and how the core team removed it. Throughout the talk, I'll share personal stories, including battles caused by identical ASTs and the moment I believed I had discovered a way to speed up the Python interpreter itself.",
  },
  {
    slug: "christian-urcuqui",
    name: "Christian Urcuqui",
    image: "/images/speakers/christian-urcuqui.jpg",
    title: "Senior Data Scientist @ TryHackMe",
    description:
      "Soy Christian Urcuqui, Cybersecurity Data Scientist con más de 11 años de experiencia en inteligencia artificial, ciberseguridad y sistemas de machine learning en producción. He trabajado en el diseño y evaluación de sistemas de IA para detección de amenazas, análisis de comportamiento y arquitecturas basadas en agentes. Actualmente colaboro con organizaciones internacionales en el desarrollo de contenido y soluciones en AI Security, incluyendo pentesting de agentes y modelado de amenazas. He sido speaker en eventos como DEF CON, Ekoparty, BSides y PyCon, y soy autor de libros sobre inteligencia artificial aplicada a ciberseguridad. Mi enfoque combina investigación, práctica ofensiva (adversarial ML) y diseño de sistemas seguros.",
    tracks: ["artificial-intelligence", "security"],
    github: "https://github.com/urcuqui",
    linkedin: "https://www.linkedin.com/in/christianurcuqui/",
    talkTitle: "Hacking AI Agents with Python",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "La inteligencia artificial está evolucionando de modelos estáticos a sistemas autónomos capaces de razonar, tomar decisiones y ejecutar acciones mediante herramientas y APIs. Estos sistemas, conocidos como agentes de IA, están siendo construidos principalmente en Python. Pero con esta evolución también aparece una nueva superficie de ataque. En esta charla exploraremos cómo los agentes de IA pueden ser explotados desde una perspectiva ofensiva, utilizando Python para demostrar ataques reales como: prompt injection en pipelines de agentes, exfiltración de información a través de RAG, manipulación de decisiones mediante inputs adversarios y abuso de herramientas y APIs conectadas. A partir de estos escenarios, mostraremos cómo diseñar pruebas de seguridad (pentesting) específicas para sistemas de IA, incluyendo enfoques de caja negra, gris y blanca. La charla no solo se enfocará en ataques, sino también en cómo mitigarlos, presentando un roadmap práctico para evaluar y fortalecer sistemas de IA en producción. Esta sesión está dirigida a desarrolladores Python, data scientists y engineers que están construyendo o integrando sistemas de IA y quieren entender cómo asegurar lo que están creando.",
  },
  {
    slug: "david-cardozo",
    name: "David Cardozo",
    image: "/images/speakers/david-cardozo.jpg",
    title: "Senior AI Engineer @ Dataiku",
    description:
      "Científico de Aprendizaje Automático y Arquitecto de Infraestructura Cloud. Con una trayectoria que abarca desde la seguridad de la información hasta DevOps, soy Google Developer Expert en ML y Docker Captain. Apasionado por multiplicar matrices a gran velocidad, actualmente me desempeño como Ingeniero de IA en Dataiku.",
    tracks: ["artificial-intelligence", "machine-learning"],
    github: "https://github.com/Davidnet",
    linkedin: "https://www.linkedin.com/in/davidcardozo/",
    talkTitle: "Opening the Black Box: Mechanistic Interpretability of LLMs",
    country: "Canada",
    language: "English / Inglés",
    level: "Beginner / Principiante",
    talkDescription:
      'A medida que los agentes se implementan en contextos de alto riesgo (finanzas, manufactura, salud), comprender cómo toman decisiones, y no solo qué deciden, se vuelve fundamental para la seguridad y la confianza. Por ejemplo, cuando un agente recibe la instrucción "Buscar los resultados del tercer trimestre de nuestra empresa" y elige buscar en documentos internos en lugar de en la web pública, ¿qué proceso interno impulsa esa elección? La ingeniería de la respuesta, las pruebas de comportamiento y el análisis de la cadena de pensamiento describen correlaciones o narrativas; ninguna revela el mecanismo real. Comprender cómo un agente llega a una conclusión es un componente crítico para desarrollar IA de manera responsable, especialmente en lo que respecta a la confiabilidad y la transparencia en los sistemas de IA. Las interpretaciones de modelos son una forma en que los desarrolladores pueden generar confianza y coherencia en sus sistemas y respaldar la implementación segura de agentes de IA.',
  },
  {
    slug: "juan-diego-david-melo-alarcon",
    name: "Juan Diego David Melo Alarcón",
    image: "/images/speakers/juan-diego-david-melo-alarcon.jpg",
    title: "Application Architect @ IBM",
    description:
      "Soy un arquitecto de soluciones enfocado en la eficiencia sistémica y en la construcción de software diseñado para los retos del mundo real. Mi enfoque profesional se sitúa en la intersección de la IA generativa y las arquitecturas cloud native, donde el verdadero desafío no es solo lograr que un modelo responda, sino que lo haga de forma resiliente, escalable y financieramente lógica. A lo largo de mi trayectoria, he liderado la modernización de aplicaciones en entornos de nube híbrida, enfrentando la complejidad de integrar servicios de vanguardia con infraestructuras críticas.",
    tracks: ["artificial-intelligence", "devops"],
    linkedin: "https://www.linkedin.com/in/alarconjuan",
    talkTitle:
      "Estrategias de Optimización de Costos en GenAI con Python y AWS",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "¿Es posible escalar la Inteligencia Artificial Generativa sin que el éxito del proyecto comprometa la estabilidad financiera de la organización? En esta sesión se abordará cómo transformar el despliegue de modelos de lenguaje de gran tamaño (LLMs) mediante un diseño de arquitectura orientado a la eficiencia operativa. En lugar de aceptar el consumo elevado de tokens como un costo inevitable, se explorará un modelo de costos sostenible que permite construir aplicaciones inteligentes y escalables sin sacrificar la rentabilidad. A través de una ruta técnica centrada en Python y los servicios de AWS, se analizarán estrategias clave como el arbitraje de modelos, donde la lógica de la aplicación decide dinámicamente qué motor de inteligencia utilizar según la complejidad de la tarea. Se profundizará en cómo el uso inteligente de bases de datos vectoriales de bajo impacto y el almacenamiento en caché semántico permiten reutilizar conocimientos previos, logrando ahorros significativos en infraestructura. Los asistentes descubrirán cómo la implementación de flujos asíncronos y el procesamiento por lotes permiten optimizar los recursos disponibles. Esta charla es una guía práctica para arquitectos y desarrolladores que buscan liderar la transición de prototipos costosos a sistemas en producción que sean técnica y económicamente viables.",
  },
  {
    slug: "jonatan-esteban-gonzalez-balaguera",
    name: "Jonatan Esteban Gonzalez Balaguera",
    image: "/images/speakers/jonatan-esteban-gonzalez-balaguera.jpg",
    title: "Profesional @ Procuraduría General de la Nación",
    description:
      "Soy físico con maestría en física teórica y una segunda maestría en Visual Analytics and Big Data, actualmente cursando una especialización en estadística en la Universidad Nacional de Colombia. Trabajo como analista en la Procuraduría General de la Nación, donde aplico aprendizaje automático, NLP y análisis geoespacial a problemas de vigilancia preventiva y monitoreo. Mi trayectoria va desde la simulación de sistemas superconductores hasta el desarrollo de herramientas de detección de deforestación y análisis electoral, siempre con Python como hilo conductor.",
    tracks: ["machine-learning", "artificial-intelligence"],
    github: "https://github.com/jegonzalezba01",
    linkedin:
      "https://www.linkedin.com/in/jonatan-e-gonzalez-balaguera-b36500246/",
    talkTitle:
      "NLP sin etiquetas: cómo clusterizar N procesos jurídicos del Estado colombiano y convertir el caos en un clasificador en producción",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Advanced / Avanzado",
    talkDescription:
      "¿Qué haces cuando tienes 600.000 quejas jurídicas, cero datos etiquetados y una entidad del Estado esperando resultados? Esta charla recorre el proceso completo de construcción de un sistema de clasificación NLP no supervisado para la Procuraduría General de la Nación. Partiendo de texto administrativo en bruto — ruidoso, lleno de abreviaciones y jerga institucional — mostraré cómo TF-IDF, SVD truncado y KMeans se combinaron para organizar más de medio millón de registros en 64 grupos semánticamente coherentes, sin una sola etiqueta manual. Pero la clusterización es solo el punto de partida. Cubriré cómo se validaron los clusters, cómo se entrenó un clasificador de Regresión Logística sobre ellos para hacer el sistema desplegable, y cómo el pipeline final fue empaquetado en un .pkl que hoy usan colegas no técnicos en producción. En el camino, enfrentaremos los problemas reales: curvas de codo que no se comportan, desbalances de tamaño entre clusters de 1:20, y la tensión entre elegancia matemática y usabilidad institucional.",
  },
  {
    slug: "elbano-mibelli",
    name: "Elbano Mibelli P.",
    image: "/images/speakers/elbano-mibelli.jpg",
    title: "Senior DevOps Solutions Architect @ Provectus",
    description:
      "Elbano is a Senior DevOps Solutions Architect at Provectus, an AWS Premier Consulting Partner and official Anthropic partner, with over 9 years of experience in cloud-native, AI, DevOps, and distributed systems design. He holds two AWS certifications, three AWS Black Belt specializations, and an ITIL Foundation credential. Today, he works at the intersection of cloud infrastructure, agentic AI, and enterprise delivery, designing solutions that range from multi-account AWS platforms for AI agent orchestration to intelligent contact centers with Amazon Connect and Bedrock.",
    tracks: ["artificial-intelligence", "devops"],
    github: "https://github.com/emibelli",
    linkedin: "https://www.linkedin.com/in/emibelli",
    talkTitle:
      "From Vibe Coding to Spec-Driven Development with AWOS in Claude Code",
    country: "Colombia",
    language: "English / Inglés",
    level: "Advanced / Avanzado",
    talkDescription:
      "Vibe coding works great until it doesn't. When AI agents start ignoring your architecture, making wrong assumptions about your stack, and producing code that compiles but misses the point, the problem isn't the model. It's the instructions. This talk introduces AWOS (Agentic Workflow Operating System), an open-source framework built by Provectus for Claude Code that brings Spec-Driven Development to AI-assisted coding. AWOS structures the development process into 8 phases, each with its own specialized agent and audience. What you'll see: a live demo building a conference talk management app. What you'll take home: a tool you can install with npx @provectusinc/awos and start using immediately.",
  },
  {
    slug: "cristhian-jesid-garcia-solarte",
    name: "Cristhian Jesid Garcia Solarte",
    image: "/images/speakers/cristhian-jesid-garcia-solarte.jpg",
    title: "Senior Data Engineer @ Provectus",
    description:
      "Machine Learning Engineer and Data Engineer with a background in Astronomy and Astrophysics and over 5 years of experience designing, building, and deploying scalable data pipelines, ML systems, and Big Data solutions on AWS and Databricks. I specialize in building end-to-end machine learning pipelines, RAG systems, and agentic AI workflows, as well as optimizing big data processes using Apache Spark, SQL/NoSQL data modeling, and cloud-native architectures.",
    tracks: ["artificial-intelligence", "community"],
    github: "https://github.com/cristhiancjgs",
    linkedin: "https://www.linkedin.com/in/cristhiancjgs20",
    talkTitle:
      "Structured Learning: Plataforma impulsada por IA que transforma papers académicos en experiencias de aprendizaje interactivas",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "Structured Learning es una plataforma que convierte un paper de investigación en un módulo completo de aprendizaje — explicaciones capítulo por capítulo, código ejecutable incremental, chat con RAG, flashcards con repetición espaciada FSRS, derivaciones de ecuaciones, y un grafo de conocimiento en Neo4j. Esta charla cubre el producto, la ingeniería de un pipeline de workflows agénticos que lleva un issue de GitHub hasta un PR fusionado, y cómo corre en AWS con LocalStack para paridad dev-prod. Los agentes no reemplazan ingenieros, reemplazan el pegamento entre ingenieros y el aburrido 80% del SDLC.",
  },
  {
    slug: "nieng-yordan-lee-gaitan",
    name: "Nieng Yordan Lee Gaitan",
    image: "/images/speakers/nieng-yordan-lee-gaitan.jpg",
    title:
      "Estudiante de maestría en Ingeniería Química @ Universidad Nacional de Colombia - Grupo TAYEA",
    description:
      "Ingeniero químico de la Universidad Nacional de Colombia y actualmente cursando maestría en ingeniería química con enfoque en investigación. Trabajo principalmente con Python para modelamiento matemático, simulaciones, análisis de datos y desarrollo de herramientas útiles en contexto industrial o académico. Actualmente estoy enfocado en investigación sobre producción de hidrógeno en syngas, combinando modelamiento multiescala, simulación molecular y machine learning. También trabajo en Exergia Code, donde desarrollo software y contenido técnico cruzando ingeniería química con programación.",
    tracks: ["machine-learning", "scientific-computing"],
    github: "https://github.com/NiengLee",
    linkedin: "https://www.linkedin.com/in/ncyl91/",
    talkTitle:
      "Python y Machine Learning para Optimización Termoquímica Sostenible",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "La ingeniería química sigue dependiendo en gran parte de ensayos experimentales costosos y lentos para evaluar condiciones de operación en procesos termoquímicos. Esta charla propone un enfoque práctico basado en Python y machine learning para acelerar ese proceso: construir modelos predictivos a partir de datos fisicoquímicos que permitan estimar resultados clave sin necesidad de probar cada escenario en laboratorio. Se mostrará un flujo completo orientado a aplicaciones reales, desde datos hasta decisiones, con el objetivo de reducir tiempos de análisis, disminuir costos experimentales y apoyar la optimización de procesos con impacto ambiental.",
  },
  {
    slug: "pablo-restrepo-henao",
    name: "Pablo Restrepo Henao",
    image: "/images/speakers/pablo-restrepo-henao.jpg",
    title: "Machine Learning Lead @ Loka",
    description:
      "Pablo Restrepo is a Colombian software and ML engineer with over 11 years of experience building AI and software systems across Colombia, Germany, the UK, and the US. He is currently Machine Learning Lead at Loka, where he designs and deploys end-to-end GenAI solutions for global clients. He holds a Master's in Informatics from the Technical University of Munich and a BSc in Computer Science from Universidad EAFIT. He is also a published researcher in NLP and has spoken at conferences across Germany, Sweden, Norway, and the US.",
    tracks: ["artificial-intelligence", "core-python"],
    github: "https://github.com/prestrepoh",
    linkedin: "https://www.linkedin.com/in/pablo-restrepo-838a7879/",
    talkTitle: "Clean Code in the Era of LLMs: Do Good Practices Still Matter?",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "Instead, research from METR, CodeRabbit, and GitClear is converging on an uncomfortable truth: code duplication has quadrupled, copy-pasted code now exceeds moved code, bugs have risen 70%, and security issues have nearly tripled. AI didn't break our codebases. It amplified what was already broken. So what do we actually do about it? This talk makes the case that clean code, SOLID, DDD, TDD, and design patterns matter more than ever when LLMs write half the code. Your codebase is now a prompt: clean code leads to better AI suggestions, which make it easier to stay clean. We'll walk through which practices now matter more, which ones have quietly turned against you, and how to collaborate with an LLM without becoming a rubber stamp for its output. You'll leave with a concrete framework, Adversarial Collaboration: generate, critique, refactor, verify. Not vibe coding. Real engineering, just faster.",
  },
  {
    slug: "nicolas-danies",
    name: "Nicolas Danies",
    image: "/images/speakers/nicolas-danies.jpg",
    title: "Data Science Manager @ Visa",
    description:
      "Soy Data Science Manager en Visa, donde lidero proyectos de inteligencia artificial para la región andina enfocados en convertir modelos de machine learning y GenAI en productos reales con impacto en negocio. Mi trabajo se centra en cerrar la brecha entre investigación y producción: desde diseñar modelos hasta desplegarlos como sistemas escalables usados por bancos y empresas en múltiples países. Mi carrera ha sido un recorrido acelerado dentro del ecosistema tecnológico en Latinoamérica, pasando por compañías como Mercado Libre y Rappi, donde trabajé en problemas de alto impacto como fraude, pricing en tiempo real y sistemas distribuidos a gran escala. Paralelamente, soy cofundador y COO de una startup de inteligencia artificial enfocada en entrenamiento comercial mediante sistemas speech-to-speech, donde estoy construyendo arquitecturas modernas integrando modelos de voz, LLMs y sistemas en tiempo real. Más allá de lo profesional, siempre he estado motivado por construir comunidad y acelerar el desarrollo tecnológico en Colombia. He sido profesor asistente en la Universidad de los Andes, he enseñado a cientos de personas sobre machine learning y sistemas con Python, y participé en la creación de un nuevo programa de Data Science en el país.",
    tracks: ["artificial-intelligence", "machine-learning", "devops"],
    linkedin: "https://www.linkedin.com/in/nicolas-danies",
    talkTitle: "Real-Time Voice Systems: diseño y arquitectura en 5 niveles",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Advanced / Avanzado",
    talkDescription:
      "Los sistemas de voz han avanzado rápidamente en los últimos años, pero la mayoría de implementaciones aún se quedan en demos: combinaciones simples de Speech-to-Text, modelos de lenguaje y Text-to-Speech que funcionan en entornos controlados, pero fallan al enfrentarse a condiciones reales. Esta charla propone un enfoque distinto: entender los sistemas de voz como una arquitectura que evoluciona en niveles de madurez, desde prototipos básicos hasta sistemas en tiempo real listos para producción. A través de un framework de 5 niveles, recorreremos el camino completo de un sistema de Conversational AI: desde la integración de componentes básicos, pasando por los retos de orquestación (streaming, latencia, turn-taking), hasta los problemas menos evidentes pero críticos como calidad de audio, robustez y experiencia de usuario, llegando a arquitecturas en tiempo real con tecnologías como LiveKit, y finalmente, explorando hacia dónde va el futuro con sistemas end-to-end y agentes multimodales. La charla está basada en experiencia real construyendo sistemas de voz en producción, y se enfoca en decisiones de ingeniería más que en herramientas específicas. Los asistentes se llevarán un entendimiento claro de cómo diseñar sistemas de voz modernos con Python, qué problemas deben anticipar y cómo estructurar sus propias arquitecturas para construir experiencias conversacionales de clase mundial.",
  },
  {
    slug: "david-alejandro-rivera-correa",
    name: "David Alejandro Rivera Correa",
    image: "/images/speakers/david-alejandro-rivera-correa.jpg",
    title:
      "Profesional I - Analítica de Datos y conocimiento del cliente @ EDEQ",
    description:
      "Soy economista y Mg. en Ciencia de Datos, una buena parte de mi historia transcurre en el sector eléctrico en donde he podido crecer en habilidades de automatización, gestión de datos y liderazgo de iniciativas. Sin embargo, más allá de la dinámica laboral siempre me acompaña la pasión por la investigación y los temas sociales, uno de ellos la seguridad alimentaria y nutricional el cual fue un tema que me acompañó toda mi vida universitaria y que también marcó mi vida posgradual. A veces los temas alimentarios son subestimados, pero la verdad es que configuran trampas de pobreza, presión fiscal, y limitaciones que pueden marcar por toda la vida a las personas. Pienso que estamos en un tiempo privilegiado en donde problemas antes invisibles ahora pueden ganar observabilidad a través de la creatividad por medio del uso de datos públicos y haciendo uso de Python.",
    tracks: ["data-science", "machine-learning"],
    linkedin:
      "https://www.linkedin.com/in/davidalejandroriverac?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    talkTitle:
      "Feeding the Invisible: Seguridad alimentaria en ciudades intermedias con Python",
    country: "Colombia",
    language: "Spanish / Español",
    level: "All / Para todos los niveles",
    talkDescription:
      "En muchos países, la inseguridad alimentaria no solo es un problema social, sino también un problema de datos. En Colombia, sistemas clave de monitoreo han perdido continuidad, dejando vacíos críticos de información para la toma de decisiones públicas. Esta charla presenta el desarrollo de un prototipo en Python para la construcción de un sistema de monitoreo y predicción del riesgo de inseguridad alimentaria en ciudades intermedias, utilizando únicamente datos abiertos. A partir de un pipeline reproducible, se integran múltiples componentes de ciencia de datos: ingesta y procesamiento de datos de precios de alimentos (SIPSA), modelos de series de tiempo para pronóstico de precios (incluyendo enfoques clásicos y machine learning como XGBoost), segmentación de hogares mediante clustering a partir de encuestas socioeconómicas, construcción de un índice compuesto que relaciona ingresos, precios y vulnerabilidad, y desarrollo de un prototipo de sistema de soporte a la decisión (DSS). Los asistentes se llevarán un enfoque replicable para construir indicadores complejos, estrategias para trabajar con datos abiertos imperfectos, ideas para integrar modelos, datos socioeconómicos y visualización en un solo sistema, y un ejemplo real de aplicación de Python en política pública y desarrollo territorial.",
  },
  {
    slug: "santos-gallegos",
    name: "Santos Gallegos",
    image: "/images/speakers/santos-gallegos.jpg",
    title: "Ingeniero de Software @ Read the Docs",
    description:
      "Santos es un ingeniero de software y de seguridad de aplicaciones de Ecuador, actualmente trabaja en Read the Docs. Apasionado por el desarrollo web, Python, ciberseguridad y open source. Santos ha reportado vulnerabilidades en varios proyectos como Neovim, GitPython, django-allauth, Sentry, y más. Cuando no está frente a una pantalla, puedes encontrarlo leyendo, pintando, disfrutando de conciertos de metal o practicando escalada.",
    tracks: ["community", "security"],
    github: "https://github.com/stsewd",
    linkedin: "https://www.linkedin.com/in/stsewd",
    talkTitle:
      "Lecciones aprendidas reportando vulnerabilidades en el ecosistema de Python",
    country: "Ecuador",
    language: "Spanish / Español",
    level: "All / Para todos los niveles",
    talkDescription:
      "Seguramente has recibido esa notificación indicando que debes actualizar una dependencia debido a un fallo de seguridad. Pero, ¿te has preguntado qué sucede desde que alguien descubre esa vulnerabilidad hasta que el parche llega a tu proyecto? En esta charla, compartiré mi experiencia reportando vulnerabilidades en el ecosistema de Python. Exploraremos el detrás de escena: desde el hallazgo técnico, el proceso de reporte, hasta la colaboración con los mantenedores y la publicación del parche. No solo abordaremos los aspectos técnicos, sino también el factor humano, ambos cruciales para una resolución efectiva de las vulnerabilidades. Los retos que enfrentan los mantenedores y la comunidad, sobre todo en esta nueva era de seguridad para el software open source donde la inteligencia artificial juega un papel cada vez más relevante.",
  },
  {
    slug: "ana-maria-lopez-moreno",
    name: "Ana María López Moreno",
    image: "/images/speakers/ana-maria-lopez-moreno.jpg",
    title: "Partner Solution Architect Data and AI @ Microsoft",
    description:
      "Soy Ana María López Moreno, apasionada por los datos, la inteligencia artificial, la educación y las comunidades tecnológicas. Actualmente trabajo como Senior Partner Solution Architect en Data & AI en Microsoft, donde acompaño a partners y organizaciones en la adopción de soluciones de datos, analítica e inteligencia artificial. También soy docente universitaria y coordinadora del programa de Ingeniería de Software y Datos en la Institución Universitaria Digital de Antioquia, un rol que me permite conectar la industria con la academia y acompañar a nuevas generaciones de profesionales en tecnología. Mi experiencia se ha enfocado en plataformas de datos, inteligencia artificial generativa, MLOps, arquitectura cloud y construcción de soluciones aplicadas con impacto real. He sido speaker en PyCon Colombia 2023 y 2024, y en 2025 tuve la oportunidad de participar como speaker en KubeCon, compartiendo experiencias alrededor de tecnología, datos, inteligencia artificial y comunidades técnicas.",
    tracks: ["artificial-intelligence", "security"],
    github: "https://github.com/darkanita",
    linkedin: "https://www.linkedin.com/in/amlopez81",
    talkTitle: "STUART: Un agente hacker autónomo hecho en Python",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "¿Qué pasaría si le das una dirección IP a un agente de Python y le pides que encuentre las vulnerabilidades del servidor por su cuenta? Eso es exactamente lo que hice. En esta charla presento STUART, un agente autónomo de pentesting que construí con AG2 (AutoGen) y GPT-4. El agente es capaz de analizar sistemas objetivo sin intervención humana, siguiendo las primeras etapas del Cyber Kill Chain: reconocimiento e identificación de vulnerabilidades. La arquitectura es 100% Python: un AssistantAgent respaldado por GPT-4 que razona y planifica, y un UserProxyAgent con un Code Executor que interactúa directamente con el sistema objetivo. Todo orquestado por AG2, el framework open-source para construir sistemas multi-agente. La charla incluye una demostración en vivo donde STUART analizará un sistema vulnerable desplegado en Docker. Verán paso a paso cómo el agente escanea puertos, identifica servicios, detecta vulnerabilidades y reporta sus hallazgos — todo de forma autónoma, decidiendo por sí mismo qué hacer en cada paso. Te vas a llevar conocimiento práctico sobre cómo construir agentes que actúan en el mundo real con AG2, y una perspectiva concreta sobre lo que la IA ofensiva puede hacer hoy. Si un agente de Python puede encontrar tus vulnerabilidades, ¿cómo deberían prepararse los equipos de defensa? Todas las demostraciones se realizan en entornos controlados y éticos.",
  },
  {
    slug: "gonzalo-andres-pena-castellanos",
    name: "Gonzalo Andrés Peña Castellanos",
    image: "/images/speakers/gonzalo-andres-pena-castellanos.jpg",
    title: "Senior Software Engineer / Open Source AI @ Backblaze",
    description:
      "I'm a Colombian software engineer with 11+ years of professional experience, and entrepreneur working in Python, TypeScript and open source development. I currently work as an AI Engineer at Backblaze. Previously, I worked at Datalayer building tools at the intersection of Jupyter, AI, and collaborative computing, at Quansight contributing to the scientific Python ecosystem, and at Anaconda as Technical Lead for Anaconda Navigator. My career spans from water resources engineering (MSc from IHE Delft and Erasmus Mundus) to becoming a core contributor to major open source projects including Spyder IDE, JupyterLab, and napari, conda-forge among others. I've created over 400+ conda-forge recipes and led internationalization efforts for JupyterLab and automating efforts in the Scientific Python Translations project. I also co-founded Trepa, a climbing gym in Bogotá, Colombia, and co-founded PyCon Colombia. I'm deeply committed to the Latin American Python and open source communities, and serve on the Python Software Foundation Grants Working Group.",
    tracks: [
      "artificial-intelligence",
      "community",
      "core-python",
      "devops",
      "open-source",
    ],
    github: "https://github.com/goanpeca",
    linkedin: "https://www.linkedin.com/in/goanpeca",
    talkTitle: "Provenance by Default: AI Media Pipelines in Python",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "A model can now generate a video that looks indistinguishable from one your camera recorded. The same is true for an image, a voice, or a song. As Python developers, we are building those pipelines — and we are also the ones who will be asked, very soon, to prove what came out of them. This talk is about building generative media pipelines in Python in a way that answers that question by default. We'll walk through Genblaze, an open-source SDK (github.com/backblaze-labs/genblaze, MIT licensed) that I work on at Backblaze, and use it as a vehicle to talk about the design problems any team faces when wiring AI generation into a real product. We will cover, with live code: the Pipeline pattern with a fluent Pipeline → Step → Run → Manifest API built on Pydantic v2; one API across eleven providers; provenance that survives the file with SHA-256-verified manifests embedded into PNG, JPEG, MP4, MP3, and WAV; privacy and policy controls; storage and replay; and agent loops with lineage. By the end, attendees will have a clear reference for how to architect generative-AI features in Python so that what did this system actually produce, and can I prove it? is a one-line answer instead of a ticket.",
  },
  {
    slug: "andres-felipe-estrada-rodriguez",
    name: "Andrés Felipe Estrada Rodriguez",
    image: "/images/speakers/andres-felipe-estrada-rodriguez.jpg",
    title: "Sr Data Scientist @ Globant",
    description:
      "Economista, Machine learning engineer con +8 años de experiencia construyendo sistemas de ML/AI en producción. Actualmente en Globant, trabajo diseño de aplicaciones de IA y casos de uso escalables y seguros en procesos críticos como procesos industriales y seguridad.",
    tracks: ["artificial-intelligence", "data-science"],
    github: "https://github.com/aestrad7",
    linkedin: "https://www.linkedin.com/in/afestradar/",
    talkTitle: "Sistemas de IA vulnerables: datos reales, diseño responsable",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "El 29% de los ataques pasan los filtros de seguridad de los LLMs más usados en producción. No es un bug. Es la naturaleza del sistema. Los LLMs son procesos estocásticos entrenados sobre lenguaje humano, el medio más flexible, ambiguo y manipulable que existe. Eso los hace increíblemente poderosos. Y exactamente por eso son vulnerables. No hay parche para eso. Solo hay diseño. Esta charla presenta los resultados de llm-break-bench: 3.360 pruebas adversariales sobre GPT-4o, Claude, Gemini, Grok y DeepSeek usando MLCommons AI Safety v0.5 y OWASP LLM Top 10 como estándares. Los números rompen las intuiciones. Los datos son el punto de partida. La charla los conecta con los casos de uso reales donde los LLMs están en producción: RAGs, chatbots, agentes, asistentes de código. Muestra dónde falla el diseño, qué consecuencias tiene (Air Canada pagó por eso) y cómo se construye diferente. El cierre es accionable: 5 pilares de diseño para sistemas de IA que no dependan del modelo para su propia seguridad, con código real de NVIDIA NeMo Guardrails y Meta LlamaFirewall.",
  },
  {
    slug: "sergio-hernan-valenzuela-camara",
    name: "Sergio Hernán Valenzuela Cámara",
    image: "/images/speakers/sergio-hernan-valenzuela-camara.jpg",
    title: "CTO TecnóPolis-Ai, docente universitario @ TecnóPolis-Ai",
    description:
      "Soy magister en Ingeniería de Software, de la Universidad Nacional de La Plata (UNLP), La Plata - Argentina, actualmente candidato a Doctor Ciencias de la Ingeniería en la Universidad Nacional del Sur (UNS), Bahía Blanca - Argentina. Soy docente universitario en asignaturas de Inteligencia Artificial en Universidades Bolivianas, además de emprendedor tecnológico. Actualmente estoy trabajando en la implementación de dos start-ups: Mentalia.online y DoctorTomatto.com. Quiero compartir experiencias y conocimientos a nivel latinoamérica.",
    tracks: ["artificial-intelligence"],
    github: "https://github.com/sergioFavio",
    linkedin:
      "https://www.linkedin.com/in/sergio-hern%C3%A1n-valenzuela-c%C3%A1mara-4b965733/",
    talkTitle:
      "Camila Plejia, asistente virtual aplicado a personas con tetraplejia",
    country: "Bolivia",
    language: "Spanish / Español",
    level: "All / Para todos los niveles",
    talkDescription:
      "La combinación de distintas herramientas y tecnologías del área de la inteligencia artificial — Computer Vision, OCR, PNL, RPA, Voice to text, text to voice — da lugar a la creación de un asistente virtual, Camila Plejia, que ayuda personas con tetraplejia, facilitando su cotidiano quehacer en tareas simples como leer noticias, conocer el estado del tiempo, revisar, leer y escribir un correo electrónico, revisar, enviar y leer mensajes de WhatsApp, buscar y ver un determinado video en YouTube, entre otras. Permite a la persona tetrapléjica tener una ventana de comunicación con el mundo exterior, pensando que pasa mucho tiempo aislada entre cuatro paredes y depende de la asistencia de un tercero para realizar actividades.",
  },
  {
    slug: "kevin-hernandez",
    name: "Kevin Hernandez",
    image: "/images/speakers/kevin-hernandez.jpg",
    title: "Senior Software Engineer @ trellis.law",
    description:
      "I'm a software engineer who loves learning new stuff and working on exciting projects.",
    tracks: ["core-python", "web"],
    github: "https://github.com/kevteg",
    linkedin: "https://www.linkedin.com/in/keeeevin/",
    talkTitle: "Python in the Browser: Powered by WebAssembly",
    country: "Colombia",
    language: "English / Inglés",
    level: "Intermediate / Intermedio",
    talkDescription:
      "What if the browser could run Python as a first-class language? In this talk, I'll show how PyScript makes it possible to execute real Python directly in the browser, powered by WebAssembly. Through a series of exciting, live examples, you'll see Python manipulating the DOM, calling browser APIs, and building interactive experiences, all without a traditional JavaScript codebase. I will also show a couple of examples of how you can embed both JavaScript and Python on PyScript to make even more exciting tools. I will also discuss what WebAssembly is, why it exists, and how it enables languages like Python to run safely and efficiently on the web platform. Finally, I'll discuss when tools like PyScript make sense, and compare it with similar tools. Whether you're a Python developer curious about the frontend, an engineer interested in WebAssembly, or simply someone who enjoys seeing the boundaries of Python pushed, this talk will change how you think about what can run in a browser.",
  },
  {
    slug: "orlin-david-cortez-alban",
    name: "Orlin David Cortez Alban",
    image: "/images/speakers/orlin-david-cortez-alban.jpg",
    title: "Developer @ Kernel Chaos",
    description:
      "Backend Developer with 6+ years of experience designing and building systems. Proven ability to lead and manage teams, streamline development workflows, and solve technical challenges.",
    tracks: ["security"],
    github: "https://github.com/davcortez",
    linkedin: "https://www.linkedin.com/in/davcortez/",
    talkTitle: "From Typosquatting to Infrastructure Poisoning",
    country: "Ecuador",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "En 2026, la seguridad de la cadena de suministro de Python ha dejado de ser un problema de nombres mal escritos para convertirse en un campo de batalla de infraestructura. Esta charla analiza la transición técnica desde ataques simples de Typosquatting hacia el envenenamiento sofisticado de herramientas de CI/CD y entornos de ejecución. Exploraremos casos reales recientes como la campaña de TeamPCP y el compromiso de Aqua Security Trivy, analizando técnicas de persistencia mediante archivos .pth que permiten ejecución maliciosa sin necesidad de un import explícito. Finalmente, presentaremos la hoja de ruta para la defensa moderna: desde Sigstore y el PEP 740 hasta el cumplimiento de la Ley de Resiliencia Ciberactiva (CRA).",
  },
  {
    slug: "alfonso-palacio",
    name: "Alfonso Palacio",
    image: "/images/speakers/alfonso-palacio.jpg",
    title: "Data Engineer @ Globant",
    description:
      "Alfonso Palacio is a Systems Engineering student at Politécnico Grancolombiano with a strong focus on applied artificial intelligence. He has worked on projects involving machine learning, computer vision, and data analytics, including BachAI, a YOLOv8-based system for automatic pothole detection. He has experience with Python, data processing, and cloud-based solutions, and has contributed to initiatives such as Microsoft Learn Student Ambassadors and collaborative tech projects. Alfonso is passionate about building AI solutions that solve real-world problems and about sharing practical knowledge to help others leverage these technologies in their own work.",
    tracks: [
      "artificial-intelligence",
      "data-science",
      "machine-learning",
      "scientific-computing",
    ],
    github: "https://github.com/Parzival099",
    linkedin: "https://www.linkedin.com/in/alfonso-palacio/",
    talkTitle: "Machine Learning aplicado a secuencias genéticas",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Beginner / Principiante",
    talkDescription:
      "DNA contains massive amounts of biological information, but how can artificial intelligence help us understand it? In this talk, we will explore how Python and Machine Learning can be used to analyze genetic sequences in a practical and beginner-friendly way. Using public biological datasets, we will demonstrate how DNA sequences can be transformed into data suitable for machine learning models, covering concepts such as feature extraction, sequence representation, and basic classification techniques. We will also review popular Python tools used in bioinformatics, including Biopython, pandas, and scikit-learn, while discussing real-world challenges when working with biological data, such as high dimensionality, noise, and interpretability limitations. By the end of the talk, attendees will have a clear understanding of how to start building genetic analysis projects using accessible tools from the Python ecosystem, even without prior bioinformatics experience.",
  },
  {
    slug: "robin-hafid-quintero-lopez",
    name: "Robin Hafid Quintero Lopez",
    image: "/images/speakers/robin-hafid-quintero-lopez.jpg",
    title: "Software Engineer @ GenLogs",
    description:
      "I'm a Software Engineer focused on developer tooling, maintainability, and high-performance systems, with a strong interest in the Python and Rust ecosystems. I'm the creator of complexipy, an open source cognitive complexity analyzer for Python written in Rust, designed to provide fast local feedback for developers and CI pipelines. I've also contributed to open source projects including Rust and other developer tooling initiatives. My work focuses on building tools that help engineers write more maintainable and reliable software.",
    tracks: ["core-python"],
    github: "https://github.com/rohaquinlop",
    linkedin: "https://www.linkedin.com/in/robin-hafid/",
    talkTitle: "Understanding Cognitive Complexity in Python",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "Modern Python makes it incredibly easy to write code quickly, but much harder to keep it understandable as projects grow. This talk explores cognitive complexity: a metric focused not on what code does, but on how difficult it is for humans to read, reason about, and maintain. Through real Python examples, we will analyze how nested conditionals, branching logic, async flows, exceptions, and growing business rules silently increase the mental load required to work with a codebase. We will also discuss why traditional metrics such as cyclomatic complexity often fail to reflect actual readability, and how cognitive complexity provides a more human-centered perspective on maintainability. The talk includes practical refactoring techniques, common anti-patterns found in production Python projects, and lessons learned while building complexipy, an open source cognitive complexity analyzer for Python written in Rust, designed to provide fast local feedback and CI integration.",
  },
  {
    slug: "gerardo-vilcamiza-espinoza",
    name: "Gerardo Vilcamiza Espinoza",
    image: "/images/speakers/gerardo-vilcamiza-espinoza.jpg",
    title: "Senior AI Engineer @ NTT DATA",
    description:
      "¡Hola! Mi nombre es Gerardo y soy Ingeniero Mecatrónico con una Maestría en Inteligencia Artificial Embebida. Actualmente trabajo como Senior AI Engineer en la consultora tecnológica NTT DATA, liderando proyectos de IA generativa, en los que aplicamos modelos de generación de texto, audio e imágenes en soluciones para el sector bancario y asegurador en distintos países de Latinoamérica. También me desempeño como docente investigador en la Universidad de Buenos Aires, donde dicto cursos de Deep Learning y Visión por Computadora. Además, lidero proyectos de investigación en el Laboratorio de Sistemas Embebidos, enfocados en robótica y sistemas satelitales.",
    tracks: ["artificial-intelligence"],
    linkedin: "https://www.linkedin.com/in/gerardo-vilcamiza/",
    talkTitle:
      "Vision-Language-Action Models: de los chatbots a la interacción con el mundo físico",
    country: "Peru",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "Los chatbots impulsados por LLMs marcaron un antes y un después en la inteligencia artificial, permitiendo sistemas capaces de comprender y generar lenguaje natural con gran fluidez. Más recientemente, los modelos multimodales ampliaron estas capacidades al incorporar imágenes, audio y video, acercando la IA a una comprensión más completa de su entorno. En esta charla exploraremos los Vision-Language-Action Models (VLA), arquitecturas que combinan visión por computadora, lenguaje natural y toma de decisiones para permitir que agentes inteligentes interpreten su entorno y ejecuten acciones en el mundo físico. También veremos cómo el ecosistema Python se ha convertido en una pieza fundamental para desarrollar este tipo de soluciones mediante herramientas modernas como PyTorch, Hugging Face, simuladores robóticos y frameworks open source utilizados actualmente en robótica e inteligencia artificial multimodal.",
  },
  {
    slug: "miguel-vargas",
    name: "Miguel Vargas",
    image: "/images/speakers/miguel-vargas.jpg",
    title: "Senior Product Engineer @ Learned Hand AI",
    description:
      "I'm a software engineer and builder with more than 11 years of experience creating products for startups across healthcare, fintech, real estate, and AI. I specialize in Python, TypeScript, backend architecture, and modern AI-driven development workflows. I enjoy turning complex ideas into real products that people can actually use. Beyond coding, I care deeply about engineering quality, developer experience, clean systems, and continuous learning. I'm also passionate about community and education. I've spoken at conferences like PyTexas 2026 and organize developer events and workshops as a Cursor Ambassador in Ecuador.",
    tracks: ["artificial-intelligence", "core-python", "devops"],
    github: "https://github.com/lmiguelvargasf",
    linkedin: "https://www.linkedin.com/in/lmiguelvargasf/",
    talkTitle:
      "Elevate your code quality in Python with modern, ultra-fast tooling",
    country: "Ecuador",
    language: "Spanish / Español",
    level: "Beginner / Principiante",
    talkDescription:
      "AI coding assistants have changed how we build software. We can now generate features, refactors, and entire services in minutes — but speed without strong engineering practices quickly becomes technical debt. In this talk, I'll show how modern Python teams can build fast and reliable development workflows using tools like Astral's Ruff, Ty, and uv. We'll explore how traditional slow and noisy quality pipelines are being replaced by a new generation of tooling that provides near-instant feedback while improving code quality and developer experience. Topics include why AI-generated code makes automated quality gates more important than ever, using Ruff for formatting and linting, using Ty for modern static typing, structuring formatter → linter → type-checker workflows, pre-commit hooks and CI pipelines developers actually enjoy using, and reducing friction between local development and CI/CD.",
  },
  {
    slug: "mateo-rios-querubin",
    name: "Mateo Rios Querubin",
    image: "/images/speakers/mateo-rios-querubin.jpg",
    title: "Senior ML Engineer @ Provectus / Universidad EAFIT",
    description:
      "Mathematical Engineer with an MSc in Applied Mathematics (Universidad EAFIT) and 7+ years of experience as a Data Scientist and Machine Learning Engineer. Currently at Provectus, building LLM evaluation and optimization pipelines for document processing automation. Also 3+ years lecturing Advanced Analytics and foundational Mathematics at Universidad EAFIT. Specialized in designing and deploying AI solutions including LLM evaluation systems, computer vision models, recommendation systems, and end-to-end ML pipelines. AWS Certified Generative AI Developer and AWS Certified Machine Learning Specialty.",
    tracks: ["artificial-intelligence", "machine-learning", "devops"],
    linkedin: "https://www.linkedin.com/in/mateo-rios-querubin-98b10b115/",
    talkTitle:
      "From Expert Judgment to Autonomous Optimization: Encoding Human Expertise into LLM Judges with DSPy",
    country: "Colombia",
    language: "English / Inglés",
    level: "Intermediate / Intermedio",
    talkDescription:
      "A single misread clause in a reinsurance contract can mean millions in liability. Our LLM pipeline could extract and summarize these documents, but how do you know the output is actually correct? String matching fails, human review at scale is unaffordable, and a single LLM-as-judge prompt gives inconsistent, uncalibrated scores. The real bottleneck was never generation; it was evaluation. This talk shows how we solved it in two steps, both built entirely in Python. First, we encoded expert evaluation at scale using DSPy to distill judgments from five domain experts into a panel of calibrated LLM judges. Then we closed the loop using DSPy's MIPROv2 and GEPA optimizers, wiring the judge panel as a fitness function and letting the system rewrite prompts autonomously. The stack is Python-native: DSPy, MLflow, LiteLLM, Pydantic. You will leave with a concrete recipe for encoding expert knowledge into automated LLM evaluation and self-improving optimization.",
  },
  {
    slug: "juliana-suarez-avila",
    name: "Juliana Suárez Ávila",
    image: "/images/speakers/juliana-suarez-avila.jpg",
    title: "Data Scientist @ Cuesta Partners",
    description:
      "Ingeniera Industrial convertida en Data Scientist por amor a los números y a la tecnología. Juliana pasó de modelar probabilidades en la Javeriana a modelos de detección de fraude en MercadoLibre y MercadoPago, y hoy construye soluciones de IA en Cuesta Partners, una consultoría de Tech y AI. Attento es su experimento más reciente: demostrar que Python puede conectar una voz humana con diez APIs corporativas sin perder la cabeza en el camino. Fuera del teclado, se acaba de graduar como Chef, donde aplica la misma rigurosidad técnica que en su vida laboral.",
    tracks: ["artificial-intelligence", "core-python", "web"],
    linkedin: "https://www.linkedin.com/in/juliana-suarez-avila/",
    talkTitle:
      "De voz a acción: construyendo un asistente de IA con Python y Google Workspace",
    country: "Colombia",
    language: "Spanish / Español",
    level: "All / Para todos los niveles",
    talkDescription:
      "Saltar entre pestañas de Gmail, Calendar, Drive y Jira para tareas repetitivas es agotador. Por eso construimos Attento, un asistente que permite ejecutar acciones reales en Google Workspace usando lenguaje natural. En esta charla construimos Attento, un asistente de voz end-to-end que convierte lenguaje natural en acciones reales sobre Google Workspace. Veremos cómo funciona por dentro: desde capturar audio en el navegador, hasta orquestar múltiples APIs en paralelo, persistir contexto entre sesiones y tomar decisiones de infraestructura que escalan. Cubriremos arquitectura con FastAPI, autenticación OAuth 2.0 con PKCE, function calling con Gemini, streaming con NDJSON, buenas prácticas con uv y Pydantic Settings, y el camino de demo a producción.",
  },
  {
    slug: "juan-manuel-marin-bedoya",
    name: "Juan Manuel Marín Bedoya",
    image: "/images/speakers/juan-manuel-marin-bedoya.jpg",
    title: "Senior Data Engineer @ Huge",
    description:
      "Creció aprendiendo inglés con los menús de instalación del software y los tutoriales de YouTube antes de que existieran en español. Esa curiosidad temprana por la tecnología lo llevó de Ingeniería Industrial y análisis financiero en la Javeriana a construir pipelines de datos para empresas en tres países. Juan Manuel es Senior Data Engineer con experiencia en GCP, Python y automatización, y ha trabajado desde plataformas B2B de comercio con Asia hasta proyectos de BI en Cisco. En Attento se encargó de lo que más le gusta: que los datos fluyan limpio, que la infraestructura no se note, y que el sistema recuerde lo que hiciste ayer.",
    tracks: ["artificial-intelligence", "core-python", "web"],
    linkedin: "https://www.linkedin.com/in/juanmmb/",
    talkTitle:
      "De voz a acción: construyendo un asistente de IA con Python y Google Workspace",
    country: "Colombia",
    language: "Spanish / Español",
    level: "All / Para todos los niveles",
    talkDescription:
      "Saltar entre pestañas de Gmail, Calendar, Drive y Jira para tareas repetitivas es agotador. Por eso construimos Attento, un asistente que permite ejecutar acciones reales en Google Workspace usando lenguaje natural. En esta charla construimos Attento, un asistente de voz end-to-end que convierte lenguaje natural en acciones reales sobre Google Workspace. Veremos cómo funciona por dentro: desde capturar audio en el navegador, hasta orquestar múltiples APIs en paralelo, persistir contexto entre sesiones y tomar decisiones de infraestructura que escalan. Cubriremos arquitectura con FastAPI, autenticación OAuth 2.0 con PKCE, function calling con Gemini, streaming con NDJSON, buenas prácticas con uv y Pydantic Settings, y el camino de demo a producción.",
  },
];

export const speakers: Speaker[] = speakerList.toSorted((a, b) =>
  a.name.localeCompare(b.name, "es", { sensitivity: "base" }),
);
