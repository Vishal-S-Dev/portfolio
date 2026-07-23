# Vishal V. Shegaonkar — Portfolio

Premium personal portfolio for a Senior Mobile Engineer specializing in **Android**, **Kotlin**, and **React Native**.

**Live:** https://vishal-s-dev.github.io/portfolio  
**Repository:** https://github.com/Vishal-S-Dev/portfolio

---

## Overview

A production-grade, statically exported Next.js portfolio with dark/light themes, scroll-driven motion, SEO, and accessibility baked in. Content is rewritten from professional experience into polished portfolio narrative — not a raw resume dump.

## Features

- Multi-page information architecture (Home, About, Experience, Projects, Skills, Achievements, Resume, Contact, 404)
- Dark & light mode with system preference
- Framer Motion scroll reveals, counters, typing effect, and hover polish
- Animated experience timeline and achievement counters
- Featured project case studies with architecture / challenges / features
- Tech radar, certifications, testimonials placeholders, GitHub & Play Store placeholders
- Contact form (`mailto:` handoff) + social links
- Full SEO: metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots, PWA manifest
- WCAG-minded semantics, skip link, keyboard-friendly controls
- Static export optimized for GitHub Pages (`basePath: /portfolio`)

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI | Radix primitives (shadcn-style) |
| Motion | Framer Motion (+ GSAP available) |
| Icons | Lucide + React Icons |
| Carousel | Embla Carousel |
| Quality | ESLint, Prettier |
| Deploy | GitHub Actions → GitHub Pages |

## Project Structure

```
app/                 # Routes, layout, SEO (robots/sitemap)
components/
  ui/                # Button, Card, Badge, Form primitives
  layout/            # Header, Footer, Theme
  animations/        # Reveal, Counter, Typing
  shared/            # Section, Container, Placeholders
sections/            # Feature sections composed into pages
hooks/               # useMounted, useMediaQuery
lib/
  data/              # Experience, projects, skills, etc.
  site.ts            # Site config & nav
  utils.ts           # cn, withBasePath
types/               # Shared TypeScript models
public/              # Favicon, OG, resume PDF, icons
.github/workflows/   # Pages deploy pipeline
```

## Installation

```bash
git clone https://github.com/Vishal-S-Dev/portfolio.git
cd portfolio
npm install
```

## Development

```bash
npm run dev        # http://localhost:3000
npm run lint       # ESLint (zero warnings)
npm run typecheck  # TypeScript
npm run format     # Prettier
```

## Production Build (local)

```bash
npm run build      # outputs static site to /out
npx serve out      # optional local preview
```

For a GitHub Pages–accurate local build:

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY=Vishal-S-Dev/portfolio npm run build
```

## Deployment (GitHub Pages)

This repo deploys automatically on every push to `main` via `.github/workflows/deploy.yml`.

1. Push to `main`
2. Actions builds with `GITHUB_PAGES=true` (enables `basePath=/portfolio`)
3. Artifact from `out/` is published with `actions/deploy-pages`
4. Site: `https://<username>.github.io/portfolio/`

### Enable Pages (one-time)

GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions**

### basePath rules

| Repository name | basePath |
| --- | --- |
| `portfolio` (project site) | `/portfolio` |
| `<username>.github.io` (user site) | _(none)_ |

Controlled in `next.config.ts` via `GITHUB_PAGES` + `GITHUB_REPOSITORY`.

## Commands Used

```bash
npx create-next-app@15 portfolio --typescript --tailwind --eslint --app
npm install framer-motion lucide-react react-icons embla-carousel-react \
  embla-carousel-autoplay gsap clsx tailwind-merge class-variance-authority \
  next-themes @radix-ui/react-*
npm run build
git push origin main
```

## License

MIT © Vishal V. Shegaonkar

---

### Future improvements

- Replace image placeholders with real photography and project screenshots
- Wire GitHub Stats / contribution graph to live APIs
- Add Play Store deep links for shipped apps
- CMS or MDX for project case studies
- Contact form backend (Formspree / Resend) instead of mailto
- Lighthouse CI in the deploy workflow
- Optional blog for architecture write-ups
