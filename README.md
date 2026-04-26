# Accredian Enterprise - Next-Gen Learning Platform

A premium, highly-interactive clone of the [Accredian Enterprise](https://enterprise.accredian.com/) platform, built with Next.js 15 and Tailwind CSS v4. This project features a revamped navigation system, multiple functional dummy pages, and state-of-the-art UI/UX animations.

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/syedaftab-dev/accredian.git
   cd accredian
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **View the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Approach Taken

- **Tech Stack**: Built using **Next.js 15 (App Router)** for its powerful routing and server-side capabilities, and **Tailwind CSS v4** for high-performance, modern styling.
- **Navigation Architecture**: 
  - Moved the "Courses" dropdown from its previous position into a unified, sleek navigation bar.
  - Added specific routes for *About Us*, *Talk to an Expert*, *Explore Programs*, *View all Programs*, *Schedule a call*, *Login*, and *Try for Free*.
  - Implemented a smooth, responsive mobile menu with accordion-style nested navigation.
- **Component Strategy**: 
  - Focused on modularity and reusability. 
  - Created a robust UI library in `src/components/ui/` (e.g., custom Button component).
- **Premium UI/UX**: 
  - Integrated **Lucide React** for consistent, modern iconography.
  - Used **CSS-in-JS animations** and custom Tailwind keyframes for:
    - Dynamic count-up statistics in the `StatsSection`.
    - Infinite looping partner marquee with hover-to-pause functionality.
    - Floating background blobs and glassmorphism cards.
    - Page-load transitions (`page-enter` animation).

---

## 🤖 AI Usage Explanation

This project was developed through a collaborative pair-programming approach between a human developer and AI agents.

### Where AI Helped:
- **Initial Scaffolding**: Used **Antigravity** to initialize the Next.js project structure and layout.
- **Component Generation**: AI assisted in rapidly generating the boilerplate and complex layouts for sections like the `HeroSection` and the `HowItWorks` framework visualization.
- **Complex Logic**: AI provided the implementation for the custom `useCountUp` hook and the logic for the infinite marquee animation.
- **Styling & Assets**: Assisted in crafting high-end Tailwind CSS v4 utility strings for gradients and glassmorphism effects.

### What Was Modified Manually:
- **Navigation Logic**: Manually restructured the `Navbar` to fit a large number of links while maintaining a clean look, including the specific dropdown interactions.
- **Branding & Design System**: Manually defined the color palette (`--color-primary`, `--color-accent`) in `globals.css` to align with the Accredian brand identity.
- **Route Handling**: Manually configured the Next.js App Router for the 7+ dummy pages to ensure consistent layout and navigation state.
- **Build Optimization**: Refined the code to ensure a clean exit code `0` during `npm run build` and fixed metadata for Vercel deployment.

---

## 📈 Improvements with More Time

1. **Backend Integration**: Replace the mock API route with a real database (PostgreSQL/Supabase) to persist lead capture data.
2. **Advanced Form Validation**: Implement `react-hook-form` and `Zod` for comprehensive client-side and server-side validation on all contact forms.
3. **Skeleton Loading States**: Add specialized skeleton loaders for better perceived performance during page transitions.
4. **Dark Mode**: Add a full dark mode theme using Tailwind's `dark:` utilities.
5. **A/B Testing Support**: Integrate tools to test different CTA button placements for better conversion optimization.

---

Built with ❤️ for the Accredian Enterprise Assignment.
