import type { SiteLocale } from "@/lib/site-messages";
import { workshopSpeakerContentByLocale } from "./workshop-speakers-content.locale";

export type SpeakerContent = {
  title: string;
  description: string;
  talkTitle: string;
  talkDescription: string;
  workshopRequirements?: string;
};

export type SpeakerContentBySlug = Record<string, SpeakerContent>;

const mateoSebastianTalkEn = {
  talkTitle:
    "From Expert Judgment to Autonomous Optimization: Encoding Human Expertise into LLM Judges with DSPy",
  talkDescription:
    'A single misread clause in a reinsurance contract can mean millions in liability. Our LLM pipeline could extract and summarize these documents, but how do you know the output is actually correct? String matching fails ("USD 5,000,000" vs "$5M" scores zero), human review at scale is unaffordable, and a single LLM-as-judge prompt gives inconsistent, uncalibrated scores. The real bottleneck was never generation; it was evaluation. This talk shows how we solved it in two steps, both built entirely in Python. First, we encoded expert evaluation at scale using DSPy to distill judgments from five domain experts into a panel of calibrated LLM judges, each targeting a single quality dimension, weighted to reflect what experts actually care about. Then we closed the loop using DSPy\'s MIPROv2 and GEPA optimizers, wiring the judge panel as a fitness function and letting the system rewrite prompts autonomously, with regression guards and CI gates so humans review only the final score delta. The stack is Python-native: DSPy, MLflow, LiteLLM, Pydantic. You will leave with a concrete recipe for encoding expert knowledge into automated LLM evaluation and self-improving optimization, applicable to any domain where "correct" is nuanced.',
};

const mateoSebastianTalkEs = {
  talkTitle:
    "Del juicio experto a la optimización autónoma: codificando experiencia humana en jueces LLM con DSPy",
  talkDescription:
    'Una sola cláusula mal interpretada en un contrato de reaseguro puede significar millones en responsabilidad. Nuestro pipeline de LLM podía extraer y resumir estos documentos, pero ¿cómo saber si la salida es realmente correcta? La coincidencia de cadenas falla ("USD 5,000,000" vs "$5M" puntúa cero), la revisión humana a escala es inviable, y un único prompt de LLM-as-judge da puntuaciones inconsistentes y sin calibrar. El verdadero cuello de botella nunca fue la generación; fue la evaluación. Esta charla muestra cómo lo resolvimos en dos pasos, ambos construidos enteramente en Python. Primero, codificamos la evaluación experta a escala usando DSPy para destilar los juicios de cinco expertos del dominio en un panel de jueces LLM calibrados, cada uno enfocado en una sola dimensión de calidad, ponderados para reflejar lo que realmente importa a los expertos. Luego cerramos el ciclo usando los optimizadores MIPROv2 y GEPA de DSPy, conectando el panel de jueces como función de fitness y dejando que el sistema reescriba prompts de forma autónoma, con guardas de regresión y gates de CI para que los humanos revisen solo el delta final de puntuación. El stack es nativo de Python: DSPy, MLflow, LiteLLM, Pydantic. Te llevarás una receta concreta para codificar conocimiento experto en evaluación automatizada de LLM y optimización auto-mejorante, aplicable a cualquier dominio donde "correcto" es matizado.',
};

const julianaJuanTalkEs = {
  talkTitle:
    "De voz a acción: construyendo un asistente de IA con Python y Google Workspace",
  talkDescription:
    "Saltar entre pestañas de Gmail, Calendar, Drive y Jira para tareas repetitivas es agotador. Por eso construimos Attento, un asistente que permite ejecutar acciones reales en Google Workspace usando lenguaje natural. En esta charla construimos Attento, un asistente de voz end-to-end que convierte lenguaje natural en acciones reales sobre Google Workspace. Veremos arquitectura con FastAPI, autenticación OAuth 2.0 con PKCE, function calling con Gemini, streaming con NDJSON, buenas prácticas con uv y Pydantic Settings, y el camino de demo a producción con Postgres y briefings matutinos automatizados.",
};

const julianaJuanTalkEn = {
  talkTitle:
    "From Voice to Action: Building an AI Assistant with Python and Google Workspace",
  talkDescription:
    "Jumping between Gmail, Calendar, Drive, and Jira tabs for repetitive tasks is exhausting. That's why we built Attento, an assistant that lets you execute real actions in Google Workspace using natural language. In this talk we build Attento, an end-to-end voice assistant that turns natural language into real actions across Google Workspace. We'll cover architecture with FastAPI, OAuth 2.0 authentication with PKCE, function calling with Gemini, streaming with NDJSON, best practices with uv and Pydantic Settings, and the path from demo to production with Postgres and automated morning briefings.",
};

export const speakerContentByLocale: Record<SiteLocale, SpeakerContentBySlug> =
  {
    en: {
      ...workshopSpeakerContentByLocale.en,
      "cristhian-david-recalde-arevalo": {
        title: "Mobile Developer @ HomeTeam Network",
        description:
          "I'm a Full Stack developer passionate about creating elegant, functional digital solutions. My focus is on writing clean, maintainable, and scalable code that not only works but also delivers an excellent user experience. I mainly work with modern technologies that have allowed me to build robust, high-performance applications for startups in the United States and Ecuador. Beyond development, I enjoy continuous learning, sharing knowledge in tech communities, and contributing to open source projects whenever possible.",
        talkTitle: "Employability in the Age of AI",
        talkDescription:
          "Artificial intelligence is changing the job market faster than ever. Many developers wonder: will AI replace me or empower me? In this talk I'll share my real experience going from being a developer in Latin America to working for companies in the United States—facing interviews, optimizing my professional profile, and adapting to an environment where AI is already part of daily life. We'll explore how AI doesn't replace the developer but redefines the value we bring: from writing code to solving real problems, communicating ideas, and building complete solutions. The talk will cover the future of programming, how to shift your mindset toward AI, which skills really matter today, how to stand out in international hiring processes, the role of AI tools in your professional growth, and common mistakes that hold back your employability.",
      },
      "jeronimo-hoyos-botero": {
        title: "Student @ Universidad Nacional de Colombia Sede Medellín",
        description:
          "I'm a student at Universidad Nacional with a strong interest in machine learning. I enjoy creating animations in Manim because they're really cool and let me teach how these systems work under the hood. My goal is to take concepts that often seem strange or abstract and show them visually and through animation so they become much clearer and more accessible.",
        talkTitle: "Building a Transformer with Rust",
        talkDescription:
          "Transformers are often perceived as incomprehensible giants. This talk aims to prove the opposite: they are not black boxes but elegant mechanisms that can be understood and mastered from their fundamentals. We present Molinete AI, a GPT-2-style model built strictly from scratch in Rust. No deep learning frameworks—just tensors, math, and full control. Inspired by Feste from Tag1 Consulting (trained on Shakespeare), this project poses a different challenge: training the network on Miguel de Cervantes's work to generate text in the style of the Golden Age. Throughout the session we'll break the model down piece by piece. With the support of a Manim animated presentation (over 4,000 lines of code), we'll make visible how information flows inside the network. We'll start from tokenization (BPE) and building basic operations, then dive into the core of the model: embeddings, causal mask, and Multi-Head Self-Attention. Finally, we'll explore the learning process, watching how gradients flow through the network during training. More than a demo, this talk aims to provide a clear, operational view of Transformers, connecting theory with a real from-scratch implementation.",
      },
      "brayan-echenique-ardila": {
        title: "AI Software Engineer @ Proteccion S.A",
        description:
          "I'm Brayan Echenique, AI Software Engineer at Protección, where I design and implement artificial intelligence solutions integrating emerging technologies with robust architectures. I'm an advocate of technical pragmatism and firmly believe the best solution isn't always the most complex, but the one that solves the right problem with the right tools.",
        talkTitle:
          "Not Every Nail Needs an AI Hammer: Architectures That Think Before They Generate",
        talkDescription:
          "We live in an era where everything \"needs generative AI\"... or so we're told. In this talk I'll cut through the hype to talk about what really matters: designing clean, intentional, and sustainable architectures. We'll explore how to combine the best of the traditional world with emerging tools without falling into over-engineering. Because sometimes a well-placed regex beats a multi-million-parameter LLM. If you're tired of seeing Ferraris parked at the supermarket, this talk is for you.",
      },
      "daniel-arango-sohm": {
        title: "Python Junior Software Engineer @ Epam",
        description:
          "I have won 3 times the best project award in Systems Engineering at EAFIT. I have given talks at Medellín JS, Python Medellín twice, Medellín AI, PyCon Colombia, Python Moscow, and BarNLP. I am half Colombian, I also have German and Russian heritage, and I speak Russian and German.",
        talkTitle: "Leverage your Python skill using the Python interpreter",
        talkDescription:
          "In this talk, I'll challenge the audience's mindset about Python. Python is not an interpreter, and in fact, there are multiple Python interpreters—each with its own architecture and purpose. I'll walk through Python's core internals and show how programming languages interact beneath the surface. We'll explore how to write better Python by understanding the garbage collector, what you can build using the AST, how to read and leverage the disassembler, and the practical implications of Python's transition from its old LL(1) parser to the current PEG parser. We'll also dive into lesser-known features of Python interpreters, what a PEP really is and how it shapes the language, and conclude with a deep look at Python without the GIL—what changes, what breaks, and how the core team removed it. Throughout the talk, I'll share personal stories, including battles caused by identical ASTs and the moment I believed I had discovered a way to speed up the Python interpreter itself.",
      },
      "christian-urcuqui": {
        title: "Senior Data Scientist @ TryHackMe",
        description:
          "I'm Christian Urcuqui, Cybersecurity Data Scientist with over 11 years of experience in artificial intelligence, cybersecurity, and production machine learning systems. I've worked on designing and evaluating AI systems for threat detection, behavior analysis, and agent-based architectures. I currently collaborate with international organizations on AI Security content and solutions, including agent pentesting and threat modeling. I've been a speaker at events like DEF CON, Ekoparty, BSides, and PyCon, and I'm the author of books on artificial intelligence applied to cybersecurity. My approach combines research, offensive practice (adversarial ML), and secure system design.",
        talkTitle: "Hacking AI Agents with Python",
        talkDescription:
          "Artificial intelligence is evolving from static models to autonomous systems capable of reasoning, making decisions, and executing actions through tools and APIs. These systems, known as AI agents, are primarily built in Python. But with this evolution comes a new attack surface. In this talk we'll explore how AI agents can be exploited from an offensive perspective, using Python to demonstrate real attacks such as: prompt injection in agent pipelines, information exfiltration through RAG, decision manipulation through adversarial inputs, and abuse of connected tools and APIs. From these scenarios, we'll show how to design security testing (pentesting) specific to AI systems, including black-box, gray-box, and white-box approaches. The talk won't focus only on attacks but also on how to mitigate them, presenting a practical roadmap to evaluate and strengthen AI systems in production. This session is aimed at Python developers, data scientists, and engineers building or integrating AI systems who want to understand how to secure what they're creating.",
      },
      "david-cardozo": {
        title: "Senior AI Engineer @ Dataiku",
        description:
          "Machine Learning Scientist and Cloud Infrastructure Architect. With a career spanning from information security to DevOps, I'm a Google Developer Expert in ML and Docker Captain. Passionate about multiplying matrices at high speed, I currently work as an AI Engineer at Dataiku.",
        talkTitle:
          "Opening the Black Box: Mechanistic Interpretability of LLMs",
        talkDescription:
          'As agents are deployed in high-stakes contexts (finance, manufacturing, healthcare), understanding how they make decisions—and not just what they decide—becomes fundamental to safety and trust. For example, when an agent receives the instruction "Search for our company\'s third-quarter results" and chooses to search internal documents instead of the public web, what internal process drives that choice? Answer engineering, behavioral testing, and chain-of-thought analysis describe correlations or narratives; none reveals the actual mechanism. Understanding how an agent reaches a conclusion is a critical component of developing AI responsibly, especially regarding reliability and transparency in AI systems. Model interpretability is one way developers can build trust and consistency in their systems and support the safe deployment of AI agents.',
      },
      "juan-diego-david-melo-alarcon": {
        title: "Application Architect @ IBM",
        description:
          "I'm a solutions architect focused on systemic efficiency and building software designed for real-world challenges. My professional focus sits at the intersection of generative AI and cloud-native architectures, where the real challenge isn't just getting a model to respond, but doing so resiliently, scalably, and in a financially sensible way. Throughout my career I've led application modernization in hybrid cloud environments, facing the complexity of integrating cutting-edge services with critical infrastructure.",
        talkTitle: "Cost Optimization Strategies for GenAI with Python and AWS",
        talkDescription:
          "Is it possible to scale Generative AI without project success compromising the organization's financial stability? This session will address how to transform the deployment of large language models (LLMs) through architecture design oriented toward operational efficiency. Instead of accepting high token consumption as an inevitable cost, we'll explore a sustainable cost model that lets you build intelligent, scalable applications without sacrificing profitability. Through a technical path centered on Python and AWS services, we'll analyze key strategies such as model arbitrage, where application logic dynamically decides which intelligence engine to use based on task complexity. We'll dive into how smart use of low-impact vector databases and semantic caching reuse prior knowledge, achieving significant infrastructure savings. Attendees will discover how implementing async flows and batch processing optimizes available resources. This talk is a practical guide for architects and developers looking to lead the transition from costly prototypes to production systems that are technically and economically viable.",
      },
      "jonatan-esteban-gonzalez-balaguera": {
        title: "Professional @ Procuraduría General de la Nación",
        description:
          "I'm a physicist with a master's in theoretical physics and a second master's in Visual Analytics and Big Data, currently pursuing a specialization in statistics at Universidad Nacional de Colombia. I work as an analyst at the Procuraduría General de la Nación, applying machine learning, NLP, and geospatial analysis to preventive oversight and monitoring problems. My path runs from simulating superconductor systems to developing deforestation detection tools and electoral analysis, always with Python as the common thread.",
        talkTitle:
          "NLP Without Labels: How to Cluster N Legal Processes of the Colombian State and Turn Chaos into a Production Classifier",
        talkDescription:
          "What do you do when you have 600,000 legal complaints, zero labeled data, and a government entity waiting for results? This talk walks through the full process of building an unsupervised NLP classification system for the Procuraduría General de la Nación. Starting from raw administrative text—noisy, full of abbreviations and institutional jargon—I'll show how TF-IDF, truncated SVD, and KMeans combined to organize more than half a million records into 64 semantically coherent groups, without a single manual label. But clustering is only the starting point. I'll cover how clusters were validated, how a Logistic Regression classifier was trained on them to make the system deployable, and how the final pipeline was packaged in a .pkl that non-technical colleagues use in production today. Along the way we'll face real problems: elbow curves that don't behave, 1:20 size imbalances between clusters, and the tension between mathematical elegance and institutional usability. Because in the public sector, a model nobody uses isn't a model—it's a PDF gathering dust.",
      },
      "elbano-mibelli": {
        title: "Senior DevOps Solutions Architect @ Provectus",
        description:
          "Elbano is a Senior DevOps Solutions Architect at Provectus, an AWS Premier Consulting Partner and official Anthropic partner, with over 9 years of experience in cloud-native, AI, DevOps, and distributed systems design. He holds two AWS certifications, three AWS Black Belt specializations, and an ITIL Foundation credential. Today, he works at the intersection of cloud infrastructure, agentic AI, and enterprise delivery, designing solutions that range from multi-account AWS platforms for AI agent orchestration to intelligent contact centers with Amazon Connect and Bedrock.",
        talkTitle:
          "From Vibe Coding to Spec-Driven Development with AWOS in Claude Code",
        talkDescription:
          "Vibe coding works great until it doesn't. When AI agents start ignoring your architecture, making wrong assumptions about your stack, and producing code that compiles but misses the point, the problem isn't the model. It's the instructions. This talk introduces AWOS (Agentic Workflow Operating System), an open-source framework built by Provectus for Claude Code that brings Spec-Driven Development to AI-assisted coding. AWOS structures the development process into 8 phases, each with its own specialized agent and audience. What you'll see: a live demo building a conference talk management app. What you'll take home: a tool you can install with npx @provectusinc/awos and start using immediately.",
      },
      "cristhian-jesid-garcia-solarte": {
        title: "Senior Data Engineer @ Provectus",
        description:
          "Machine Learning Engineer and Data Engineer with a background in Astronomy and Astrophysics and over 5 years of experience designing, building, and deploying scalable data pipelines, ML systems, and Big Data solutions on AWS and Databricks. I specialize in building end-to-end machine learning pipelines, RAG systems, and agentic AI workflows, as well as optimizing big data processes using Apache Spark, SQL/NoSQL data modeling, and cloud-native architectures.",
        talkTitle:
          "Structured Learning: AI-Powered Platform That Transforms Academic Papers into Interactive Learning Experiences",
        talkDescription:
          "Structured Learning is a platform that turns a research paper into a complete learning module—chapter-by-chapter explanations, incremental executable code, RAG chat, FSRS spaced-repetition flashcards, equation derivations, and a knowledge graph in Neo4j. This talk covers the product, the engineering of an agentic workflow pipeline that takes a GitHub issue to a merged PR with isolated worktrees, auto-patching after failed review, and GitHub as the agents' API, and how it runs on AWS with LocalStack for dev-prod parity. Agents don't replace engineers—they replace the glue between engineers and the boring 80% of the SDLC—and that's where compound returns live.",
      },
      "nieng-yordan-lee-gaitan": {
        title:
          "Master's Student in Chemical Engineering @ Universidad Nacional de Colombia - Grupo TAYEA",
        description:
          "Chemical engineer from Universidad Nacional de Colombia and currently pursuing a master's in chemical engineering with a research focus. I mainly work with Python for mathematical modeling, simulations, data analysis, and developing useful tools in industrial or academic contexts. I'm currently focused on research into hydrogen production in syngas, combining multiscale modeling, molecular simulation, and machine learning. I also work at Exergia Code, where I develop software and technical content bridging chemical engineering and programming.",
        talkTitle:
          "Python and Machine Learning for Sustainable Thermochemical Optimization",
        talkDescription:
          "Chemical engineering still relies heavily on costly, slow experimental trials to evaluate operating conditions in thermochemical processes. This talk proposes a practical approach based on Python and machine learning to accelerate that process: building predictive models from physicochemical data that estimate key outcomes without testing every scenario in the lab. A complete flow oriented toward real applications will be shown, from data to decisions, with the goal of reducing analysis time, lowering experimental costs, and supporting process optimization with environmental impact.",
      },
      "pablo-restrepo-henao": {
        title: "Machine Learning Lead @ Loka",
        description:
          "Pablo Restrepo is a Colombian software and ML engineer with over 11 years of experience building AI and software systems across Colombia, Germany, the UK, and the US. He is currently Machine Learning Lead at Loka, where he designs and deploys end-to-end GenAI solutions for global clients. He holds a Master's in Informatics from the Technical University of Munich and a BSc in Computer Science from Universidad EAFIT. He is also a published researcher in NLP and has spoken at conferences across Germany, Sweden, Norway, and the US.",
        talkTitle:
          "Clean Code in the Era of LLMs: Do Good Practices Still Matter?",
        talkDescription:
          "Instead, research from METR, CodeRabbit, and GitClear is converging on an uncomfortable truth: code duplication has quadrupled, copy-pasted code now exceeds moved code, bugs have risen 70%, and security issues have nearly tripled. AI didn't break our codebases. It amplified what was already broken. So what do we actually do about it? This talk makes the case that clean code, SOLID, DDD, TDD, and design patterns matter more than ever when LLMs write half the code. Your codebase is now a prompt: clean code leads to better AI suggestions, which make it easier to stay clean. We'll walk through which practices now matter more, which ones have quietly turned against you, and how to collaborate with an LLM without becoming a rubber stamp for its output. You'll leave with a concrete framework, Adversarial Collaboration: generate, critique, refactor, verify. Not vibe coding. Real engineering, just faster.",
      },
      "nicolas-danies": {
        title: "Data Science Manager @ Visa",
        description:
          "I'm Data Science Manager at Visa, where I lead artificial intelligence projects for the Andean region focused on turning machine learning and GenAI models into real products with business impact. My work centers on closing the gap between research and production: from designing models to deploying them as scalable systems used by banks and companies across multiple countries. My career has been a fast track through the tech ecosystem in Latin America, passing through companies like Mercado Libre and Rappi, where I worked on high-impact problems like fraud, real-time pricing, and large-scale distributed systems. In parallel, I'm co-founder and COO of an AI startup focused on commercial training through speech-to-speech systems, where I'm building modern architectures integrating voice models, LLMs, and real-time systems. Beyond the professional side, I've always been motivated to build community and accelerate technological development in Colombia. I've been an assistant professor at Universidad de los Andes, taught hundreds of people about machine learning and Python systems, and participated in creating a new Data Science program in the country.",
        talkTitle:
          "Real-Time Voice Systems: Design and Architecture in 5 Levels",
        talkDescription:
          "Voice systems have advanced rapidly in recent years, but most implementations still stop at demos: simple combinations of Speech-to-Text, language models, and Text-to-Speech that work in controlled environments but fail when facing real-world conditions. This talk proposes a different approach: understanding voice systems as an architecture that evolves through maturity levels, from basic prototypes to real-time production-ready systems. Through a 5-level framework, we'll walk the full path of a Conversational AI system: from integrating basic components, through orchestration challenges (streaming, latency, turn-taking), to less obvious but critical problems like audio quality, robustness, and user experience, reaching real-time architectures with technologies like LiveKit, and finally exploring where the future is headed with end-to-end systems and multimodal agents. The talk is based on real experience building voice systems in production and focuses on engineering decisions more than specific tools. Attendees will leave with a clear understanding of how to design modern voice systems with Python, what problems to anticipate, and how to structure their own architectures to build world-class conversational experiences.",
      },
      "david-alejandro-rivera-correa": {
        title: "Professional I - Data Analytics and Customer Knowledge @ EDEQ",
        description:
          "I'm an economist and MSc in Data Science; much of my story unfolds in the electric sector where I've grown in automation, data management, and leadership of initiatives. However, beyond the workplace, I'm always accompanied by a passion for research and social issues—one of them food security and nutrition, a topic that accompanied me throughout university and also marked my postgraduate life. Sometimes food issues are underestimated, but the truth is they shape poverty traps, fiscal pressure, and limitations that can mark people for life. I think we're in a privileged time when previously invisible problems can gain observability through creativity using public data and Python.",
        talkTitle:
          "Feeding the Invisible: Food Security in Intermediate Cities with Python",
        talkDescription:
          "In many countries, food insecurity is not only a social problem but also a data problem. In Colombia, key monitoring systems have lost continuity, leaving critical information gaps for public decision-making. This talk presents the development of a Python prototype to build a monitoring and prediction system for food insecurity risk in intermediate cities, using only open data. From a reproducible pipeline, multiple data science components are integrated: ingestion and processing of food price data (SIPSA), time series models for price forecasting (including classical approaches and machine learning like XGBoost), household segmentation through clustering from socioeconomic surveys, construction of a composite index relating income, prices, and vulnerability, and development of a decision support system (DSS) prototype. Attendees will take away a replicable approach for building complex indicators, strategies for working with imperfect open data, ideas for integrating models, socioeconomic data, and visualization in a single system, and a real example of applying Python in public policy and territorial development.",
      },
      "santos-gallegos": {
        title: "Software Engineer @ Read the Docs",
        description:
          "Santos is a software and application security engineer from Ecuador, currently working at Read the Docs. Passionate about web development, Python, cybersecurity, and open source. Santos has reported vulnerabilities in several projects including Neovim, GitPython, django-allauth, Sentry, and more. When he's not in front of a screen, you can find him reading, painting, enjoying metal concerts, or rock climbing.",
        talkTitle:
          "Lessons Learned Reporting Vulnerabilities in the Python Ecosystem",
        talkDescription:
          "You've surely received that notification telling you to update a dependency due to a security flaw. But have you wondered what happens from when someone discovers that vulnerability until the patch reaches your project? In this talk I'll share my experience reporting vulnerabilities in the Python ecosystem. We'll explore the behind the scenes: from the technical finding and reporting process to collaboration with maintainers and patch publication. We'll address not only technical aspects but also the human factor—both crucial for effective vulnerability resolution. The challenges maintainers and the community face, especially in this new era of open source software security where artificial intelligence plays an increasingly relevant role.",
      },
      "ana-maria-lopez-moreno": {
        title: "Partner Solution Architect Data and AI @ Microsoft",
        description:
          "I'm Ana María López Moreno, passionate about data, artificial intelligence, education, and tech communities. I currently work as Senior Partner Solution Architect in Data & AI at Microsoft, where I support partners and organizations in adopting data, analytics, and artificial intelligence solutions. I'm also a university instructor and coordinator of the Software and Data Engineering program at Institución Universitaria Digital de Antioquia, a role that lets me connect industry with academia and guide new generations of technology professionals. My experience has focused on data platforms, generative artificial intelligence, MLOps, cloud architecture, and building applied solutions with real impact. I've been a speaker at PyCon Colombia 2023 and 2024, and in 2025 I had the opportunity to speak at KubeCon, sharing experiences around technology, data, artificial intelligence, and technical communities.",
        talkTitle: "STUART: An Autonomous Hacker Agent Built in Python",
        talkDescription:
          "What if you give a Python agent an IP address and ask it to find the server's vulnerabilities on its own? That's exactly what I did. In this talk I present STUART, an autonomous pentesting agent I built with AG2 (AutoGen) and GPT-4. The agent can analyze target systems without human intervention, following the first stages of the Cyber Kill Chain: reconnaissance and vulnerability identification. The architecture is 100% Python: an AssistantAgent backed by GPT-4 that reasons and plans, and a UserProxyAgent with a Code Executor that interacts directly with the target system. All orchestrated by AG2, the open-source framework for building multi-agent systems. The talk includes a live demo where STUART will analyze a vulnerable system deployed in Docker. You'll see step by step how the agent scans ports, identifies services, detects vulnerabilities, and reports findings—all autonomously, deciding for itself what to do at each step. You'll take away practical knowledge on how to build agents that act in the real world with AG2, and a concrete perspective on what offensive AI can do today. If a Python agent can find your vulnerabilities, how should defense teams prepare? All demonstrations are performed in controlled, ethical environments.",
      },
      "gonzalo-andres-pena-castellanos": {
        title: "Senior Software Engineer / Open Source AI @ Backblaze",
        description:
          "I'm a Colombian software engineer with 11+ years of professional experience, and entrepreneur working in Python, TypeScript and open source development. I currently work as an AI Engineer at Backblaze. Previously, I worked at Datalayer building tools at the intersection of Jupyter, AI, and collaborative computing, at Quansight contributing to the scientific Python ecosystem, and at Anaconda as Technical Lead for Anaconda Navigator. My career spans from water resources engineering (MSc from IHE Delft and Erasmus Mundus) to becoming a core contributor to major open source projects including Spyder IDE, JupyterLab, and napari, conda-forge among others. I've created over 400+ conda-forge recipes and led internationalization efforts for JupyterLab and automating efforts in the Scientific Python Translations project. I also co-founded Trepa, a climbing gym in Bogotá, Colombia, and co-founded PyCon Colombia. I'm deeply committed to the Latin American Python and open source communities, and serve on the Python Software Foundation Grants Working Group.",
        talkTitle: "Provenance by Default: AI Media Pipelines in Python",
        talkDescription:
          "A model can now generate a video that looks indistinguishable from one your camera recorded. The same is true for an image, a voice, or a song. As Python developers, we are building those pipelines — and we are also the ones who will be asked, very soon, to prove what came out of them. This talk is about building generative media pipelines in Python in a way that answers that question by default. We'll walk through Genblaze, an open-source SDK (github.com/backblaze-labs/genblaze, MIT licensed) that I work on at Backblaze, and use it as a vehicle to talk about the design problems any team faces when wiring AI generation into a real product. We will cover, with live code: the Pipeline pattern with a fluent Pipeline → Step → Run → Manifest API built on Pydantic v2; one API across eleven providers; provenance that survives the file with SHA-256-verified manifests embedded into PNG, JPEG, MP4, MP3, and WAV; privacy and policy controls; storage and replay; and agent loops with lineage. By the end, attendees will have a clear reference for how to architect generative-AI features in Python so that what did this system actually produce, and can I prove it? is a one-line answer instead of a ticket.",
      },
      "andres-felipe-estrada-rodriguez": {
        title: "Sr Data Scientist @ Globant",
        description:
          "Economist and Machine Learning engineer with 8+ years of experience building ML/AI systems in production. Currently at Globant, I work on designing scalable and secure AI applications and use cases in critical processes such as industrial processes and security.",
        talkTitle: "Vulnerable AI Systems: Real Data, Responsible Design",
        talkDescription:
          "29% of attacks bypass the security filters of the most widely used LLMs in production. It's not a bug. It's the nature of the system. LLMs are stochastic processes trained on human language—the most flexible, ambiguous, and manipulable medium that exists. This talk presents the results of llm-break-bench: 3,360 adversarial tests on GPT-4o, Claude, Gemini, Grok, and DeepSeek using MLCommons AI Safety v0.5 and OWASP LLM Top 10 as standards. The smartest model in the benchmark is 5 times more vulnerable than the cheapest. The data connects to real use cases where LLMs are in production: RAGs, chatbots, agents, code assistants. The closing is actionable: 5 design pillars for AI systems that don't depend on the model for their own security, with real code from NVIDIA NeMo Guardrails and Meta LlamaFirewall.",
      },
      "sergio-hernan-valenzuela-camara": {
        title: "CTO TecnóPolis-Ai, University Instructor @ TecnóPolis-Ai",
        description:
          "I hold a Master's in Software Engineering from Universidad Nacional de La Plata (UNLP), La Plata - Argentina, and I'm currently a PhD candidate in Engineering Sciences at Universidad Nacional del Sur (UNS), Bahía Blanca - Argentina. I'm a university instructor in Artificial Intelligence courses at Bolivian universities, as well as a technology entrepreneur. I'm currently working on implementing two startups: Mentalia.online and DoctorTomatto.com. I want to share experiences and knowledge across Latin America.",
        talkTitle:
          "Camila Plejia, Virtual Assistant Applied to People with Tetraplegia",
        talkDescription:
          "The combination of different tools and technologies in artificial intelligence—Computer Vision, OCR, NLP, RPA, Voice to text, text to voice—gives rise to a virtual assistant, Camila Plejia, that helps people with tetraplegia, facilitating their daily tasks such as reading news, checking the weather, reviewing, reading and writing email, reviewing, sending and reading WhatsApp messages, searching for and watching a specific video on YouTube, among others. It allows a person with tetraplegia to have a window of communication with the outside world, considering they spend much time isolated between four walls and depend on a third party's assistance to perform activities.",
      },
      "kevin-hernandez": {
        title: "Senior Software Engineer @ trellis.law",
        description:
          "I'm a software engineer who loves learning new stuff and working on exciting projects. I enjoy building tools that push the boundaries of what Python can do, from backend systems to interactive experiences in the browser.",
        talkTitle: "Python in the Browser: Powered by WebAssembly",
        talkDescription:
          "What if the browser could run Python as a first-class language? In this talk, I'll show how PyScript makes it possible to execute real Python directly in the browser, powered by WebAssembly. Through a series of exciting, live examples, you'll see Python manipulating the DOM, calling browser APIs, and building interactive experiences, all without a traditional JavaScript codebase. I will also show a couple of examples of how you can embed both JavaScript and Python on PyScript to make even more exciting tools. I will also discuss what WebAssembly is, why it exists, and how it enables languages like Python to run safely and efficiently on the web platform. Finally, I'll discuss when tools like PyScript make sense, and compare it with similar tools. Whether you're a Python developer curious about the frontend, an engineer interested in WebAssembly, or simply someone who enjoys seeing the boundaries of Python pushed, this talk will change how you think about what can run in a browser.",
      },
      "orlin-david-cortez-alban": {
        title: "Developer @ Kernel Chaos",
        description:
          "Backend Developer with 6+ years of experience designing and building systems. Proven ability to lead and manage teams, streamline development workflows, and solve technical challenges.",
        talkTitle: "From Typosquatting to Infrastructure Poisoning",
        talkDescription:
          "In 2026, Python supply chain security has moved beyond misspelled package names to become an infrastructure battlefield. This talk analyzes the technical transition from simple Typosquatting attacks to sophisticated poisoning of CI/CD tools and runtime environments. We'll explore recent real cases such as the TeamPCP campaign and the Aqua Security Trivy compromise, analyzing persistence techniques through .pth files that enable malicious execution without an explicit import. Finally, we'll present the roadmap for modern defense: from Sigstore and PEP 740 to compliance with the Cyber Resilience Act (CRA).",
      },
      "alfonso-palacio": {
        title: "Data Engineer @ Globant",
        description:
          "Alfonso Palacio is a Systems Engineering student at Politécnico Grancolombiano with a strong focus on applied artificial intelligence. He has worked on projects involving machine learning, computer vision, and data analytics, including BachAI, a YOLOv8-based system for automatic pothole detection. He has experience with Python, data processing, and cloud-based solutions, and has contributed to initiatives such as Microsoft Learn Student Ambassadors and collaborative tech projects. Alfonso is passionate about building AI solutions that solve real-world problems and about sharing practical knowledge to help others leverage these technologies in their own work.",
        talkTitle: "Machine Learning Applied to Genetic Sequences",
        talkDescription:
          "DNA contains massive amounts of biological information, but how can artificial intelligence help us understand it? In this talk, we will explore how Python and Machine Learning can be used to analyze genetic sequences in a practical and beginner-friendly way. Using public biological datasets, we will demonstrate how DNA sequences can be transformed into data suitable for machine learning models, covering concepts such as feature extraction, sequence representation, and basic classification techniques. We will also review popular Python tools used in bioinformatics, including Biopython, pandas, and scikit-learn, while discussing real-world challenges when working with biological data, such as high dimensionality, noise, and interpretability limitations. By the end of the talk, attendees will have a clear understanding of how to start building genetic analysis projects using accessible tools from the Python ecosystem, even without prior bioinformatics experience.",
      },
      "ricardo-taborda": {
        title:
          "Dean, School of Applied Sciences and Engineering @ Universidad EAFIT",
        description:
          "Ricardo Taborda is Dean of the School of Applied Sciences and Engineering at Universidad EAFIT, leading a school of 130 full-time faculty. His background combines academic administration with research in engineering seismology and earthquake engineering, including leadership roles in research organizations and international collaborations. He holds a Ph.D. in Civil Engineering from Carnegie Mellon University, a master's in Structural Mechanics from the University of Southern California, a master's in Structural Engineering from UNAM, and a bachelor's in Civil Engineering from Universidad EAFIT. He is skilled in scientific computing with a focus on computational seismology.",
        talkTitle: "",
        talkDescription: "",
      },
      "robin-hafid-quintero-lopez": {
        title: "Software Engineer @ GenLogs",
        description:
          "I'm a Software Engineer focused on developer tooling, maintainability, and high-performance systems, with a strong interest in the Python and Rust ecosystems. I'm the creator of complexipy, an open source cognitive complexity analyzer for Python written in Rust, designed to provide fast local feedback for developers and CI pipelines. I've also contributed to open source projects including Rust and other developer tooling initiatives. My work focuses on building tools that help engineers write more maintainable and reliable software.",
        talkTitle: "Understanding Cognitive Complexity in Python",
        talkDescription:
          "Modern Python makes it incredibly easy to write code quickly, but much harder to keep it understandable as projects grow. This talk explores cognitive complexity: a metric focused not on what code does, but on how difficult it is for humans to read, reason about, and maintain. Through real Python examples, we will analyze how nested conditionals, branching logic, async flows, exceptions, and growing business rules silently increase the mental load required to work with a codebase. We will also discuss why traditional metrics such as cyclomatic complexity often fail to reflect actual readability, and how cognitive complexity provides a more human-centered perspective on maintainability. The talk includes practical refactoring techniques, common anti-patterns found in production Python projects, and lessons learned while building complexipy, an open source cognitive complexity analyzer for Python written in Rust, designed to provide fast local feedback and CI integration.",
      },
      "gerardo-vilcamiza-espinoza": {
        title: "Senior AI Engineer @ NTT DATA",
        description:
          "Hi! My name is Gerardo and I'm a Mechatronics Engineer with a Master's in Embedded Artificial Intelligence. I currently work as Senior AI Engineer at the technology consultancy NTT DATA, leading generative AI projects where we apply text, audio, and image generation models in solutions for the banking and insurance sectors across Latin America. I also work as a research professor at Universidad de Buenos Aires, where I teach Deep Learning and Computer Vision courses. Additionally, I lead research projects at the Embedded Systems Laboratory focused on robotics and satellite systems.",
        talkTitle:
          "Vision-Language-Action Models: From Chatbots to Interaction with the Physical World",
        talkDescription:
          "LLM-powered chatbots marked a before and after in artificial intelligence, enabling systems capable of understanding and generating natural language with great fluency. More recently, multimodal models expanded these capabilities by incorporating images, audio, and video, bringing AI closer to a more complete understanding of its environment. In this talk we'll explore Vision-Language-Action Models (VLA), architectures that combine computer vision, natural language, and decision-making to let intelligent agents interpret their environment and execute actions in the physical world. We'll also see how the Python ecosystem has become a fundamental piece for developing these solutions through modern tools like PyTorch, Hugging Face, robotic simulators, and open source frameworks currently used in robotics and multimodal artificial intelligence.",
      },
      "miguel-vargas": {
        title: "Senior Product Engineer @ Learned Hand AI",
        description:
          "I'm a software engineer and builder with more than 11 years of experience creating products for startups across healthcare, fintech, real estate, and AI. I specialize in Python, TypeScript, backend architecture, and modern AI-driven development workflows. I enjoy turning complex ideas into real products that people can actually use. Beyond coding, I care deeply about engineering quality, developer experience, clean systems, and continuous learning. I'm also passionate about community and education. I've spoken at conferences like PyTexas 2026 and organize developer events and workshops as a Cursor Ambassador in Ecuador.",
        talkTitle:
          "Elevate your code quality in Python with modern, ultra-fast tooling",
        talkDescription:
          "AI coding assistants have changed how we build software. We can now generate features, refactors, and entire services in minutes — but speed without strong engineering practices quickly becomes technical debt. In this talk, I'll show how modern Python teams can build fast and reliable development workflows using tools like Astral's Ruff, Ty, and uv. We'll explore how traditional slow and noisy quality pipelines are being replaced by a new generation of tooling that provides near-instant feedback while improving code quality and developer experience. Topics include why AI-generated code makes automated quality gates more important than ever, using Ruff for formatting and linting, using Ty for modern static typing, structuring formatter → linter → type-checker workflows, pre-commit hooks and CI pipelines developers actually enjoy using, and reducing friction between local development and CI/CD.",
      },
      "mateo-rios-querubin": {
        title: "Senior ML Engineer @ Provectus / Universidad EAFIT",
        description:
          "Mathematical Engineer with an MSc in Applied Mathematics (Universidad EAFIT) and 7+ years of experience as a Data Scientist and Machine Learning Engineer. Currently at Provectus, building LLM evaluation and optimization pipelines for document processing automation. Also 3+ years lecturing Advanced Analytics and foundational Mathematics at Universidad EAFIT. Specialized in designing and deploying AI solutions including LLM evaluation systems, computer vision models, recommendation systems, and end-to-end ML pipelines. AWS Certified Generative AI Developer and AWS Certified Machine Learning Specialty.",
        ...mateoSebastianTalkEn,
      },
      "carlos-andres-osorio-alcalde": {
        title: "Sr Machine Learning Engineer @ Factored",
        description:
          "Mathematician (Summa Cum Laude) and MSc in mathematics. Machine Learning Engineer and Data Scientist with 6+ years of experience delivering Data Science and AI solutions across industries like retail, finance, education, and social enterprises. Skilled in developing and deploying advanced models for tasks such as recommendation systems, customer clustering, churn prediction, transactional risk, LLM-powered chatbots, Gen-AI applications and search engines using tools like Python, PyTorch, PySpark, FastAPI, PydanticAI, Qdrant, LangChain and cloud platforms (AWS, GCP and Azure). Passionate about leveraging math and AI to drive meaningful change.",
        talkTitle: "The GenAI Revolution Reaches RecSys",
        talkDescription:
          "When we talk about the generative AI revolution, the conversation usually stays close to chatbots, image generation, and code assistants. But the same architectures that powered that wave (transformers, autoregressive modeling, scaling laws) are quietly reshaping fields most people don't associate with GenAI at all. Recommender systems are one of the most interesting examples. Meta, Netflix, Google, Spotify and others are replacing decades-old recsys pipelines with transformer-based foundation models, and the results are hard to ignore. This talk is a practical tour of that shift from a Python engineer's seat.",
      },
      "sankalp-gilda": {
        title: "Staff MLE @ DeepThought Solutions",
        description:
          "Sankalp Gilda, PhD (Astrophysics, University of Florida, 2021). Staff Machine Learning Engineer at DeepThought Solutions, where he leads work on production AI evaluation tooling, host-side instrumentation for agentic execution sandboxes, and LLM-based knowledge-graph extraction. Author of tsbootstrap, an open-source Python library for time-series bootstrapping. Previously built ML systems at Marathon Petroleum, Fermata Energy, and the Canada-France-Hawaii Telescope.",
        talkTitle: "Your AI Eval Is Lying To You",
        talkDescription:
          'When you set temperature=0 and run your AI eval, you expect the same input to give the same output. It doesn\'t. Recent measurements on Qwen3-235B at temperature=0 produced 80 unique completions on a single prompt. So when your eval reports "92% pass rate," what does that actually mean? This talk is about the gap between how the AI eval ecosystem talks about scores and what those scores can actually support. We walk through five specific tools that fix the gap: Pass@k versus pass^k, Wilson confidence intervals, Bayesian pass@k with Beta-Binomial conjugacy, sequential drift detection with EWMA, CUSUM, and OLS, and family-wise error control via Benjamini-Hochberg procedures. Each method gets a short demo in pure Python with no framework dependency. The audience leaves with reference implementations they can paste into an existing pytest setup tonight.',
      },
      "marcela-hoyos-cano": {
        title: "Team Lead Data Analytics @ Snappr",
        description:
          "I'm a data scientist and engineer based in Medellín. I started my career in Mechatronic Engineering and somewhere along the way fell in love with data, which led me to a Master's in Data Science & Analytics. Since then I've worked remotely across LATAM and the US at companies like Holafly, Lemontech, and the ICIPC. These days I lead Data Analytics at Snappr, a global photography marketplace. I've built data pipelines and custom connectors, designed our dbt architecture, set up dashboards, managed Snowflake permissions and roles, built tools to give non-technical teammates direct access to data, and worked closely with ops, finance, and engineering to turn messy business processes into something measurable.",
        talkTitle:
          "How We Stopped Answering Data Questions and Built the Stack That Answers Them",
        talkDescription:
          "If you've worked at a growing startup, you probably know the feeling: multiple teams pulling different numbers for the same metric, ops constantly asking engineering for basic answers, and creating or organizing metrics that's a real pain. Every new question feels like starting from scratch. This talk is the story of how a small team fixed that. First, by building a proper dbt architecture from scratch with Sources, Staging, Intermediate, and Marts so that things like bookings, revenue, and providers were defined in one place and everyone was looking at the same number. Once the data was reliable, we connected an LLM so non-technical teammates could ask questions in plain English and get real answers directly from Snowflake. No SQL, no ticket, no waiting on engineering. You'll walk away with a clear mental model for building a dbt layer people actually trust, a practical architecture for connecting an LLM to your warehouse, and the one thing that made it all click: your dbt docs are your LLM prompt.",
      },
      "sebastian-gomez-ahumada": {
        title: "Middle ML Engineer @ Provectus",
        description:
          "Biomedical engineer from Universidad de los Andes, with a minor in neuroscience and an MSc in biomedical engineering focused on machine learning. Currently working as a machine learning engineer building production AI systems, extraction pipelines, and conversational agents. Python was my first programming language and the one where I learned how to think in code, not just write it. For the past two and a half years I was a teaching assistant for ML fundamentals at Los Andes, a role that reinforced a conviction I'll happily defend on stage: complexity is rarely the answer and almost always the excuse.",
        ...mateoSebastianTalkEn,
      },
      "juliana-suarez-avila": {
        title: "Data Scientist @ Cuesta Partners",
        description:
          "Industrial Engineer turned Data Scientist out of love for numbers and technology. Juliana went from modeling probabilities at Javeriana to fraud detection models at MercadoLibre and MercadoPago, and today builds AI solutions at Cuesta Partners, a Tech and AI consultancy. Attento is her latest experiment: proving that Python can connect a human voice with ten corporate APIs without losing your mind along the way. Off the keyboard, she just graduated as a Chef, where she applies the same technical rigor as in her professional life.",
        ...julianaJuanTalkEn,
      },
      "juan-manuel-marin-bedoya": {
        title: "Senior Data Engineer @ Huge",
        description:
          "He grew up learning English from software installation menus and YouTube tutorials before they existed in Spanish. That early curiosity about technology took him from Industrial Engineering and financial analysis at Javeriana to building data pipelines for companies in three countries. Juan Manuel is a Senior Data Engineer with experience in GCP, Python, and automation, and has worked from B2B trade platforms with Asia to BI projects at Cisco. At Attento he handled what he likes most: keeping data flowing cleanly, making infrastructure invisible, and making the system remember what you did yesterday.",
        ...julianaJuanTalkEn,
      },
    },
    es: {
      ...workshopSpeakerContentByLocale.es,
      "cristhian-david-recalde-arevalo": {
        title: "Mobile Developer @ HomeTeam Network",
        description:
          "Soy un desarrollador Full Stack apasionado por crear soluciones digitales elegantes y funcionales. Mi enfoque está en escribir código limpio, mantenible y escalable que no solo funcione, sino que también proporcione una excelente experiencia de usuario. Trabajo principalmente con tecnologías modernas que me permitieron construir aplicaciones robustas y de alto rendimiento para StartUps de Estados Unidos y Ecuador. Además del desarrollo, disfruto aprendiendo continuamente, compartiendo conocimiento en comunidades tecnológicas y contribuyendo a proyectos open source cuando es posible.",
        talkTitle: "Empleabilidad en la era de la IA",
        talkDescription:
          "La inteligencia artificial está cambiando el mercado laboral más rápido que nunca. Muchos desarrolladores se preguntan: ¿la IA me reemplazará o me potenciará? En esta charla compartiré mi experiencia real pasando de ser desarrollador en Latinoamérica a trabajar para empresas de Estados Unidos, enfrentando entrevistas, optimizando mi perfil profesional y adaptándome a un entorno donde la IA ya es parte del día a día. Exploraremos cómo la IA no reemplaza al desarrollador, sino que redefine el valor que aportamos: desde escribir código hasta resolver problemas reales, comunicar ideas y construir soluciones completas. La charla incluirá el futuro de la programación, cómo cambiar tu mentalidad frente a la IA, qué habilidades realmente importan hoy, cómo destacar en procesos de selección internacionales, el rol de herramientas de IA en tu crecimiento profesional y errores comunes que frenan tu empleabilidad.",
      },
      "jeronimo-hoyos-botero": {
        title: "Estudiante @ Universidad Nacional de Colombia Sede Medellín",
        description:
          "Soy estudiante en la Universidad Nacional, con un gran interés en el machine learning. Me gusta crear animaciones en Manim porque son súper chéveres y me permiten enseñar cómo funcionan estos sistemas por dentro. Mi intención es tomar conceptos que suelen parecer raros o abstractos y mostrarlos de forma visual y animada para que resulten mucho más claros y accesibles.",
        talkTitle: "Construyendo un Transformer con Rust",
        talkDescription:
          "Los Transformers suelen percibirse como gigantes incomprensibles. Esta charla propone demostrar lo contrario: no son cajas negras, sino mecanismos elegantes que pueden entenderse y dominarse desde sus fundamentos. Presentamos Molinete AI, un modelo tipo GPT-2 construido estrictamente desde cero en Rust. Sin frameworks de deep learning: solo tensores, matemáticas y control total. Inspirado en Feste de Tag1 Consulting (entrenado con Shakespeare), este proyecto plantea un reto distinto: entrenar la red con la obra de Miguel de Cervantes para generar texto con el estilo del Siglo de Oro. A lo largo de la sesión, desmontaremos el modelo pieza por pieza. Con el apoyo de una presentación animada en Manim (más de 4.000 líneas de código), haremos visible cómo fluye la información dentro de la red. Partiremos desde la tokenización (BPE) y la construcción de operaciones básicas, para luego adentrarnos en el núcleo del modelo: embeddings, máscara causal y Multi-Head Self-Attention. Finalmente, exploraremos el proceso de aprendizaje, observando cómo los gradientes recorren la red durante el entrenamiento. Más que una demostración, esta charla busca proporcionar una visión clara y operativa de los Transformers, conectando la teoría con una implementación real desde cero.",
      },
      "brayan-echenique-ardila": {
        title: "AI Software Engineer @ Proteccion S.A",
        description:
          "Soy Brayan Echenique, AI Software Engineer en Protección, donde diseño e implemento soluciones de inteligencia artificial integrando tecnologías emergentes con arquitecturas robustas. Soy defensor del pragmatismo técnico y creo firmemente que la mejor solución no siempre es la más compleja, sino la que resuelve el problema correcto con las herramientas correctas.",
        talkTitle:
          "No todo clavo necesita un martillo de IA: Arquitecturas que piensan antes de generar",
        talkDescription:
          "Vivimos en la era donde todo “necesita IA generativa”… o eso nos venden. En esta charla desmonto el hype para hablar de lo que realmente importa: diseñar arquitecturas limpias, intencionadas y sostenibles. Vamos a explorar cómo combinar lo mejor del mundo tradicional con las herramientas emergentes sin caer en el over-engineering. Porque a veces, un regex bien puesto le gana a un LLM de millones de parámetros. Si estás cansado de ver Ferraris estacionados en el supermercado, esta charla es para ti.",
      },
      "daniel-arango-sohm": {
        title: "Python Junior Software Engineer @ Epam",
        description:
          "He ganado 3 veces el premio al mejor proyecto en Ingeniería de Sistemas en EAFIT. He dado charlas en Medellín JS, Python Medellín dos veces, Medellín AI, PyCon Colombia, Python Moscow y BarNLP. Soy mitad colombiano, también tengo herencia alemana y rusa, y hablo ruso y alemán.",
        talkTitle:
          "Aprovecha tus habilidades en Python usando el intérprete de Python",
        talkDescription:
          "En esta charla desafiaré la mentalidad de la audiencia sobre Python. Python no es un intérprete, y de hecho existen múltiples intérpretes de Python, cada uno con su propia arquitectura y propósito. Recorreré los internals centrales de Python y mostraré cómo los lenguajes de programación interactúan bajo la superficie. Exploraremos cómo escribir mejor Python entendiendo el recolector de basura, qué puedes construir usando el AST, cómo leer y aprovechar el desensamblador, y las implicaciones prácticas de la transición de Python de su antiguo parser LL(1) al parser PEG actual. También profundizaremos en características menos conocidas de los intérpretes de Python, qué es realmente un PEP y cómo moldea el lenguaje, y concluiremos con un análisis profundo de Python sin el GIL: qué cambia, qué se rompe y cómo el equipo core lo eliminó. A lo largo de la charla compartiré historias personales, incluyendo batallas causadas por ASTs idénticos y el momento en que creí haber descubierto una forma de acelerar el intérprete de Python.",
      },
      "christian-urcuqui": {
        title: "Senior Data Scientist @ TryHackMe",
        description:
          "Soy Christian Urcuqui, Cybersecurity Data Scientist con más de 11 años de experiencia en inteligencia artificial, ciberseguridad y sistemas de machine learning en producción. He trabajado en el diseño y evaluación de sistemas de IA para detección de amenazas, análisis de comportamiento y arquitecturas basadas en agentes. Actualmente colaboro con organizaciones internacionales en el desarrollo de contenido y soluciones en AI Security, incluyendo pentesting de agentes y modelado de amenazas. He sido speaker en eventos como DEF CON, Ekoparty, BSides y PyCon, y soy autor de libros sobre inteligencia artificial aplicada a ciberseguridad. Mi enfoque combina investigación, práctica ofensiva (adversarial ML) y diseño de sistemas seguros.",
        talkTitle: "Hacking AI Agents with Python",
        talkDescription:
          "La inteligencia artificial está evolucionando de modelos estáticos a sistemas autónomos capaces de razonar, tomar decisiones y ejecutar acciones mediante herramientas y APIs. Estos sistemas, conocidos como agentes de IA, están siendo construidos principalmente en Python. Pero con esta evolución también aparece una nueva superficie de ataque. En esta charla exploraremos cómo los agentes de IA pueden ser explotados desde una perspectiva ofensiva, utilizando Python para demostrar ataques reales como: prompt injection en pipelines de agentes, exfiltración de información a través de RAG, manipulación de decisiones mediante inputs adversarios y abuso de herramientas y APIs conectadas. A partir de estos escenarios, mostraremos cómo diseñar pruebas de seguridad (pentesting) específicas para sistemas de IA, incluyendo enfoques de caja negra, gris y blanca. La charla no solo se enfocará en ataques, sino también en cómo mitigarlos, presentando un roadmap práctico para evaluar y fortalecer sistemas de IA en producción. Esta sesión está dirigida a desarrolladores Python, data scientists y engineers que están construyendo o integrando sistemas de IA y quieren entender cómo asegurar lo que están creando.",
      },
      "david-cardozo": {
        title: "Senior AI Engineer @ Dataiku",
        description:
          "Científico de Aprendizaje Automático y Arquitecto de Infraestructura Cloud. Con una trayectoria que abarca desde la seguridad de la información hasta DevOps, soy Google Developer Expert en ML y Docker Captain. Apasionado por multiplicar matrices a gran velocidad, actualmente me desempeño como Ingeniero de IA en Dataiku.",
        talkTitle:
          "Opening the Black Box: Mechanistic Interpretability of LLMs",
        talkDescription:
          'A medida que los agentes se implementan en contextos de alto riesgo (finanzas, manufactura, salud), comprender cómo toman decisiones, y no solo qué deciden, se vuelve fundamental para la seguridad y la confianza. Por ejemplo, cuando un agente recibe la instrucción "Buscar los resultados del tercer trimestre de nuestra empresa" y elige buscar en documentos internos en lugar de en la web pública, ¿qué proceso interno impulsa esa elección? La ingeniería de la respuesta, las pruebas de comportamiento y el análisis de la cadena de pensamiento describen correlaciones o narrativas; ninguna revela el mecanismo real. Comprender cómo un agente llega a una conclusión es un componente crítico para desarrollar IA de manera responsable, especialmente en lo que respecta a la confiabilidad y la transparencia en los sistemas de IA. Las interpretaciones de modelos son una forma en que los desarrolladores pueden generar confianza y coherencia en sus sistemas y respaldar la implementación segura de agentes de IA.',
      },
      "juan-diego-david-melo-alarcon": {
        title: "Application Architect @ IBM",
        description:
          "Soy un arquitecto de soluciones enfocado en la eficiencia sistémica y en la construcción de software diseñado para los retos del mundo real. Mi enfoque profesional se sitúa en la intersección de la IA generativa y las arquitecturas cloud native, donde el verdadero desafío no es solo lograr que un modelo responda, sino que lo haga de forma resiliente, escalable y financieramente lógica. A lo largo de mi trayectoria, he liderado la modernización de aplicaciones en entornos de nube híbrida, enfrentando la complejidad de integrar servicios de vanguardia con infraestructuras críticas.",
        talkTitle:
          "Estrategias de Optimización de Costos en GenAI con Python y AWS",
        talkDescription:
          "¿Es posible escalar la Inteligencia Artificial Generativa sin que el éxito del proyecto comprometa la estabilidad financiera de la organización? En esta sesión se abordará cómo transformar el despliegue de modelos de lenguaje de gran tamaño (LLMs) mediante un diseño de arquitectura orientado a la eficiencia operativa. En lugar de aceptar el consumo elevado de tokens como un costo inevitable, se explorará un modelo de costos sostenible que permite construir aplicaciones inteligentes y escalables sin sacrificar la rentabilidad. A través de una ruta técnica centrada en Python y los servicios de AWS, se analizarán estrategias clave como el arbitraje de modelos, donde la lógica de la aplicación decide dinámicamente qué motor de inteligencia utilizar según la complejidad de la tarea. Se profundizará en cómo el uso inteligente de bases de datos vectoriales de bajo impacto y el almacenamiento en caché semántico permiten reutilizar conocimientos previos, logrando ahorros significativos en infraestructura. Los asistentes descubrirán cómo la implementación de flujos asíncronos y el procesamiento por lotes permiten optimizar los recursos disponibles. Esta charla es una guía práctica para arquitectos y desarrolladores que buscan liderar la transición de prototipos costosos a sistemas en producción que sean técnica y económicamente viables.",
      },
      "jonatan-esteban-gonzalez-balaguera": {
        title: "Profesional @ Procuraduría General de la Nación",
        description:
          "Soy físico con maestría en física teórica y una segunda maestría en Visual Analytics and Big Data, actualmente cursando una especialización en estadística en la Universidad Nacional de Colombia. Trabajo como analista en la Procuraduría General de la Nación, donde aplico aprendizaje automático, NLP y análisis geoespacial a problemas de vigilancia preventiva y monitoreo. Mi trayectoria va desde la simulación de sistemas superconductores hasta el desarrollo de herramientas de detección de deforestación y análisis electoral, siempre con Python como hilo conductor.",
        talkTitle:
          "NLP sin etiquetas: cómo clusterizar N procesos jurídicos del Estado colombiano y convertir el caos en un clasificador en producción",
        talkDescription:
          "¿Qué haces cuando tienes 600.000 quejas jurídicas, cero datos etiquetados y una entidad del Estado esperando resultados? Esta charla recorre el proceso completo de construcción de un sistema de clasificación NLP no supervisado para la Procuraduría General de la Nación. Partiendo de texto administrativo en bruto — ruidoso, lleno de abreviaciones y jerga institucional — mostraré cómo TF-IDF, SVD truncado y KMeans se combinaron para organizar más de medio millón de registros en 64 grupos semánticamente coherentes, sin una sola etiqueta manual. Pero la clusterización es solo el punto de partida. Cubriré cómo se validaron los clusters, cómo se entrenó un clasificador de Regresión Logística sobre ellos para hacer el sistema desplegable, y cómo el pipeline final fue empaquetado en un .pkl que hoy usan colegas no técnicos en producción. En el camino, enfrentaremos los problemas reales: curvas de codo que no se comportan, desbalances de tamaño entre clusters de 1:20, y la tensión entre elegancia matemática y usabilidad institucional. Porque en el sector público, un modelo que nadie usa no es un modelo — es un PDF acumulando polvo.",
      },
      "elbano-mibelli": {
        title: "Senior DevOps Solutions Architect @ Provectus",
        description:
          "Elbano es Senior DevOps Solutions Architect en Provectus, un AWS Premier Consulting Partner y partner oficial de Anthropic, con más de 9 años de experiencia en diseño de sistemas cloud-native, IA, DevOps y distribuidos. Posee dos certificaciones AWS, tres especializaciones AWS Black Belt y credencial ITIL Foundation. Hoy trabaja en la intersección de infraestructura cloud, IA agéntica y entrega empresarial, diseñando soluciones que van desde plataformas AWS multi-cuenta para orquestación de agentes de IA hasta centros de contacto inteligentes con Amazon Connect y Bedrock.",
        talkTitle:
          "From Vibe Coding to Spec-Driven Development with AWOS in Claude Code",
        talkDescription:
          "El vibe coding funciona genial hasta que deja de funcionar. Cuando los agentes de IA empiezan a ignorar tu arquitectura, hacer suposiciones incorrectas sobre tu stack y producir código que compila pero no cumple el objetivo, el problema no es el modelo. Son las instrucciones. Esta charla presenta AWOS (Agentic Workflow Operating System), un framework open source construido por Provectus para Claude Code que trae Spec-Driven Development al coding asistido por IA. AWOS estructura el proceso de desarrollo en 8 fases, cada una con su propio agente especializado y audiencia. Lo que verás: una demo en vivo construyendo una app de gestión de charlas de conferencia. Lo que te llevas: una herramienta que puedes instalar con npx @provectusinc/awos y empezar a usar de inmediato.",
      },
      "cristhian-jesid-garcia-solarte": {
        title: "Senior Data Engineer @ Provectus",
        description:
          "Machine Learning Engineer y Data Engineer con formación en Astronomía y Astrofísica y más de 5 años de experiencia diseñando, construyendo y desplegando pipelines de datos escalables, sistemas de ML y soluciones Big Data en AWS y Databricks. Me especializo en construir pipelines de machine learning end-to-end, sistemas RAG y workflows de IA agéntica, así como optimizar procesos de big data usando Apache Spark, modelado de datos SQL/NoSQL y arquitecturas cloud-native.",
        talkTitle:
          "Structured Learning: Plataforma impulsada por IA que transforma papers académicos en experiencias de aprendizaje interactivas",
        talkDescription:
          "Structured Learning es una plataforma que convierte un paper de investigación en un módulo completo de aprendizaje — explicaciones capítulo por capítulo, código ejecutable incremental, chat con RAG, flashcards con repetición espaciada FSRS, derivaciones de ecuaciones, y un grafo de conocimiento en Neo4j. Esta charla cubre el producto, la ingeniería de un pipeline de workflows agénticos que lleva un issue de GitHub hasta un PR fusionado con worktrees aislados, auto-patching tras review fallido y GitHub como API de los agentes, y cómo corre en AWS con LocalStack para paridad dev-prod. Los agentes no reemplazan ingenieros, reemplazan el pegamento entre ingenieros y el aburrido 80% del SDLC — y ahí es donde viven los retornos compuestos.",
      },
      "nieng-yordan-lee-gaitan": {
        title:
          "Estudiante de maestría en Ingeniería Química @ Universidad Nacional de Colombia - Grupo TAYEA",
        description:
          "Ingeniero químico de la Universidad Nacional de Colombia y actualmente cursando maestría en ingeniería química con enfoque en investigación. Trabajo principalmente con Python para modelamiento matemático, simulaciones, análisis de datos y desarrollo de herramientas útiles en contexto industrial o académico. Actualmente estoy enfocado en investigación sobre producción de hidrógeno en syngas, combinando modelamiento multiescala, simulación molecular y machine learning. También trabajo en Exergia Code, donde desarrollo software y contenido técnico cruzando ingeniería química con programación.",
        talkTitle:
          "Python y Machine Learning para Optimización Termoquímica Sostenible",
        talkDescription:
          "La ingeniería química sigue dependiendo en gran parte de ensayos experimentales costosos y lentos para evaluar condiciones de operación en procesos termoquímicos. Esta charla propone un enfoque práctico basado en Python y machine learning para acelerar ese proceso: construir modelos predictivos a partir de datos fisicoquímicos que permitan estimar resultados clave sin necesidad de probar cada escenario en laboratorio. Se mostrará un flujo completo orientado a aplicaciones reales, desde datos hasta decisiones, con el objetivo de reducir tiempos de análisis, disminuir costos experimentales y apoyar la optimización de procesos con impacto ambiental.",
      },
      "pablo-restrepo-henao": {
        title: "Machine Learning Lead @ Loka",
        description:
          "Pablo Restrepo es ingeniero de software y ML colombiano con más de 11 años de experiencia construyendo sistemas de IA y software en Colombia, Alemania, el Reino Unido y Estados Unidos. Actualmente es Machine Learning Lead en Loka, donde diseña y despliega soluciones GenAI end-to-end para clientes globales. Tiene una Maestría en Informática de la Technical University of Munich y un BSc en Ciencias de la Computación de Universidad EAFIT. También es investigador publicado en NLP y ha hablado en conferencias en Alemania, Suecia, Noruega y Estados Unidos.",
        talkTitle:
          "Clean Code en la era de los LLMs: ¿Siguen importando las buenas prácticas?",
        talkDescription:
          "En cambio, investigaciones de METR, CodeRabbit y GitClear convergen en una verdad incómoda: la duplicación de código se ha cuadruplicado, el código copiado y pegado ahora supera al código movido, los bugs han subido un 70% y los problemas de seguridad casi se han triplicado. La IA no rompió nuestras bases de código. Amplificó lo que ya estaba roto. Entonces, ¿qué hacemos al respecto? Esta charla defiende que clean code, SOLID, DDD, TDD y los design patterns importan más que nunca cuando los LLMs escriben la mitad del código. Tu codebase ahora es un prompt: código limpio lleva a mejores sugerencias de IA, que facilitan mantenerse limpio. Recorreremos qué prácticas importan más ahora, cuáles se han vuelto en tu contra, y cómo colaborar con un LLM sin convertirte en un sello de goma de su output. Te llevarás un framework concreto, Adversarial Collaboration: generar, criticar, refactorizar, verificar. No vibe coding. Ingeniería real, solo más rápida.",
      },
      "nicolas-danies": {
        title: "Data Science Manager @ Visa",
        description:
          "Soy Data Science Manager en Visa, donde lidero proyectos de inteligencia artificial para la región andina enfocados en convertir modelos de machine learning y GenAI en productos reales con impacto en negocio. Mi trabajo se centra en cerrar la brecha entre investigación y producción: desde diseñar modelos hasta desplegarlos como sistemas escalables usados por bancos y empresas en múltiples países. Mi carrera ha sido un recorrido acelerado dentro del ecosistema tecnológico en Latinoamérica, pasando por compañías como Mercado Libre y Rappi, donde trabajé en problemas de alto impacto como fraude, pricing en tiempo real y sistemas distribuidos a gran escala. Paralelamente, soy cofundador y COO de una startup de inteligencia artificial enfocada en entrenamiento comercial mediante sistemas speech-to-speech, donde estoy construyendo arquitecturas modernas integrando modelos de voz, LLMs y sistemas en tiempo real. Más allá de lo profesional, siempre he estado motivado por construir comunidad y acelerar el desarrollo tecnológico en Colombia. He sido profesor asistente en la Universidad de los Andes, he enseñado a cientos de personas sobre machine learning y sistemas con Python, y participé en la creación de un nuevo programa de Data Science en el país.",
        talkTitle:
          "Real-Time Voice Systems: diseño y arquitectura en 5 niveles",
        talkDescription:
          "Los sistemas de voz han avanzado rápidamente en los últimos años, pero la mayoría de implementaciones aún se quedan en demos: combinaciones simples de Speech-to-Text, modelos de lenguaje y Text-to-Speech que funcionan en entornos controlados, pero fallan al enfrentarse a condiciones reales. Esta charla propone un enfoque distinto: entender los sistemas de voz como una arquitectura que evoluciona en niveles de madurez, desde prototipos básicos hasta sistemas en tiempo real listos para producción. A través de un framework de 5 niveles, recorreremos el camino completo de un sistema de Conversational AI: desde la integración de componentes básicos, pasando por los retos de orquestación (streaming, latencia, turn-taking), hasta los problemas menos evidentes pero críticos como calidad de audio, robustez y experiencia de usuario, llegando a arquitecturas en tiempo real con tecnologías como LiveKit, y finalmente, explorando hacia dónde va el futuro con sistemas end-to-end y agentes multimodales. La charla está basada en experiencia real construyendo sistemas de voz en producción, y se enfoca en decisiones de ingeniería más que en herramientas específicas. Los asistentes se llevarán un entendimiento claro de cómo diseñar sistemas de voz modernos con Python, qué problemas deben anticipar y cómo estructurar sus propias arquitecturas para construir experiencias conversacionales de clase mundial.",
      },
      "david-alejandro-rivera-correa": {
        title:
          "Profesional I - Analítica de Datos y conocimiento del cliente @ EDEQ",
        description:
          "Soy economista y Mg. en Ciencia de Datos, una buena parte de mi historia transcurre en el sector eléctrico en donde he podido crecer en habilidades de automatización, gestión de datos y liderazgo de iniciativas. Sin embargo, más allá de la dinámica laboral siempre me acompaña la pasión por la investigación y los temas sociales, uno de ellos la seguridad alimentaria y nutricional el cual fue un tema que me acompañó toda mi vida universitaria y que también marcó mi vida posgradual. A veces los temas alimentarios son subestimados, pero la verdad es que configuran trampas de pobreza, presión fiscal, y limitaciones que pueden marcar por toda la vida a las personas. Pienso que estamos en un tiempo privilegiado en donde problemas antes invisibles ahora pueden ganar observabilidad a través de la creatividad por medio del uso de datos públicos y haciendo uso de Python.",
        talkTitle:
          "Feeding the Invisible: Seguridad alimentaria en ciudades intermedias con Python",
        talkDescription:
          "En muchos países, la inseguridad alimentaria no solo es un problema social, sino también un problema de datos. En Colombia, sistemas clave de monitoreo han perdido continuidad, dejando vacíos críticos de información para la toma de decisiones públicas. Esta charla presenta el desarrollo de un prototipo en Python para la construcción de un sistema de monitoreo y predicción del riesgo de inseguridad alimentaria en ciudades intermedias, utilizando únicamente datos abiertos. A partir de un pipeline reproducible, se integran múltiples componentes de ciencia de datos: ingesta y procesamiento de datos de precios de alimentos (SIPSA), modelos de series de tiempo para pronóstico de precios (incluyendo enfoques clásicos y machine learning como XGBoost), segmentación de hogares mediante clustering a partir de encuestas socioeconómicas, construcción de un índice compuesto que relaciona ingresos, precios y vulnerabilidad, y desarrollo de un prototipo de sistema de soporte a la decisión (DSS). Los asistentes se llevarán un enfoque replicable para construir indicadores complejos, estrategias para trabajar con datos abiertos imperfectos, ideas para integrar modelos, datos socioeconómicos y visualización en un solo sistema, y un ejemplo real de aplicación de Python en política pública y desarrollo territorial.",
      },
      "santos-gallegos": {
        title: "Ingeniero de Software @ Read the Docs",
        description:
          "Santos es un ingeniero de software y de seguridad de aplicaciones de Ecuador, actualmente trabaja en Read the Docs. Apasionado por el desarrollo web, Python, ciberseguridad y open source. Santos ha reportado vulnerabilidades en varios proyectos como Neovim, GitPython, django-allauth, Sentry, y más. Cuando no está frente a una pantalla, puedes encontrarlo leyendo, pintando, disfrutando de conciertos de metal o practicando escalada.",
        talkTitle:
          "Lecciones aprendidas reportando vulnerabilidades en el ecosistema de Python",
        talkDescription:
          "Seguramente has recibido esa notificación indicando que debes actualizar una dependencia debido a un fallo de seguridad. Pero, ¿te has preguntado qué sucede desde que alguien descubre esa vulnerabilidad hasta que el parche llega a tu proyecto? En esta charla, compartiré mi experiencia reportando vulnerabilidades en el ecosistema de Python. Exploraremos el detrás de escena: desde el hallazgo técnico, el proceso de reporte, hasta la colaboración con los mantenedores y la publicación del parche. No solo abordaremos los aspectos técnicos, sino también el factor humano, ambos cruciales para una resolución efectiva de las vulnerabilidades. Los retos que enfrentan los mantenedores y la comunidad, sobre todo en esta nueva era de seguridad para el software open source donde la inteligencia artificial juega un papel cada vez más relevante.",
      },
      "ana-maria-lopez-moreno": {
        title: "Partner Solution Architect Data and AI @ Microsoft",
        description:
          "Soy Ana María López Moreno, apasionada por los datos, la inteligencia artificial, la educación y las comunidades tecnológicas. Actualmente trabajo como Senior Partner Solution Architect en Data & AI en Microsoft, donde acompaño a partners y organizaciones en la adopción de soluciones de datos, analítica e inteligencia artificial. También soy docente universitaria y coordinadora del programa de Ingeniería de Software y Datos en la Institución Universitaria Digital de Antioquia, un rol que me permite conectar la industria con la academia y acompañar a nuevas generaciones de profesionales en tecnología. Mi experiencia se ha enfocado en plataformas de datos, inteligencia artificial generativa, MLOps, arquitectura cloud y construcción de soluciones aplicadas con impacto real. He sido speaker en PyCon Colombia 2023 y 2024, y en 2025 tuve la oportunidad de participar como speaker en KubeCon, compartiendo experiencias alrededor de tecnología, datos, inteligencia artificial y comunidades técnicas.",
        talkTitle: "STUART: Un agente hacker autónomo hecho en Python",
        talkDescription:
          "¿Qué pasaría si le das una dirección IP a un agente de Python y le pides que encuentre las vulnerabilidades del servidor por su cuenta? Eso es exactamente lo que hice. En esta charla presento STUART, un agente autónomo de pentesting que construí con AG2 (AutoGen) y GPT-4. El agente es capaz de analizar sistemas objetivo sin intervención humana, siguiendo las primeras etapas del Cyber Kill Chain: reconocimiento e identificación de vulnerabilidades. La arquitectura es 100% Python: un AssistantAgent respaldado por GPT-4 que razona y planifica, y un UserProxyAgent con un Code Executor que interactúa directamente con el sistema objetivo. Todo orquestado por AG2, el framework open-source para construir sistemas multi-agente. La charla incluye una demostración en vivo donde STUART analizará un sistema vulnerable desplegado en Docker. Verán paso a paso cómo el agente escanea puertos, identifica servicios, detecta vulnerabilidades y reporta sus hallazgos — todo de forma autónoma, decidiendo por sí mismo qué hacer en cada paso. Te vas a llevar conocimiento práctico sobre cómo construir agentes que actúan en el mundo real con AG2, y una perspectiva concreta sobre lo que la IA ofensiva puede hacer hoy. Si un agente de Python puede encontrar tus vulnerabilidades, ¿cómo deberían prepararse los equipos de defensa? Todas las demostraciones se realizan en entornos controlados y éticos.",
      },
      "gonzalo-andres-pena-castellanos": {
        title: "Senior Software Engineer / Open Source AI @ Backblaze",
        description:
          "Soy ingeniero de software colombiano con más de 11 años de experiencia profesional y emprendedor trabajando en Python, TypeScript y desarrollo open source. Actualmente trabajo como AI Engineer en Backblaze. Anteriormente trabajé en Datalayer construyendo herramientas en la intersección de Jupyter, IA y computación colaborativa, en Quansight contribuyendo al ecosistema científico de Python, y en Anaconda como Technical Lead de Anaconda Navigator. Mi carrera abarca desde ingeniería de recursos hídricos (MSc de IHE Delft y Erasmus Mundus) hasta convertirme en contribuidor core de proyectos open source importantes incluyendo Spyder IDE, JupyterLab, napari, conda-forge entre otros. He creado más de 400 recetas de conda-forge y lideré esfuerzos de internacionalización para JupyterLab y automatización en el proyecto Scientific Python Translations. También cofundé Trepa, un gimnasio de escalada en Bogotá, Colombia, y cofundé PyCon Colombia. Estoy profundamente comprometido con las comunidades Python y open source de Latinoamérica, y formo parte del Python Software Foundation Grants Working Group.",
        talkTitle: "Provenance by Default: AI Media Pipelines in Python",
        talkDescription:
          "Un modelo ahora puede generar un video indistinguible de uno que grabó tu cámara. Lo mismo vale para una imagen, una voz o una canción. Como desarrolladores Python, estamos construyendo esos pipelines — y también seremos quienes muy pronto deban demostrar qué salió de ellos. Esta charla trata de construir pipelines de media generativa en Python de forma que esa pregunta se responda por defecto. Recorreremos Genblaze, un SDK open source (github.com/backblaze-labs/genblaze, licencia MIT) en el que trabajo en Backblaze, y lo usaremos como vehículo para hablar de los problemas de diseño que cualquier equipo enfrenta al integrar generación de IA en un producto real. Cubriremos, con código en vivo: el patrón Pipeline con una API fluida Pipeline → Step → Run → Manifest construida sobre Pydantic v2; una API para once proveedores; provenance que sobrevive al archivo con manifiestos verificados por SHA-256 embebidos en PNG, JPEG, MP4, MP3 y WAV; controles de privacidad y política; almacenamiento y replay; y loops de agentes con lineage. Al final, los asistentes tendrán una referencia clara de cómo arquitecturar features de IA generativa en Python para que ¿qué produjo realmente este sistema y puedo demostrarlo? sea una respuesta de una línea en lugar de un ticket.",
      },
      "andres-felipe-estrada-rodriguez": {
        title: "Sr Data Scientist @ Globant",
        description:
          "Economista, Machine learning engineer con +8 años de experiencia construyendo sistemas de ML/AI en producción. Actualmente en Globant, trabajo diseño de aplicaciones de IA y casos de uso escalables y seguros en procesos críticos como procesos industriales y seguridad.",
        talkTitle:
          "Sistemas de IA vulnerables: datos reales, diseño responsable",
        talkDescription:
          "El 29% de los ataques pasan los filtros de seguridad de los LLMs más usados en producción. No es un bug. Es la naturaleza del sistema. Los LLMs son procesos estocásticos entrenados sobre lenguaje humano, el medio más flexible, ambiguo y manipulable que existe. Esta charla presenta los resultados de llm-break-bench: 3.360 pruebas adversariales sobre GPT-4o, Claude, Gemini, Grok y DeepSeek usando MLCommons AI Safety v0.5 y OWASP LLM Top 10 como estándares. El modelo más inteligente del benchmark es 5 veces más vulnerable que el más barato. Los datos se conectan con casos de uso reales donde los LLMs están en producción: RAGs, chatbots, agentes, asistentes de código. El cierre es accionable: 5 pilares de diseño para sistemas de IA que no dependan del modelo para su propia seguridad, con código real de NVIDIA NeMo Guardrails y Meta LlamaFirewall.",
      },
      "sergio-hernan-valenzuela-camara": {
        title: "CTO TecnóPolis-Ai, docente universitario @ TecnóPolis-Ai",
        description:
          "Soy magister en Ingeniería de Software, de la Universidad Nacional de La Plata (UNLP), La Plata - Argentina, actualmente candidato a Doctor Ciencias de la Ingeniería en la Universidad Nacional del Sur (UNS), Bahía Blanca - Argentina. Soy docente universitario en asignaturas de Inteligencia Artificial en Universidades Bolivianas, además de emprendedor tecnológico. Actualmente estoy trabajando en la implementación de dos start-ups: Mentalia.online y DoctorTomatto.com. Quiero compartir experiencias y conocimientos a nivel latinoamérica.",
        talkTitle:
          "Camila Plejia, asistente virtual, aplicado a personas con tetraplejia",
        talkDescription:
          "La combinación de distintas herramientas y tecnologías del área de la inteligencia artificial — Computer Vision, OCR, PNL, RPA, Voice to text, text to voice — da lugar a la creación de un asistente virtual, Camila Plejia, que ayuda personas con tetraplejia, facilitando su cotidiano quehacer en tareas simples como leer noticias, conocer el estado del tiempo, revisar, leer y escribir un correo electrónico, revisar, enviar y leer mensajes de WhatsApp, buscar y ver un determinado video en YouTube, entre otras. Permite a la persona tetrapléjica tener una ventana de comunicación con el mundo exterior, pensando que pasa mucho tiempo aislada entre cuatro paredes y depende de la asistencia de un tercero para realizar actividades.",
      },
      "kevin-hernandez": {
        title: "Senior Software Engineer @ trellis.law",
        description:
          "Soy ingeniero de software al que le encanta aprender cosas nuevas y trabajar en proyectos emocionantes. Disfruto construir herramientas que empujan los límites de lo que Python puede hacer, desde sistemas backend hasta experiencias interactivas en el navegador.",
        talkTitle: "Python in the Browser: Powered by WebAssembly",
        talkDescription:
          "¿Y si el navegador pudiera ejecutar Python como un lenguaje de primera clase? En esta charla mostraré cómo PyScript hace posible ejecutar Python real directamente en el navegador, impulsado por WebAssembly. A través de una serie de ejemplos emocionantes en vivo, verás Python manipulando el DOM, llamando APIs del navegador y construyendo experiencias interactivas, todo sin una base de código JavaScript tradicional. También mostraré algunos ejemplos de cómo puedes embeber JavaScript y Python en PyScript para crear herramientas aún más emocionantes. También discutiré qué es WebAssembly, por qué existe y cómo permite que lenguajes como Python se ejecuten de forma segura y eficiente en la plataforma web. Finalmente, hablaré de cuándo herramientas como PyScript tienen sentido y las compararé con herramientas similares. Ya seas desarrollador Python curioso sobre el frontend, ingeniero interesado en WebAssembly, o simplemente alguien que disfruta ver los límites de Python empujados, esta charla cambiará cómo piensas sobre qué puede ejecutarse en un navegador.",
      },
      "orlin-david-cortez-alban": {
        title: "Developer @ Kernel Chaos",
        description:
          "Backend Developer con más de 6 años de experiencia diseñando y construyendo sistemas. Capacidad comprobada para liderar y gestionar equipos, optimizar flujos de desarrollo y resolver desafíos técnicos.",
        talkTitle: "From Typosquatting to Infrastructure Poisoning",
        talkDescription:
          "En 2026, la seguridad de la cadena de suministro de Python ha dejado de ser un problema de nombres mal escritos para convertirse en un campo de batalla de infraestructura. Esta charla analiza la transición técnica desde ataques simples de Typosquatting hacia el envenenamiento sofisticado de herramientas de CI/CD y entornos de ejecución. Exploraremos casos reales recientes como la campaña de TeamPCP y el compromiso de Aqua Security Trivy, analizando técnicas de persistencia mediante archivos .pth que permiten ejecución maliciosa sin necesidad de un import explícito. Finalmente, presentaremos la hoja de ruta para la defensa moderna: desde Sigstore y el PEP 740 hasta el cumplimiento de la Ley de Resiliencia Ciberactiva (CRA).",
      },
      "alfonso-palacio": {
        title: "Data Engineer @ Globant",
        description:
          "Alfonso Palacio es estudiante de Ingeniería de Sistemas en Politécnico Grancolombiano con un fuerte enfoque en inteligencia artificial aplicada. Ha trabajado en proyectos de machine learning, computer vision y analítica de datos, incluyendo BachAI, un sistema basado en YOLOv8 para detección automática de huecos en vías. Tiene experiencia con Python, procesamiento de datos y soluciones en la nube, y ha contribuido a iniciativas como Microsoft Learn Student Ambassadors y proyectos tecnológicos colaborativos. Alfonso es apasionado por construir soluciones de IA que resuelvan problemas del mundo real y por compartir conocimiento práctico para ayudar a otros a aprovechar estas tecnologías en su propio trabajo.",
        talkTitle: "Machine Learning aplicado a secuencias genéticas",
        talkDescription:
          "El ADN contiene cantidades masivas de información biológica, pero ¿cómo puede la inteligencia artificial ayudarnos a entenderla? En esta charla exploraremos cómo Python y Machine Learning pueden usarse para analizar secuencias genéticas de forma práctica y accesible para principiantes. Usando datasets biológicos públicos, demostraremos cómo las secuencias de ADN pueden transformarse en datos aptos para modelos de machine learning, cubriendo conceptos como extracción de features, representación de secuencias y técnicas básicas de clasificación. También revisaremos herramientas populares de Python usadas en bioinformática, incluyendo Biopython, pandas y scikit-learn, mientras discutimos desafíos reales al trabajar con datos biológicos, como alta dimensionalidad, ruido y limitaciones de interpretabilidad. Al final de la charla, los asistentes tendrán una comprensión clara de cómo empezar a construir proyectos de análisis genético usando herramientas accesibles del ecosistema Python, incluso sin experiencia previa en bioinformática.",
      },
      "ricardo-taborda": {
        title:
          "Decano de la Escuela de Ciencias Aplicadas e Ingeniería @ Universidad EAFIT",
        description:
          "Ricardo Taborda es Decano de la Escuela de Ciencias Aplicadas e Ingeniería de la Universidad EAFIT, donde lidera una escuela de 130 profesores de planta. Su trayectoria combina administración académica con investigación en sismología de ingeniería e ingeniería sísmica, incluyendo liderazgo en organizaciones de investigación y colaboraciones internacionales. Es doctor en Ingeniería Civil por Carnegie Mellon University, magíster en Mecánica Estructural por la University of Southern California, magíster en Ingeniería Estructural por la UNAM y graduado en Ingeniería Civil de la Universidad EAFIT. Tiene experiencia en computación científica con énfasis en sismología computacional.",
        talkTitle: "",
        talkDescription: "",
      },
      "robin-hafid-quintero-lopez": {
        title: "Software Engineer @ GenLogs",
        description:
          "Soy Software Engineer enfocado en herramientas para desarrolladores, mantenibilidad y sistemas de alto rendimiento, con un fuerte interés en los ecosistemas Python y Rust. Soy el creador de complexipy, un analizador de complejidad cognitiva open source para Python escrito en Rust, diseñado para dar feedback local rápido a desarrolladores y pipelines de CI. También he contribuido a proyectos open source incluyendo Rust y otras iniciativas de herramientas para desarrolladores. Mi trabajo se enfoca en construir herramientas que ayuden a los ingenieros a escribir software más mantenible y confiable.",
        talkTitle: "Entendiendo la Complejidad Cognitiva en Python",
        talkDescription:
          "El Python moderno hace increíblemente fácil escribir código rápido, pero mucho más difícil mantenerlo comprensible a medida que los proyectos crecen. Esta charla explora la complejidad cognitiva: una métrica enfocada no en qué hace el código, sino en qué tan difícil es para los humanos leerlo, razonar sobre él y mantenerlo. A través de ejemplos reales en Python, analizaremos cómo condicionales anidados, lógica de ramificación, flujos async, excepciones y reglas de negocio crecientes aumentan silenciosamente la carga mental requerida para trabajar con una codebase. También discutiremos por qué métricas tradicionales como la complejidad ciclomática a menudo fallan en reflejar la legibilidad real, y cómo la complejidad cognitiva ofrece una perspectiva más centrada en el humano sobre la mantenibilidad. La charla incluye técnicas prácticas de refactorización, anti-patrones comunes en proyectos Python en producción, y lecciones aprendidas construyendo complexipy, un analizador de complejidad cognitiva open source para Python escrito en Rust, diseñado para dar feedback local rápido e integración con CI.",
      },
      "gerardo-vilcamiza-espinoza": {
        title: "Senior AI Engineer @ NTT DATA",
        description:
          "¡Hola! Mi nombre es Gerardo y soy Ingeniero Mecatrónico con una Maestría en Inteligencia Artificial Embebida. Actualmente trabajo como Senior AI Engineer en la consultora tecnológica NTT DATA, liderando proyectos de IA generativa, en los que aplicamos modelos de generación de texto, audio e imágenes en soluciones para el sector bancario y asegurador en distintos países de Latinoamérica. También me desempeño como docente investigador en la Universidad de Buenos Aires, donde dicto cursos de Deep Learning y Visión por Computadora. Además, lidero proyectos de investigación en el Laboratorio de Sistemas Embebidos, enfocados en robótica y sistemas satelitales.",
        talkTitle:
          "Vision-Language-Action Models: de los chatbots a la interacción con el mundo físico",
        talkDescription:
          "Los chatbots impulsados por LLMs marcaron un antes y un después en la inteligencia artificial, permitiendo sistemas capaces de comprender y generar lenguaje natural con gran fluidez. Más recientemente, los modelos multimodales ampliaron estas capacidades al incorporar imágenes, audio y video, acercando la IA a una comprensión más completa de su entorno. En esta charla exploraremos los Vision-Language-Action Models (VLA), arquitecturas que combinan visión por computadora, lenguaje natural y toma de decisiones para permitir que agentes inteligentes interpreten su entorno y ejecuten acciones en el mundo físico. También veremos cómo el ecosistema Python se ha convertido en una pieza fundamental para desarrollar este tipo de soluciones mediante herramientas modernas como PyTorch, Hugging Face, simuladores robóticos y frameworks open source utilizados actualmente en robótica e inteligencia artificial multimodal.",
      },
      "miguel-vargas": {
        title: "Senior Product Engineer @ Learned Hand AI",
        description:
          "Soy ingeniero de software y builder con más de 11 años de experiencia creando productos para startups en healthcare, fintech, real estate e IA. Me especializo en Python, TypeScript, arquitectura backend y workflows modernos de desarrollo impulsados por IA. Disfruto convertir ideas complejas en productos reales que la gente pueda usar. Más allá del código, me importa profundamente la calidad de ingeniería, la experiencia del desarrollador, sistemas limpios y el aprendizaje continuo. También soy apasionado de la comunidad y la educación. He hablado en conferencias como PyTexas 2026 y organizo eventos y workshops para desarrolladores como Cursor Ambassador en Ecuador.",
        talkTitle:
          "Eleva la calidad de tu código en Python con tooling moderno ultrarrápido",
        talkDescription:
          "Los asistentes de coding con IA han cambiado cómo construimos software. Ahora podemos generar features, refactors y servicios enteros en minutos — pero la velocidad sin buenas prácticas de ingeniería se convierte rápido en deuda técnica. En esta charla mostraré cómo equipos Python modernos pueden construir workflows de desarrollo rápidos y confiables usando herramientas como Ruff, Ty y uv de Astral. Exploraremos cómo los pipelines tradicionales lentos y ruidosos están siendo reemplazados por una nueva generación de tooling que da feedback casi instantáneo mientras mejora la calidad del código y la experiencia del desarrollador. Temas incluyen por qué el código generado por IA hace que los quality gates automatizados sean más importantes que nunca, usar Ruff para formateo y linting, usar Ty para tipado estático moderno, estructurar workflows formatter → linter → type-checker, pre-commit hooks y pipelines de CI que los desarrolladores realmente disfrutan usar, y reducir la fricción entre desarrollo local y CI/CD.",
      },
      "mateo-rios-querubin": {
        title: "Senior ML Engineer @ Provectus / Universidad EAFIT",
        description:
          "Ingeniero Matemático con MSc en Matemáticas Aplicadas (Universidad EAFIT) y más de 7 años de experiencia como Data Scientist y Machine Learning Engineer. Actualmente en Provectus, construyendo pipelines de evaluación y optimización de LLM para automatización de procesamiento de documentos. También más de 3 años dictando Analítica Avanzada y Matemáticas fundamentales en Universidad EAFIT. Especializado en diseñar y desplegar soluciones de IA incluyendo sistemas de evaluación de LLM, modelos de computer vision, sistemas de recomendación y pipelines de ML end-to-end. AWS Certified Generative AI Developer y AWS Certified Machine Learning Specialty.",
        ...mateoSebastianTalkEs,
      },
      "carlos-andres-osorio-alcalde": {
        title: "Sr Machine Learning Engineer @ Factored",
        description:
          "Matemático (Summa Cum Laude) y MSc en matemáticas. Machine Learning Engineer y Data Scientist con más de 6 años de experiencia entregando soluciones de Data Science e IA en industrias como retail, finanzas, educación y empresas sociales. Hábil en desarrollar y desplegar modelos avanzados para tareas como sistemas de recomendación, clustering de clientes, predicción de churn, riesgo transaccional, chatbots impulsados por LLM, aplicaciones Gen-AI y motores de búsqueda usando herramientas como Python, PyTorch, PySpark, FastAPI, PydanticAI, Qdrant, LangChain y plataformas cloud (AWS, GCP y Azure). Apasionado por aprovechar las matemáticas y la IA para generar cambio significativo.",
        talkTitle: "La revolución GenAI llega a RecSys",
        talkDescription:
          "Cuando hablamos de la revolución de IA generativa, la conversación suele quedarse cerca de chatbots, generación de imágenes y asistentes de código. Pero las mismas arquitecturas que impulsaron esa ola (transformers, modelado autorregresivo, scaling laws) están remodelando silenciosamente campos que la mayoría no asocia con GenAI. Los sistemas de recomendación son uno de los ejemplos más interesantes. Meta, Netflix, Google, Spotify y otros están reemplazando pipelines de recsys de décadas con foundation models basados en transformers, y los resultados son difíciles de ignorar. Esta charla es un recorrido práctico de ese cambio desde la perspectiva de un ingeniero Python.",
      },
      "sankalp-gilda": {
        title: "Staff MLE @ DeepThought Solutions",
        description:
          "Sankalp Gilda, PhD (Astrofísica, University of Florida, 2021). Staff Machine Learning Engineer en DeepThought Solutions, donde lidera trabajo en tooling de evaluación de IA en producción, instrumentación host-side para sandboxes de ejecución agéntica y extracción de knowledge graphs basada en LLM. Autor de tsbootstrap, una librería Python open source para bootstrapping de series de tiempo. Anteriormente construyó sistemas de ML en Marathon Petroleum, Fermata Energy y el Canada-France-Hawaii Telescope.",
        talkTitle: "Tu eval de IA te está mintiendo",
        talkDescription:
          'Cuando pones temperature=0 y ejecutas tu eval de IA, esperas que la misma entrada dé la misma salida. No lo hace. Mediciones recientes en Qwen3-235B con temperature=0 produjeron 80 completions únicas en un solo prompt. Entonces, cuando tu eval reporta "92% pass rate", ¿qué significa realmente? Esta charla trata sobre la brecha entre cómo el ecosistema de eval de IA habla de scores y lo que esos scores realmente pueden sostener. Recorremos cinco herramientas específicas que cierran la brecha: Pass@k versus pass^k, intervalos de confianza de Wilson, pass@k bayesiano con conjugación Beta-Binomial, detección secuencial de drift con EWMA, CUSUM y OLS, y control de error family-wise vía procedimientos Benjamini-Hochberg. Cada método tiene una demo corta en Python puro sin dependencia de frameworks. La audiencia se lleva implementaciones de referencia que pueden pegar en un setup pytest existente esta noche.',
      },
      "marcela-hoyos-cano": {
        title: "Team Lead Data Analytics @ Snappr",
        description:
          "Soy data scientist e ingeniera basada en Medellín. Empecé mi carrera en Ingeniería Mecatrónica y en algún punto me enamoré de los datos, lo que me llevó a una Maestría en Data Science & Analytics. Desde entonces he trabajado remotamente en LATAM y EE.UU. en empresas como Holafly, Lemontech y el ICIPC. Hoy lidero Data Analytics en Snappr, un marketplace global de fotografía. He construido pipelines de datos y conectores personalizados, diseñado nuestra arquitectura dbt, configurado dashboards, gestionado permisos y roles en Snowflake, construido herramientas para dar acceso directo a datos a compañeros no técnicos, y trabajado de cerca con ops, finanzas e ingeniería para convertir procesos de negocio desordenados en algo medible.",
        talkTitle:
          "Cómo dejamos de responder preguntas de datos y construimos el stack que las responde",
        talkDescription:
          "Si has trabajado en una startup en crecimiento, probablemente conoces la sensación: múltiples equipos sacando números distintos para la misma métrica, ops pidiendo constantemente a ingeniería respuestas básicas, y crear u organizar métricas es un dolor real. Cada nueva pregunta se siente como empezar de cero. Esta charla es la historia de cómo un equipo pequeño lo arregló. Primero, construyendo una arquitectura dbt adecuada desde cero con Sources, Staging, Intermediate y Marts para que cosas como bookings, revenue y providers estuvieran definidas en un solo lugar y todos vieran el mismo número. Una vez que los datos fueron confiables, conectamos un LLM para que compañeros no técnicos pudieran hacer preguntas en lenguaje natural y obtener respuestas reales directamente desde Snowflake. Sin SQL, sin ticket, sin esperar a ingeniería. Te llevarás un modelo mental claro para construir una capa dbt en la que la gente realmente confíe, una arquitectura práctica para conectar un LLM a tu warehouse, y lo que hizo que todo encajara: tus docs de dbt son tu prompt de LLM.",
      },
      "sebastian-gomez-ahumada": {
        title: "Middle ML Engineer @ Provectus",
        description:
          "Ingeniero biomédico de Universidad de los Andes, con minor en neurociencia y MSc en ingeniería biomédica enfocado en machine learning. Actualmente trabaja como machine learning engineer construyendo sistemas de IA en producción, pipelines de extracción y agentes conversacionales. Python fue su primer lenguaje de programación y el que le enseñó a pensar en código, no solo a escribirlo. Durante los últimos dos años y medio fue asistente de cátedra de fundamentos de ML en Los Andes, un rol que reforzó una convicción que defenderá en el escenario: la complejidad rara vez es la respuesta y casi siempre es la excusa.",
        ...mateoSebastianTalkEs,
      },
      "juliana-suarez-avila": {
        title: "Data Scientist @ Cuesta Partners",
        description:
          "Ingeniera Industrial convertida en Data Scientist por amor a los números y a la tecnología. Juliana pasó de modelar probabilidades en la Javeriana a modelos de detección de fraude en MercadoLibre y MercadoPago, y hoy construye soluciones de IA en Cuesta Partners, una consultoría de Tech y AI. Attento es su experimento más reciente: demostrar que Python puede conectar una voz humana con diez APIs corporativas sin perder la cabeza en el camino. Fuera del teclado, se acaba de graduar como Chef, donde aplica la misma rigurosidad técnica que en su vida laboral.",
        ...julianaJuanTalkEs,
      },
      "juan-manuel-marin-bedoya": {
        title: "Senior Data Engineer @ Huge",
        description:
          "Creció aprendiendo inglés con los menús de instalación del software y los tutoriales de YouTube antes de que existieran en español. Esa curiosidad temprana por la tecnología lo llevó de Ingeniería Industrial y análisis financiero en la Javeriana a construir pipelines de datos para empresas en tres países. Juan Manuel es Senior Data Engineer con experiencia en GCP, Python y automatización, y ha trabajado desde plataformas B2B de comercio con Asia hasta proyectos de BI en Cisco. En Attento se encargó de lo que más le gusta: que los datos fluyan limpio, que la infraestructura no se note, y que el sistema recuerde lo que hiciste ayer.",
        ...julianaJuanTalkEs,
      },
    },
  };
