# AGENTS.md

## Project Snapshot

Personal academic website built with **Vite + SolidJS + TypeScript + Tailwind CSS v4 + MDX**.

- Deployment target: static assets only (`dist/`), no server runtime.
- Package manager: **pnpm only**.
- Primary content source: `src/contents/*.mdx` and `src/contents/news.json`.

## Tech and Architecture

- Framework: SolidJS (`solid-js`, `@solidjs/router`)
- Build tool: Vite (`vite`, `vite-plugin-solid`)
- Styling: Tailwind CSS v4 (`@tailwindcss/vite`, `@tailwindcss/typography`)
- Content: MDX via `@mdx-js/rollup`
- Linting/format rules: ESLint + TypeScript + Solid + Prettier (warning-level formatting checks)

Current route structure:

- `/` → academic page (`src/contents/academic.mdx`)
- `/about` → about page (`src/contents/about.mdx`)
- `/links` → links page (`src/contents/links.mdx`)
- `/resume` → resume page (`src/pages/Resume.tsx` + `src/contents/resume.mdx`)

## Repository Map (High Value Paths)

- App entry: `src/index.tsx`, `src/App.tsx`
- Shared components: `src/components/`
- Content files: `src/contents/`
- Utility code: `src/utils/`
- Static assets: `public/` and `src/assets/`
- Build/lint config: `vite.config.ts`, `eslint.config.mjs`, `tsconfig*.json`

## Commands

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm dev

# Lint source files
pnpm lint

# Production build (includes TypeScript project build via tsc -b)
pnpm build

# Preview production build
pnpm preview
```

## Quality Gate (Before Marking Work Complete)

Run:

```bash
pnpm lint && pnpm build
```

Notes:

- `typecheck` and `test` scripts are not defined in current `package.json`.
- Do not add new scripts or dependencies unless explicitly requested.

## SolidJS Rules (Important)

1. Keep reactivity intact.
   - Do not destructure props outside reactive usage.
   - Access props inline (`props.title`) in JSX.
2. Signals are callable accessors.
   - Read with `count()`, not `count`.
3. Use Solid control-flow primitives.
   - Lists: prefer `<For>` or `<Index>` over `.map()` in TSX.
   - Conditionals: prefer `<Show>` for larger conditional subtrees.
4. Use lifecycle correctly.
   - `createEffect` runs immediately and reactively.
   - Use `onMount` for one-time mount logic.
5. Avoid React-specific assumptions.
   - No virtual DOM mental model.
   - Do not add `key` props for Solid list rendering.

## Coding Style and Scope

### Principles

- DRY: extract duplicated UI into `src/components/`, duplicated logic into `src/utils/`.
- Single responsibility: rendering in components, data shaping in utils/resources.
- KISS + YAGNI: solve current requirement with minimal abstraction.
- Explicit naming: side-effecting functions should be clearly named.
- Prefer type safety: model invalid states out with TypeScript types.

### Never Do

- Commit secrets (`.env`, tokens, keys).
- Use `npm`, `yarn`, or `bun`.
- Modify generated/vendor folders directly (`dist/`, `node_modules/`, lockfile internals).
- Force-push protected branches.

## Agent Workflow Expectations

1. Read relevant files first; align with existing patterns and naming.
2. Prefer minimal, focused diffs; avoid unrelated formatting churn.
3. Validate with `pnpm lint && pnpm build` after meaningful code changes.
4. Summarize exactly what changed and why, including risks and follow-ups when relevant.
