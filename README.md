# 🎨 WebCanvas

[![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8)](https://tailwindcss.com/)

**WebCanvas** is a modern, section-based website builder powered by Next.js and TypeScript. It lets you create and customize responsive pages with an intuitive interface. drag sections to rearrange them, edit their content in real time, and preview your design instantly. Perfect for developers and designers who want to quickly prototype landing pages or explore building a lightweight page editor.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Development](#development)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## Features

- 🧩 Drag & Reorder Sections – Intuitive interface to rearrange your page layout easily
- 📱 **Responsive Templates** – Build websites that look great on any device
- ⚙️ **Customizable Components** – Personalize every element to your liking
- 👀 **Real-Time Preview** – See your changes instantly as you edit
- 🔄 **Import/Export** – Save and reuse your sections across projects

## Tech Stack

- **Framework:** Next.js 15.4 (App Router)
- **Language:** TypeScript 5.0
- **Styling:** TailwindCSS 4.0
- **DnD:** @dnd-kit for drag & drop
- **UI:** Framer Motion, React Icons

## Quick start

  These commands assume you have Node.js (18+) and npm installed.

  1. Clone the repo

  ```bash
  git clone https://github.com/saeedhalabi/web-canvas.git
  cd web-canvas
  ```

  2. Install dependencies

  ```bash
  npm install
  ```

  3. Run the development server

  ```bash
  npm run dev
  ```

Open http://localhost:3000 in your browser.

4. Build for production

```bash
npm run build
npm run start
```

Visit http://localhost:3000 to view your production build.

5. Additional commands

```bash
# Run the linter
npm run lint

# Type checking
tsc --noEmit
```

  
  ## Development

  - Components live in `components/` and reusable page sections are in `sections/`.
  - Global app logic and providers live in `context/` and `hooks/`.
  - Screenshots used in the README are in `screenshots/` (you can replace them).

  If you want to add a new section:

  1. Create a React/TSX component in `sections/` (follow existing examples: `Hero.tsx`, `Footer.tsx`).
  2. Export the section so it appears in the editor's library.
  3. Add any styles or assets to `public/` or the `components/` folder.

  ## Project structure

  - `app/` — Next.js App Router entry (pages/layouts)
  - `components/` — UI components and editor pieces
  - `sections/` — Reusable sections users can add to the canvas
  - `context/` — Builder context and provider
  - `hooks/` — Custom hooks (e.g., `useBuilder`)
  - `screenshots/` — Helpful preview images used in the README

  ## Usage (short)

  1. Open the app in the browser.
  2. Use the sidebar to browse sections and drag them onto the canvas.
  3. Click a section to edit its content (text, images, properties).
  4. Rearrange sections by dragging; use the preview switcher to see responsive views.

## Screenshots

![Builder interface showing the drag-and-drop section editor](./screenshots/section-layout.jpg)

![Responsive design preview across different device sizes](./screenshots/responsive-layout.jpg)

## Contributing

  Contributions are welcome. A simple suggested workflow:

  1. Fork the repo and create a branch for your feature: `git checkout -b feat/my-feature`
  2. Make changes and run the dev server: `npm run dev`
  3. Commit and open a PR describing your change.


<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/saeedhalabi">Saeed Halabi</a></p>
</div>
