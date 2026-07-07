import type { SiteLocale } from "@/lib/site-messages";

export const workshopRequirementsEn: Record<string, string> = {
  "david-felipe-vanegas-ramirez": `Workshop prerequisites
Minimum hardware: laptop with at least 8 GB of RAM (16 GB recommended) and 10 GB of free disk space.
Required software — please install everything before the event:

Docker Desktop: https://www.docker.com/products/docker-desktop
Python 3.11+: https://www.python.org/downloads
Git: https://git-scm.com
Claude Desktop (free): https://claude.ai/download
VS Code (recommended): https://code.visualstudio.com`,
  "felix-mino": "Laptop and Docker Desktop installed.",
  "roberto-bedoya-garcia": `Workshop prerequisites
Software (install before the event):

Python 3.10 or higher
Docker Desktop (to run Elasticsearch, Kibana, and Langfuse locally)
Git
Code editor (VS Code recommended)
Free Langfuse Cloud account (Docker alternative if there are memory limitations): langfuse.com

Prerequisites:

Intermediate Python (functions, classes, managing libraries with pip)
Basic familiarity with REST APIs and environment variables
Having worked at least once with an LLM (OpenAI, Anthropic, or similar) — no need to be an expert

Required API account:

OpenAI API key with available credits (minimum $5 USD) — Ollama with a local model can also be used if you don't want to spend on API

Recommended minimum hardware:

8 GB of RAM (16 GB recommended if running Docker + Ollama simultaneously)
Stable internet connection

Before arriving:
The workshop repository will be available on GitHub 48 hours before the event. It is recommended to run docker compose up at home to validate that the environment works correctly and not waste workshop time on installations.`,
  "hazel-saenz": `macOS / Linux / Windows
Python 3.10+
Ollama (for layers 1-4)
AWS CLI configured (for layers 5-6, uses Amazon Bedrock)
(Optional) Spotify Developer account`,
  "emanuel-zapata-querubin": `No software installation is required, but the following is needed (contact me if you want a PDF or video with the steps):
1. Create or have a Databricks Free Edition account
2. Create or have a GitHub account
3. Fork the following repository on GitHub: https://github.com/Ezapataq07-lovelytics/databricks-mlops-talk
4. Clone your own repository (the fork) in the Databricks Free Edition environment using "Git folders"`,
  "johnny-montoya": `Before the workshop, each attendee must bring:

- Laptop with installation permissions, minimum 8 GB RAM
- Python 3.12 installed + git + an editor (VS Code recommended)
- Docker
- Workshop repo cloned and .venv ready (URL confirmed once the proposal is accepted; the current base code lives in centinela-io)
- Toy dataset (sample_data.csv, ~5 MB) downloaded from the repo.
IMPORTANT: I will enable a pool of temporary keys for attendees without budget`,
  "jonathan-vallejo-munoz": `Before the workshop, it is recommended to have installed:
Git
Python 3.11
Conda
Node.js and npm
A code editor such as Cursor or Visual Studio Code
Docker Desktop
A free or paid account for an AI assistant such as Cursor, GitHub Copilot, Claude, or your preference. A paid subscription is not required; for example, Cursor's free tier is sufficient to participate`,
  "maris-botero":
    "Participants must bring their own laptop with Python 3.9 or higher installed.",
  "jose-hernan-ortiz-ocampo":
    "There are no specific software requirements for the workshop.",
  "jesus-alfredo-reyes-vargas":
    "Install: Claude Code or Codex (or any code agent), VS Code (or another code editor), backup internet access. UV package manager.",
  "jose-arturo-osorio-londono": "Databricks Community, local Python.",
  "biviana-marcela-suarez-sierra": `It is recommended to bring a laptop with a Google account to access Google Colab, where all notebooks will be available. Participants using Colab do not need to install anything beforehand. For those who prefer to work in a local environment, Python 3.10 or higher is recommended. Basic familiarity with Python is assumed. No prior experience in natural language processing is required. It is recommended to have a text corpus for analysis.`,
  "felipe-sanchez":
    "You need VS Code and Claude installed on your computer. Nothing else and everything will be free",
  "francisco-javier-moya-ortiz":
    "You need a Sigma Public account; just create an account with your email: https://public.sigmacomputing.com/",
  "elkin-javier-guerra-galeano":
    "Python +3.10, Ollama installed, Docker installed.",
};

export const workshopRequirementsEs: Record<string, string> = {
  "david-felipe-vanegas-ramirez": `Requisitos previos para el taller
Hardware mínimo: laptop con al menos 8 GB de RAM (16 GB recomendado) y 10 GB de espacio libre en disco.
Software requerido — por favor instala todo antes del evento:

Docker Desktop: https://www.docker.com/products/docker-desktop
Python 3.11+: https://www.python.org/downloads
Git: https://git-scm.com
Claude Desktop (gratuito): https://claude.ai/download
VS Code (recomendado): https://code.visualstudio.com`,
  "felix-mino": "Laptop con Docker Desktop instalado.",
  "roberto-bedoya-garcia": `Requisitos previos para el taller
Software (instalar antes del evento):

Python 3.10 o superior
Docker Desktop (para levantar Elasticsearch, Kibana y Langfuse en local)
Git
Editor de código (VS Code recomendado)
Cuenta gratuita en Langfuse Cloud (alternativa a Docker si hay limitaciones de memoria): langfuse.com

Conocimientos previos:

Python intermedio (funciones, clases, manejo de librerías con pip)
Familiaridad básica con APIs REST y variables de entorno
Haber trabajado al menos una vez con un LLM (OpenAI, Anthropic o similar) — no es necesario ser experto

Cuenta de API requerida:

OpenAI API key con créditos disponibles (mínimo $5 USD) — también se puede usar Ollama con un modelo local si no se quiere gastar en API

Hardware mínimo recomendado:

8 GB de RAM (16 GB recomendado si se corre Docker + Ollama simultáneamente)
Conexión a internet estable

Antes de llegar:
El repositorio del taller estará disponible en GitHub 48 horas antes del evento. Se recomienda hacer docker compose up en casa para validar que el entorno funciona correctamente y no perder tiempo de taller en instalaciones.`,
  "hazel-saenz": `macOS / Linux / Windows
Python 3.10+
Ollama (para capas 1-4)
AWS CLI configurado (para capas 5-6, usa Amazon Bedrock)
(Opcional) Cuenta de Spotify Developer`,
  "emanuel-zapata-querubin": `No es necesario la instalación de software, pero si se requiere lo siguiente (contactarme si se desea un PDF o video con los pasos):
1. Crear o tener una cuenta de Databricks Free Edition
2. Crear o tener una cuenta de GitHub
3. Hacer un fork del siguiente repositorio en GitHub: https://github.com/Ezapataq07-lovelytics/databricks-mlops-talk
4. Clonar el repositorio propio (el fork) en el ambiente de Databricks Free Edition utilizando "Git folders"`,
  "johnny-montoya": `Antes del taller, cada asistente debe traer:

- Laptop con permisos de instalación, mínimo 8 GB RAM
- Python 3.12 instalado + git + un editor (VS Code recomendado)
- Docker
- Repo del workshop clonado y .venv listo (URL se confirma una vez aceptada la propuesta; el código base actual vive en centinela-io)
- Dataset de juguete (sample_data.csv, ~5 MB) descargado desde el repo.
IMPORTANTE: Habilitare un pool de keys temporales para asistentes sin presupuesto`,
  "jonathan-vallejo-munoz": `Antes del workshop se recomienda tener instalado:
Git
Python 3.11
Conda
Node.js y npm
Un editor de código como Cursor o Visual Studio Code
Docker Desktop
Una cuenta gratuita o versión paga de un asistente de inteligencia artificial como Cursor, GitHub Copilot, Claude o el de su preferencia. No es obligatorio tener una suscripción paga; por ejemplo, la capa gratuita de Cursor es suficiente para participar`,
  "maris-botero":
    "Los participantes deben llevar su propio computador portátil con Python 3.9 o superior instalado.",
  "jose-hernan-ortiz-ocampo":
    "No hay requerimientos específicos de software para el taller.",
  "jesus-alfredo-reyes-vargas":
    "Instalar: Claude Code o Codex (o cualquier agente de código), VS Code (u otro editor de código), acceso a internet de respaldo. UV package manager.",
  "jose-arturo-osorio-londono": "Databricks Community, Python local.",
  "biviana-marcela-suarez-sierra": `Se recomienda traer un computador portátil con una cuenta de Google para acceder a Google Colab, donde estarán disponibles todos los notebooks. Los participantes que utilicen Colab no necesitan instalar nada previamente. Para quienes prefieran trabajar en un entorno local, se recomienda tener instalado Python 3.10 o superior. Se asume familiaridad básica con Python. No se requiere experiencia previa en procesamiento de lenguaje natural. Se recomienda tener un grupo de textos para el análisis.`,
  "felipe-sanchez":
    "Necesitan VS Code y Claude instalados en su computador. Nada mas y todo sera gratuito",
  "francisco-javier-moya-ortiz":
    "Se necesita una cuenta de Sigma Public, solo deben crear una cuenta con su correo: https://public.sigmacomputing.com/",
  "elkin-javier-guerra-galeano":
    "Python +3.10, Ollama instalado, Docker instalado.",
};

export const workshopRequirementsByLocale: Record<
  SiteLocale,
  Record<string, string>
> = {
  en: workshopRequirementsEn,
  es: workshopRequirementsEs,
};
