<div align="center">

# ⚡ Marvel: Doomsday

### A cinematic fan-made landing page inspired by the world of Doctor Doom

Explore character profiles, a collage of film images, dramatic posters, and a live countdown—all in one dark, cinematic experience.

[![Live site](https://img.shields.io/badge/Live%20site-GitHub%20Pages-20232a?style=for-the-badge&logo=github)](https://duebenpresleylewis.github.io/marvel-doomsday/)
[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## ✨ Highlights

- **Cinematic hero** with atmospheric lighting and animated title treatment.
- **Character profiles** for Robert Downey Jr. and Doctor Doom.
- **Picture album** arranged as an interactive poster collage.
- **Full-height poster section** and Marvel logo.
- **Live countdown** to December 17, 2026.
- **Scroll reveal animations** that respect reduced-motion preferences.
- **Responsive layout** for smaller screens.
- **GitHub Pages deployment** through GitHub Actions.

## 🧰 Built with

- HTML
- Vanilla JavaScript
- Vite
- Tailwind CSS 4

## 🚀 Run locally

**Requirements:** Node.js 22 or newer and npm.

```bash
git clone https://github.com/duebenpresleylewis/marvel-doomsday.git
cd marvel-doomsday
npm ci
npm run dev
```

Vite prints a local URL in the terminal (usually `http://localhost:5173`).

## 📦 Build for production

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## 🌐 Deploy to GitHub Pages

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and deploys the site when changes are pushed to `main`. You can also start it manually from the repository’s **Actions** tab.

For the first deployment, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**. The workflow supplies the repository path to Vite so assets work when served from a project page.

## 🗂️ Project layout

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages build and deployment
├── index.html                     # Page content
├── public/                        # Public files, including the favicon
└── src/
    ├── assets/                    # Hero, character, and poster images
    ├── scripts/                   # Countdown and scroll reveal
    ├── styles/                    # Page section styles
    ├── main.js                    # Application entry point
    └── style.css                  # Global styles
```

## 🛠️ Customize

- Update copy and page sections in [`index.html`](index.html).
- Replace images in `src/assets/` and adjust section styles in `src/styles/`.
- Change the countdown target in [`src/scripts/counter.js`](src/scripts/counter.js).
- Edit the deployment workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## ⚖️ Disclaimer

This is an unofficial, fan-made project and is not affiliated with or endorsed by Marvel. Marvel, its characters, names, and related imagery belong to their respective owners.
