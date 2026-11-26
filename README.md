# Kavin M N · XR Developer Portfolio

Live site: https://kavin1702.github.io/portfolio/

A fast, fully responsive portfolio built with **React 18 + Vite**, deployed to **GitHub Pages** with GitHub Actions.

## Edit the content

Everything on the site (projects, experience, skills, links) lives in [`src/data.js`](src/data.js).
Search that file for `TODO` to find the placeholders still to fill in.

To add a project demo video or build, add a `demo: 'https://...'` field to that project.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
npm run build    # production build in dist/
```

## Deploy

Every push to `main` builds and deploys automatically via `.github/workflows/deploy.yml`.

## Why it loads fast

- No UI framework or icon library: plain CSS and inline SVG icons.
- Project visuals are CSS gradients and 3D transforms, so there are no images to download.
- One JS bundle (~53 KB gzipped) and one CSS file (~4 KB gzipped).
- Fonts load with `display=swap`, and animations respect `prefers-reduced-motion`.
