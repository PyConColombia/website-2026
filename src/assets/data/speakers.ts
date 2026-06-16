export type SpeakerTrack = "artificial-intelligence" | "community";

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

export const speakers: Speaker[] = [
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
    tracks: ["artificial-intelligence"],
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
    tracks: ["community"],
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
    tracks: ["artificial-intelligence"],
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
    tracks: ["artificial-intelligence"],
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
    tracks: ["artificial-intelligence"],
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
    tracks: ["artificial-intelligence"],
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
    tracks: ["artificial-intelligence"],
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
    tracks: ["artificial-intelligence"],
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
    tracks: ["artificial-intelligence"],
    github: "https://github.com/prestrepoh",
    linkedin: "https://www.linkedin.com/in/pablo-restrepo-838a7879/",
    talkTitle: "Clean Code in the Era of LLMs: Do Good Practices Still Matter?",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    talkDescription:
      "Instead, research from METR, CodeRabbit, and GitClear is converging on an uncomfortable truth: code duplication has quadrupled, copy-pasted code now exceeds moved code, bugs have risen 70%, and security issues have nearly tripled. AI didn't break our codebases. It amplified what was already broken. So what do we actually do about it? This talk makes the case that clean code, SOLID, DDD, TDD, and design patterns matter more than ever when LLMs write half the code. Your codebase is now a prompt: clean code leads to better AI suggestions, which make it easier to stay clean. We'll walk through which practices now matter more, which ones have quietly turned against you, and how to collaborate with an LLM without becoming a rubber stamp for its output. You'll leave with a concrete framework, Adversarial Collaboration: generate, critique, refactor, verify. Not vibe coding. Real engineering, just faster.",
  },
];
