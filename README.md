# Portfolio — React + Vite

## What is this?

A small, focused personal portfolio template built with React + Vite.  
Purpose: to learn and practice Tailwind CSS (utility-first responsive styling) and GSAP (animations, ScrollTrigger, SplitText).

## Key features

- Vite dev server with HMR for fast iteration
- Tailwind CSS for responsive utility classes
- GSAP with ScrollTrigger and SplitText for smooth, scroll-driven animations
- Simple component structure: Hero, About, Services, Work, Footer, reusable components

## Quick start (Windows)

1. Install Node.js (LTS).
2. Open a terminal in the project folder:
   - npm install
   - npm run dev
3. Open http://localhost:5173

## Useful scripts

- npm run dev — start development server
- npm run build — build production bundle
- npm run preview — preview production build locally

## Project structure (important parts)

- src/
  - sections/ — page sections (Hero, About, Services, Work, ...)
  - components/ — reusable UI (GradientButton, Footer, ProjectData, ...)
  - assets/ — images, icons
  - main.jsx / App.jsx — app entry
- index.html
- tailwind.config.js
- vite.config.js

## Tips for Tailwind & formatting

- To avoid Tailwind classes wrapping across lines when formatting:
  - Disable editor word wrap or configure your formatter to preserve class lines.
  - Install Tailwind CSS IntelliSense and a class sorter/formatter (optional).
  - Keep long class lists as a single line or use a comment-wrapped split style if necessary.
- Use utility breakpoints (sm, md, lg, xl) and mobile-first approach.

## Tips for GSAP

- Always register plugins before use: gsap.registerPlugin(ScrollTrigger, SplitText, ...).
- Use refs (useRef) + effects (useEffect or useGSAP) to target DOM safely.
- For scroll-linked animations prefer ScrollTrigger.create or timeline with scrollTrigger.

## Adding projects

- Edit src/components/ProjectData.jsx — update or add objects in the `projects` array.

## Debugging

- Check browser console for missing imports or undefined refs.
- If components don't render from map(), ensure you're importing the data and returning JSX from map callbacks.

## Contact

- Email: ngothanhdat4002@gmail.com
- GitHub: https://github.com/darrenAK403

License: Check image asset licenses before production use.
