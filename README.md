# kwame.dev — Personal Portfolio & Blog

Personal portfolio and engineering blog for Kwame Amosah, Senior Software Engineer based in New York City.

**Live:** [kamosah.vercel.app](https://kamosah.vercel.app)

## Stack

- **Framework:** Next.js 16.2.1 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 with `@theme` design tokens
- **Blog:** Contentlayer2 + MDX with rehype-pretty-code syntax highlighting
- **Animations:** Framer Motion with `prefers-reduced-motion` support
- **Dark mode:** next-themes (system default, class strategy)
- **UI:** Radix UI Dialog (mobile nav), react-intersection-observer
- **Fonts:** Instrument Serif (display), DM Sans (body), JetBrains Mono

## Project Structure

```
src/
  app/              # Next.js App Router pages and layouts
  components/
    layout/         # Nav, Footer, PageTransition, ThemeProvider
    mdx/            # MDX component overrides (Callout, PostContent)
    sections/       # Page-level sections (Hero, FeaturedWork, BlogList)
    ui/             # Primitives (Button, Badge, Card, AnimatedSection)
  content/
    posts/          # MDX blog posts
  lib/              # Utilities and Contentlayer helpers
```

## Local Development

```bash
npm install
npm run dev
```

Contentlayer2 runs automatically via the `predev` script before Next.js starts.

## Deployment

Deployed on Vercel. The `prebuild` script handles Contentlayer2 type generation before the Next.js build — no additional configuration required.
