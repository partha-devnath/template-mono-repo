# template-mono-repo

Production-ready full-stack monorepo template using **Bun**, **Vite**, **React**, **Hono**, **Better Auth**, **Drizzle ORM**, and **PostgreSQL**.

## Stack

| Layer | Technology |
|-------|-----------|
| Runtime | [Bun](https://bun.sh) |
| Frontend | [Vite](https://vite.dev) + [React 19](https://react.dev) + [shadcn/ui](https://ui.shadcn.com) |
| Backend | [Hono](https://hono.dev) |
| Auth | [Better Auth](https://better-auth.com) — email/password, email verification, password reset |
| Database | [PostgreSQL](https://postgresql.org) + [Drizzle ORM](https://orm.drizzle.team) |
| Forms | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| Data Fetching | [TanStack React Query](https://tanstack.com/query) |
| State | [Zustand](https://zustand-demo.pmnd.rs) |
| Logging | [Pino](https://getpino.io) |
| Monorepo | [Turborepo](https://turbo.build/repo) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |

## Project structure

```
├── apps/
│   ├── web/              Vite React frontend
│   │   ├── src/
│   │   │   ├── routes/       Auth pages + dashboard (login, signup, verify, reset)
│   │   │   ├── components/   ProtectedRoute, ErrorBoundary
│   │   │   ├── hooks/        use-auth, use-user (TanStack Query)
│   │   │   ├── providers/    QueryProvider, ThemeProvider, AppProvider
│   │   │   ├── stores/       Zustand app store example
│   │   │   └── lib/          Auth client (better-auth/react), API fetch wrapper
│   │   └── .env.example
│   └── api/              Hono backend
│       ├── src/
│       │   ├── app.ts        Hono app with CORS, auth routes, health check
│       │   ├── index.ts      Entry point (Bun serve)
│       │   ├── env.ts        Zod-validated environment
│       │   └── middleware/   Error handler
│       └── .env.example
├── packages/
│   ├── ui/               Shared shadcn/ui components
│   ├── schemas/          Drizzle ORM tables + Zod validation schemas + TS types
│   ├── db/               Drizzle client + migration runner
│   ├── auth/             Better Auth server instance
│   ├── email/            Email sender (console in dev, pluggable)
│   └── logger/           Pino structured logger
├── docker-compose.yml    PostgreSQL for local development
├── turbo.json
└── package.json
```

## Quick start

### Prerequisites

- [Bun](https://bun.sh) >= 1.3
- [Docker](https://docker.com) (for PostgreSQL)

### Setup

```bash
# 1. Clone and install dependencies
git clone <repo-url> my-project
cd my-project
bun install

# 2. Start PostgreSQL
docker compose up -d

# 3. Copy environment files
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env

# 4. Edit your .env files (especially BETTER_AUTH_SECRET)
#    Generate a secret: bun -e "console.log(crypto.randomBytes(32).toString('hex'))"

# 5. Generate & run database migrations
bun --filter @workspace/db generate
bun --filter @workspace/db migrate

# 6. Start development servers
bun dev
```

This starts:
- **Frontend** → http://localhost:5173
- **API** → http://localhost:3001

### Available commands

```bash
bun dev              # Start all apps in development mode
bun run build        # Build all packages and apps
bun run lint         # Run ESLint on all workspaces
bun run typecheck    # Run TypeScript type checking
bun run format       # Format code with Prettier

# Database (run from packages/db)
bun --filter @workspace/db generate   # Generate Drizzle migrations
bun --filter @workspace/db migrate    # Apply migrations
bun --filter @workspace/db studio     # Open Drizzle Studio
```

## Auth flows

The template includes complete auth flows using Better Auth:

| Flow | Route | Status |
|------|-------|--------|
| Sign up | `/signup` | ✅ |
| Email verification | `/verify-email?token=...` | ✅ |
| Sign in | `/login` | ✅ |
| Forgot password | `/forgot-password` | ✅ |
| Reset password | `/reset-password?token=...` | ✅ |
| Protected routes | `/dashboard` | ✅ |
| API auth middleware | `/api/protected` | ✅ |

All emails (verification, password reset) log to console in development. Set `EMAIL_PROVIDER=resend` in production and implement the Resend sender in `packages/email`.

## Adding a new feature

### Backend route

```ts
// apps/api/src/app.ts
app.get("/api/items", async (c) => {
  const items = await db.query.items.findMany()
  return c.json({ success: true, data: items })
})
```

### Frontend query

```ts
// apps/web/src/hooks/use-items.ts
import { useQuery } from "@tanstack/react-query"
import { apiClient } from "@/lib/api-client"

export function useItems() {
  return useQuery({
    queryKey: ["items"],
    queryFn: () => apiClient<{ data: Item[] }>("/api/items"),
  })
}
```

### Database table + validation

```ts
// packages/schemas/src/db/items.ts
import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
export const item = pgTable("item", { ... })

// packages/schemas/src/validations/items.ts
import { z } from "zod"
export const createItemSchema = z.object({ ... })
```

Then add the table to `packages/schemas/src/index.ts` exports.

## Deployment

### Docker

Build the API:
```bash
bun --filter api build
```

Build the frontend:
```bash
bun --filter web build
```

Serve the frontend from any static file server or use Hono's `serveStatic` in production.

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | ✅ | PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | ✅ | 32+ char random string |
| `BETTER_AUTH_URL` | ✅ | Public URL of API server |
| `CLIENT_URL` | ✅ | Frontend URL (for CORS) |
| `PORT` | | API server port (default 3001) |
| `LOG_LEVEL` | | Pino log level (default "info") |
| `EMAIL_PROVIDER` | | "console" or "resend" (default "console") |
| `VITE_API_URL` | ✅ | API URL for frontend client |

## Reference docs

### Hono
- [Getting started with Bun](https://hono.dev/docs/getting-started/bun)
- [Factory helper](https://hono.dev/docs/helpers/factory) — typed middleware and app creation
- [Adapter helper](https://hono.dev/docs/helpers/adapter) — cross-runtime env + runtime detection
- [ConnInfo helper](https://hono.dev/docs/helpers/conninfo) — client remote address
- [Best practices](https://hono.dev/docs/guides/best-practices)
- [CORS middleware](https://hono.dev/docs/middleware/builtin/cors)

### Better Auth
- [Installation](https://better-auth.com/docs/installation)
- [Basic usage](https://better-auth.com/docs/basic-usage) — sign in, sign up, session
- [Drizzle adapter](https://better-auth.com/docs/adapters/drizzle)
- [Email verification](https://better-auth.com/docs/concepts/email-verification)
- [Client reference](https://better-auth.com/docs/reference/client)
- [Dynamic base URL](https://better-auth.com/docs/guides/dynamic-base-url)
- [Optimizing for performance](https://better-auth.com/docs/guides/optimizing-for-performance)

### Drizzle ORM
- [Overview](https://orm.drizzle.team/docs/overview)
- [PostgreSQL dialect](https://orm.drizzle.team/docs/get-started-postgresql)
- [Schema definitions](https://orm.drizzle.team/docs/schemas)
- [Migrations](https://orm.drizzle.team/docs/migrations)
- [Drizzle Kit CLI](https://orm.drizzle.team/kit-docs/overview)

### Frontend
- [Vite](https://vite.dev/guide/)
- [React 19](https://react.dev/reference/react)
- [React Router](https://reactrouter.com/home)
- [TanStack React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Zod](https://zod.dev)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

### Runtime & tooling
- [Bun](https://bun.sh/docs)
- [Turborepo](https://turbo.build/repo/docs)
- [Pino](https://getpino.io/#/docs)
- [Docker](https://docs.docker.com)
