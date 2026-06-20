# Graph Report - .  (2026-06-20)

## Corpus Check
- Corpus is ~9,670 words - fits in a single context window. You may not need a graph.

## Summary
- 967 nodes · 1086 edges · 82 communities (74 shown, 8 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 50 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Web Application Frontend|Web Application Frontend]]
- [[_COMMUNITY_Account Table Migration Schema|Account Table Migration Schema]]
- [[_COMMUNITY_API Server & Web Core|API Server & Web Core]]
- [[_COMMUNITY_Session Table Migration Schema|Session Table Migration Schema]]
- [[_COMMUNITY_File Table Migration Schema|File Table Migration Schema]]
- [[_COMMUNITY_Application Architecture Layer|Application Architecture Layer]]
- [[_COMMUNITY_Web TypeScript App Config|Web TypeScript App Config]]
- [[_COMMUNITY_UI Package Dependencies|UI Package Dependencies]]
- [[_COMMUNITY_Web Package Dependencies|Web Package Dependencies]]
- [[_COMMUNITY_UI Component System|UI Component System]]
- [[_COMMUNITY_Turbo Monorepo Pipeline|Turbo Monorepo Pipeline]]
- [[_COMMUNITY_Database & Storage Foundation|Database & Storage Foundation]]
- [[_COMMUNITY_Web shadcnui Config|Web shadcn/ui Config]]
- [[_COMMUNITY_UI shadcnui Config|UI shadcn/ui Config]]
- [[_COMMUNITY_Root Package Configuration|Root Package Configuration]]
- [[_COMMUNITY_Auth Validation Schemas|Auth Validation Schemas]]
- [[_COMMUNITY_Account Foreign Key Relations|Account Foreign Key Relations]]
- [[_COMMUNITY_File Foreign Key Relations|File Foreign Key Relations]]
- [[_COMMUNITY_Schemas Package Config|Schemas Package Config]]
- [[_COMMUNITY_Web Node TypeScript Config|Web Node TypeScript Config]]
- [[_COMMUNITY_DB Package Dev Dependencies|DB Package Dev Dependencies]]
- [[_COMMUNITY_Logger Package Dependencies|Logger Package Dependencies]]
- [[_COMMUNITY_Files Service Implementation|Files Service Implementation]]
- [[_COMMUNITY_API TypeScript Config|API TypeScript Config]]
- [[_COMMUNITY_Drizzle Migration Meta|Drizzle Migration Meta]]
- [[_COMMUNITY_API Package Dev Dependencies|API Package Dev Dependencies]]
- [[_COMMUNITY_Email Package Dependencies|Email Package Dependencies]]
- [[_COMMUNITY_UI TypeScript Config|UI TypeScript Config]]
- [[_COMMUNITY_Files Package Dev Dependencies|Files Package Dev Dependencies]]
- [[_COMMUNITY_UI Lint TypeScript Config|UI Lint TypeScript Config]]
- [[_COMMUNITY_Auth Package Dev Dependencies|Auth Package Dev Dependencies]]
- [[_COMMUNITY_API Package Dependencies|API Package Dependencies]]
- [[_COMMUNITY_User Table Schema|User Table Schema]]
- [[_COMMUNITY_Session Table Schema|Session Table Schema]]
- [[_COMMUNITY_Verification Table Schema|Verification Table Schema]]
- [[_COMMUNITY_Project Root & Runtime|Project Root & Runtime]]
- [[_COMMUNITY_Web Runtime Dependencies|Web Runtime Dependencies]]
- [[_COMMUNITY_Verification Table Constraints|Verification Table Constraints]]
- [[_COMMUNITY_Auth TypeScript Config|Auth TypeScript Config]]
- [[_COMMUNITY_DB TypeScript Config|DB TypeScript Config]]
- [[_COMMUNITY_Files TypeScript Config|Files TypeScript Config]]
- [[_COMMUNITY_Auth Input Validation|Auth Input Validation]]
- [[_COMMUNITY_Database Table Definitions|Database Table Definitions]]
- [[_COMMUNITY_Docker Services & Deployment|Docker Services & Deployment]]
- [[_COMMUNITY_Email TypeScript Config|Email TypeScript Config]]
- [[_COMMUNITY_Auth Inter-Package Dependencies|Auth Inter-Package Dependencies]]
- [[_COMMUNITY_FilesAPI Package Dependencies|Files/API Package Dependencies]]
- [[_COMMUNITY_Logger TypeScript Config|Logger TypeScript Config]]
- [[_COMMUNITY_Root TypeScript Config|Root TypeScript Config]]
- [[_COMMUNITY_Web TypeScript References|Web TypeScript References]]
- [[_COMMUNITY_DB Runtime Dependencies|DB Runtime Dependencies]]
- [[_COMMUNITY_Created At Column Schema|Created At Column Schema]]
- [[_COMMUNITY_Email Verified Column Schema|Email Verified Column Schema]]
- [[_COMMUNITY_Updated At Column Schema|Updated At Column Schema]]
- [[_COMMUNITY_Email Sender Implementations|Email Sender Implementations]]
- [[_COMMUNITY_Schemas TypeScript Config|Schemas TypeScript Config]]
- [[_COMMUNITY_File Validation Schemas|File Validation Schemas]]
- [[_COMMUNITY_Email Sender Interface|Email Sender Interface]]
- [[_COMMUNITY_ID Column Schema|ID Column Schema]]
- [[_COMMUNITY_Expires At Column Schema|Expires At Column Schema]]
- [[_COMMUNITY_Name Column Schema|Name Column Schema]]
- [[_COMMUNITY_Token Column Schema|Token Column Schema]]
- [[_COMMUNITY_User Agent Column Schema|User Agent Column Schema]]
- [[_COMMUNITY_Postinstall Script|Postinstall Script]]
- [[_COMMUNITY_Web Entry Points|Web Entry Points]]
- [[_COMMUNITY_Drizzle Migration Journal|Drizzle Migration Journal]]
- [[_COMMUNITY_DB Client|DB Client]]
- [[_COMMUNITY_API Response Types|API Response Types]]
- [[_COMMUNITY_Auth Server|Auth Server]]
- [[_COMMUNITY_API Response Type Definitions|API Response Type Definitions]]
- [[_COMMUNITY_Verification Table Definition|Verification Table Definition]]
- [[_COMMUNITY_Theme Provider|Theme Provider]]
- [[_COMMUNITY_Email Package Index|Email Package Index]]
- [[_COMMUNITY_Zod Schema Validation|Zod Schema Validation]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `compilerOptions` - 16 edges
3. `cn()` - 16 edges
4. `devDependencies` - 14 edges
5. `columns` - 14 edges
6. `devDependencies` - 14 edges
7. `dependencies` - 13 edges
8. `compilerOptions` - 12 edges
9. `dependencies` - 12 edges
10. `react-router` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Database Migration Guide (Drizzle Kit)` --references--> `User Table (Drizzle pgTable)`  [INFERRED]
  README.md → packages/schemas/src/db/users.ts
- `Auth Flows Documentation (signup, verify, login, forgot, reset)` --references--> `Login Zod Validation Schema`  [INFERRED]
  README.md → packages/schemas/src/validations/auth.ts
- `Auth Flows Documentation (signup, verify, login, forgot, reset)` --references--> `Signup Zod Validation Schema`  [INFERRED]
  README.md → packages/schemas/src/validations/auth.ts
- `S3 File Storage Setup Guide` --references--> `File Upload Zod Validation Schema`  [INFERRED]
  README.md → packages/schemas/src/validations/files.ts
- `Server-side Better-Auth Instance` --conceptually_related_to--> `Protected API Endpoint (/api/protected)`  [INFERRED]
  packages/auth/src/server.ts → apps/web/src/hooks/use-user.ts

## Hyperedges (group relationships)
- **Monorepo @workspace/* shared package ecosystem** — api_app, web_app, workspace_db, workspace_logger, workspace_files, workspace_schemas, workspace_ui [INFERRED 0.85]
- **Better-auth end-to-end authentication flow** — better_auth_server, better_auth_client, use_auth_hook, use_session_hook, protected_route, public_route, hono_app_instance, auth_session_check_pattern [INFERRED 0.85]
- **Turborepo orchestrated build/dev/lint pipeline** — turborepo, api_app, web_app, template_monorepo [INFERRED 0.85]
- **Authentication Flow: Login → Signup → Verify Email** — login_route, signup_route, verify-email_route [INFERRED 0.75]
- **Server Auth Adapter Stack: Auth → DB → Schemas** — auth_server_instance, db_client_instance, workspace-schemas_package [EXTRACTED 1.00]
- **App Provider Composition: BrowserRouter → ThemeProvider → QueryProvider** — app-provider_component, query-provider_component [EXTRACTED 1.00]
- **Email Sender Strategy Pattern** — email_EmailSender, email_consoleSender, email_createMailpitSender, email_createResendSender [EXTRACTED 1.00]
- **File Upload Pipeline** — files_uploadFile, files_StorageProvider, schemas_db_files, files_generateId [EXTRACTED 1.00]
- **Foreign Key Reference to Users Table** — schemas_db_accounts, schemas_db_files, schemas_db_sessions, schemas_db_users [EXTRACTED 1.00]
- **Auth Validation System (login, signup, forgot, reset schemas with inferred types)** — auth_loginSchema, auth_signupSchema, auth_forgotPasswordSchema, auth_resetPasswordSchema, auth_inferred_types [INFERRED 0.85]
- **shadcn/ui Component System (Button, Card, Input, Label sharing cn utility)** — ui_Button_component, ui_Card_component, ui_Input_component, ui_Label_component, ui_cn_utility, ui_shadcn_config [INFERRED 0.85]
- **Docker Compose Services Orchestration (postgres, mailpit, api, web)** — docker_postgres_service, docker_mailpit_service, docker_api_service, docker_web_service [EXTRACTED 1.00]

## Communities (82 total, 8 thin omitted)

### Community 0 - "Web Application Frontend"
Cohesion: 0.1
Nodes (34): App (React component), better-auth client (@/lib/auth-client), @workspace/auth (server-side auth), Button(), buttonVariants, Card(), CardAction(), CardContent() (+26 more)

### Community 1 - "Account Table Migration Schema"
Cohesion: 0.04
Nodes (46): name, notNull, primaryKey, type, name, notNull, primaryKey, type (+38 more)

### Community 2 - "API Server & Web Core"
Cohesion: 0.06
Nodes (24): ErrorBoundary, Props, State, ResolvedTheme, Theme, THEME_VALUES, ThemeProvider(), ThemeProviderContext (+16 more)

### Community 3 - "Session Table Migration Schema"
Cohesion: 0.05
Nodes (37): session_user_id_user_id_fk, checkConstraints, compositePrimaryKeys, foreignKeys, indexes, isRLSEnabled, name, policies (+29 more)

### Community 4 - "File Table Migration Schema"
Cohesion: 0.06
Nodes (31): mime_type, original_name, path, size, stored_name, url, name, notNull (+23 more)

### Community 5 - "Application Architecture Layer"
Cohesion: 0.09
Nodes (30): apiClient Generic Fetch Wrapper, AppProvider Root Wrapper, useAppStore Zustand Sidebar Store, Client-side Better-Auth Instance, @workspace/auth Package, Server-side Better-Auth Instance, DashboardPage Route Component, Database Account Table (+22 more)

### Community 6 - "Web TypeScript App Config"
Cohesion: 0.07
Nodes (28): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution (+20 more)

### Community 7 - "UI Package Dependencies"
Cohesion: 0.07
Nodes (27): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, tailwindcss, @tailwindcss/vite (+19 more)

### Community 8 - "Web Package Dependencies"
Cohesion: 0.07
Nodes (26): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @tailwindcss/vite, @types/node (+18 more)

### Community 9 - "UI Component System"
Cohesion: 0.11
Nodes (24): class-variance-authority (CVA) Variant API, Post-Install Windows Junction Symlink Script, Button Component (base-ui primitive + CVA variants), Card Composite Component (Header, Title, Description, Action, Content, Footer), Input Component (base-ui primitive), Label Component (native label with cn styling), cn() Class Name Merge Utility (clsx + tailwind-merge), UI ESLint Configuration (react-hooks, typescript-eslint, react-refresh) (+16 more)

### Community 10 - "Turbo Monorepo Pipeline"
Cohesion: 0.09
Nodes (21): dependsOn, inputs, outputs, cache, cache, dependsOn, cache, persistent (+13 more)

### Community 11 - "Database & Storage Foundation"
Cohesion: 0.18
Nodes (21): DB Client, DB Package Index, runMigrations Function, StorageProvider Interface, StoredFile Type, UploadOptions Type, UploadResult Type, createLocalStorage Factory (+13 more)

### Community 12 - "Web shadcn/ui Config"
Cohesion: 0.1
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+11 more)

### Community 13 - "UI shadcn/ui Config"
Cohesion: 0.1
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+11 more)

### Community 14 - "Root Package Configuration"
Cohesion: 0.11
Nodes (18): devDependencies, prettier, prettier-plugin-tailwindcss, turbo, typescript, engines, node, name (+10 more)

### Community 15 - "Auth Validation Schemas"
Cohesion: 0.18
Nodes (18): Forgot Password Zod Validation Schema, Auth Input Inferred Types (LoginInput, SignupInput, etc), Login Zod Validation Schema, Reset Password Zod Validation Schema, Signup Zod Validation Schema, Drizzle ORM PostgreSQL Core (pgTable), All Allowed File MIME Types (union), Allowed Document MIME Types Constants (+10 more)

### Community 16 - "Account Foreign Key Relations"
Cohesion: 0.11
Nodes (18): columnsFrom, columnsTo, name, onDelete, onUpdate, tableFrom, tableTo, account_user_id_user_id_fk (+10 more)

### Community 17 - "File Foreign Key Relations"
Cohesion: 0.11
Nodes (18): columnsFrom, columnsTo, name, onDelete, onUpdate, tableFrom, tableTo, file_user_id_user_id_fk (+10 more)

### Community 18 - "Schemas Package Config"
Cohesion: 0.11
Nodes (17): dependencies, drizzle-orm, postgres, zod, devDependencies, typescript, exports, ./db/* (+9 more)

### Community 19 - "Web Node TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 20 - "DB Package Dev Dependencies"
Cohesion: 0.12
Nodes (15): devDependencies, drizzle-kit, @types/node, typescript, main, name, private, scripts (+7 more)

### Community 21 - "Logger Package Dependencies"
Cohesion: 0.12
Nodes (14): dependencies, pino, devDependencies, @types/node, typescript, main, name, private (+6 more)

### Community 22 - "Files Service Implementation"
Cohesion: 0.16
Nodes (9): LocalOptions, S3Options, StorageProvider, StoredFile, logger, uploadFile(), UploadOptions, UploadResult (+1 more)

### Community 23 - "API TypeScript Config"
Cohesion: 0.13
Nodes (14): compilerOptions, erasableSyntaxOnly, lib, module, moduleResolution, noEmit, paths, skipLibCheck (+6 more)

### Community 24 - "Drizzle Migration Meta"
Cohesion: 0.13
Nodes (14): dialect, enums, id, _meta, columns, schemas, tables, policies (+6 more)

### Community 25 - "API Package Dev Dependencies"
Cohesion: 0.14
Nodes (13): devDependencies, @types/bun, @types/node, typescript, name, private, scripts, build (+5 more)

### Community 26 - "Email Package Dependencies"
Cohesion: 0.14
Nodes (13): dependencies, nodemailer, devDependencies, @types/node, @types/nodemailer, typescript, main, name (+5 more)

### Community 27 - "UI TypeScript Config"
Cohesion: 0.14
Nodes (13): compilerOptions, jsx, lib, module, moduleResolution, noEmit, paths, skipLibCheck (+5 more)

### Community 28 - "Files Package Dev Dependencies"
Cohesion: 0.17
Nodes (11): devDependencies, @types/bun, @types/node, typescript, main, name, private, scripts (+3 more)

### Community 29 - "UI Lint TypeScript Config"
Cohesion: 0.17
Nodes (11): compilerOptions, jsx, lib, module, moduleResolution, outDir, skipLibCheck, strict (+3 more)

### Community 30 - "Auth Package Dev Dependencies"
Cohesion: 0.18
Nodes (10): devDependencies, @types/node, typescript, main, name, private, scripts, typecheck (+2 more)

### Community 31 - "API Package Dependencies"
Cohesion: 0.2
Nodes (11): dependencies, hono, @workspace/auth, @workspace/files, @workspace/logger, zod, Auth session check pattern, Hono App Instance (app.ts) (+3 more)

### Community 32 - "User Table Schema"
Cohesion: 0.18
Nodes (11): email, image, name, notNull, primaryKey, type, name, notNull (+3 more)

### Community 33 - "Session Table Schema"
Cohesion: 0.18
Nodes (11): ip_address, user_id, name, notNull, primaryKey, type, columns, name (+3 more)

### Community 34 - "Verification Table Schema"
Cohesion: 0.18
Nodes (11): identifier, value, name, notNull, primaryKey, type, columns, name (+3 more)

### Community 35 - "Project Root & Runtime"
Cohesion: 0.24
Nodes (10): API application (apps/api), Bun (JS runtime), Env schema (Zod), template-mono-repo, Turborepo (turbo), validateEnv, Vite, Web application (apps/web) (+2 more)

### Community 36 - "Web Runtime Dependencies"
Cohesion: 0.2
Nodes (10): dependencies, better-auth, @hookform/resolvers, lucide-react, react, react-dom, react-hook-form, react-router (+2 more)

### Community 37 - "Verification Table Constraints"
Cohesion: 0.2
Nodes (10): checkConstraints, compositePrimaryKeys, foreignKeys, indexes, isRLSEnabled, name, policies, schema (+2 more)

### Community 38 - "Auth TypeScript Config"
Cohesion: 0.22
Nodes (8): compilerOptions, lib, noEmit, paths, types, extends, include, @workspace/*

### Community 39 - "DB TypeScript Config"
Cohesion: 0.22
Nodes (8): compilerOptions, lib, noEmit, paths, types, extends, include, @workspace/*

### Community 40 - "Files TypeScript Config"
Cohesion: 0.22
Nodes (8): compilerOptions, lib, noEmit, paths, types, extends, include, @workspace/*

### Community 41 - "Auth Input Validation"
Cohesion: 0.22
Nodes (8): ForgotPasswordInput, forgotPasswordSchema, LoginInput, loginSchema, ResetPasswordInput, resetPasswordSchema, SignupInput, signupSchema

### Community 42 - "Database Table Definitions"
Cohesion: 0.36
Nodes (4): account, file, session, user

### Community 43 - "Docker Services & Deployment"
Cohesion: 0.32
Nodes (8): API Docker Service (Hono backend), Mailpit Docker Service (email testing), PostgreSQL Docker Service (postgres:17-alpine), Web Docker Service (Vite frontend), Deployment Guide (Docker, manual build, env vars), Email Provider Setup Guide (mailpit, console, resend), Template Monorepo Project Overview, Vite React Entry Point (index.html)

### Community 44 - "Email TypeScript Config"
Cohesion: 0.29
Nodes (6): compilerOptions, lib, noEmit, types, extends, include

### Community 45 - "Auth Inter-Package Dependencies"
Cohesion: 0.29
Nodes (7): @workspace/db, dependencies, better-auth, @workspace/db, @workspace/email, @workspace/schemas, @workspace/db (database layer)

### Community 46 - "Files/API Package Dependencies"
Cohesion: 0.29
Nodes (7): @workspace/schemas, dependencies, @workspace/db, @workspace/logger, @workspace/schemas, @workspace/schemas, @workspace/schemas

### Community 47 - "Logger TypeScript Config"
Cohesion: 0.29
Nodes (6): compilerOptions, lib, noEmit, types, extends, include

### Community 48 - "Root TypeScript Config"
Cohesion: 0.29
Nodes (6): compilerOptions, module, moduleResolution, skipLibCheck, strict, target

### Community 49 - "Web TypeScript References"
Cohesion: 0.29
Nodes (6): compilerOptions, paths, files, @/*, @workspace/ui/*, references

### Community 50 - "DB Runtime Dependencies"
Cohesion: 0.33
Nodes (6): drizzle-orm, dependencies, drizzle-orm, postgres, @workspace/schemas, drizzle-orm

### Community 51 - "Created At Column Schema"
Cohesion: 0.33
Nodes (6): created_at, default, name, notNull, primaryKey, type

### Community 52 - "Email Verified Column Schema"
Cohesion: 0.33
Nodes (6): email_verified, default, name, notNull, primaryKey, type

### Community 53 - "Updated At Column Schema"
Cohesion: 0.33
Nodes (6): updated_at, default, name, notNull, primaryKey, type

### Community 54 - "Email Sender Implementations"
Cohesion: 0.33
Nodes (3): consoleSender, EmailSender, SendEmailParams

### Community 55 - "Schemas TypeScript Config"
Cohesion: 0.33
Nodes (5): compilerOptions, lib, noEmit, extends, include

### Community 56 - "File Validation Schemas"
Cohesion: 0.33
Nodes (5): ALLOWED_ALL_TYPES, ALLOWED_DOCUMENT_TYPES, ALLOWED_IMAGE_TYPES, UploadFileInput, uploadFileSchema

### Community 57 - "Email Sender Interface"
Cohesion: 0.7
Nodes (5): EmailSender Type, Console Email Sender, Mailpit Email Sender Factory, Resend Email Sender Factory, EmailSender Singleton (env-configured)

### Community 58 - "ID Column Schema"
Cohesion: 0.4
Nodes (5): id, name, notNull, primaryKey, type

### Community 59 - "Expires At Column Schema"
Cohesion: 0.4
Nodes (5): expires_at, name, notNull, primaryKey, type

### Community 60 - "Name Column Schema"
Cohesion: 0.4
Nodes (5): name, name, notNull, primaryKey, type

### Community 61 - "Token Column Schema"
Cohesion: 0.4
Nodes (5): token, name, notNull, primaryKey, type

### Community 62 - "User Agent Column Schema"
Cohesion: 0.4
Nodes (5): user_agent, name, notNull, primaryKey, type

### Community 63 - "Postinstall Script"
Cohesion: 0.4
Nodes (4): link, packages, target, wsDir

### Community 64 - "Web Entry Points"
Cohesion: 0.5
Nodes (4): ErrorBoundary, main.tsx (web entry point), @workspace/ui, @workspace/ui (shared UI)

### Community 65 - "Drizzle Migration Journal"
Cohesion: 0.5
Nodes (3): dialect, entries, version

## Knowledge Gaps
- **609 isolated node(s):** `name`, `version`, `private`, `build`, `dev` (+604 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react-router` connect `Web Application Frontend` to `API Server & Web Core`, `Web Runtime Dependencies`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `drizzle-orm` connect `DB Runtime Dependencies` to `API Server & Web Core`, `Schemas Package Config`, `API Package Dependencies`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `columns` connect `Account Table Migration Schema` to `Session Table Schema`, `Account Foreign Key Relations`, `Created At Column Schema`, `Updated At Column Schema`, `ID Column Schema`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _609 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Web Application Frontend` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Account Table Migration Schema` be split into smaller, more focused modules?**
  _Cohesion score 0.04 - nodes in this community are weakly interconnected._
- **Should `API Server & Web Core` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._