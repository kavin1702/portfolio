# Kavin M N · XR Developer Portfolio

Live site: https://kavin1702.github.io/portfolio/

A fast, fully responsive portfolio built with **React 18 + Vite**, deployed to **GitHub Pages** with GitHub Actions.

## Edit the content

Everything on the site (projects, experience, skills, links) lives in [`src/data.js`](src/data.js).
Search that file for `TODO` to find the placeholders still to fill in.

### Add photos, videos and project details

1. Upload images to `public/images/` (on GitHub: open the folder → **Add file → Upload files**).
2. In `src/data.js`, add fields to a project:

```js
image: 'images/fire-safety.jpg',            // cover photo on the card
gallery: ['images/fire-1.jpg', 'images/fire-2.jpg'],
video: 'https://youtu.be/XXXXXXXXXXX',       // YouTube link (Unlisted is fine)
role: 'Solo developer',
details: ['What I built', 'A hard problem I solved', 'Result'],
```

3. For your profile photo, set `photo: 'images/kavin.jpg'` in `profile`.
4. Commit. The site redeploys in about a minute.

Images load lazily and videos load only when someone clicks play, so the page stays fast.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
npm run build    # production build in dist/
```

## Deploy

Every push to `main` builds and deploys automatically via `.github/workflows/deploy.yml`.

## SEO

- The build pre-renders the whole page to HTML (`src/entry-server.jsx` + `prerender.mjs`), so Google sees all the text without running JavaScript.
- `index.html` has the title, description, Open Graph image and Person structured data (JSON-LD).
- `public/sitemap.xml` and `public/robots.txt` tell search engines what to index.

## Why it loads fast

- No UI framework or icon library: plain CSS and inline SVG icons.
- Project visuals are CSS gradients and 3D transforms, so there are no images to download.
- One JS bundle (~53 KB gzipped) and one CSS file (~4 KB gzipped).
- Fonts load with `display=swap`, and animations respect `prefers-reduced-motion`.
