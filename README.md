# Balaji Dental & Implant Center

Dental clinic landing page built with Astro, React (for the interactive navbar island) and Tailwind CSS v4.

## Structure

- `src/pages/index.astro` — page composition
- `src/layouts/Layout.astro` — document shell, fonts, meta
- `src/components/*.astro` — static sections (Hero, Benefits, Treatments, Footer)
- `src/components/Navbar.jsx` — the only client-hydrated component (`client:load`), handles the scroll-aware sticky bar and mobile menu
- `src/components/{ToothIcon,WhatsAppIcon,CurvedDecoration,PlaceholderPhoto}.jsx` — small presentational React components reused by both the Astro sections and the Navbar island

## Commands

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```
