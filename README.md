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
The project is deployed at https://cv-making-website-three.vercel.app/


## Project structure

```
CV_making_website-main/
├── src/
│   ├── components/
│   │   ├── forms/                  # Data entry sidebar components
│   │   │   ├── EducationForm.jsx
│   │   │   ├── ExperienceForm.jsx
│   │   │   ├── PersonalInfoForm.jsx
│   │   │   └── SkillsForm.jsx
│   │   ├── preview/                # Read-only document rendering
│   │   │   └── CVDocument.jsx
│   │   └── ui/                     # Small, reusable elements
│   │       └── Input.jsx
│   ├── styles/                     # CSS stylesheets
│   │   └── main.css
│   ├── utils/                      # Extracted logic and constants
│   │   ├── helpers.js
│   │   └── initialData.js
│   ├── App.jsx                     # Layout wrapper and state container
│   └── main.jsx                    # React root rendering[cite: 1]  
├── README.md                       # Project documentation[cite: 1]
└── vite.config.js                  # Vite bundler configuration[cite: 1]
```
