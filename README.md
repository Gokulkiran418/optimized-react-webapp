# 🎭 Artistly.com – Performing Artist Booking Platform

Artistly is a modern, responsive, and performant web application built with **Next.js 13+** that allows users to browse and filter performing artists. Artists can also onboard themselves using a multi-step form. This app demonstrates real-world UI architecture, component optimization, and best practices for SEO, accessibility, and performance.

## 🚀 Live Demo

[https://artistly.vercel.app](https://artistly.vercel.app)

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
│   └── images/
│       └── artists/            # All artist images go here
├── src/
│   ├── app/
│   │   ├── artists/            # Artist listing page
│   │   │   └── page.tsx
│   │   ├── onboarding/         # Onboarding form
│   │   │   └── page.tsx
│   │   ├── dashboard/          # Manager dashboard
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │   └── page.tsx            # Home page
│
│   ├── components/
│   │   ├── ArtistCard.tsx
│   │   ├── CategoryCard.tsx
│   │   ├── FilterBlock.tsx
│   │   ├── FilterCard.tsx
│   │   ├── Header.tsx
│   │   ├── Table.tsx
│   │   ├── TableRow.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Checkbox.tsx
│   │       ├── Input.tsx
│   │       ├── Label.tsx
│   │       ├── Textarea.tsx
│   │       └── multi-select.tsx
│
│   ├── context/
│   │   └── theme-store.ts      # Zustand store or context API
│
│   ├── data/
│   │   ├── artists.json
│   │   ├── categories.json
│   │   └── submissions.json
│
│   ├── lib/
│   │   ├── utils.ts
│   │   └── artistSchema.ts     # Input validation schema
│
│   ├── types/
│   │   ├── artist.ts
│   │   └── submission.ts
│
│   └── styles/                 # Optional: tailwind.css or global.css
│
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
└── README.md
```

---

## ✅ Optimization Techniques Used

- `React.memo` for component memoization
- `useMemo` and `useCallback` for avoiding unnecessary recalculations
- Responsive layouts using Tailwind and CSS Grid
- Virtualized list rendering for large artist datasets
- Lazy-loaded components with `next/dynamic`
- Clean and modular component structure

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