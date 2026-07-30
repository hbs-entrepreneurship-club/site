# HBS Entrepreneurship Club Website

A TanStack Start + React website for the Harvard Business School Entrepreneurship Club.

## Tech Stack

- **Framework**: TanStack Start (React Router v7)
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives + shadcn/ui
- **Build**: Vite + Nitro
- **Deployment**: Netlify

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run Biome linter
- `npm run format` — Format code with Biome

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components
│   └── site-chrome.tsx  # Global nav, footer, layout
├── routes/
│   ├── index.tsx    # Home page
│   ├── about.tsx    # About page
│   ├── summit.tsx   # Conference page
│   ├── people.tsx   # Team page
│   └── join.tsx     # Join page
├── lib/
│   ├── utils.ts     # Tailwind merge utilities
│   └── people.ts    # Team member data
└── styles.css       # Global styles + Tailwind
```

## Deployment

Automatically deploys to Netlify on push to main.