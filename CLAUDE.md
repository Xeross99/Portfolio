# Portfolio

Next.js 14 portfolio site with MDX content.

## Stack

- Next.js 14 (App Router) + MDX
- Tailwind CSS 4
- once-ui design system
- Deployed on Vercel

## Structure

- `src/app/page.mdx` - All projects defined here as MDX sections, newest first
- `src/images/` - Project thumbnails (referenced as `@/images/filename.png`)
- `src/components/` - Layout, Intro, mdx overrides, SparkleIcon, etc.
- `mdx/` - Remark/rehype/recma plugin configs

## Adding a new project

Add a new section in `src/app/page.mdx` between `---` separators, following this pattern:

```mdx
---

![](@/images/project-image.png)

## Project Name {{ date: 'YYYY-MM-DD' }}

Description. [Zobacz example.com](https://example.com)

### <SparkleIcon /> Co zrobilem?

- Feature 1
- Feature 2

---
```

Place newest projects at the top of the file.

## Language

Portfolio content is written in Polish. Keep descriptions in Polish.
