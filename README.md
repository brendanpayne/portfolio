# Brendan Payne — Portfolio

A personal portfolio site built with React, Three.js, and Framer Motion. Live at [iampayne.com](https://www.iampayne.com).

## What's inside

The site is a single-page experience that tells the story of my work as a software developer. From building Android apps for 200,000+ Kroger associates to architecting agentic AI infrastructure, and all I have done in-between and beyond. Each section transitions smoothly as you scroll, with interactive 3D canvases, a katakana text-decode reveal effect, and a physics-based tech ball pit for good measure.

**Sections**
- **About** — Background, education (University of Cincinnati, study abroad at Nanzan University in Japan), hobbies, and yes, my cats
- **Work** — Professional experience at NetNeural.AI and Kroger Technology & Digital
- **Tech** — Interactive metaball canvas representing languages and tools I work with
- **Projects** — Selected work including an AI scheduling app, a self-hosted agentic AI platform, and a tabletop card generator
- **Contact** — Email form powered by EmailJS

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| 3D / WebGL | Three.js, @react-three/fiber, @react-three/drei, Rapier physics |
| Animation | Framer Motion |
| Styling | Tailwind CSS |
| Contact | EmailJS |
| Deployment | GitHub Pages via `gh-pages` |

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173
```

The contact form requires a `.env` file at the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
VITE_APP_EMAILJS_RECEIVER_NAME=
VITE_APP_EMAILJS_RECEIVER_EMAIL=
```

## Other commands

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run lint       # ESLint (zero warnings allowed)
npm run host       # dev server exposed on local network
npm run deploy     # build + publish to gh-pages branch
```

## Content

All portfolio data lives in one place: `src/constants/index.js`. Asset imports are re-exported through `src/assets/index.js`. To update anything on the site, those are the only two files you need to touch.

## License

MIT
