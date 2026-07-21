# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (localhost:5173)
npm run host       # dev server exposed on LAN
npm run build      # production build to dist/
npm run preview    # preview the production build locally
npm run lint       # ESLint (0 warnings allowed)
npm run deploy     # build then push dist/ to gh-pages branch
```

There are no tests.

## Architecture

Single-page portfolio deployed to GitHub Pages at `/portfolio/`. All sections render in sequence as a vertical scroll — no client-side routing.

**Content is centralized.** `src/constants/index.js` is the single source of truth for every piece of portfolio data: nav links, about cards, technologies, work experiences, projects, and social links. Asset imports are re-exported through `src/assets/index.js`. To add or change portfolio content, edit only these two files.

**Section anatomy.** Every main section (About, Experience, Tech, Works, Contact) is exported as `SectionWrapper(Component, idName)` from `src/hoc/SectionWrapper.jsx`. The HOC wraps the component in a `<motion.section>` with a `staggerContainer` variant and injects a `<span id={idName}>` anchor that the navbar scrolls to.

**Animation system.** `src/utils/motion.js` exports reusable Framer Motion variants (`textVariant`, `fadeIn`, `zoomIn`, `slideIn`, `staggerContainer`). `src/style.js` exports shared Tailwind class strings for typography sizes used across sections. `src/utils/reveal.jsx` exports `TextDecode` — a katakana scramble-then-reveal effect that triggers once on scroll entry.

**Three.js canvases** in `src/components/canvas/`:
- `Waves.jsx` — hero background; 200×200 animated sine/cosine wire mesh. Fades out as the user scrolls via `useScrollPosition` (`src/utils/scroll.jsx`).
- `Ball.jsx` — Tech section; marching cubes metaballs with Rapier physics. Each ball represents a technology from `constants`, rendered as a `MarchingCube` with a texture sprite overlay.
- `WaveBall.jsx` — Contact section decorative canvas.
- `Stars.jsx`, `Card3d.jsx` — particle field and 3D tilt card used in other sections.

**Contact form** uses EmailJS. Requires a `.env` file with:
```
VITE_APP_EMAILJS_SERVICE_ID
VITE_APP_EMAILJS_TEMPLATE_ID
VITE_APP_EMAILJS_PUBLIC_KEY
VITE_APP_EMAILJS_RECEIVER_NAME
VITE_APP_EMAILJS_RECEIVER_EMAIL
```

**Tailwind custom tokens** (defined in `tailwind.config.js`):
- Colors: `primary` (#050816), `secondary` (#aaa6c3), `tertiary` (#151030), `black-100`, `black-200`, `white-100`
- Breakpoint: `xs` (450px)
- Shadow: `card`

**Deployment:** `npm run deploy` builds the app then publishes the `dist/` directory to the `gh-pages` branch. Vite's `base` is set to `/portfolio/` and React Router uses `basename="/portfolio/"` to match.
