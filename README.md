# 3903 Command Center

Central command hub and tool platform for Kingdom 3903 · by Lagertha.

## Current milestone

Build the shared Cloudflare foundation and migrate **FlagFiller Registry** as the first production tool. ROK BattleTrack and ROK Deal Hunter are planned as later modules.

## Stack

- React + TypeScript
- Vite
- Cloudflare Workers
- Cloudflare Vite Plugin
- Existing Google Sheets remain the initial data layer for FlagFiller

## Local development

Requirements: a current Node.js installation and npm.

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Build and preview

```bash
npm run build
npm run preview
```

## Cloudflare deployment

The project uses `wrangler.jsonc` as its Cloudflare Worker configuration. After Cloudflare authentication/configuration:

```bash
npm run deploy
```

The frontend and Worker API are deployed together. The initial API health endpoint is:

```text
/api/health
```

## Repository safety

Do not commit credentials, Google service-account keys, API keys or Cloudflare secrets. Local secrets belong in `.dev.vars`/environment variables and production secrets belong in Cloudflare Secrets.

## Planned structure

- Command Center dashboard
- FlagFiller Registry — first integration
- ROK BattleTrack — later
- ROK Deal Hunter — later

## Data strategy

FlagFiller keeps its existing Google Sheets data initially. The browser will not receive Google credentials. Google Sheets access will be implemented through the server-side Worker/API layer.
