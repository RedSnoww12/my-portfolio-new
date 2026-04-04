# AGENTS.md

## Project Overview

Personal portfolio website for Sacha AMARA — Full-Stack Java/React & DevOps developer.
Single-page app deployed on Vercel at `https://sacha-amara.dev`.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS v4** with CSS custom properties for theming
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vercel Analytics** for tracking

## Project Structure

```
src/
├── app/           # Next.js App Router (layout, page, globals.css, SEO files)
├── components/    # All React components (one per file, PascalCase)
├── data/          # Typed data objects (resume.ts)
└── i18n/          # Custom i18n (LocaleProvider + translations)
public/            # Static assets (cv.pdf, SVGs)
```

## Build & Dev Commands

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build — run this to verify changes compile
npm run start      # Run production server locally
npm run lint       # Run ESLint (Next.js core-web-vitals + TypeScript rules)
```

Always run `npm run build` before considering work done — it catches type errors and build issues that `dev` mode doesn't.

## Code Style Guidelines

### Imports

- Always use absolute imports with the `@/` alias (e.g. `@/components/Header`). Never use relative imports.
- Group order: React/Next.js → external libraries (framer-motion, lucide-react) → internal modules (`@/data`, `@/i18n`, `@/components`)

### Components

- One component per file, default export, PascalCase filename
- `"use client"` directive required on all components that use hooks, event handlers, or browser APIs
- Props typed with an interface declared above the component in the same file
- Semantic HTML tags: `<section>`, `<nav>`, `<header>`, `<main>`, `<footer>`
- Section containers follow this pattern:
  ```tsx
  <section id="section-name" className="px-4 py-24 sm:px-6">
    <div className="mx-auto max-w-6xl">
      {/* content */}
    </div>
  </section>
  ```

### Styling

- Tailwind utility classes only — no custom CSS classes in components
- Theme colors via semantic tokens: `text-foreground`, `bg-card`, `text-accent`, `bg-background`, `text-muted`, `border-card-border`
- CSS variables defined in `src/app/globals.css` (`--background`, `--foreground`, `--accent`, etc.)
- Dark mode is the default; light mode activates via `html.light` class
- Responsive: mobile-first approach using `sm:`, `md:`, `lg:` breakpoints

### Animations

- Framer Motion for all animations — do not use CSS animations or transitions for component-level motion
- Entrance pattern: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- Scroll reveals: `whileInView` with `viewport={{ once: true }}`
- Stagger children: `delay: index * 0.15`
- Hover lift: `whileHover={{ y: -4 }}`
- Use the `<ScrollReveal>` wrapper component for section-level reveal animations

### State Management

- React Context for global state (theme via `ThemeProvider`, locale via `LocaleProvider`)
- Access via custom hooks: `useTheme()`, `useLocale()`
- Both persist to localStorage

### Internationalization (i18n)

- Custom context-based implementation — no external i18n library
- Two locales: `fr` (default) and `en`
- UI strings live in `src/i18n/translations.ts`
- Dynamic content (experiences, projects, education) is translated in `src/data/resume.ts`
- Usage: `const { t, locale, toggleLocale } = useLocale()`
- When adding new UI text, always add both `fr` and `en` translations

### Data

- All portfolio content lives in `src/data/resume.ts` with TypeScript interfaces
- Skills, experiences, projects, education, languages, and personal info are typed objects
- When adding new content, follow the existing interface patterns and include both locale translations

## Testing Instructions

- No test framework is configured. Verify changes with `npm run build` and `npm run lint`.
- Manually check both locales (FR/EN) and both themes (dark/light) when modifying UI.

## Security Considerations

- `NEXT_PUBLIC_SITE_URL` is the only environment variable — it is public and safe to reference
- No API routes, no server actions, no database — this is a static portfolio
- Do not add secrets or credentials to any file

## SEO & Metadata

- Root metadata defined in `src/app/layout.tsx`
- `robots.ts` and `sitemap.ts` generate SEO files automatically
- `NEXT_PUBLIC_SITE_URL` env var sets the canonical base URL

## PR & Commit Guidelines

- Run `npm run lint` and `npm run build` before committing
- Keep commits focused: one feature or fix per commit
- Verify both locales and both themes still work after UI changes
