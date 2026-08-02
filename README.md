# Portfolio

My personal portfolio website: [krzysteczko-m.pl](https://krzysteczko-m.pl)

It shows my projects - websites, online shops and web apps. Each project has a short card on the home page and its own page with more details and photos.

## Built with

- [Next.js 14](https://nextjs.org) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com)
- [react-photo-view](https://github.com/MinJieLiu/react-photo-view) - click a photo to zoom it
- Deployed on [Vercel](https://vercel.com)

## Features

- List of projects with filters (all / apps / shops / websites)
- A filter bar that hides when you scroll down and comes back when you scroll up
- Project pages with photos, tech badges and a short story about the work
- Photo gallery with zoom and swipe
- Dark and light mode
- Sitemap, robots.txt and meta tags for SEO
- Google Analytics

## Run it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
```

## Project structure

- `src/app/page.jsx` - home page with all projects
- `src/app/projekty/<slug>/page.jsx` - one page per project
- `src/components/` - shared components (layout, badges, filters, photo gallery, phone frame)
- `src/images/` - project photos and thumbnails
