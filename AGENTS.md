# Base44 dev environment

## Stack
- Next.js 15 (App Router, TypeScript, React 19), dev server on port 3000.

## Setup
- `docker-compose.base44.yml` runs a single `web` service from the cloned source:
  `node:22` with the repo bind-mounted at `/app` and a named volume for
  `node_modules` (installed at container startup with `npm install`, so it
  survives container recreation but stays out of the repo).
- Dev command: `npm run dev` (`next dev -H 0.0.0.0 -p 3000`), live reload on.

## Quirks
- `WATCHPACK_POLLING=true` is set because file watching over bind mounts needs
  polling for hot reload to fire.
- `next.config.mjs` conditionally appends the preview origin to
  `allowedDevOrigins` only when `BASE44_PREVIEW_MODE === "1"` — without it Next
  blocks dev-asset/HMR requests from the preview proxy. With the flag unset the
  config is a plain production-safe Next config.
- No external services or secrets are needed yet.

## Verify
- `docker compose -f docker-compose.base44.yml up -d`, then `curl localhost:3000`
  until it serves the page HTML.
- Dev build output lands in `.next/` (gitignored).
