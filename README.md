# 🎭 Artistly.com – Performing Artist Booking Platform

Artistly is a modern, responsive, and performant web application built with **Next.js 13+** that allows users to browse and filter performing artists. Artists can also onboard themselves using a multi-step form. This app demonstrates real-world UI architecture, component optimization, and best practices for SEO, accessibility, and performance.

## 🚀 Live Demo

[Click Here to View the Demo Website](https://artistly21.vercel.app/)

---

## 📌 Features

### 🔍 Artist Listing Page
- Fully responsive grid layout
- **Filter by Category, Location, and Fee Range**
- Virtualized list rendering with `react-window` for high performance
- Clean UI with reusable components

### 📝 Artist Onboarding
- Multi-section onboarding form with validated fields
- Inputs: Name, Bio, Category (multi-select), Languages, Fee Range, Image Upload, Location
- Form validation using **React Hook Form** + **Yup**
- File uploads using controlled components
- Mock submission (console or mock API)

### 📊 Manager Dashboard
- Table of artist submissions
- Displays: Name, Category, City, Fee, Actions
- Conditional rendering
- Reusable table component

---

## 🛠️ Tech Stack

| Layer        | Tech                                  |
|--------------|----------------------------------------|
| Frontend     | Next.js 13+ with App Router            |
| UI Components| ShadCN + Tailwind CSS + Radix UI       |
| Forms        | React Hook Form + Yup                  |
| State Mgmt   | React `useState`, `useEffect`, `useContext` |
| Optimization | `React.memo`, `useCallback`, `useMemo`, `react-window` |
| Deployment   | Vercel                                  |

---

## 📁 Folder Structure

```bash
artistly/
├── .gitignore
├── public/
│   ├── data/
│   │   ├── artists.json         # Static artist data
│   │   ├── categories.json      # Static category data
│   │   └── submissions.json     # Static submission data
│   └── images/
│       └── artists/             # All artist images go here
├── pages/
│   ├── index.tsx               # Home page
│   ├── artists.tsx             # Artists listing page
│   ├── dashboard.tsx           # Manager dashboard page
│   ├── onboard.tsx             # Onboarding form page
│   └── _app.tsx                # Custom App component for layout
├── src/
│   ├── components/
│   │   ├── ArtistCard.tsx      # Artist card component
│   │   ├── CategoryCard.tsx    # Category card component
│   │   ├── FilterBlock.tsx     # Filter block for artists
│   │   ├── FilterCard.tsx      # Filter card component
│   │   ├── Header.tsx          # Header navigation
│   │   ├── Table.tsx           # Table component
│   │   ├── TableRow.tsx        # Table row component
│   │   ├── ThemeToggle.tsx     # Theme toggle component
│   │   └── ui/
│   │       ├── Button.tsx      # UI button component
│   │       ├── Checkbox.tsx    # UI checkbox component
│   │       ├── Input.tsx       # UI input component
│   │       ├── Label.tsx       # UI label component
│   │       ├── Textarea.tsx    # UI textarea component
│   │       └── multi-select.tsx # UI multi-select component
│   ├── context/
│   │   └── theme-store.ts      # Zustand store or context API for theme
│   ├── lib/
│   │   ├── utils.ts            # Utility functions
│   │   └── artistSchema.ts     # Input validation schema
│   ├── types/
│   │   ├── artist.ts           # Artist type definitions
│   │   └── submission.ts       # Submission type definitions
│   └── styles/                 # Optional: Tailwind CSS or global styles
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── next.config.mjs             # Next.js configuration
└── README.md                   # Project documentation
```

---

## ✅ Optimization Techniques Used

- `React.memo` for component memoization
- `useMemo` and `useCallback` for avoiding unnecessary recalculations
- Responsive layouts using Tailwind and CSS Grid
- Virtualized list rendering for large artist datasets
- Lazy-loaded components with `next/dynamic`
- Clean and modular component structure
- getStaticProps for performance.
- getServerSideProps for real-time data.

---

## 📦 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Gokulkiran418/optimized-react-webapp.git
cd artistly
npm install
npm run dev
```
http://localhost:3000

## SEO & Accessibility

### 🔍 Artist Listing Page
- Semantic HTML and accessible form inputs
- Meta tags and next/head usage for SEO
- Descriptive image alt attributes
- Dark/light theme support

## Deployment
- This project is ready for deployment on Vercel. Just push to GitHub and connect your repo at vercel.com