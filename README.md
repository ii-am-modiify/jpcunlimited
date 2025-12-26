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

## Email Configuration (Contact Form)

The contact form uses [Resend](https://resend.com) for sending emails. To set it up:

1. **Create a Resend account** at https://resend.com (free tier available)
2. **Get your API key** from the Resend dashboard
3. **Set environment variables**:
   - `RESEND_API_KEY` - Your Resend API key
   - `CONTACT_EMAIL` - Email address where contact form submissions should be sent
   - `RESEND_FROM_EMAIL` - The "from" email address (must be verified in Resend, or use `onboarding@resend.dev` for testing)

### Local Development

Create a `.env` file in the project root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

### Production (Vercel)

Add these environment variables in Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the three variables listed above

**Note**: You can also set `contact.email` in `src/config.ts` instead of using `CONTACT_EMAIL` environment variable.

## Deployment

This site is configured for server-side rendering with Vercel. You can deploy to:
- **Vercel** (recommended) - Automatic deployment from GitHub
- Other platforms that support Astro server mode

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables (see Email Configuration above)
3. Vercel will automatically detect Astro and deploy

## Notes

- Replace placeholder image in `AboutSection.astro` with actual photo
- Update contact information in `src/config.ts`
- Add favicon in `public/favicon.svg`
- Customize FAQ content as needed
- Set up Resend account and environment variables for contact form to work

