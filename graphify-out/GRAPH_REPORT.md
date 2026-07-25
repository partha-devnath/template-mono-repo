# Graph Report - .  (2026-07-25)

## Corpus Check
- Corpus is ~19,244 words - fits in a single context window. You may not need a graph.

## Summary
- 879 nodes · 1036 edges · 53 communities
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- API Logger and Entry Points
- Commit Lint Tooling
- Web App Routes
- Auth and React Dependencies
- UI Component Library
- Workspace Package Configuration
- TypeScript Compiler Config
- Turborepo Pipelines
- Drizzle Database Package
- File Storage Package
- ESLint Config
- ESLint Config
- Auth Package
- Schemas and Zod Package
- Web Hooks and Error Handling
- Email Sender Package
- React Error Boundary
- Winston Logger
- Project Docs and AWS Infra
- TypeScript Node Config
- TypeScript App Config
- TypeScript Root Config
- shadcn/ui Registry
- shadcn/ui Registry
- Drizzle Table Schemas
- TypeScript Lint Config
- Package TypeScript Config
- Package TypeScript Config
- Package TypeScript Config
- Package TypeScript Config
- Package TypeScript Config
- Package TypeScript Config
- UI Path Mapping
- Unix Setup Script
- Shared TypeScript Config
- Community 36

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `compilerOptions` - 16 edges
3. `cn()` - 15 edges
4. `template-mono-repo README` - 14 edges
5. `compilerOptions` - 12 edges
6. `scripts` - 10 edges
7. `scripts` - 10 edges
8. `Button()` - 10 edges
9. `compilerOptions` - 10 edges
10. `tasks` - 10 edges

## Surprising Connections (you probably didn't know these)
- `template-mono-repo README` --references--> `AGENTS.md project conventions`  [INFERRED]
  README.md → AGENTS.md
- `CI workflow` --references--> `Bun runtime`  [INFERRED]
  .github/workflows/ci.yml → README.md
- `CI workflow` --references--> `Turborepo`  [INFERRED]
  .github/workflows/ci.yml → README.md
- `AWS ALB` --conceptually_related_to--> `Vite frontend`  [INFERRED]
  infra/terraform/README.md → README.md
- `AWS ALB` --conceptually_related_to--> `Hono backend`  [INFERRED]
  infra/terraform/README.md → README.md

## Import Cycles
- None detected.

## Communities (53 total, 0 thin omitted)

### Community 0 - "API Logger and Entry Points"
Cohesion: 0.06
Nodes (36): app, Env, factory, logger, rateLimitStore, storage, Env, envSchema (+28 more)

### Community 1 - "Commit Lint Tooling"
Cohesion: 0.04
Nodes (46): @commitlint/cli, @commitlint/config-conventional, husky, lint-staged, devDependencies, @commitlint/cli, @commitlint/config-conventional, eslint (+38 more)

### Community 2 - "Web App Routes"
Cohesion: 0.15
Nodes (28): ProtectedRoute(), PublicRoute(), {
  signUp,
  signIn,
  signOut,
  useSession,
  sendVerificationEmail,
  requestPasswordReset,
  resetPassword,
  verifyEmail,
}, ForgotPasswordPage(), LoginPage(), ResetPasswordPage(), SignupPage(), VerifyEmailPage() (+20 more)

### Community 3 - "Auth and React Dependencies"
Cohesion: 0.05
Nodes (39): dependencies, better-auth, @hookform/resolvers, lucide-react, react, react-dom, react-hook-form, react-router (+31 more)

### Community 4 - "UI Component Library"
Cohesion: 0.05
Nodes (38): @base-ui/react, class-variance-authority, clsx, @fontsource-variable/inter, dependencies, @base-ui/react, class-variance-authority, clsx (+30 more)

### Community 5 - "Workspace Package Configuration"
Cohesion: 0.05
Nodes (37): dependencies, drizzle-orm, hono, @workspace/auth, @workspace/db, @workspace/files, @workspace/logger, @workspace/schemas (+29 more)

### Community 6 - "TypeScript Compiler Config"
Cohesion: 0.05
Nodes (36): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution (+28 more)

### Community 7 - "Turborepo Pipelines"
Cohesion: 0.06
Nodes (36): ^build, coverage/**, db:generate, .env*, ^format, ^lint, $TURBO_DEFAULT$, ^typecheck (+28 more)

### Community 8 - "Drizzle Database Package"
Cohesion: 0.07
Nodes (28): drizzle-kit, dependencies, drizzle-orm, postgres, @workspace/schemas, devDependencies, drizzle-kit, @types/node (+20 more)

### Community 9 - "File Storage Package"
Cohesion: 0.07
Nodes (27): @aws-sdk/client-s3, dependencies, @aws-sdk/client-s3, @workspace/db, @workspace/logger, @workspace/schemas, devDependencies, @types/bun (+19 more)

### Community 10 - "ESLint Config"
Cohesion: 0.07
Nodes (27): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @tailwindcss/vite, @types/node (+19 more)

### Community 11 - "ESLint Config"
Cohesion: 0.07
Nodes (27): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, tailwindcss, @tailwindcss/vite (+19 more)

### Community 12 - "Auth Package"
Cohesion: 0.08
Nodes (25): dependencies, better-auth, @workspace/db, @workspace/email, @workspace/schemas, devDependencies, @types/node, typescript (+17 more)

### Community 13 - "Schemas and Zod Package"
Cohesion: 0.08
Nodes (25): dependencies, drizzle-orm, postgres, zod, devDependencies, typescript, exports, ./db/* (+17 more)

### Community 14 - "Web Hooks and Error Handling"
Cohesion: 0.13
Nodes (17): logger, Props, State, useAuth(), ProtectedResponse, useUser(), apiClient(), logger (+9 more)

### Community 15 - "Email Sender Package"
Cohesion: 0.08
Nodes (23): nodemailer, dependencies, nodemailer, resend, devDependencies, @types/node, @types/nodemailer, typescript (+15 more)

### Community 16 - "React Error Boundary"
Cohesion: 0.12
Nodes (15): App(), ErrorBoundary, disableTransitionsTemporarily(), getSystemTheme(), isEditableTarget(), isTheme(), ResolvedTheme, Theme (+7 more)

### Community 17 - "Winston Logger"
Cohesion: 0.09
Nodes (21): dependencies, winston, devDependencies, @types/node, typescript, exports, ./browser, @types/node (+13 more)

### Community 18 - "Project Docs and AWS Infra"
Cohesion: 0.14
Nodes (21): AGENTS.md project conventions, AWS ALB, AWS ECR, AWS EKS, Better Auth, Bun runtime, Docker Compose services, Drizzle ORM (+13 more)

### Community 19 - "TypeScript Node Config"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+12 more)

### Community 20 - "TypeScript App Config"
Cohesion: 0.10
Nodes (20): compilerOptions, jsx, lib, module, moduleResolution, noEmit, paths, skipLibCheck (+12 more)

### Community 21 - "TypeScript Root Config"
Cohesion: 0.10
Nodes (19): compilerOptions, erasableSyntaxOnly, lib, module, moduleResolution, noEmit, paths, skipLibCheck (+11 more)

### Community 22 - "shadcn/ui Registry"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+11 more)

### Community 23 - "shadcn/ui Registry"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+11 more)

### Community 24 - "Drizzle Table Schemas"
Cohesion: 0.14
Nodes (11): account, session, user, verification, ApiResponse, PaginatedResponse, ALLOWED_ALL_TYPES, ALLOWED_DOCUMENT_TYPES (+3 more)

### Community 25 - "TypeScript Lint Config"
Cohesion: 0.11
Nodes (18): compilerOptions, jsx, lib, module, moduleResolution, outDir, skipLibCheck, strict (+10 more)

### Community 26 - "Package TypeScript Config"
Cohesion: 0.15
Nodes (13): compilerOptions, lib, noEmit, paths, types, extends, include, DOM (+5 more)

### Community 27 - "Package TypeScript Config"
Cohesion: 0.15
Nodes (13): compilerOptions, lib, noEmit, paths, types, extends, include, bun (+5 more)

### Community 28 - "Package TypeScript Config"
Cohesion: 0.17
Nodes (12): compilerOptions, lib, noEmit, paths, types, extends, include, ES2023 (+4 more)

### Community 29 - "Package TypeScript Config"
Cohesion: 0.18
Nodes (10): compilerOptions, lib, noEmit, types, extends, include, ES2023, node (+2 more)

### Community 30 - "Package TypeScript Config"
Cohesion: 0.18
Nodes (10): compilerOptions, lib, noEmit, types, extends, include, ES2023, node (+2 more)

### Community 31 - "Package TypeScript Config"
Cohesion: 0.20
Nodes (9): compilerOptions, lib, noEmit, extends, include, DOM, ES2023, src (+1 more)

### Community 32 - "UI Path Mapping"
Cohesion: 0.29
Nodes (6): compilerOptions, paths, files, ../../packages/ui/src/*, @workspace/ui/*, references

### Community 33 - "Unix Setup Script"
Cohesion: 0.52
Nodes (6): fail(), setup.sh script, error(), info(), ok(), warn()

### Community 34 - "Shared TypeScript Config"
Cohesion: 0.29
Nodes (6): compilerOptions, module, moduleResolution, skipLibCheck, strict, target

### Community 36 - "Community 36"
Cohesion: 0.67
Nodes (4): GSD PROJECT.md context, v1 Requirements, Project Roadmap, Current State

## Knowledge Gaps
- **438 isolated node(s):** `name`, `version`, `type`, `private`, `dev` (+433 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `ESLint Config` to `Auth and React Dependencies`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `ESLint Config` to `UI Component Library`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `name`, `version`, `type` to the rest of the system?**
  _438 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `API Logger and Entry Points` be split into smaller, more focused modules?**
  _Cohesion score 0.05764145954521417 - nodes in this community are weakly interconnected._
- **Should `Commit Lint Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.0425531914893617 - nodes in this community are weakly interconnected._
- **Should `Web App Routes` be split into smaller, more focused modules?**
  _Cohesion score 0.14950166112956811 - nodes in this community are weakly interconnected._
- **Should `Auth and React Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._