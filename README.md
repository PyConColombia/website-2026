# website-2026

React + Vite project with HMR, ESLint, and Biome for formatting.

## Prerequisites

- **Node.js** 18+ (recommended: current LTS)
- **npm** 9+ (or use the Node-bundled version)

## Setup & run

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Deploy en GitHub Pages

Este proyecto ya esta configurado para exportacion estatica de Next.js y despliegue automatico con GitHub Actions.

1. Crea un repositorio en GitHub.
2. Conecta este proyecto al repositorio real:

```bash
git remote set-url origin https://github.com/TU_USUARIO/TU_REPO.git
git add .
git commit -m "Prepare GitHub Pages deploy"
git push -u origin main
```

3. En GitHub, entra a `Settings` -> `Pages`.
4. En `Build and deployment`, selecciona `GitHub Actions` como fuente.
5. Abre la pestana `Actions` y espera a que termine `Deploy to GitHub Pages`.

Si el repositorio se llama `TU_USUARIO.github.io`, la web quedara en `https://TU_USUARIO.github.io/`. Si usa otro nombre, quedara en `https://TU_USUARIO.github.io/TU_REPO/`.

## Table of Contents 📋

### 3. Build for production

```bash
npm run build
```

Output is in the `dist/` folder.

### 4. Preview production build locally

```bash
npm run preview
```

## Other scripts

| Script                 | Description                 |
| ---------------------- | --------------------------- |
| `npm run format`       | Format and fix with Biome   |
| `npm run format:check` | Check formatting (no write) |

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 7
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc) for Fast Refresh
- [Biome](https://biomejs.dev/) for linting and formatting
- ESLint for additional lint rules
