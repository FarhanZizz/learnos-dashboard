# LearnOS Dashboard

A modern learning management system (LMS) dashboard built with Next.js, TypeScript, and Tailwind CSS.

## Overview

`learnos-dashboard` showcases a polished admin/dashboard UI for learning platforms. It includes:

- Dashboard overview with user stats, learning progress, and recent activity
- Course catalog with search, category tabs, and enrollment badges
- Leaderboard and profile navigation via a fixed sidebar
- Interactive course cards and progress indicators

## Tech stack

- Next.js 16.2.2
- TypeScript
- Tailwind CSS v4
- Lucide React icons

## Project structure

- `app/layout.tsx` — global layout and metadata
- `app/page.tsx` — redirect to `/dashboard`
- `app/dashboard/page.tsx` — main dashboard view
- `app/courses/page.tsx` — courses catalog with filtering/search
- `app/components/Sidebar.tsx` — sidebar navigation
- `app/lib/data.ts` — static mock data for users, courses, and analytics
- `app/globals.css` — global styling

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Notes

This project uses static mock data stored in `app/lib/data.ts`, making it easy to extend with a backend or API later.
