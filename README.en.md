# Atlas

[中文](./README.md) | English

Atlas is a dark Astro personal website template for students, makers, and design-engineering learners. It is built for course notes, small projects, writing, resume-style experience, and personal links.

The template uses Astro Content Collections for blog posts and projects, so most content is typed, file-based, and easy to replace.

## Features

- Dark visual style with a student-friendly personal homepage
- Avatar, status card, quick links, project cards, notes, resume, and contact pages
- Built-in Chinese and English routes: Chinese by default, English under `/en/`
- Blog posts written in Markdown
- Project case studies written in Markdown
- Central site copy and navigation in `src/config/site.ts`
- Astro Content Collections powered by `src/content.config.ts`
- Tailwind CSS v4 through `@tailwindcss/vite`
- Static output, ready for GitHub Pages, Vercel, Netlify, or Cloudflare Pages

## Project Structure

```text
src/
  components/        Reusable UI components
  config/            Site text, nav, social links, resume data
  content/           Blog and project Markdown content
  layouts/           Base layout and Markdown layout
  pages/             Route pages
  styles/            Global Tailwind styles
public/
  avatar.png         Default avatar placeholder
  favicon.svg        Site icon
```

## Getting Started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Customize

Most template text can be edited in:

```text
src/config/site.ts
```

Use this file to update:

- Site name and description
- Chinese and English site copy
- Navigation
- Avatar path
- Social links
- Homepage hero text
- Status card
- Quick links
- About, projects, blog, resume, and contact page copy
- Skills and experience
- Shared UI labels

## Internationalization

Atlas uses Chinese as the default route and English under:

```text
/en/
/en/about/
/en/projects/
/en/blog/
/en/resume/
/en/contact/
```

Language copy lives in:

```text
src/config/site.ts
```

Use the `zh` config for Chinese and the `en` config for English. The Header includes an automatic language switcher.

Blog posts use one shared content set across all languages. Projects can use the `lang` frontmatter field for Chinese and English versions:

```md
---
lang: "zh"
title: "中文项目"
---
```

```md
---
lang: "en"
title: "English Project"
---
```

Replace the default avatar at:

```text
public/avatar.png
```

Replace the browser tab icon at:

```text
public/favicon.svg
```

## Content

Blog posts live in:

```text
src/content/blog/
```

Projects live in:

```text
src/content/projects/
```

Example blog post:

```md
---
title: "My First Note"
description: "A short description for the note."
pubDate: 2026-05-20
tags: ["Astro", "Study"]
draft: false
---

Write your note here.
```

Example project:

```md
---
lang: "en"
title: "Course Dashboard"
description: "A small dashboard made for a class project."
date: 2026-05-20
tags: ["Astro", "Tailwind"]
role: "Student Project"
featured: true
---

Write your project story here.
```

## Deployment

Atlas builds to static files in `dist/`.

```sh
npm run build
```

Deploy the generated site with any static hosting platform. For Astro-specific deployment notes, see the [Astro deployment guide](https://docs.astro.build/en/guides/deploy/).

## License

This project is licensed under the [GNU General Public License v3.0](./LICENSE).
