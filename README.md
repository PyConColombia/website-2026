# website-2026

Next.js site for PyCon Colombia 2026. Deployed on [Vercel](https://vercel.com).

## Prerequisites

- **Node.js** 22+ (recommended: current LTS)
- **npm** 9+

## Setup & run

### 1. Install dependencies

```bash
npm install
```

### 2. Environment

Copy `.env.example` to `.env.local` and set at least:

- `NEXT_PUBLIC_APP_URL` — local site URL (e.g. `http://localhost:3000`)
- `CERTIFICATES_DRIVE_FILE_ID` or `CERTIFICATES_JSON_URL` — certificates registry (server-only)

### 3. Development server

```bash
npm run dev
```

Open `http://localhost:3000`.

### 4. Production build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Import the GitHub repo in the [Vercel dashboard](https://vercel.com/new).
2. Framework preset: **Next.js** (auto-detected).
3. Add environment variables (Production + Preview as needed):
   - `NEXT_PUBLIC_APP_URL` — e.g. `https://2026.pycon.co` / `https://develop.pycon.co`
   - `NEXT_PUBLIC_GA_ID` (optional)
   - `CERTIFICATES_DRIVE_FILE_ID` or `CERTIFICATES_JSON_URL`
   - Leave `BASEPATH` empty unless the app is served under a subpath
4. Point custom domains (`2026.pycon.co`, preview/develop) at the Vercel project.
5. Push to `main` / `develop` — Vercel deploys; GitHub Actions only runs CI (format, types, build).

Certificate pages (`/certificates/[id]/`) are rendered on demand: the server validates the id against the Drive JSON before returning the page. No static HTML is generated per certificate.

## Scripts

| Script                 | Description                 |
| ---------------------- | --------------------------- |
| `npm run dev`          | Next.js dev server          |
| `npm run build`        | Production build            |
| `npm start`            | Serve production build      |
| `npm run format`       | Format and fix with Biome   |
| `npm run format:check` | Check formatting (no write) |
| `npm run check-types`  | TypeScript check            |

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Biome](https://biomejs.dev/) for linting and formatting
