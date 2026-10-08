# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio for Yogesh Moodoo: an Astro 6 + TypeScript static site with plain CSS variables and no UI framework. Not a git repo yet. `implementation-plan.md` is the decided plan and supersedes `plan.md`.

## Commands

- `npm run dev`: dev server. Check pages at mobile and desktop widths.
- `npm run build`: runs `astro check` (type check) then `astro build` to `dist/`.
- `npm run preview`: serve the built site.
- Lighthouse audit of the built site; target 95+ on a11y, performance and SEO.

No test or lint tooling is set up.

## Architecture

- **Content collections** are defined in `src/content.config.ts`, using Astro 6 `glob` loaders (not the legacy `src/content/config.ts`). `projects` and `blog` read Markdown from `src/content/{projects,blog}/`. Entries use `entry.id` (not `slug`) and `render(entry)` from `astro:content`. `z` comes from `astro/zod`. Blog posts with `draft: true` are filtered out in every page and in the RSS feed.
- **Site-wide data** lives in `src/consts.ts`: `SITE` (name, email, LinkedIn, GitHub), `TIMELINE` (career history shown on `/about`) and `OPEN_SOURCE` (Hibernate HHH-11954, Liquibase-Hibernate #160, SonarSource community post). Edit this file for contact or CV changes rather than the pages.
- **Pages** in `src/pages/`: `/`, `/projects[/slug]`, `/about`, `/blog[/slug]`, `/contact` (links only, no form), `rss.xml.js`. All use `src/layouts/Base.astro`, which sets title, canonical, OpenGraph and the sitemap/RSS links. Styles are in `src/styles/global.css` (CSS variables) plus scoped `<style>` blocks in components.
- **Deploy**: `.github/workflows/deploy.yml` (`withastro/action` and `actions/deploy-pages`) on pushes to `main`. `astro.config.mjs` serves the site from the `yogeshmoodoo/me` repo, so `site` and `base: '/me'` are set. Internal links must go through `withBase()` from `src/consts.ts`; never hard-code a root-absolute path (this includes Markdown links in `src/content`, which need the literal `/me` prefix). If the repo is renamed, update `base`.

## Design and content constraints

- Dark by default, terminal-green accent (`--accent`), monospace headings and labels (`.label` adds the `~/` prefix), sans body text.
- iQera work (debt-collection platform, dsosuite) is likely proprietary. Featured projects must be non-confidential. The current projects are the three public open-source reports (each has a matching blog post); add real project files alongside them.
- Still missing: `public/resume.pdf` (not linked yet), an OG image, and non-open-source projects.
