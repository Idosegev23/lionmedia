# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lion Media — a Hebrew-first (RTL) digital agency website built with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS 3.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build + sitemap generation
npm run start        # Start production server
npm run lint         # ESLint (next/core-web-vitals + next/typescript)
npm run check-env    # Validate required env vars before build
npm run vercel-build # check-env && build (used by Vercel)
```

No test framework is configured.

## Architecture

- **App Router**: Pages in `src/app/`, components in `src/components/`
- **Path alias**: `@/*` maps to `./src/*`
- **Single-page feel**: Homepage (`src/app/page.tsx`) composes section components (Hero, WhyUs, ServicesGrid, ProcessSteps, Results, CTABand, Testimonials, ContactPopup)
- **Additional pages**: `/services`, `/about`, `/privacy`, `/terms`, `/contact` (redirects to `/#contact` via vercel.json)
- **API route**: `src/app/api/contact/route.ts` — POST endpoint sending emails via Nodemailer/Gmail with Zod validation
- **Client components** use `'use client'` directive; default is server components

## Styling & Design System

- Tailwind with brand color prefix `lm-` (e.g., `lm-brand`, `lm-ink`, `lm-lime`, `lm-bg`)
- Custom fonts: Heebo (Hebrew body text via next/font), Poppins (English/accents)
- Extensive custom CSS animations in `src/app/globals.css` (scroll-bounce, typing-dots, pulse-circle, counter-up, neumorphic shapes)
- RTL layout: `<html lang="he" dir="rtl">` in root layout

## Animation Stack

- **Framer Motion**: scroll-triggered animations via `useInView`, staggered containerVariants/itemVariants pattern
- **GSAP**: complex timeline animations in Hero section
- **CSS keyframes**: infinite loop animations defined in globals.css

## Environment Variables

Required for contact form (`.env.local`):
```
EMAIL_USER, EMAIL_PASS, MAIL_TO, MAIL_FROM
```

Optional: `SITE_URL`, `SEND_THANK_YOU_EMAIL`, `ANALYTICS_PROVIDER`, `PLAUSIBLE_DOMAIN`, `GA4_ID`

## Deployment

Vercel (Frankfurt/fra1 region). Config in `vercel.json` includes security headers, `/contact` redirect, and 10s function timeout for the contact API.
