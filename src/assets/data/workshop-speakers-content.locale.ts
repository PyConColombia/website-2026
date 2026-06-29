import type { SiteLocale } from "@/lib/site-messages";
import type { SpeakerContentBySlug } from "./speakers-content.locale";

export const workshopSpeakerContentByLocale: Record<
  SiteLocale,
  SpeakerContentBySlug
> = {
  en: {
    "david-felipe-vanegas-ramirez": {
      title: "Advanced Data Engineer @ Loka",
      description:
        "David is a data engineer at Loka, where he designs and maintains data platforms on AWS for clients across multiple industries. With nearly five years of experience, his day-to-day work revolves around Apache Iceberg, PySpark, Airflow, and production lakehouse architectures. He holds AWS and Databricks certifications and has recently explored the intersection of data engineering and AI agents, building personal tooling on top of the Anthropic SDK. Based in Bogotá, he believes there is a shortage of practical Spanish-language technical content on modern data engineering.",
      talkTitle: "From S3 to AI Agent: Your First Queryable Lakehouse",
      talkDescription:
        "AI agents are only as good as the data they can query. Most agents built today connect to outdated CSVs, unstructured databases, or nothing at all. What if your agent could query a real lakehouse—with versioning, schema evolution, and time travel—using natural language? In this workshop we build exactly that from scratch using only open-source tools that run on your laptop. Starting from a local Docker Compose stack, we stand up a functional lakehouse with MinIO as S3-compatible storage, Apache Iceberg as the table format, Project Nessie as a Git-like versioned catalog, and Trino as the SQL query engine. On top of that, we build a Python MCP server that exposes Iceberg tables as tools for an AI agent, and connect Claude so it can query the lakehouse in natural language.",
      workshopRequirements:
        "Minimum hardware: laptop with at least 8 GB RAM (16 GB recommended) and 10 GB free disk space.\n\nRequired software (install before the event):\n• Docker Desktop: https://www.docker.com/products/docker-desktop\n• Python 3.11+: https://www.python.org/downloads\n• Git: https://git-scm.com\n• Claude Desktop (free): https://claude.ai/download\n• VS Code (recommended): https://code.visualstudio.com",
    },
    "felix-mino": {
      title: "Software Engineer @ Stack Builders",
      description:
        "Félix is a Software Engineer at Stack Builders with a focus on testing practices and developer tooling. He advocates for practical approaches to software quality and believes that real integration tests—backed by actual running services—are far more valuable than elaborate mock setups.",
      talkTitle: "Stop Mocking, Start Containerizing",
      talkDescription:
        "Tired of maintaining brittle mock objects that don't reflect production behavior? In this workshop, you'll learn how to replace mocks with real containerized services using Testcontainers for Python. Bring your laptop and a running Docker engine—we're going to get our hands dirty!",
      workshopRequirements:
        "Laptop with Docker Desktop installed and a running Docker engine.",
    },
    "roberto-bedoya-garcia": {
      title: "AI Engineer @ NowBit",
      description:
        "Roberto is an AI Engineer at NowBit focused on LLM observability and cost optimization. He helps teams monitor, debug, and reduce the operational costs of production AI systems—turning token spend from an unpredictable liability into a manageable engineering concern.",
      talkTitle: "Your LLM Is Bleeding Money and Python Can Stop It",
      talkDescription:
        "Every token your LLM processes costs money, and without proper observability, costs can spiral out of control. In this workshop, you'll learn how to instrument your Python LLM applications to track token usage, latency, and cost per request. We'll build a complete observability stack using open-source tools, set up alerts for cost anomalies, and implement strategies to cut your LLM bill without sacrificing quality.",
    },
    "hazel-saenz": {
      title: "Developer Advocate @ AWS",
      description:
        "Hazel is a Developer Advocate at AWS passionate about making AI accessible through open-source tools. She builds demos and workshops that help developers get started with AI agents and Python, with a special focus on creative and beginner-friendly applications.",
      talkTitle: "Create Your AI DJ: Agents in Python and Open Source",
      talkDescription:
        "Create your own AI DJ using Python agents and open-source tools! In this beginner-friendly workshop, you'll learn the fundamentals of AI agents, build a music recommendation system powered by Python, and connect it to real music APIs. No prior AI experience required—just curiosity and a love for music. By the end, you'll have a working AI DJ that curates playlists based on mood, genre, and personal preferences.",
    },
    "emanuel-zapata-querubin": {
      title: "Data Engineer @ Lovelytics",
      description:
        "Emanuel is a Data Engineer at Lovelytics specializing in MLOps and data platform architecture. He has hands-on experience taking ML projects from exploratory notebooks to fully automated production pipelines on Databricks, and is passionate about bridging the gap between data science and engineering.",
      talkTitle: "From Notebook to Production: End-to-End MLOps on Databricks",
      talkDescription:
        "Move beyond Jupyter notebooks and deploy machine learning models to production using MLOps best practices on Databricks. In this intermediate workshop, you'll learn to structure ML projects for production, implement CI/CD pipelines for models, manage experiments with MLflow, deploy models as REST APIs, and monitor them in production. We'll walk through a complete end-to-end example from data preparation to automated retraining.",
    },
    "santiago-suarez-sampayo": {
      title: "Data Engineer @ Aimpoint Digital",
      description:
        "Santiago is a Data Engineer at Aimpoint Digital with expertise in building AI-powered applications and integrations. He enjoys creating practical developer tools that combine cutting-edge AI APIs with everyday communication platforms, making advanced AI capabilities accessible to any user.",
      talkTitle:
        "Build an OpenClaw-style Coding Assistant on WhatsApp with Claude Agent SDK",
      talkDescription:
        "Build a fully functional AI coding assistant that lives in WhatsApp, inspired by OpenClaw, using Claude's Agent SDK and Python. In this hands-on workshop, you'll learn to integrate the Claude Agent SDK with the WhatsApp Business API, design conversational flows for code assistance, handle multi-turn conversations with memory, and deploy your assistant to the cloud. Walk away with a working AI coding companion accessible from any device.",
    },
    "johnny-montoya": {
      title: "AI Engineer @ Unloquer",
      description:
        "Johnny is an AI Engineer at Unloquer and creator of content about data and AI under the handle @eldelosdatos_. He specializes in building agentic systems that encode organizational knowledge, helping companies turn their internal processes and expertise into callable agent skills.",
      talkTitle:
        "Executable Skills: How to Teach an Agent How Your Company Works",
      talkDescription:
        "How do you make an AI agent that truly understands how your company works? In this workshop, you'll learn to design and implement executable skills—reusable, structured pieces of organizational knowledge that agents can invoke. We'll cover skill architecture, knowledge representation in Python, integrating skills with popular agent frameworks, and testing skill reliability. By the end, you'll have a blueprint for building a company brain that your agents can tap into.",
    },
    "nicolas-roldan-fajardo": {
      title: "ML Engineer @ Loka",
      description:
        "Nicolás is an ML Engineer at Loka focused on evaluation frameworks for agentic AI systems. He works on designing robust test suites that validate agent behavior across complex multi-step workflows, bringing engineering rigor to the often-overlooked challenge of AI evaluation.",
      talkTitle:
        "The Fellowship of Agentic Evaluations: How to Evaluate an Agent?",
      talkDescription:
        "How do you know if your AI agent is actually doing the right thing? In this workshop, we'll explore practical evaluation frameworks for agentic systems. Forming a fellowship of evaluation techniques—from simple unit tests to complex behavioral evaluations—we'll apply them to real agent scenarios. You'll learn to define evaluation criteria, implement automated test suites, measure agent performance quantitatively, and track improvement over time.",
    },
    "maria-fernanda-rojas-castro": {
      title: "ML Engineer @ Loka",
      description:
        "María Fernanda is an ML Engineer at Loka with expertise in building and evaluating intelligent systems. She focuses on practical methodologies for ensuring AI agent reliability and safety, and collaborates on research into scalable evaluation techniques for production agentic workflows.",
      talkTitle:
        "The Fellowship of Agentic Evaluations: How to Evaluate an Agent?",
      talkDescription:
        "How do you know if your AI agent is actually doing the right thing? In this workshop, we'll explore practical evaluation frameworks for agentic systems. Forming a fellowship of evaluation techniques—from simple unit tests to complex behavioral evaluations—we'll apply them to real agent scenarios. You'll learn to define evaluation criteria, implement automated test suites, measure agent performance quantitatively, and track improvement over time.",
    },
    "jonathan-vallejo-munoz": {
      title: "Software Engineer @ Lendingfront",
      description:
        "Jonathan is a Software Engineer at Lendingfront working at the intersection of AI-assisted development and software architecture. He advocates for disciplined development practices that go beyond prompt-driven coding, and explores how structured specifications can make AI-generated code more coherent and maintainable.",
      talkTitle: "Beyond Vibe Coding: Spec Driven Development with Code Graphs",
      talkDescription:
        "Go beyond vibe coding and learn how to use specifications and code graphs to guide AI-assisted development. In this workshop, you'll discover how structured specs and dependency graphs give AI coding tools the context they need to produce coherent, maintainable code. We'll work with real Python projects to define specs, generate code graphs, and wire them into your AI-assisted workflow—resulting in code that actually makes sense architecturally.",
    },
    "esneider-bravo-benitez": {
      title: "Software Engineer @ Muno Labs",
      description:
        "Esneider is a Software Engineer at Muno Labs with a focus on code generation tools and developer experience. He explores how structured specifications can guide AI coding assistants to produce more reliable outputs, and contributes to open-source tooling for spec-driven AI development.",
      talkTitle: "Beyond Vibe Coding: Spec Driven Development with Code Graphs",
      talkDescription:
        "Go beyond vibe coding and learn how to use specifications and code graphs to guide AI-assisted development. In this workshop, you'll discover how structured specs and dependency graphs give AI coding tools the context they need to produce coherent, maintainable code. We'll work with real Python projects to define specs, generate code graphs, and wire them into your AI-assisted workflow—resulting in code that actually makes sense architecturally.",
    },
    "maris-botero": {
      title: "ML Engineer @ Mercado Libre",
      description:
        "Maris is an ML Engineer at Mercado Libre passionate about making AI accessible to developers at all levels. She specializes in building multi-agent systems with Python and loves demystifying complex AI concepts through practical, beginner-friendly workshops.",
      talkTitle: "From Prompts to Agents: Intelligent Systems with Python",
      talkDescription:
        "Take your first steps from writing simple prompts to building intelligent multi-agent systems with Python. In this beginner-friendly workshop, you'll learn the foundations of AI agents, how they differ from simple LLM calls, how to chain agents together for complex tasks, and how to give them tools and memory. Using popular Python frameworks, you'll build a working multi-agent system by the end of the session—no prior AI experience needed.",
    },
    "jose-hernan-ortiz-ocampo": {
      title: "Senior ML Engineer @ Loka",
      description:
        "José Hernán is a Senior ML Engineer at Loka with deep expertise in agentic AI frameworks. He has designed and built production multi-agent systems using a variety of orchestration tools, and brings a pragmatic, engineering-first perspective to AI development—focused on what works in production rather than what looks impressive in demos.",
      talkTitle:
        "LangGraph and Strands Agents: Core Concepts, Patterns, and Tradeoffs",
      talkDescription:
        "Dive deep into two powerful agentic frameworks—LangGraph and Strands Agents—and learn when to use each. This advanced workshop covers the core concepts behind both frameworks: state machines, graph-based orchestration, tool use, and memory management. We'll build the same agentic application in both frameworks, compare their strengths and limitations, and discuss the architectural trade-offs to help you choose the right tool for your production AI systems.",
    },
    "isabel-mora": {
      title: "Junior ML Engineer @ Loka",
      description:
        "Isabel is a Junior ML Engineer at Loka contributing to the development and evaluation of agentic AI systems. She brings fresh perspectives to agent design and implementation challenges, and is passionate about making complex AI frameworks understandable and accessible.",
      talkTitle: "",
      talkDescription: "",
    },
    "jose-hernan-ortiz-ocampo-2": {
      title: "Senior ML Engineer @ Loka",
      description:
        "José Hernán is a Senior ML Engineer at Loka with deep expertise in agentic AI frameworks. He has designed and built production multi-agent systems using a variety of orchestration tools, and brings a pragmatic, engineering-first perspective to AI development—focused on what works in production rather than what looks impressive in demos.",
      talkTitle:
        "Multi-Agent Teams in AI-Assisted Development: A Glimpse Into the Future of Programming",
      talkDescription:
        "Get a glimpse into the future of programming, where teams of AI agents collaborate with human developers. In this workshop, you'll explore cutting-edge patterns for multi-agent collaboration in AI-assisted development: code generation agents, review agents, testing agents, and orchestration strategies. We'll build a mini multi-agent development team using Python and the Claude SDK, and discuss where this technology is heading and how developers can prepare.",
    },
    "daniel-sabogal": {
      title: "Data & ML Intern @ Loka",
      description:
        "Daniel is a Data & ML Intern at Loka passionate about exploring the intersection of multi-agent systems and software development workflows. He brings curiosity and fresh ideas to the future of AI-assisted programming, and is eager to share what he's learned building with cutting-edge AI tools.",
      talkTitle: "",
      talkDescription: "",
    },
    "jose-arturo-osorio-londono": {
      title: "Data Engineer @ Lovelytics",
      description:
        "José Arturo is a Data Engineer at Lovelytics specializing in the modernization of data pipelines and workflows. He explores how generative AI is transforming traditional data engineering practices into adaptive, intelligent systems—and helps teams navigate the evolution from rigid ETL to dynamic agentic architectures.",
      talkTitle:
        "From ETL to Agentic Workflows: The Evolution of Data Engineering in the Generative AI Era",
      talkDescription:
        "Traditional ETL pipelines are deterministic and rigid. Agentic workflows powered by generative AI can adapt, reason, and handle the unexpected. In this workshop, you'll learn how to evolve your data engineering practices from classic ETL to intelligent agentic workflows. We'll cover designing agents for data extraction, transformation decisions, and loading strategies—as well as how to combine traditional orchestration tools with AI agents for hybrid architectures.",
    },
    "biviana-marcela-suarez-sierra": {
      title:
        "Affiliated Professor, Computing and Analytics @ Universidad EAFIT",
      description:
        "Biviana Marcela Suárez Sierra is a statistician and data science researcher with experience in statistical modeling, machine learning, and computational analysis of complex data. She is currently a university professor and leads interdisciplinary research projects integrating statistics, programming, and data analysis to address problems in health, energy, environment, and digital humanities. Her recent work has focused on developing methodologies for analyzing large textual corpora using NLP, text mining, and statistical learning. She has led teams of students and researchers from diverse disciplines to study how discourses about science, culture, and society circulate in Colombian media. With more than a decade of experience in research and data analysis, her main interest is building bridges between computational tools and real-world problems.",
      talkTitle: "NLP in Practice: From Corpus Linguistics to RAG with Python",
      talkDescription:
        "Natural language processing offers today a mature set of tools for analyzing textual corpora systematically and reproducibly, but the path from having documents to obtaining results is not always clear. This workshop walks through that path from start to finish. In two hours, participants will build an understanding of the NLP ecosystem: its history, logic, and methods. The session opens with a timeline from the first rule-based models to transformers, followed by a map of techniques organized by problem type (classification, entity extraction, semantic search, generation) so each participant can identify which method they need for a specific textual problem. The second part covers two Python implementations. First, topic modeling with BERTopic, reviewing the internal pipeline of embeddings, UMAP, and HDBSCAN. Second, a conversational assistant with RAG: corpus indexing, semantic retrieval, and connection to a language model to answer queries about the documents. At the end, each participant will have a functional notebook with both pipelines and a clear map of the ecosystem to guide their own textual analysis projects.",
      workshopRequirements:
        "Bring a laptop with a Google account to access Google Colab, where all notebooks will be available. Participants using Colab do not need to install anything beforehand. For those who prefer a local environment, Python 3.10 or higher is recommended. Basic familiarity with Python is assumed. No prior NLP experience is required. It is recommended to bring a set of texts for analysis.",
    },
    "andres-felipe-puerta-velez": {
      title:
        "Research Assistant & Master's Student in Applied Mathematics @ Universidad EAFIT",
      description:
        "Andrés Felipe Puerta Velez is a master's student in applied mathematics and research assistant with experience in natural language processing (NLP), integration of heterogeneous databases, and data analysis. He currently works on Bayesian g-formula for causal effect estimation and on machine learning models to estimate pollutant gas emissions and fuel consumption for low-displacement motorcycles in Colombia. As a research assistant on the project Comparative Analysis of Perceptions on Protective Behaviors against COVID-19 in Colombia, he has studied how public discourse circulates on social networks and how it behaved regarding care habits during the pandemic.",
      talkTitle: "",
      talkDescription: "",
    },
    "dora-cecilia-alzate-gallo": {
      title: "Master's Student in Humanistic Studies @ EAFIT",
      description:
        "Dora Cecilia Alzate Gallo is a student in the Master's in Humanistic Studies, linked to the language area and the School of Arts and Humanities at EAFIT. She will share the main linguistic challenges and decisions that allowed adapting NLP tools to Spanish and improving the quality of results obtained in text processing.",
      talkTitle: "",
      talkDescription: "",
    },
    "karen-melissa-gomez-montoya": {
      title: "Mathematical Engineer & Research Assistant @ Universidad EAFIT",
      description:
        "Karen Melissa Gomez Montoya is a mathematical engineer and master's student in Data Science and Analytics at EAFIT, where she also works as a research assistant on digital humanities and public sphere projects. Her work sits at the intersection between computational methods and textual corpus analysis.",
      talkTitle: "",
      talkDescription: "",
    },
    "jesus-alfredo-reyes-vargas": {
      title: "Software Engineer @ EPAM Systems",
      description:
        "Jesús Alfredo is a Software Engineer at EPAM Systems passionate about continuous learning and AI-powered developer education. He explores how AI tools can accelerate skill development and help engineers stay relevant in a fast-changing landscape, and is a strong advocate for structured, adaptive learning curricula.",
      talkTitle: "Future-proof Engineers with AI-DLC",
      talkDescription:
        "AI is transforming not just what engineers build, but how they learn and grow. In this workshop, you'll discover AI-DLC (AI-Driven Learning Curriculum), a framework for creating personalized, adaptive learning paths for software engineers using AI tools. We'll explore how to design learning curricula that incorporate AI assistance, build skills that complement rather than compete with AI, and create development plans that keep engineers relevant and valuable for years to come.",
    },
    "carlos-alberto-riveros-varela": {
      title: "Software Engineer @ EPAM Systems",
      description:
        "Carlos Alberto is a Software Engineer at EPAM Systems focused on developer growth and modern learning methodologies. He is passionate about combining AI with structured learning paths to help engineers future-proof their careers and adapt to the rapidly evolving demands of the industry.",
      talkTitle: "",
      talkDescription: "",
    },
    "felipe-sanchez": {
      title: "Data Engineer @ Aimpoint Digital",
      description:
        "Felipe is a Data Engineer at Aimpoint Digital with expertise in building AI tool servers and integrations. He enjoys creating hands-on tutorials that make complex AI development concepts approachable and fun, and is a strong believer in learning by building real, playful projects.",
      talkTitle:
        "Building Your First AI Tool Server: Creating a Pokédex with FastMCP and Python",
      talkDescription:
        "Build your first AI tool server from scratch using FastMCP and Python, with the Pokédex as your guide! In this hands-on workshop, you'll learn the Model Context Protocol (MCP), set up a FastMCP server, implement custom tools that AI agents can call, and connect everything into a working Pokédex AI assistant. No prior MCP experience needed—just Python knowledge and a love for Pokémon.",
    },
    "daniel-galvis": {
      title: "Data Engineer @ Aimpoint Digital",
      description:
        "Daniel is a Data Engineer at Aimpoint Digital focused on AI tooling and developer experience. He brings practical expertise in building Python-based AI services and tool integrations, and enjoys collaborating on workshops that make cutting-edge AI development accessible to a broad audience.",
      talkTitle: "",
      talkDescription: "",
    },
    "francisco-javier-moya-ortiz": {
      title: "Data Analyst @ Aimpoint Digital",
      description:
        "Francisco Javier is a Data Analyst at Aimpoint Digital specializing in business intelligence and agentic analytics. He explores how AI agents can be integrated with modern BI tools like Sigma to create self-explanatory, autonomous dashboards that go far beyond static charts.",
      talkTitle: "Dashboards That Think: Build Agentic Analytics with Sigma",
      talkDescription:
        "Learn how to build dashboards that don't just display data—they think. In this workshop, you'll combine Sigma's business intelligence capabilities with Python-based AI agents to create agentic analytics dashboards. We'll cover integrating LLMs with Sigma, building agent-driven data narratives, automating insight discovery, and creating dashboards that can answer follow-up questions and adapt dynamically to user context.",
    },
    "andres-vasquez-restrepo": {
      title: "Data Scientist @ Cuesta Partners",
      description:
        "Andrés is a Data Scientist at Cuesta Partners applying machine learning and AI to food science and nutritional product design. His interdisciplinary work bridges Python-based AI with domain expertise in nutrition and formulation, demonstrating the power of AI in non-traditional domains.",
      talkTitle:
        "PyBlend: Towards an AI Food Scientist for Nutritional Product Design",
      talkDescription:
        "Discover how Python and AI are transforming nutritional product design. In this workshop, you'll be introduced to PyBlend, a framework that models the complex optimization problem of designing nutritional formulations. We'll explore how machine learning algorithms can navigate vast ingredient spaces, balance nutritional constraints, and generate novel product formulations. Attendees will gain hands-on experience with AI-driven product design and learn how Python makes interdisciplinary AI applications possible.",
    },
    "cesar-mateo-gonzalez-rodriguez": {
      title: "Data Scientist @ GoDaddy",
      description:
        "César Mateo is a Data Scientist at GoDaddy specializing in anomaly detection and unsupervised learning. He applies deep learning techniques, including autoencoders, to find rare but critical patterns in large-scale datasets—combining theoretical rigor with practical engineering to deliver production-ready solutions.",
      talkTitle:
        "How to Find Pearls on the Bottom of the Sea – Autoencoders as Anomaly Detection Models",
      talkDescription:
        "Like finding pearls on the ocean floor, detecting rare anomalies in large datasets requires sophisticated techniques. In this workshop, you'll learn the theory and practice of autoencoder architectures, how to train them for anomaly detection, how to set decision boundaries, and how to evaluate their performance. We'll work with real-world datasets and build complete anomaly detection pipelines in Python.",
    },
    "juan-guillermo-gomez": {
      title: "Founder @ DevHack",
      description:
        "Juan Guillermo is the founder of DevHack and a renowned speaker on Python, AI, and software architecture throughout Latin America. He has years of experience teaching developers about practical AI implementation patterns and multi-agent system design, and is a passionate advocate for the Python community.",
      talkTitle: "Patterns, Protocols and Tactics for Multi-Agent Systems",
      talkDescription:
        "Master the essential patterns, protocols, and tactics for building robust multi-agent systems in Python. In this workshop, you'll learn proven architectural patterns for multi-agent collaboration, communication protocols between agents, error handling and recovery strategies, and practical implementation tactics. Drawing from real-world experience, we'll build multiple agent architectures and analyze their trade-offs—giving you a reusable toolkit for designing multi-agent systems.",
    },
    "mauricio-repetto-ferrero": {
      title: "AI Engineer @ Nortal",
      description:
        "Mauricio is an AI Engineer at Nortal with a passion for optimizing LLM token consumption. He developed TOON, a tool for creating compact, semantically rich data representations that reduce token usage while improving AI comprehension—helping teams cut costs without losing model performance.",
      talkTitle:
        "Now or Never! Token Diet with TOON to Save Money and Help AI Understand More",
      talkDescription:
        "Tokens cost money, and every unnecessary token you send to an LLM is money wasted. In this workshop, you'll learn how to put your AI applications on a token diet using TOON, a Python tool for creating compact, semantically rich data representations. We'll cover TOON's architecture, how to serialize complex data structures efficiently, measure token reduction, and integrate TOON into existing AI pipelines—without losing the information your models need.",
    },
    "dario-jesus-guzman-duran": {
      title: "Software Engineer @ Gudar Devs",
      description:
        "Darío Jesús is a Software Engineer at Gudar Devs specializing in high-performance data processing and async Python. He builds scalable video processing pipelines that leverage Python's async capabilities for maximum throughput, and is passionate about squeezing every bit of performance out of Python I/O workloads.",
      talkTitle: "High-Performance Video Ingestion with Async Python",
      talkDescription:
        "Video is one of the most demanding data types to process. In this workshop, you'll learn how to build high-performance video ingestion pipelines using Python's async capabilities. We'll cover asyncio fundamentals for I/O-bound video processing, concurrent frame extraction and processing, async queue patterns for data pipelines, performance profiling and optimization, and real-world deployment considerations. Build a production-grade async video ingestion system from scratch.",
    },
    "juan-jose-barrientos-salazar": {
      title: "AI Engineer @ The TRES Group",
      description:
        "Juan José is an AI Engineer at The TRES Group with a strong foundation in the mathematics of deep learning. He specializes in understanding and implementing transformer architectures from first principles using PyTorch, making the inner workings of LLMs accessible to engineers who want to go beyond API calls.",
      talkTitle:
        "LLMs in Depth: How an LLM Works Mathematically (and Its Implementation with PyTorch)",
      talkDescription:
        "Demystify the mathematics behind Large Language Models and implement them from scratch in PyTorch. This advanced workshop takes you through the complete mathematical foundations: attention mechanisms, transformer architecture, positional encodings, layer normalization, and training dynamics. For each mathematical concept, we'll write the corresponding PyTorch implementation—giving you a deep, hands-on understanding of how LLMs actually work under the hood.",
    },
    "raul-rodriguez": {
      title: "AI Engineer @ Mercado Libre",
      description:
        "Raúl is an AI Engineer at Mercado Libre working on innovative AI copilot applications. He built NORTH, a system that uses Claude as a true coding and decision-making copilot for real-world engineering workflows—demonstrating what it looks like when AI goes beyond autocomplete and becomes a genuine engineering partner.",
      talkTitle: "NORTH: Claude as a Real Copilot",
      talkDescription:
        "Learn how NORTH uses Claude as a genuine coding copilot—not just a code completer, but a true engineering partner. In this workshop, you'll explore the architecture of NORTH and learn how to build similar AI copilot integrations using Claude's API and Python. We'll cover prompt engineering for coding assistance, maintaining context across long sessions, integrating with development workflows, and building the feedback loops that make AI copilots genuinely useful.",
    },
    "jeronimo-lopez-gomez": {
      title: "Researcher @ Universidad de Antioquia",
      description:
        "Jerónimo is a researcher at Universidad de Antioquia specializing in hardware-software co-design and machine learning acceleration. He works on deploying ML models to FPGAs and other hardware platforms using hls4ml and Python, bridging the gap between high-level Python ML development and low-level hardware implementation.",
      talkTitle: "hls4ml: From Python Models to Hardware Acceleration",
      talkDescription:
        "Bridge the gap between Python machine learning and hardware implementation using hls4ml. In this workshop, you'll learn how to take ML models trained in Python (TensorFlow, PyTorch, scikit-learn) and deploy them to FPGAs using the hls4ml library. We'll cover model quantization, hardware-aware training, the HLS synthesis workflow, performance profiling, and practical considerations for deploying ML at the edge. No prior FPGA experience required.",
    },
    "natalia-echeverri-duran": {
      title: "Researcher @ Universidad de Antioquia",
      description:
        "Natalia is a researcher at Universidad de Antioquia focused on machine learning hardware acceleration. She explores techniques for efficiently mapping Python ML models to FPGA implementations for edge computing applications, contributing to research at the frontier of AI hardware co-design.",
      talkTitle: "hls4ml: From Python Models to Hardware Acceleration",
      talkDescription:
        "Bridge the gap between Python machine learning and hardware implementation using hls4ml. In this workshop, you'll learn how to take ML models trained in Python (TensorFlow, PyTorch, scikit-learn) and deploy them to FPGAs using the hls4ml library. We'll cover model quantization, hardware-aware training, the HLS synthesis workflow, performance profiling, and practical considerations for deploying ML at the edge. No prior FPGA experience required.",
    },
  },
  es: {
    "david-felipe-vanegas-ramirez": {
      title: "Advanced Data Engineer @ Loka",
      description:
        "David es ingeniero de datos en Loka, donde diseña y mantiene plataformas de datos en AWS para clientes de múltiples industrias. Con casi cinco años de experiencia, su trabajo diario gira en torno a Apache Iceberg, PySpark, Airflow y arquitecturas lakehouse en producción. Tiene certificaciones de AWS y Databricks y ha explorado recientemente la intersección entre ingeniería de datos y agentes de IA. Con base en Bogotá, cree que hay escasez de contenido técnico práctico en español sobre ingeniería de datos moderna.",
      talkTitle: "From S3 to AI Agent: Your First Queryable Lakehouse",
      talkDescription:
        "Los agentes de IA son tan buenos como los datos que pueden consultar. El problema es que la mayoría de los agentes que se construyen hoy están conectados a CSVs desactualizados, bases de datos sin estructura o simplemente a nada. ¿Y si tu agente pudiera consultar un lakehouse real — con versionado, evolución de esquemas y viajes en el tiempo — usando lenguaje natural? En este taller construiremos exactamente eso, desde cero, usando únicamente herramientas open source que corren en tu laptop. Partiendo de un stack local con Docker Compose, levantaremos MinIO, Apache Iceberg, Project Nessie y Trino; sobre esa base construiremos un servidor MCP en Python y conectaremos Claude para consultar el lakehouse en lenguaje natural.",
      workshopRequirements:
        "Hardware mínimo: laptop con al menos 8 GB de RAM (16 GB recomendado) y 10 GB de espacio libre en disco.\n\nSoftware requerido — instalar antes del evento:\n• Docker Desktop: https://www.docker.com/products/docker-desktop\n• Python 3.11+: https://www.python.org/downloads\n• Git: https://git-scm.com\n• Claude Desktop (gratuito): https://claude.ai/download\n• VS Code (recomendado): https://code.visualstudio.com",
    },
    "felix-mino": {
      title: "Ingeniero de Software @ Stack Builders",
      description:
        "Félix es Ingeniero de Software en Stack Builders con enfoque en prácticas de testing y herramientas para desarrolladores. Defiende enfoques prácticos para la calidad del software y cree que las pruebas de integración reales—respaldadas por servicios verdaderamente en ejecución—son mucho más valiosas que elaborados setups de mocks.",
      talkTitle: "Deja de hacer mocks, empieza a contenerizar",
      talkDescription:
        "¿Cansado de mantener objetos mock frágiles que no reflejan el comportamiento en producción? En este taller aprenderás cómo reemplazar mocks con servicios reales contenerizados usando Docker y Testcontainers para Python. Configuraremos PostgreSQL, Redis y APIs externas como contenedores en tu suite de pruebas, escribiremos pruebas de integración que realmente validen el comportamiento de tu sistema y optimizaremos tu flujo de trabajo de testing para pipelines CI/CD más rápidos y confiables.",
    },
    "roberto-bedoya-garcia": {
      title: "Ingeniero de IA @ NowBit",
      description:
        "Roberto es Ingeniero de IA en NowBit enfocado en observabilidad y optimización de costos para LLMs. Ayuda a equipos a monitorear, depurar y reducir los costos operacionales de sistemas de IA en producción, convirtiendo el gasto en tokens de una responsabilidad impredecible en una preocupación de ingeniería manejable.",
      talkTitle: "Tu LLM está sangrando dinero y Python puede pararlo",
      talkDescription:
        "Cada token que procesa tu LLM cuesta dinero, y sin una observabilidad adecuada, los costos pueden descontrolarse. En este taller aprenderás cómo instrumentar tus aplicaciones Python con LLM para rastrear el uso de tokens, la latencia y el costo por solicitud. Construiremos una pila de observabilidad completa usando herramientas de código abierto, configuraremos alertas para anomalías de costo e implementaremos estrategias para reducir tu factura de LLM sin sacrificar la calidad.",
    },
    "hazel-saenz": {
      title: "Developer Advocate @ AWS",
      description:
        "Hazel es Developer Advocate en AWS apasionada por hacer la IA accesible a través de herramientas de código abierto. Crea demos y talleres que ayudan a los desarrolladores a comenzar con agentes de IA y Python, con especial enfoque en aplicaciones creativas y amigables para principiantes.",
      talkTitle: "Crea tu DJ con IA: Agentes en Python y Open Source",
      talkDescription:
        "¡Crea tu propio DJ con IA usando agentes Python y herramientas de código abierto! En este taller para principiantes aprenderás los fundamentos de los agentes de IA, construirás un sistema de recomendación de música impulsado por Python y lo conectarás a APIs de música reales. No se requiere experiencia previa en IA, solo curiosidad y amor por la música. Al final tendrás un DJ de IA funcional que crea playlists basadas en el estado de ánimo, género y preferencias personales.",
    },
    "emanuel-zapata-querubin": {
      title: "Ingeniero de Datos @ Lovelytics",
      description:
        "Emanuel es Ingeniero de Datos en Lovelytics especializado en MLOps y arquitectura de plataformas de datos. Tiene experiencia práctica llevando proyectos de ML desde notebooks exploratorios hasta pipelines de producción completamente automatizados en Databricks, y es apasionado por cerrar la brecha entre la ciencia de datos y la ingeniería.",
      talkTitle: "De Notebook a Producción: MLOps End-to-End en Databricks",
      talkDescription:
        "Supera los Jupyter notebooks y despliega modelos de machine learning en producción usando las mejores prácticas de MLOps en Databricks. En este taller intermedio aprenderás a estructurar proyectos de ML para producción, implementar pipelines CI/CD para modelos, gestionar experimentos con MLflow, desplegar modelos como APIs REST y monitorearlos en producción. Recorreremos un ejemplo completo de extremo a extremo desde la preparación de datos hasta el reentrenamiento automatizado.",
    },
    "santiago-suarez-sampayo": {
      title: "Ingeniero de Datos @ Aimpoint Digital",
      description:
        "Santiago es Ingeniero de Datos en Aimpoint Digital con experiencia construyendo aplicaciones e integraciones impulsadas por IA. Le gusta crear herramientas prácticas para desarrolladores que combinan APIs de IA de vanguardia con plataformas de comunicación cotidianas, haciendo que capacidades avanzadas de IA sean accesibles para cualquier usuario.",
      talkTitle:
        "Construye un Asistente de Código estilo OpenClaw en WhatsApp con el SDK de Agentes de Claude",
      talkDescription:
        "Construye un asistente de codificación de IA completamente funcional que vive en WhatsApp, inspirado en OpenClaw, usando el SDK de Agentes de Claude y Python. En este taller práctico aprenderás a integrar el SDK de Agentes de Claude con la API de WhatsApp Business, diseñar flujos conversacionales para asistencia de código, manejar conversaciones de múltiples turnos con memoria y desplegar tu asistente en la nube. Terminarás con un compañero de codificación de IA accesible desde cualquier dispositivo.",
    },
    "johnny-montoya": {
      title: "Ingeniero de IA @ Unloquer",
      description:
        "Johnny es Ingeniero de IA en Unloquer y creador de contenido sobre datos e IA bajo el nombre @eldelosdatos_. Se especializa en construir sistemas agénticos que codifican el conocimiento organizacional, ayudando a las empresas a convertir sus procesos internos y experiencia en skills ejecutables para agentes.",
      talkTitle:
        "Skills ejecutables: cómo enseñarle a un agente cómo funciona tu empresa",
      talkDescription:
        "¿Cómo crear un agente de IA que realmente entienda cómo funciona tu empresa? En este taller aprenderás a diseñar e implementar skills ejecutables: piezas reutilizables y estructuradas de conocimiento organizacional que los agentes pueden invocar. Cubriremos arquitectura de skills, representación del conocimiento en Python, integración de skills con frameworks de agentes populares y prueba de la confiabilidad de los skills. Al final tendrás un blueprint para construir un cerebro empresarial que tus agentes puedan usar.",
    },
    "nicolas-roldan-fajardo": {
      title: "Ingeniero de ML @ Loka",
      description:
        "Nicolás es Ingeniero de ML en Loka enfocado en marcos de evaluación para sistemas de IA agéntica. Trabaja en el diseño de suites de pruebas robustas que validan el comportamiento de agentes en flujos de trabajo complejos de múltiples pasos, aportando rigor de ingeniería al reto frecuentemente subestimado de la evaluación de IA.",
      talkTitle:
        "La Comunidad de las Evaluaciones Agénticas: ¿Cómo evaluar un agente?",
      talkDescription:
        "¿Cómo sabes si tu agente de IA realmente está haciendo lo correcto? En este taller exploraremos marcos de evaluación prácticos para sistemas agénticos. Formaremos una comunidad de técnicas de evaluación—desde pruebas unitarias simples hasta evaluaciones de comportamiento complejas—y las aplicaremos a escenarios reales de agentes. Aprenderás a definir criterios de evaluación, implementar suites de pruebas automatizadas, medir el rendimiento de los agentes cuantitativamente y rastrear la mejora a lo largo del tiempo.",
    },
    "maria-fernanda-rojas-castro": {
      title: "Ingeniera de ML @ Loka",
      description:
        "María Fernanda es Ingeniera de ML en Loka con experiencia en la construcción y evaluación de sistemas inteligentes. Se enfoca en metodologías prácticas para garantizar la confiabilidad y seguridad de los agentes de IA, y colabora en investigación sobre técnicas de evaluación escalables para flujos de trabajo agénticos en producción.",
      talkTitle:
        "La Comunidad de las Evaluaciones Agénticas: ¿Cómo evaluar un agente?",
      talkDescription:
        "¿Cómo sabes si tu agente de IA realmente está haciendo lo correcto? En este taller exploraremos marcos de evaluación prácticos para sistemas agénticos. Formaremos una comunidad de técnicas de evaluación—desde pruebas unitarias simples hasta evaluaciones de comportamiento complejas—y las aplicaremos a escenarios reales de agentes. Aprenderás a definir criterios de evaluación, implementar suites de pruebas automatizadas, medir el rendimiento de los agentes cuantitativamente y rastrear la mejora a lo largo del tiempo.",
    },
    "jonathan-vallejo-munoz": {
      title: "Ingeniero de Software @ Lendingfront",
      description:
        "Jonathan es Ingeniero de Software en Lendingfront trabajando en la intersección del desarrollo asistido por IA y la arquitectura de software. Defiende prácticas de desarrollo disciplinadas que van más allá de la programación basada en prompts, y explora cómo las especificaciones estructuradas pueden hacer que el código generado por IA sea más coherente y mantenible.",
      talkTitle:
        "Más allá del Vibe Coding: Spec Driven Development con Code Graphs",
      talkDescription:
        "Ve más allá del vibe coding y aprende a usar especificaciones y grafos de código para guiar el desarrollo asistido por IA. En este taller descubrirás cómo las especificaciones estructuradas y los grafos de dependencias dan a las herramientas de codificación de IA el contexto que necesitan para producir código coherente y mantenible. Trabajaremos con proyectos reales de Python para definir specs, generar grafos de código y conectarlos a tu flujo de trabajo asistido por IA, resultando en código que tiene sentido arquitectónicamente.",
    },
    "esneider-bravo-benitez": {
      title: "Ingeniero de Software @ Muno Labs",
      description:
        "Esneider es Ingeniero de Software en Muno Labs con enfoque en herramientas de generación de código y experiencia del desarrollador. Explora cómo las especificaciones estructuradas pueden guiar a los asistentes de codificación de IA para producir resultados más confiables, y contribuye a herramientas de código abierto para el desarrollo dirigido por especificaciones.",
      talkTitle:
        "Más allá del Vibe Coding: Spec Driven Development con Code Graphs",
      talkDescription:
        "Ve más allá del vibe coding y aprende a usar especificaciones y grafos de código para guiar el desarrollo asistido por IA. En este taller descubrirás cómo las especificaciones estructuradas y los grafos de dependencias dan a las herramientas de codificación de IA el contexto que necesitan para producir código coherente y mantenible. Trabajaremos con proyectos reales de Python para definir specs, generar grafos de código y conectarlos a tu flujo de trabajo asistido por IA, resultando en código que tiene sentido arquitectónicamente.",
    },
    "maris-botero": {
      title: "Ingeniera de ML @ Mercado Libre",
      description:
        "Maris es Ingeniera de ML en Mercado Libre apasionada por hacer la IA accesible para desarrolladores de todos los niveles. Se especializa en construir sistemas multi-agente con Python y le encanta desmitificar conceptos complejos de IA a través de talleres prácticos y amigables para principiantes.",
      talkTitle: "De Prompts a Agentes: sistemas inteligentes con Python",
      talkDescription:
        "Da tus primeros pasos desde escribir prompts simples hasta construir sistemas multi-agente inteligentes con Python. En este taller para principiantes aprenderás los fundamentos de los agentes de IA, cómo se diferencian de las simples llamadas a LLM, cómo encadenar agentes para tareas complejas y cómo darles herramientas y memoria. Usando frameworks populares de Python, construirás un sistema multi-agente funcional al final de la sesión, sin experiencia previa en IA.",
    },
    "jose-hernan-ortiz-ocampo": {
      title: "Ingeniero Senior de ML @ Loka",
      description:
        "José Hernán es Ingeniero Senior de ML en Loka con profunda experiencia en frameworks de IA agéntica. Ha diseñado y construido sistemas multi-agente en producción usando diversas herramientas de orquestación, y aporta una perspectiva pragmática y orientada a la ingeniería al desarrollo de IA, enfocada en lo que funciona en producción más que en lo que impresiona en demos.",
      talkTitle:
        "LangGraph y Strands Agents: Conceptos Clave, Patrones y Trade-offs",
      talkDescription:
        "Sumérgete en dos poderosos frameworks agénticos—LangGraph y Strands Agents—y aprende cuándo usar cada uno. Este taller avanzado cubre los conceptos fundamentales detrás de ambos frameworks: máquinas de estados, orquestación basada en grafos, uso de herramientas y gestión de memoria. Construiremos la misma aplicación agéntica en ambos frameworks, compararemos sus fortalezas y limitaciones, y discutiremos los trade-offs arquitectónicos para ayudarte a elegir la herramienta correcta para tus sistemas de IA en producción.",
    },
    "isabel-mora": {
      title: "Ingeniera Junior de ML @ Loka",
      description:
        "Isabel es Ingeniera Junior de ML en Loka contribuyendo al desarrollo y evaluación de sistemas de IA agéntica. Aporta perspectivas frescas a los desafíos de diseño e implementación de agentes, y es apasionada por hacer que los frameworks complejos de IA sean comprensibles y accesibles.",
      talkTitle: "",
      talkDescription: "",
    },
    "jose-hernan-ortiz-ocampo-2": {
      title: "Ingeniero Senior de ML @ Loka",
      description:
        "José Hernán es Ingeniero Senior de ML en Loka con profunda experiencia en frameworks de IA agéntica. Ha diseñado y construido sistemas multi-agente en producción usando diversas herramientas de orquestación, y aporta una perspectiva pragmática y orientada a la ingeniería al desarrollo de IA, enfocada en lo que funciona en producción más que en lo que impresiona en demos.",
      talkTitle:
        "Equipos Multi-Agente en el Desarrollo Asistido por IA: Un Vistazo al Futuro de la Programación",
      talkDescription:
        "Obtén una visión del futuro de la programación, donde equipos de agentes de IA colaboran con desarrolladores humanos. En este taller explorarás patrones de vanguardia para la colaboración multi-agente en el desarrollo asistido por IA: agentes de generación de código, agentes de revisión, agentes de pruebas y estrategias de orquestación. Construiremos un mini equipo de desarrollo multi-agente usando Python y el SDK de Claude, y discutiremos hacia dónde va esta tecnología y cómo los desarrolladores pueden prepararse.",
    },
    "daniel-sabogal": {
      title: "Pasante de Datos y ML @ Loka",
      description:
        "Daniel es Pasante de Datos y ML en Loka apasionado por explorar la intersección de los sistemas multi-agente y los flujos de trabajo de desarrollo de software. Aporta curiosidad e ideas frescas al futuro de la programación asistida por IA, y comparte sus aprendizajes construyendo con herramientas de IA de vanguardia.",
      talkTitle: "",
      talkDescription: "",
    },
    "jose-arturo-osorio-londono": {
      title: "Ingeniero de Datos @ Lovelytics",
      description:
        "José Arturo es Ingeniero de Datos en Lovelytics especializado en la modernización de pipelines y flujos de trabajo de datos. Explora cómo la IA generativa está transformando las prácticas tradicionales de ingeniería de datos en sistemas adaptativos e inteligentes, y ayuda a los equipos a navegar la evolución del ETL rígido a arquitecturas agénticas dinámicas.",
      talkTitle:
        "De ETL a Agentic Workflows: la evolución de la ingeniería de datos en la era de la IA generativa",
      talkDescription:
        "Los pipelines ETL tradicionales son determinísticos y rígidos. Los flujos de trabajo agénticos impulsados por IA generativa pueden adaptarse, razonar y manejar lo inesperado. En este taller aprenderás cómo evolucionar tus prácticas de ingeniería de datos desde el ETL clásico hacia flujos de trabajo agénticos inteligentes. Cubriremos el diseño de agentes para extracción de datos, decisiones de transformación y estrategias de carga, así como cómo combinar herramientas de orquestación tradicionales con agentes de IA para arquitecturas híbridas.",
    },
    "biviana-marcela-suarez-sierra": {
      title:
        "Profesora vinculada al área de Computación y analítica @ Universidad EAFIT",
      description:
        "Biviana Marcela Suárez Sierra es estadística e investigadora en ciencia de datos, con experiencia en modelación estadística, aprendizaje automático y análisis computacional de datos complejos. Actualmente es profesora universitaria y dirige proyectos de investigación interdisciplinarios que integran estadística, programación y análisis de datos para abordar problemas en salud, energía, medio ambiente y humanidades digitales. Su trabajo reciente se ha centrado en el desarrollo de metodologías para el análisis de grandes corpus textuales mediante técnicas de procesamiento de lenguaje natural (NLP), minería de textos y aprendizaje estadístico. Como investigadora vinculada al proyecto Arte, ciencia y tecnología en la esfera pública, ha liderado equipos conformados por estudiantes e investigadores de diversas disciplinas para estudiar cómo circulan los discursos sobre ciencia, cultura y sociedad en medios de comunicación colombianos. Cuenta con más de una década de experiencia en investigación y análisis de datos. Su interés principal es construir puentes entre las herramientas computacionales y los problemas reales.",
      talkTitle:
        "NLP en la práctica: de lingüística de corpus a RAG con Python",
      talkDescription:
        "El procesamiento de lenguaje natural ofrece hoy un conjunto maduro de herramientas para analizar corpus textuales de forma sistemática y reproducible, pero el camino entre tener los documentos y obtener resultados no siempre es claro. Este workshop recorre ese camino de principio a fin. En dos horas, los participantes construirán una comprensión del ecosistema NLP: su historia, su lógica y sus métodos. La sesión abre con una línea de tiempo que va desde los primeros modelos basados en reglas hasta los transformers, seguida de un mapa de técnicas organizadas por tipo de problema (clasificación, extracción de entidades, búsqueda semántica, generación) para que cada participante pueda identificar qué método necesita ante un problema textual concreto. La segunda parte cubre dos implementaciones con Python. Primero, modelado de tópicos con BERTopic, revisando el pipeline interno de embeddings, UMAP y HDBSCAN. Segundo, un asistente conversacional con RAG: indexación del corpus, recuperación semántica y conexión con un modelo de lenguaje para responder consultas sobre los documentos. Al finalizar, cada participante tendrá un notebook funcional con los dos pipelines y un mapa claro del ecosistema para orientar sus propios proyectos de análisis textual.",
      workshopRequirements:
        "Se recomienda traer un computador portátil con una cuenta de Google para acceder a Google Colab, donde estarán disponibles todos los notebooks. Los participantes que utilicen Colab no necesitan instalar nada previamente. Para quienes prefieran trabajar en un entorno local, se recomienda tener instalado Python 3.10 o superior. Se asume familiaridad básica con Python. No se requiere experiencia previa en procesamiento de lenguaje natural. Se recomienda tener un grupo de textos para el análisis.",
    },
    "andres-felipe-puerta-velez": {
      title:
        "Asistente de investigación y estudiante de maestría en matemáticas aplicadas @ Universidad EAFIT",
      description:
        "Andrés Felipe Puerta Velez es estudiante de maestría en matemáticas aplicadas y asistente de investigación, con experiencia en procesamiento de lenguaje natural (NLP), integración de bases de datos heterogéneas y análisis de datos. Actualmente trabaja en el uso de la g-formula bayesiana como solución a la multiplicidad de estimadores de efecto causal y en el uso de modelos de machine learning para la estimación de emisiones de gases contaminantes y consumo de combustible para motos de bajo cilindraje en el contexto colombiano. Como asistente de investigación del proyecto Análisis Comparativo de Percepciones sobre Comportamientos Protectores frente al COVID-19 en Colombia, ha trabajado en equipos multidisciplinarios para estudiar cómo circula el discurso público en redes sociales y su comportamiento respecto a hábitos de cuidado durante la pandemia.",
      talkTitle: "",
      talkDescription: "",
    },
    "dora-cecilia-alzate-gallo": {
      title: "Estudiante de la Maestría en Estudios Humanísticos @ EAFIT",
      description:
        "Dora Cecilia Alzate Gallo es estudiante de la Maestría en Estudios Humanísticos, vinculada al área de lenguaje y a la Escuela de Artes y Humanidades. Compartirá los principales desafíos y decisiones lingüísticas que permitieron adaptar estas herramientas al español y mejorar la calidad de los resultados obtenidos en el procesamiento de textos.",
      talkTitle: "",
      talkDescription: "",
    },
    "karen-melissa-gomez-montoya": {
      title:
        "Ingeniera matemática - Asistente en investigación @ Universidad EAFIT",
      description:
        "Karen Melissa Gomez Montoya es ingeniera matemática y estudiante de maestría en Ciencia de Datos y Analítica en EAFIT, donde también se desempeña como asistente de investigación en proyectos de humanidades digitales y esfera pública. Su trabajo se sitúa en la intersección entre métodos computacionales y análisis de corpus textuales.",
      talkTitle: "",
      talkDescription: "",
    },
    "jesus-alfredo-reyes-vargas": {
      title: "Ingeniero de Software @ EPAM Systems",
      description:
        "Jesús Alfredo es Ingeniero de Software en EPAM Systems apasionado por el aprendizaje continuo y la educación para desarrolladores impulsada por IA. Explora cómo las herramientas de IA pueden acelerar el desarrollo de habilidades y ayudar a los ingenieros a mantenerse relevantes en un panorama que cambia rápidamente.",
      talkTitle: "Ingenieros a prueba del futuro con AI-DLC",
      talkDescription:
        "La IA está transformando no solo lo que construyen los ingenieros, sino cómo aprenden y crecen. En este taller descubrirás AI-DLC (Currículo de Aprendizaje Impulsado por IA), un marco para crear rutas de aprendizaje personalizadas y adaptativas para ingenieros de software usando herramientas de IA. Exploraremos cómo diseñar currículos de aprendizaje que incorporen asistencia de IA, desarrollar habilidades que complementen en lugar de competir con la IA, y crear planes de desarrollo que mantendrán a los ingenieros relevantes y valiosos por años.",
    },
    "carlos-alberto-riveros-varela": {
      title: "Ingeniero de Software @ EPAM Systems",
      description:
        "Carlos Alberto es Ingeniero de Software en EPAM Systems enfocado en el crecimiento de los desarrolladores y metodologías de aprendizaje modernas. Le apasiona combinar la IA con rutas de aprendizaje estructuradas para ayudar a los ingenieros a preparar sus carreras para el futuro y adaptarse a las demandas del sector en rápida evolución.",
      talkTitle: "",
      talkDescription: "",
    },
    "felipe-sanchez": {
      title: "Ingeniero de Datos @ Aimpoint Digital",
      description:
        "Felipe es Ingeniero de Datos en Aimpoint Digital con experiencia construyendo servidores de herramientas de IA e integraciones. Le gusta crear tutoriales prácticos que hacen accesibles y divertidos los conceptos complejos de desarrollo de IA, y cree firmemente en aprender construyendo proyectos reales y divertidos.",
      talkTitle:
        "Construye tu Primer Servidor de Herramientas de IA: Una Pokédex con FastMCP y Python",
      talkDescription:
        "¡Construye tu primer servidor de herramientas de IA desde cero usando FastMCP y Python, con la Pokédex como guía! En este taller práctico aprenderás el Protocolo de Contexto de Modelo (MCP), configurarás un servidor FastMCP, implementarás herramientas personalizadas que los agentes de IA pueden llamar y conectarás todo en un asistente de IA Pokédex funcional. No se necesita experiencia previa con MCP, solo conocimiento de Python y amor por Pokémon.",
    },
    "daniel-galvis": {
      title: "Ingeniero de Datos @ Aimpoint Digital",
      description:
        "Daniel es Ingeniero de Datos en Aimpoint Digital enfocado en herramientas de IA y experiencia del desarrollador. Aporta experiencia práctica en la construcción de servicios de IA basados en Python e integraciones de herramientas, y disfruta colaborar en talleres que hacen el desarrollo de IA de vanguardia accesible para una audiencia amplia.",
      talkTitle: "",
      talkDescription: "",
    },
    "francisco-javier-moya-ortiz": {
      title: "Analista de Datos @ Aimpoint Digital",
      description:
        "Francisco Javier es Analista de Datos en Aimpoint Digital especializado en inteligencia de negocios y analítica agéntica. Explora cómo los agentes de IA pueden integrarse con herramientas modernas de BI como Sigma para crear dashboards autónomos y auto-explicativos que van mucho más allá de los gráficos estáticos.",
      talkTitle:
        "Dashboards que piensan: construye analítica agéntica con Sigma",
      talkDescription:
        "Aprende a construir dashboards que no solo muestran datos, ¡sino que piensan! En este taller combinarás las capacidades de inteligencia de negocios de Sigma con agentes de IA basados en Python para crear dashboards de analítica agéntica. Cubriremos la integración de LLMs con Sigma, la construcción de narrativas de datos impulsadas por agentes, la automatización del descubrimiento de insights y la creación de dashboards que pueden responder preguntas de seguimiento y adaptarse dinámicamente al contexto del usuario.",
    },
    "andres-vasquez-restrepo": {
      title: "Científico de Datos @ Cuesta Partners",
      description:
        "Andrés es Científico de Datos en Cuesta Partners aplicando machine learning e IA a la ciencia alimentaria y el diseño de productos nutricionales. Su trabajo interdisciplinario conecta la IA basada en Python con la experiencia en nutrición y formulación, demostrando el poder de la IA en dominios no tradicionales.",
      talkTitle:
        "PyBlend: Hacia un Científico Alimentario de IA para el Diseño de Productos Nutricionales",
      talkDescription:
        "Descubre cómo Python y la IA están transformando el diseño de productos nutricionales. En este taller serás introducido a PyBlend, un framework que modela el complejo problema de optimización del diseño de formulaciones nutricionales. Exploraremos cómo los algoritmos de machine learning pueden navegar vastos espacios de ingredientes, equilibrar restricciones nutricionales y generar formulaciones de productos novedosas. Los asistentes obtendrán experiencia práctica con el diseño de productos impulsado por IA y aprenderán cómo Python hace posibles las aplicaciones de IA interdisciplinarias.",
    },
    "cesar-mateo-gonzalez-rodriguez": {
      title: "Científico de Datos @ GoDaddy",
      description:
        "César Mateo es Científico de Datos en GoDaddy especializado en detección de anomalías y aprendizaje no supervisado. Aplica técnicas de aprendizaje profundo, incluyendo autoencoders, para encontrar patrones raros pero críticos en conjuntos de datos a gran escala, combinando rigor teórico con ingeniería práctica para entregar soluciones listas para producción.",
      talkTitle:
        "Cómo encontrar perlas en el fondo del mar – Autoencoders como modelos de detección de anomalías",
      talkDescription:
        "Como encontrar perlas en el fondo del océano, detectar anomalías raras en grandes conjuntos de datos requiere técnicas sofisticadas. En este taller aprenderás la teoría y práctica de las arquitecturas de autoencoders, cómo entrenarlos para la detección de anomalías, cómo establecer límites de decisión y cómo evaluar su rendimiento. Trabajaremos con conjuntos de datos del mundo real y construiremos pipelines completos de detección de anomalías en Python.",
    },
    "juan-guillermo-gomez": {
      title: "Fundador @ DevHack",
      description:
        "Juan Guillermo es el fundador de DevHack y reconocido speaker sobre Python, IA y arquitectura de software en toda América Latina. Tiene años de experiencia enseñando a desarrolladores sobre patrones prácticos de implementación de IA y diseño de sistemas multi-agente, y es un apasionado defensor de la comunidad Python.",
      talkTitle: "Patrones, Protocolos y Tácticas para Sistemas Multi-Agente",
      talkDescription:
        "Domina los patrones esenciales, protocolos y tácticas para construir sistemas multi-agente robustos en Python. En este taller aprenderás patrones arquitectónicos probados para la colaboración multi-agente, protocolos de comunicación entre agentes, estrategias de manejo de errores y recuperación, y tácticas de implementación prácticas. Basándonos en experiencia del mundo real, construiremos múltiples arquitecturas de agentes y analizaremos sus trade-offs, dándote un conjunto de herramientas reutilizable para diseñar sistemas multi-agente.",
    },
    "mauricio-repetto-ferrero": {
      title: "Ingeniero de IA @ Nortal",
      description:
        "Mauricio es Ingeniero de IA en Nortal con pasión por optimizar el consumo de tokens en LLMs. Desarrolló TOON, una herramienta para crear representaciones de datos compactas y semánticamente ricas que reducen el uso de tokens mientras mejoran la comprensión de la IA, ayudando a los equipos a recortar costos sin perder rendimiento del modelo.",
      talkTitle:
        "¡Es ahorra o nunca! Dieta de tokens con TOON para agrandar tu bolsillo y que la IA entienda más",
      talkDescription:
        "Los tokens cuestan dinero, y cada token innecesario que envías a un LLM es dinero desperdiciado. En este taller aprenderás cómo poner tus aplicaciones de IA a dieta de tokens usando TOON, una herramienta Python para crear representaciones de datos compactas y semánticamente ricas. Cubriremos la arquitectura de TOON, cómo serializar estructuras de datos complejas eficientemente, medir la reducción de tokens e integrar TOON en pipelines de IA existentes, sin perder la información que tus modelos necesitan.",
    },
    "dario-jesus-guzman-duran": {
      title: "Ingeniero de Software @ Gudar Devs",
      description:
        "Darío Jesús es Ingeniero de Software en Gudar Devs especializado en procesamiento de datos de alto rendimiento y Python asíncrono. Construye pipelines escalables de procesamiento de video que aprovechan las capacidades asíncronas de Python para máximo rendimiento, y es apasionado por exprimir cada bit de rendimiento de las cargas de trabajo de I/O en Python.",
      talkTitle: "Ingestión de video de alto rendimiento con Python asíncrono",
      talkDescription:
        "El video es uno de los tipos de datos más exigentes para procesar. En este taller aprenderás cómo construir pipelines de ingesta de video de alto rendimiento usando las capacidades asíncronas de Python. Cubriremos los fundamentos de asyncio para el procesamiento de video ligado a I/O, extracción y procesamiento concurrente de fotogramas, patrones de cola asíncrona para pipelines de datos, perfilado y optimización de rendimiento, y consideraciones de despliegue en el mundo real. Construye un sistema de ingesta de video asíncrono de nivel producción desde cero.",
    },
    "juan-jose-barrientos-salazar": {
      title: "Ingeniero de IA @ The TRES Group",
      description:
        "Juan José es Ingeniero de IA en The TRES Group con sólidas bases en las matemáticas del aprendizaje profundo. Se especializa en entender e implementar arquitecturas transformer desde primeros principios usando PyTorch, haciendo que el funcionamiento interno de los LLMs sea accesible para ingenieros que quieren ir más allá de las llamadas a API.",
      talkTitle:
        "LLMs a profundidad: Cómo funciona matemáticamente un LLM (y su implementación con PyTorch)",
      talkDescription:
        "Desmitifica las matemáticas detrás de los Modelos de Lenguaje de Gran Escala e impleméntalas desde cero en PyTorch. Este taller avanzado te lleva a través de las bases matemáticas completas: mecanismos de atención, arquitectura transformer, codificaciones posicionales, normalización de capas y dinámica de entrenamiento. Para cada concepto matemático escribiremos la implementación correspondiente en PyTorch, dándote una comprensión profunda y práctica de cómo funcionan realmente los LLMs bajo el capó.",
    },
    "raul-rodriguez": {
      title: "Ingeniero de IA @ Mercado Libre",
      description:
        "Raúl es Ingeniero de IA en Mercado Libre trabajando en aplicaciones innovadoras de copiloto con IA. Construyó NORTH, un sistema que usa Claude como verdadero copiloto de codificación y toma de decisiones para flujos de trabajo de ingeniería del mundo real, demostrando qué significa cuando la IA va más allá del autocompletado y se convierte en un auténtico socio de ingeniería.",
      talkTitle: "NORTH: Claude como copiloto real",
      talkDescription:
        "Aprende cómo NORTH usa Claude como un verdadero copiloto de codificación, no solo un completador de código, sino un auténtico socio de ingeniería. En este taller explorarás la arquitectura de NORTH y aprenderás cómo construir integraciones de copiloto de IA similares usando la API de Claude y Python. Cubriremos la ingeniería de prompts para asistencia de codificación, el mantenimiento del contexto a lo largo de sesiones largas, la integración con flujos de trabajo de desarrollo y la construcción de los bucles de retroalimentación que hacen a los copilotos de IA genuinamente útiles.",
    },
    "jeronimo-lopez-gomez": {
      title: "Investigador @ Universidad de Antioquia",
      description:
        "Jerónimo es investigador en la Universidad de Antioquia especializado en co-diseño hardware-software y aceleración de machine learning. Trabaja en el despliegue de modelos de ML en FPGAs y otras plataformas de hardware usando hls4ml y Python, uniendo la brecha entre el desarrollo de ML de alto nivel en Python y la implementación en hardware de bajo nivel.",
      talkTitle: "hls4ml: De Modelos Python a Aceleración en Hardware",
      talkDescription:
        "Une la brecha entre el machine learning en Python y la implementación en hardware usando hls4ml. En este taller aprenderás cómo tomar modelos de ML entrenados en Python (TensorFlow, PyTorch, scikit-learn) y desplegarlos en FPGAs usando la librería hls4ml. Cubriremos la cuantización de modelos, el entrenamiento consciente del hardware, el flujo de síntesis HLS, el perfilado de rendimiento y las consideraciones prácticas para desplegar ML en el edge. No se requiere experiencia previa con FPGAs.",
    },
    "natalia-echeverri-duran": {
      title: "Investigadora @ Universidad de Antioquia",
      description:
        "Natalia es investigadora en la Universidad de Antioquia enfocada en la aceleración hardware del machine learning. Explora técnicas para mapear eficientemente modelos de ML de Python a implementaciones FPGA para aplicaciones de computación en el borde, contribuyendo a la investigación en la frontera del co-diseño de hardware para IA.",
      talkTitle: "hls4ml: De Modelos Python a Aceleración en Hardware",
      talkDescription:
        "Une la brecha entre el machine learning en Python y la implementación en hardware usando hls4ml. En este taller aprenderás cómo tomar modelos de ML entrenados en Python (TensorFlow, PyTorch, scikit-learn) y desplegarlos en FPGAs usando la librería hls4ml. Cubriremos la cuantización de modelos, el entrenamiento consciente del hardware, el flujo de síntesis HLS, el perfilado de rendimiento y las consideraciones prácticas para desplegar ML en el edge. No se requiere experiencia previa con FPGAs.",
    },
  },
} satisfies Record<SiteLocale, SpeakerContentBySlug>;
