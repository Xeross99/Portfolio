# Portfolio

Next.js 14 portfolio site with MDX content. Projects have an index (home page) and detail pages (`/projekty/<slug>`).

## Stack

- Next.js 14 (App Router) + MDX
- Tailwind CSS 4
- Deployed on Vercel

## Structure

- `src/app/page.mdx` - Project index: all projects as MDX sections, newest first
- `src/app/projekty/<slug>/page.mdx` - Project detail pages with full description and per-page SEO metadata
- `src/images/` - Project thumbnails (referenced as `@/images/filename.png`)
- `src/components/` - Layout (index), ProjectLayout (detail), Intro, Badge, ProjectLink, mdx overrides, SparkleIcon, etc.
- `mdx/` - Remark/rehype/recma plugin configs

## Key components

- `Badge` / `Badges` (`src/components/Badge.jsx`) - tech badges with Simple Icons logos. Variants: `python`, `ruby`, `rails`, `android`, `tailwind`, `nextjs`. Add new variants by extending the `techs` map (label, colors, icon path, optional `iconClass` for logos that render small).
- `ProjectLink` (`src/components/ProjectLink.jsx`) - "Zobacz szczegóły" arrow link used on the index.
- `ProjectLayout` (`src/components/ProjectLayout.jsx`) - detail page shell: fixed sidebar with Intro, Timeline dashes, date marker, back link.
- Root metadata in `src/app/layout.jsx` uses a title template (`%s - Michał Krzysteczko`); detail pages export their own `metadata`.

## Adding a new project

1. Add a section in `src/app/page.mdx` between `---` separators (newest at the top):

```mdx
---

![](@/images/project-image.png)

## Project Name {{ date: 'YYYY-MM-DD' }}

<Badges><Badge tech="rails" /><Badge tech="tailwind" /></Badges>

Description.

### <SparkleIcon /> Jakie problemy rozwiązuje?

- Feature 1
- Feature 2

<ProjectLink href="/projekty/project-slug" />

---
```

2. Create `src/app/projekty/<slug>/page.mdx` with the same image, heading, badges and description, plus `export const metadata = { title, description }`, a `ProjectLayout` default export (`title`, `date` props), and sections: "Jakie problemy rozwiązuje?", "Technologie", "Jak wyglądała praca nad projektem?".

## Language & typography

- Portfolio content is written in Polish. Keep descriptions in Polish.
- Use `&nbsp;` after single-letter words (a, i, o, u, w, z) in MDX content so they never end a line. In JSX (e.g. Intro) use `&nbsp;` as well. Never add `&nbsp;` inside `import`/`export` blocks or metadata strings.
- Texts are written for SEO and for clients/employers: lead with the project type (sklep internetowy, aplikacja webowa, strona internetowa), describe the business problem, keep claims grounded in real features.
