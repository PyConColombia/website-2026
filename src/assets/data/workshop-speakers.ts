import type { Speaker, SpeakerFormat, SpeakerTrack } from "./speakers";

type SpeakerInput = Omit<Speaker, "id" | "format"> & { format?: SpeakerFormat };

const workshopSpeakerImages: Record<string, string> = {
  "david-felipe-vanegas-ramirez":
    "https://drive.google.com/open?id=1b9bfGWURAOpY2WbTI_scZy-2DYabdRrX",
  "felix-mino":
    "https://drive.google.com/open?id=1fxz9HDuDz-W6rvuK3rCwFA5fsJynDl-1",
  "roberto-bedoya-garcia":
    "https://drive.google.com/open?id=1Qqd58jgAlknQsLZ6Mz1pyQtIpMWTakDM",
  "hazel-saenz":
    "https://drive.google.com/open?id=1Te_ikbiDwTLuT2w34YaPwZTpKDFMjUer",
  "emanuel-zapata-querubin":
    "https://drive.google.com/open?id=1s22wX60ADCVEsdWDVs3ndk3Jh48vvqZu",
  "johnny-montoya":
    "https://drive.google.com/open?id=1ujbpOnGTO1e2iUATOha211KPHNAdECfg",
  "nicolas-roldan-fajardo":
    "https://drive.google.com/open?id=1QLMmGgRLyeJog9mavp1Y8S2st1E_1l3H",
  "maria-fernanda-rojas-castro":
    "https://drive.google.com/open?id=1e6HMipgEz5KH8f1jxqdssrlsveBiQcPZ",
  "jonathan-vallejo-munoz":
    "https://drive.google.com/open?id=1s8FLMToZsYUsjaYm806DkCeH3F2uFipi",
  "esneider-bravo-benitez":
    "https://drive.google.com/open?id=1WBMOpcJFq7JUisr6xuBS30bbl8Nox4N3",
  "maris-botero":
    "https://drive.google.com/open?id=1xkxTMFFdW7I4Wj3QwxfdO8fW24gFjJ6T",
  "jose-hernan-ortiz-ocampo":
    "https://drive.google.com/open?id=1BvNPNV2-ySX_RPyueoDVe7mSHRAf962B",
  "jose-hernan-ortiz-ocampo-2":
    "https://drive.google.com/open?id=1sLhZStG7F81_l1E0uzFJw3chp-jEMKex",
  "isabel-mora":
    "https://drive.google.com/open?id=1nU-Fs02N2n2o1_fc9x2D4zkWfusqYbbD",
  "daniel-sabogal":
    "https://drive.google.com/open?id=1yTsqlAU6IbSX_MEtG7N2VXMWiloNddyE",
  "jose-arturo-osorio-londono":
    "https://drive.google.com/open?id=1wlUyB2lk8H6y_JGMWaL_KX4mcGxbjlXv",
  "biviana-marcela-suarez-sierra":
    "https://drive.google.com/open?id=14ai04L9V-lu_YUkI35pWx-DLeNe7XnUv",
  "andres-felipe-puerta-velez":
    "https://drive.google.com/open?id=1IS3v7belJWaKuYpNoPmK-2SpMa2fymmU",
  "dora-cecilia-alzate-gallo":
    "https://drive.google.com/open?id=11AXMr3kYvvyeUlUOU3_oAryLw7E4LD6g",
  "karen-melissa-gomez-montoya":
    "https://drive.google.com/open?id=17LVLNgLuF0bPlWuf-vg_oPxdC_lIr8W0",
  "jesus-alfredo-reyes-vargas":
    "https://drive.google.com/open?id=1Xqy8wOTIGXG0BvO2-3u5BT8EECal-IcF",
  "carlos-alberto-riveros-varela":
    "https://drive.google.com/open?id=1Ylw2XaQyoj51knAB_N10q-8iX_cPZApQ",
  "felipe-sanchez":
    "https://drive.google.com/open?id=1aWV1yGSsHmBYHp3-B3qRO4Ai77RkHVLE",
  "daniel-galvis":
    "https://drive.google.com/open?id=1qqImKlUVywLlkobX0DVoGZr-u8C0TVK4",
  "francisco-javier-moya-ortiz":
    "https://drive.google.com/open?id=1csx5wyhuLmZJ2PHuuX4VrTnv2ouym3yk",
  "andres-vasquez-restrepo":
    "https://drive.google.com/open?id=1ZhqIVVbS_2Aav-PugOsSYGIMpMK2LMor",
  "cesar-mateo-gonzalez-rodriguez":
    "https://drive.google.com/open?id=1Da35UUnZ8YMo5kun0QLggpbYpCKcg5MI",
  "juan-guillermo-gomez":
    "https://drive.google.com/open?id=1WWEv7sL9pX4mnftU1wW5mrVoEp4wK5qb",
  "mauricio-repetto-ferrero":
    "https://drive.google.com/open?id=1q_SlUIy1c-eBEzMIR9buwYxwa_Kw_sIN",
  "dario-jesus-guzman-duran":
    "https://drive.google.com/open?id=1ssubbUjQ6qbjQzGl-LdVssss8MAZxJ0N",
  "juan-jose-barrientos-salazar":
    "https://drive.google.com/open?id=1oCpnoace5gdVDC2HFVdbqAWTQNQaeJUc",
  "raul-rodriguez":
    "https://drive.google.com/open?id=1Z_aZ5UTegUYWnBe1TbdoOMzmcUYzBDB8",
  "jeronimo-lopez-gomez":
    "https://drive.google.com/open?id=1GS3RRsomxCBqf1Tu0MbwTNGR6aTGIqBg",
  "natalia-echeverri-duran":
    "https://drive.google.com/open?id=1WJWk9vaTsXqAfP3qjpFquXRoXg1FI11r",
  "angie-katherine-reyes":
    "https://drive.google.com/open?id=1_VnqQ_auY0NHtlSv5JluF3LBIfLnXzmc",
  "elkin-javier-guerra-galeano":
    "https://drive.google.com/open?id=1OflXShgH7ig1EDesVvdObqXc47GKGS9R",
  "sebastian-rodriguez-colina":
    "https://drive.google.com/open?id=1HDPMXTg3uGp28m4rsNK2lNjxlPOM31RH",
  "douglas-ardila-garces":
    "https://drive.google.com/open?id=1AdTgHque9-0dFaw-6RYpK2aXIe7YJiK9",
  "david-stiven-jurado-chavarria":
    "https://drive.google.com/open?id=1F7dgfO-ta8QPYpbyof2m6mlNLk-VYILH",
};

const workshopSpeakerListBase: SpeakerInput[] = [
  // 1. From S3 to AI Agent
  {
    slug: "david-felipe-vanegas-ramirez",
    talkKey: "from-s3-to-ai-agent",
    name: "David Felipe Vanegas Ramirez",
    tracks: [
      "artificial-intelligence",
      "core-python",
      "data-science",
    ] as SpeakerTrack[],
    github: "https://github.com/davidvanegas2",
    linkedin: "https://www.linkedin.com/in/davidfvanegas",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 2. Stop mocking, start containerizing
  {
    slug: "felix-mino",
    talkKey: "stop-mocking-containerizing",
    name: "Felix Miño",
    tracks: ["web", "core-python"] as SpeakerTrack[],
    github: "https://github.com/felixminom",
    linkedin: "https://www.linkedin.com/in/felixminom",
    country: "Ecuador",
    language: "English / Inglés",
    level: "Beginner / Principiante",
    format: "workshop",
  },
  // 3. LLM Observability
  {
    slug: "roberto-bedoya-garcia",
    talkKey: "llm-observability",
    name: "Roberto Bedoya García",
    github: "https://github.com/Rbedoyag",
    linkedin: "https://www.linkedin.com/in/robertobedoyag",
    tracks: ["artificial-intelligence"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 4. DJ con IA
  {
    slug: "hazel-saenz",
    talkKey: "dj-ia-agentes",
    name: "Hazel Saenz",
    github: "https://github.com/hsaenzG",
    linkedin: "https://www.linkedin.com/in/hazelsaenz",
    tracks: ["artificial-intelligence"] as SpeakerTrack[],
    country: "Guatemala",
    language: "Spanish / Español",
    level: "Beginner / Principiante",
    format: "workshop",
  },
  // 5. MLOps Databricks
  {
    slug: "emanuel-zapata-querubin",
    talkKey: "mlops-databricks",
    name: "Emanuel Zapata Querubín",
    github: "https://github.com/Ezapataq07",
    linkedin: "https://www.linkedin.com/in/emanuel-zapata-querub%C3%ADn",
    tracks: ["machine-learning", "devops"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 6. Company Brain Skills
  {
    slug: "johnny-montoya",
    talkKey: "company-brain-skills",
    name: "Johnny Montoya",
    github: "https://github.com/eldelosdatos",
    linkedin: "https://www.linkedin.com/in/johnnymontoya",
    tracks: ["artificial-intelligence"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 8. Fellowship of Agentic Evaluations (primary + co-speaker)
  {
    slug: "nicolas-roldan-fajardo",
    talkKey: "fellowship-agentic-evaluations",
    name: "Nicolas Roldan Fajardo",
    github: "https://github.com/nroldanf",
    linkedin: "https://www.linkedin.com/in/nicolas-roldan-fajardo",
    tracks: ["artificial-intelligence", "machine-learning"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  {
    slug: "maria-fernanda-rojas-castro",
    talkKey: "fellowship-agentic-evaluations",
    name: "Maria Fernanda Rojas Castro",
    github: "https://github.com/mariarojasc",
    linkedin: "https://www.linkedin.com/in/mfernandarojasca",
    tracks: ["artificial-intelligence", "machine-learning"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 9. Spec Driven Code Graphs (primary + co-speaker)
  {
    slug: "jonathan-vallejo-munoz",
    talkKey: "spec-driven-code-graphs",
    name: "Jonathan Vallejo Muñoz",
    github: "https://github.com/jonathanvm13",
    linkedin: "https://www.linkedin.com/in/jonathanvm13",
    tracks: ["artificial-intelligence", "core-python"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  {
    slug: "esneider-bravo-benitez",
    talkKey: "spec-driven-code-graphs",
    name: "Esneider Bravo Benitez",
    github: "https://github.com/esneiderbravo",
    linkedin: "https://www.linkedin.com/in/esneider-bravo",
    tracks: ["artificial-intelligence", "core-python"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 10. Prompts to Agents
  {
    slug: "maris-botero",
    talkKey: "prompts-to-agents",
    name: "Maris Botero",
    github: "https://github.com/marisbotero",
    linkedin: "https://www.linkedin.com/in/marisbotero",
    tracks: ["artificial-intelligence", "core-python"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Beginner / Principiante",
    format: "workshop",
  },
  // 11. LangGraph and Strands Agents (primary + co-speaker with empty talk)
  {
    slug: "jose-hernan-ortiz-ocampo",
    talkKey: "langgraph-strands-agents",
    name: "Jose Hernan Ortiz Ocampo",
    github: "https://github.com/jhortizo",
    linkedin: "https://www.linkedin.com/in/jhortizo",
    tracks: ["artificial-intelligence"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Advanced / Avanzado",
    format: "workshop",
  },
  {
    slug: "isabel-mora",
    talkKey: "langgraph-strands-agents",
    name: "Isabel Mora",
    github: "https://github.com/isabelmorar",
    linkedin: "https://www.linkedin.com/in/isabel-mora-restrepo-a86031227",
    tracks: ["artificial-intelligence"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Advanced / Avanzado",
    format: "workshop",
  },
  // 12. Multi-Agent Teams in AI-Assisted Development (same primary, new talk, two co-speakers)
  {
    slug: "jose-hernan-ortiz-ocampo-2",
    talkKey: "multi-agent-teams-ai-dev",
    name: "Jose Hernan Ortiz Ocampo",
    github: "https://github.com/jhortizo",
    linkedin: "https://www.linkedin.com/in/jhortizo",
    tracks: ["artificial-intelligence"] as SpeakerTrack[],
    country: "Colombia",
    language: "English / Inglés",
    level: "All / Para todos los niveles",
    format: "workshop",
  },
  {
    slug: "daniel-sabogal",
    talkKey: "multi-agent-teams-ai-dev",
    name: "Daniel Sabogal",
    github: "https://github.com/daasabogalro",
    linkedin: "https://www.linkedin.com/in/daasabogalro",
    tracks: ["artificial-intelligence"] as SpeakerTrack[],
    country: "Colombia",
    language: "English / Inglés",
    level: "All / Para todos los niveles",
    format: "workshop",
  },
  // 13. ETL to Agentic Workflows
  {
    slug: "jose-arturo-osorio-londono",
    talkKey: "etl-agentic-workflows",
    name: "Jose Arturo Osorio Londoño",
    github: "https://github.com/arturo-osorio-ds",
    linkedin: "https://www.linkedin.com/in/arturo-osorio-ds",
    tracks: ["artificial-intelligence", "data-science"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "All / Para todos los niveles",
    format: "workshop",
  },
  // 14. NLP Corpus RAG (primary + co-speakers)
  {
    slug: "biviana-marcela-suarez-sierra",
    talkKey: "nlp-corpus-rag",
    name: "Biviana Marcela Suárez Sierra",
    tracks: ["artificial-intelligence", "data-science"] as SpeakerTrack[],
    github: "https://bimasusi.github.io/#about",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  {
    slug: "andres-felipe-puerta-velez",
    talkKey: "nlp-corpus-rag",
    name: "Andrés Felipe Puerta Velez",
    tracks: ["artificial-intelligence", "data-science"] as SpeakerTrack[],
    github: "https://afpuertav.github.io/",
    linkedin: "https://www.linkedin.com/in/afpuertav",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  {
    slug: "dora-cecilia-alzate-gallo",
    talkKey: "nlp-corpus-rag",
    name: "Dora Cecilia Alzate Gallo",
    tracks: ["artificial-intelligence", "data-science"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  {
    slug: "karen-melissa-gomez-montoya",
    talkKey: "nlp-corpus-rag",
    name: "Karen Melissa Gomez Montoya",
    tracks: ["artificial-intelligence", "data-science"] as SpeakerTrack[],
    linkedin: "https://www.linkedin.com/in/karen-melissa-gomez",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 15. AI-DLC Future-proof Engineers (primary + co-speaker with empty talk)
  {
    slug: "jesus-alfredo-reyes-vargas",
    talkKey: "ai-dlc-future-proof",
    name: "Jesús Alfredo Reyes Vargas",
    tracks: ["artificial-intelligence", "community"] as SpeakerTrack[],
    github: "https://github.com/jesusareyesv",
    linkedin: "https://www.linkedin.com/in/jesusareyesv",
    country: "Venezuela",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  {
    slug: "carlos-alberto-riveros-varela",
    talkKey: "ai-dlc-future-proof",
    name: "Carlos Alberto Riveros Varela",
    tracks: ["artificial-intelligence", "community"] as SpeakerTrack[],
    github: "http://github.com/carlosriverosv",
    linkedin: "https://www.linkedin.com/in/carlos-alberto-riveros-varela",
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 16. FastMCP Pokédex (primary + co-speaker with empty talk)
  {
    slug: "felipe-sanchez",
    talkKey: "fastmcp-pokedex",
    name: "Felipe Sanchez",
    linkedin: "https://www.linkedin.com/in/felipe-sánchez-7765b8206",
    tracks: ["artificial-intelligence", "core-python"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  {
    slug: "daniel-galvis",
    talkKey: "fastmcp-pokedex",
    name: "Daniel Galvis",
    linkedin: "https://www.linkedin.com/in/dangalvis1011",
    tracks: ["artificial-intelligence", "core-python"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 17. Sigma Agentic Dashboards
  {
    slug: "francisco-javier-moya-ortiz",
    talkKey: "sigma-agentic-dashboards",
    name: "Francisco Javier Moya Ortiz",
    github: "https://github.com/fjmoyao",
    linkedin: "https://www.linkedin.com/in/francisco-javier-mortiz",
    tracks: ["artificial-intelligence", "data-science"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "All / Para todos los niveles",
    format: "workshop",
  },
  // 18. PyBlend AI Food Scientist
  {
    slug: "andres-vasquez-restrepo",
    talkKey: "pyblend-ai-food-scientist",
    name: "Andres Vasquez Restrepo",
    github: "https://github.com/anvasquezre",
    linkedin: "https://www.linkedin.com/in/anvasquezre",
    tracks: ["artificial-intelligence", "data-science"] as SpeakerTrack[],
    country: "Colombia",
    language: "English / Inglés",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 19. Autoencoders Anomaly Detection
  {
    slug: "cesar-mateo-gonzalez-rodriguez",
    talkKey: "autoencoders-anomaly-detection",
    name: "Cesar Mateo Gonzalez Rodriguez",
    github: "https://github.com/cmatteogr",
    linkedin: "https://www.linkedin.com/in/cesar-gonzález-rodríguez",
    tracks: ["machine-learning", "data-science"] as SpeakerTrack[],
    country: "Colombia",
    language: "English / Inglés",
    level: "All / Para todos los niveles",
    format: "workshop",
  },
  // 20. Multi-Agent Patterns Protocols
  {
    slug: "juan-guillermo-gomez",
    talkKey: "multi-agent-patterns-protocols",
    name: "Juan Guillermo Gomez",
    github: "https://github.com/jggomez",
    linkedin: "https://www.linkedin.com/in/jggomezt",
    tracks: ["artificial-intelligence"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 21. TOON Token Diet
  {
    slug: "mauricio-repetto-ferrero",
    talkKey: "toon-token-diet",
    name: "Mauricio Repetto Ferrero",
    github: "https://github.com/a-mauricio-repetto",
    linkedin: "https://www.linkedin.com/in/a-mauricio-repetto",
    tracks: ["artificial-intelligence", "core-python"] as SpeakerTrack[],
    country: "Uruguay",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 22. Async Video Ingestion
  {
    slug: "dario-jesus-guzman-duran",
    talkKey: "async-video-ingestion",
    name: "Darío Jesús Guzmán Durán",
    github: "https://github.com/GudarJs",
    linkedin: "https://www.linkedin.com/in/gudarjs",
    tracks: ["core-python"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 23. LLMs Mathematics PyTorch
  {
    slug: "juan-jose-barrientos-salazar",
    talkKey: "llms-mathematics-pytorch",
    name: "Juan José Barrientos Salazar",
    github: "https://github.com/juanjo-barrientos",
    linkedin: "https://www.linkedin.com/in/juanjo-barrientos-860940259",
    tracks: ["artificial-intelligence", "machine-learning"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Advanced / Avanzado",
    format: "workshop",
  },
  // 24. NORTH Claude Copilot
  {
    slug: "raul-rodriguez",
    talkKey: "north-claude-copilot",
    name: "Raul Rodriguez",
    github: "https://github.com/raxos18",
    linkedin: "https://www.linkedin.com/in/raul-rodriguez-lopez",
    tracks: ["artificial-intelligence"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "All / Para todos los niveles",
    format: "workshop",
  },
  // 25. hls4ml Hardware Acceleration (primary + co-speaker)
  {
    slug: "jeronimo-lopez-gomez",
    talkKey: "hls4ml-hardware",
    name: "Jeronimo Lopez Gomez",
    github: "https://github.com/jerolg",
    linkedin: "https://www.linkedin.com/in/jeronimo-lopez-714bba228",
    tracks: ["machine-learning", "scientific-computing"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  {
    slug: "natalia-echeverri-duran",
    talkKey: "hls4ml-hardware",
    name: "Natalia Echeverri Durán",
    github: "https://gitlab.com/natalia.echeverrid",
    linkedin: "https://www.linkedin.com/in/natalia-echeverri-duran-5297753ba",
    tracks: ["machine-learning", "scientific-computing"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 26. Fine-tuning Nequi (primary + co-speaker)
  {
    slug: "angie-katherine-reyes",
    talkKey: "nequi-fine-tuning",
    name: "Angie Katherine Reyes",
    github: "https://github.com/angiereyesbet",
    linkedin: "https://www.linkedin.com/in/angiereyesbet",
    tracks: ["artificial-intelligence", "machine-learning"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  {
    slug: "elkin-javier-guerra-galeano",
    talkKey: "nequi-fine-tuning",
    name: "Elkin Javier Guerra Galeano",
    github: "https://github.com/Elkinmt19/Elkinmt19",
    linkedin:
      "https://www.linkedin.com/in/elkin-javier-guerra-galeano-60832b1b3",
    tracks: ["artificial-intelligence", "machine-learning"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 27. Building AI Agents to Play Catan (FACTORED Sponsor)
  {
    slug: "sebastian-rodriguez-colina",
    talkKey: "ai-agents-catan",
    name: "Sebastián Rodríguez Colina",
    github: "https://github.com/srcolinas",
    linkedin: "https://www.linkedin.com/in/srcolinas/",
    tracks: [
      "artificial-intelligence",
      "data-science",
      "machine-learning",
    ] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
  // 28. PDF Extraction at Scale (FACTORED Sponsor)
  {
    slug: "douglas-ardila-garces",
    talkKey: "pdf-extraction-llm",
    name: "Douglas Ardila Garcés",
    github: "https://github.com/douglasag17",
    linkedin: "https://www.linkedin.com/in/douglasag17",
    tracks: [
      "artificial-intelligence",
      "core-python",
      "machine-learning",
      "data-science",
    ] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "All / Para todos los niveles",
    format: "workshop",
  },
  // 29. Forjando Agentes en AWS (EPAM Sponsor)
  {
    slug: "david-stiven-jurado-chavarria",
    talkKey: "forjando-agentes-aws",
    name: "David Stiven Jurado Chavarria",
    linkedin: "https://www.linkedin.com/in/d-jurado/",
    tracks: ["artificial-intelligence"] as SpeakerTrack[],
    country: "Colombia",
    language: "Spanish / Español",
    level: "Intermediate / Intermedio",
    format: "workshop",
  },
];

export const workshopSpeakerList: SpeakerInput[] = workshopSpeakerListBase.map(
  (speaker) => ({
    ...speaker,
    image: workshopSpeakerImages[speaker.slug],
  }),
);
