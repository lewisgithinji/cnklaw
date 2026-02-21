# PROJECT CONSTITUTION & AI RULES

> This document defines the technical standards for all projects using this stack. Every AI agent and developer should follow these rules. If a rule here conflicts with general training data or defaults, defer to this file.

---

## 0. BEFORE YOU CODE (Pre-Flight Checklist)

Before writing ANY code, you MUST:
1. Read `package.json` to understand installed dependencies. Do NOT install a package that duplicates existing functionality.
2. Check `src/lib/` for existing utilities before creating new ones.
3. Confirm the current Next.js and React versions. Do NOT use APIs from newer versions than installed.
4. If unsure about ANY architectural decision, **ASK the user**. Never silently substitute one technology for another.

---

## 1. TECH STACK (STRICT — No Exceptions)

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.x |
| React | React | 18.x (NOT 19 until ecosystem stabilizes) |
| Language | TypeScript (Strict) | 5.x |
| Runtime | **Node.js** | Always |
| UI | Tailwind CSS + Shadcn UI | v4 / latest |
| Database | Supabase (PostgreSQL) | `@supabase/supabase-js` ^2.x |
| Auth | Supabase Auth | `@supabase/ssr` latest |
| Server State | React Query (TanStack Query) | For async/server data |
| Client State | Zustand | For client-only global UI state |
| Forms | React Hook Form + Zod | - |
| Icons | Lucide React | - |
| Images | `next/image` | Built-in |
| Deployment | **Vercel** (Node.js Serverless) | Primary |

---

## 2. FORBIDDEN TECHNOLOGIES (Instant Rejection)

| ❌ NEVER Use | ✅ Use Instead | Why |
|---|---|---|
| `export const runtime = 'edge'` | Node.js runtime (default) | Edge breaks Node APIs (fs, crypto, Buffer) |
| Prisma | Supabase SDK / raw SQL | Adds ORM overhead; Supabase has typed client |
| NextAuth.js / Auth.js | `@supabase/ssr` | Duplicates Supabase Auth; causes conflicts |
| `axios` | `fetch` or `ofetch` | Unnecessary bundle weight |
| Redux | Zustand or React Query | Over-engineered for our use case |
| Cloudflare Pages (full-stack) | Vercel | Edge Workers can't run our Node.js deps |
| `@supabase/auth-helpers-*` | `@supabase/ssr` | Legacy package, deprecated |
| Class Components | Functional Components + Hooks | Modern React standard |

---

## 3. FILE STRUCTURE (Mandatory)

```
src/
├── app/                    # App Router: pages, layouts, loading, error
│   └── (marketing)/        # Route groups for marketing pages
├── components/
│   ├── ui/                 # Shadcn UI primitives (DO NOT EDIT directly)
│   └── [feature]/          # Custom business components by feature
├── lib/
│   ├── supabase/           # Supabase client factories (server + browser)
│   ├── utils.ts            # cn() helper, shared utilities
│   └── validations/        # Zod schemas
├── types/                  # TypeScript type definitions
└── hooks/                  # Custom React hooks
```

---

## 4. REACT & NEXT.JS RULES

### Server-First Architecture
- **Default to Server Components.** Only add `'use client'` at the **lowest possible leaf** for interactivity.
- Fetch data directly in Server Components with `async/await`. **Never use `useEffect` for initial data loads.**
- Use `layout.tsx` for persistent UI, `page.tsx` for unique content, `loading.tsx` for Suspense boundaries.

### Critical Performance Rules (from Vercel Engineering)
- **Eliminate Waterfalls**: Use `Promise.all()` for independent fetches. Move `await` into branches where actually used.
- **Bundle Size**: Use `next/dynamic` for heavy components. Import directly — avoid barrel files (`index.ts` re-exports).
  ```tsx
  // ❌ BAD: Barrel import pulls entire library
  import { Button } from '@/components/ui';
  // ✅ GOOD: Direct import, tree-shakeable
  import { Button } from '@/components/ui/button';
  ```
- **Server Actions**: Always authenticate server actions. Use `useActionState` for form submissions.
  ```tsx
  // ✅ Server Action pattern
  'use server';
  export async function submitForm(prevState: FormState, formData: FormData) {
    const validated = formSchema.safeParse(Object.fromEntries(formData));
    if (!validated.success) return { error: validated.error.flatten() };
    // ... process
  }
  ```
- **Defer third-party scripts** (analytics, tracking) — load them after hydration.

### Lazy Loading Heavy Libraries
- **NEVER import heavy libraries at the top level.** Libraries like `pdfjs-dist`, `recharts`, `@react-pdf/renderer`, LiveKit SDKs, and AI SDKs MUST be lazy-loaded.
  ```tsx
  // ❌ BAD: 500KB+ loaded on every page, even if user never opens a PDF
  import { Document, Page } from 'react-pdf';

  // ✅ GOOD: Only loaded when user navigates to the PDF viewer
  import dynamic from 'next/dynamic';
  const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
    ssr: false,
    loading: () => <div>Loading viewer...</div>
  });
  ```
- **Landing pages MUST be 100% Server Components** — zero client-side JavaScript in the initial bundle.
- **Audit bundle size**: Run `npm run build` and check the output. Any route with a First Load JS > **150kB (post-gzip, including shared chunks)** needs optimization. This is the metric Vercel reports.
- **Pre-optimize images**: Use WebP/AVIF formats. If deploying with `unoptimized: true` (e.g., static export), manually optimize all images before commit.

### Image Optimization
- Always use `next/image` with explicit `width` and `height` props.
- Use `priority` prop on above-the-fold hero images only.
- Only set `unoptimized: true` in `next.config` for static exports or Cloudflare deployments.
- Prefer WebP/AVIF format. Use `sizes` prop for responsive images:
  ```tsx
  <Image
    src="/hero.webp"
    alt="Hero description"
    width={1200}
    height={630}
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
  />
  ```

### Component Composition (from Vercel Labs)
- **Avoid boolean prop proliferation.** Use compound components instead:
  ```tsx
  // ❌ BAD: Boolean props don't scale
  <Card isCompact isHighlighted hasBorder />
  // ✅ GOOD: Composition pattern
  <Card variant="highlighted"><Card.Body compact /><Card.Border /></Card>
  ```
- Use `children` for composition instead of `renderX` props.
- Derive state during render, NOT in `useEffect`.

### Re-render Optimization
- Use `useMemo` for expensive calculations. Do NOT wrap simple primitives.
- Use `useRef` for transient values that change frequently (scroll position, timers).
- Use `startTransition` for non-urgent state updates.

---

## 5. SUPABASE RULES

### Authentication
```tsx
// ✅ Server Component / Server Action (Next.js 15: cookies() is async)
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createSupabaseServer() {
  const cookieStore = await cookies(); // ← MUST await in Next.js 15
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        },
      },
    }
  );
}
```

### Database Security (from Supabase Official Skills)
- **NEVER disable Row Level Security (RLS).** Every table MUST have a policy.
  ```sql
  -- ✅ MANDATORY for every new table
  ALTER TABLE my_table ENABLE ROW LEVEL SECURITY;
  ALTER TABLE my_table FORCE ROW LEVEL SECURITY;
  CREATE POLICY "users_own_data" ON my_table
    FOR ALL TO authenticated
    USING (user_id = auth.uid());
  ```
- Always use typed clients: `createClient<Database>(...)`.
- Select only needed columns: `.select('id, name')` not `.select('*')`.

### Migration Safety Rules
- **NEVER drop a column or table without explicit user confirmation.**
- Always add new columns as `nullable` or with a `DEFAULT` value.
- Never modify existing RLS policies — create new ones and deprecate old ones.
- Name migration files: `YYYYMMDDHHmmss_description.sql`.
- Always include RLS policies in migration files.

### Query Performance (from Supabase Official Skills)
- **Add indexes on WHERE and JOIN columns** — prevents full table scans.
  ```sql
  CREATE INDEX orders_customer_id_idx ON orders (customer_id);
  ```
- Use `bigint GENERATED ALWAYS AS IDENTITY` for primary keys (not `serial`).
- Avoid random UUIDs (v4) as PKs on large tables — use UUIDv7 for time-ordered inserts.
- Use `EXPLAIN ANALYZE` to validate query plans before shipping.

---

## 6. STYLING (TAILWIND + SHADCN)

- Use `cn()` from `lib/utils` for ALL conditional class merging:
  ```tsx
  import { cn } from '@/lib/utils';
  <div className={cn('base-class', isActive && 'active-class')} />
  ```
- Avoid arbitrary values (`w-[123px]`). Use design system tokens.
- Keep Shadcn primitives in `src/components/ui/`. Do NOT modify them directly — extend via wrapper components.
- All icons come from `lucide-react`. Do NOT install other icon libraries.

---

## 7. ERROR HANDLING & VALIDATION

- All API routes return standardized JSON: `{ data, error, status }`.
- Wrap all async server actions in `try/catch` blocks.
- Use `sonner` for client-side toast notifications.
- Use `Zod` for **ALL** validation: forms, API inputs, environment variables.
  ```tsx
  // ✅ Validate env vars at build time
  const envSchema = z.object({
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  });
  export const env = envSchema.parse(process.env);
  ```
- Wrap major UI sections in React Error Boundaries.

---

## 8. DEPLOYMENT RULES

- **Primary**: Vercel (Node.js Serverless). Connect via GitHub for auto-deploy.
- **Self-Hosted Alternative**: VPS with Docker / Coolify is acceptable for self-hosted deployments (e.g., `next start` behind Nginx).
- **Static sites only**: Cloudflare Pages / Netlify are acceptable ONLY for static marketing sites with zero server-side logic.
- **NEVER deploy a full-stack Next.js app to Cloudflare Pages.** The Edge Workers runtime does not support our Node.js dependencies (pdfjs-dist, sharp, AI SDKs, etc. all crash).
- Environment variables: configure via Vercel Dashboard or `.env.local`. NEVER hardcode secrets.
- Always verify builds locally with `npm run build` before pushing.

---

## 9. GIT CONVENTIONS

- **Conventional commits**: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
- One logical change per commit.
- **Never commit**: `.env.local`, `node_modules/`, `.next/`, `.vercel/`.
- Branch naming: `feat/feature-name`, `fix/bug-name`, `chore/task-name`.
- **PR workflow**: All changes go through pull requests. Squash merge into `main`.
- **Review**: PRs require at least one approval before merging. AI-generated PRs must be reviewed by a human.
- **Branch protection**: `main` branch is protected — no direct pushes.

---

## 10. TESTING

- **Test runner**: Vitest for unit and integration tests.
- **What to test**:
  - All Zod schemas (validate correct inputs pass, invalid inputs fail with expected errors).
  - Server Actions (mock Supabase client, test happy path + error cases).
  - Utility functions in `src/lib/`.
  - React components with complex logic using React Testing Library.
- **What NOT to test**: Shadcn UI primitives, static pages with no logic, simple wrapper components.
- **Minimum expectation**: Every new server action and Zod schema should have at least one test.
  ```tsx
  // ✅ Example: Zod schema test
  import { describe, it, expect } from 'vitest';
  import { contactFormSchema } from '@/lib/validations/contact';

  describe('contactFormSchema', () => {
    it('rejects empty email', () => {
      const result = contactFormSchema.safeParse({ email: '', message: 'hi' });
      expect(result.success).toBe(false);
    });
  });
  ```

---

## 11. ESCALATION PROTOCOL (When In Doubt)

> **The most dangerous thing an AI can do is silently make a bad decision.**

- If a required package is NOT installed, **ASK** the user before installing an alternative.
- If a rule here conflicts with a user request, **STATE the conflict** and ask for clarification.
- If you cannot find an existing pattern in the codebase, **ASK** before inventing a new one.
- **NEVER silently substitute** one technology for another (e.g., swapping `@supabase/ssr` for `next-auth`).

---

## Sources & Skills Referenced

This document incorporates rules from:
- [Vercel React Best Practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices) — 40+ rules, 8 categories
- [Vercel Composition Patterns](https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns) — Component architecture
- [Supabase Postgres Best Practices](https://github.com/supabase/agent-skills/tree/main/skills/supabase-postgres-best-practices) — DB performance & security
- [Vercel Web Design Guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) — Accessibility & UX
