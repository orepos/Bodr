# Bodr

Integrated "Digital Fan Pass" ecosystem with a Flutter mobile app, a Node.js TypeScript backend, Gemini and Google Cloud Agent Builder integration points, and MongoDB MCP server configuration.

## Monorepo layout

- `apps/mobile_flutter`: Flutter mobile app shell for fan pass UX.
- `apps/server`: Node TypeScript API exposing `/health` and `/api/v1/fan-pass/manifest`.
- `infrastructure/mcp/mongodb-mcp.json`: MongoDB MCP server configuration.

## Getting started

```bash
pnpm install
pnpm lint
pnpm build
pnpm test
```

## Environment variables

Server runtime settings are read from environment variables:

- `PORT`
- `GEMINI_API_KEY`
- `GEMINI_MODEL`
- `GOOGLE_CLOUD_PROJECT`
- `GOOGLE_CLOUD_LOCATION`
- `AGENT_BUILDER_APP_ID`
- `MONGODB_URI`
- `MONGODB_DATABASE`
- `MONGODB_MCP_COMMAND`
