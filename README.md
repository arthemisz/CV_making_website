# CV Application

A dynamic CV / resume builder built with React. Fill out the form on the
left and watch the CV on the right update in real time.

## Features

- Two-panel layout: form on the left, live CV preview on the right
- Personal Info, Education, Work Experience, and Skills sections
- Add / remove entries for education, experience, and skills
- Edit / Preview mode toggle
- Clear All button
- Load Example button (fills the form with sample data)
- Download as PDF (uses the browser's print dialog, styled to print only the CV)
- Empty sections are hidden automatically in the preview

## Getting started

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to the `dist/` folder.

## Deploying

### Vercel
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.


## Project structure

```
cv-application/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx     # React entry point
    └── App.jsx      # Main CV Builder component (all sections + preview)
```
