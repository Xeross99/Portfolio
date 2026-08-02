# Portfolio

Next.js 14 portfolio site with MDX content. Projects have an index (home page) and detail pages (`/projekty/<slug>`).

## Stack

- Next.js 14 (App Router) + MDX
- Tailwind CSS 4
- Deployed on Vercel

## Structure

- `src/app/page.mdx` - Project index: all projects as MDX sections, newest first
- `src/app/projekty/<slug>/page.mdx` - Project detail pages with full description and per-page SEO metadata. Pages heavy on custom JSX can be plain `page.jsx` instead (see `camera-capture`) - `ProjectLayout` wraps children in the `typography` class, so plain HTML tags get the same prose styling as MDX. For click-to-zoom photos use `react-medium-image-zoom` directly (it ships `'use client'`).
- `src/app/sitemap.js` / `src/app/robots.js` - SEO; sitemap has a static list of project slugs
- `src/images/` - Project thumbnails (referenced as `@/images/filename.png`)
- `src/components/` - Layout (index), ProjectLayout (detail), Intro, Badge, ProjectFilter, PhoneFrame, ProjectLink, mdx overrides, SparkleIcon, etc.
- `mdx/` - Remark/rehype/recma plugin configs

## Key components

- `Badge` / `Badges` (`src/components/Badge.jsx`) - tech badges with Simple Icons logos. Variants: `python`, `ruby`, `rails`, `expo`, `android`, `tailwind`, `nextjs`. Add new variants by extending the `techs` map (label, colors, icon path, optional `iconClass` for logos that render small).
- `ProjectFilter` (`src/components/ProjectFilter.jsx`) - filter bar on the index (Wszystkie / Aplikacje / Sklepy / Strony). Each project's `h2` annotation carries a `type` (`app` | `sklep` | `www`); the `article` override in `mdx.jsx` hides non-matching articles. The bar hides on scroll down (only once docked at the top) and reappears on scroll up. It deliberately does NOT use `position: sticky`, `overflow-x-auto`, always-on transforms or always-on `backdrop-blur`: any composited layer breaks iOS Safari's translucent toolbar rendering. Instead it is a plain in-flow element inside a constant-height anchor, switched to `fixed top-0` by a scroll handler; blur applies only while docked and it hides in place (never translates off-screen). Keep it that way.
- `PhoneFrame` (`src/components/PhoneFrame.jsx`) - realistic phone frame (from the Tailwind Plus Pocket template) used instead of a flat screenshot for mobile apps; takes `image` (static import) and `className` for sizing.
- `ProjectLink` (`src/components/ProjectLink.jsx`) - "Zobacz szczegóły" arrow link used on the index.
- `ProjectLayout` (`src/components/ProjectLayout.jsx`) - detail page shell: fixed sidebar with Intro (hidden on mobile - detail pages start with content), Timeline dashes, date marker, back link.
- Root metadata in `src/app/layout.jsx` sets `metadataBase`, per-route canonical URLs and a title template (`%s - Michał Krzysteczko`); detail pages export their own `metadata`.

## Adding a new project

1. Add a section in `src/app/page.mdx` between `---` separators (newest at the top):

```mdx
---

![](@/images/project-image.png)

## Project Name {{ date: 'YYYY-MM-DD', type: 'app' }}

<Badges><Badge tech="rails" /><Badge tech="tailwind" /></Badges>

Description.

### <SparkleIcon /> Jakie problemy rozwiązuje?

- Feature 1
- Feature 2

<ProjectLink href="/projekty/project-slug" />

---
```

`type` drives the index filter: `app` (aplikacje/narzędzia), `sklep` (sklepy internetowe), `www` (strony internetowe). For mobile apps use `<PhoneFrame image={...} />` instead of the markdown image.

2. Create `src/app/projekty/<slug>/page.mdx` with the same image, heading, badges and description, plus `export const metadata = { title, description }`, a `ProjectLayout` default export (`title`, `date` props), and sections: "Jakie problemy rozwiązuje?", "Technologie", "Jak wyglądała praca nad projektem?". Where it exists, link the live site or GitHub repo at the end of the intro paragraph.

3. Add the slug and date to the `projects` array in `src/app/sitemap.js`.

## Language & typography

- Portfolio content is written in Polish. Keep descriptions in Polish.
- Use `&nbsp;` after single-letter words (a, i, o, u, w, z) in MDX content so they never end a line. In JSX (e.g. Intro) use `&nbsp;` as well. Never add `&nbsp;` inside `import`/`export` blocks or metadata strings.
- Texts are written for SEO and for clients/employers: lead with the project type (sklep internetowy, aplikacja webowa, strona internetowa), describe the business problem, keep claims grounded in real features.
- Plain language, no jargon - readers are non-technical. Avoid terms like "halo", "anonsuje", "placeholder"; describe the effect instead. Technical names belong only in the "Technologie" section.
- Keep captions and headings minimal (e.g. photo captions are just "Przed" / "Po").
- Don't tout "od zera" as a differentiator - every project here is built from scratch.
- Inflect English names without apostrophes ("JavaScriptu", "frameworka"). Brand spelling: "Trixbrix" (not "TrixBrix").
