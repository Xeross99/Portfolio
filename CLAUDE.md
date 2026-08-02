# Portfolio

Next.js 14 portfolio site, plain JSX views (no MDX). Projects have an index (home page) and detail pages (`/projekty/<slug>`).

## Stack

- Next.js 14 (App Router)
- Tailwind CSS 4
- Deployed on Vercel

## Structure

- `src/app/page.jsx` - Project index: all projects as `<Article>` blocks, newest first
- `src/app/projekty/<slug>/page.jsx` - Project detail pages with full description and per-page SEO metadata
- `src/app/sitemap.js` / `src/app/robots.js` - SEO; sitemap has a static list of project slugs
- `src/images/` - Project thumbnails (imported directly, e.g. `import cover from '@/images/filename.png'`)
- `src/components/` - Layout (index), ProjectLayout (detail), Article, Intro, Badge, ProjectFilter, PhoneFrame, ProjectLink, SparkleIcon, etc.
- Prose styling comes from the `typography` class (see `src/styles/typography.css`): `Article` and `ProjectLayout` wrap content in it, so plain `<h2>/<h3>/<p>/<ul>` get styled automatically. Use `not-prose` to opt out (e.g. custom grids).

## Key components

- `Article` / `CoverImage` (`src/components/Article.jsx`) - index article shell (timeline date marker, typography wrapper, filter-aware hiding) and the rounded/ringed cover image used on all pages.
- `Badge` / `Badges` (`src/components/Badge.jsx`) - tech badges with Simple Icons logos. Variants: `python`, `ruby`, `rails`, `expo`, `android`, `tailwind`, `nextjs`. Add new variants by extending the `techs` map (label, colors, icon path, optional `iconClass` for logos that render small).
- `ProjectFilter` (`src/components/ProjectFilter.jsx`) - filter bar on the index (Wszystkie / Aplikacje / Sklepy / Strony). Each `<Article>` gets a `type` prop (`app` | `sklep` | `www`); `Article` hides itself when it doesn't match. The bar hides on scroll down (only once docked at the top) and reappears on scroll up. It deliberately does NOT use `position: sticky`, `overflow-x-auto`, always-on transforms or always-on `backdrop-blur`: any composited layer breaks iOS Safari's translucent toolbar rendering. Instead it is a plain in-flow element inside a constant-height anchor, switched to `fixed top-0` by a scroll handler; blur applies only while docked and it hides in place (never translates off-screen). Keep it that way.
- `PhoneFrame` (`src/components/PhoneFrame.jsx`) - realistic phone frame (from the Tailwind Plus Pocket template) used instead of a flat screenshot for mobile apps; takes `image` (static import) and `className` for sizing.
- `ProjectLink` (`src/components/ProjectLink.jsx`) - "Zobacz szczegóły" arrow link used on the index.
- `ProjectLayout` (`src/components/ProjectLayout.jsx`) - detail page shell: fixed sidebar with Intro (hidden on mobile - detail pages start with content), Timeline dashes, date marker, back link.
- `PhotoGallery` / `Zoomable` (`src/components/PhotoGallery.jsx`) - click-to-zoom photos via `react-photo-view` (same pattern as the Zdrowo_aktywni project). One `PhotoGallery` around a set of `Zoomable`s groups them into a swipeable gallery. Library CSS is imported in `src/app/layout.jsx`.
- Root metadata in `src/app/layout.jsx` sets `metadataBase`, per-route canonical URLs and a title template (`%s - Michał Krzysteczko`); detail pages export their own `metadata`.

## Adding a new project

1. Add an `<Article>` block in `src/app/page.jsx` (newest at the top):

```jsx
<Article id="project-slug" date="YYYY-MM-DD" type="app">
  <CoverImage image={coverImport} alt="..." />

  <h2>
    <a href="#project-slug">Project Name</a>
  </h2>

  <Badges>
    <Badge tech="rails" />
    <Badge tech="tailwind" />
  </Badges>

  <p>Description.</p>

  <h3>
    <SparkleIcon /> Jakie problemy rozwiązuje?
  </h3>

  <ul>
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>

  <ProjectLink href="/projekty/project-slug" />
</Article>
```

`type` drives the index filter: `app` (aplikacje/narzędzia), `sklep` (sklepy internetowe), `www` (strony internetowe). For mobile apps use `<PhoneFrame image={...} />` instead of `CoverImage`.

2. Create `src/app/projekty/<slug>/page.jsx` with the same cover, heading, badges and description, plus `export const metadata = { title, description }`, a `ProjectLayout` wrapper (`title`, `date` props), and sections: "Jakie problemy rozwiązuje?", "Technologie", "Jak wyglądała praca nad projektem?". Where it exists, link the live site or GitHub repo at the end of the intro paragraph (`target="_blank" rel="noreferrer"`).

3. Add the slug and date to the `projects` array in `src/app/sitemap.js`.

## Language & typography

- Portfolio content is written in Polish. Keep descriptions in Polish.
- Use `&nbsp;` after single-letter words (a, i, o, u, w, z) in JSX text so they never end a line. Never add `&nbsp;` inside metadata strings.
- Use Polish typographic quotes („…”) in JSX text - ESLint rejects unescaped straight quotes anyway.
- Texts are written for SEO and for clients/employers: lead with the project type (sklep internetowy, aplikacja webowa, strona internetowa), describe the business problem, keep claims grounded in real features.
- Plain language, no jargon - readers are non-technical. Avoid terms like "halo", "anonsuje", "placeholder"; describe the effect instead. Technical names belong only in the "Technologie" section.
- Keep captions and headings minimal (e.g. photo captions are just "Przed" / "Po").
- Don't tout "od zera" as a differentiator - every project here is built from scratch.
- Inflect English names without apostrophes ("JavaScriptu", "frameworka"). Brand spelling: "Trixbrix" (not "TrixBrix").
