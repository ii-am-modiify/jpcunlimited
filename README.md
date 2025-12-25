# JPC Unlimited Website

A luxury website for JPC Unlimited - Acoustic Architecture & Custom Millwork Specialist, built with Astro and Tailwind CSS.

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
pacos site/
├── src/
│   ├── components/          # Reusable components
│   │   ├── AboutSection.astro  # The Musician's Builder section
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── PainPoints.astro
│   │   ├── ProcessSteps.astro
│   │   ├── Services.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   └── BookingButton.astro
│   ├── layouts/            # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/              # Route pages
│   │   ├── index.astro     # Homepage
│   │   └── contact.astro   # Contact page
│   ├── styles/             # Global styles
│   │   └── global.css
│   └── config.ts           # Site configuration
├── public/
│   └── images/             # Static images
└── package.json
```

## Configuration

Edit `src/config.ts` to customize:
- Site metadata
- Business information
- SEO keywords
- Contact information
- Social links

## Design System

- **Color Palette**: Dark theme with warm gold (#D4AF37) accents
- **Background**: Deep dark (#0A0A0A primary, #1A1A1A secondary)
- **Text**: White/Off-white for primary, light gray for secondary
- **Typography**: Modern, readable sans-serif fonts

## Features

- ✅ Fully responsive design
- ✅ SEO-optimized (meta tags, structured data, sitemap)
- ✅ Fast loading (Astro's static generation)
- ✅ StoryBrand 2.0 framework structure
- ✅ Dark luxury theme with gold accents
- ✅ Accessible navigation and forms

## StoryBrand 2.0 Flow

The homepage follows the StoryBrand 2.0 framework:
1. Hero (One-Liner + Headline + CTA)
2. Pain Points (The Villain)
3. About Section (The Guide)
4. Process Steps (The Plan)
5. Services (Solutions)
6. FAQ (Objection Handling)

## Deployment

This site is configured for static site deployment. You can deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist/` folder.

## Notes

- Replace placeholder image in `AboutSection.astro` with actual photo
- Update contact information in `src/config.ts`
- Add favicon in `public/favicon.svg`
- Customize FAQ content as needed

