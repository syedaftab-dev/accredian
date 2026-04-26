# Accredian Enterprise Landing Page Clone

This is a Next.js (App Router) clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built as part of an assignment.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd accerdian
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach Taken

-   **Tech Stack**: Built with Next.js 15 (App Router), React Functional Components, and Tailwind CSS v4.
-   **Component Architecture**: The UI is broken down into modular, reusable components (`HeroSection`, `FAQSection`, `ProgramsSection`, etc.) stored in `src/components/`. UI elements like `Button` are placed in `src/components/ui/`.
-   **Styling**: Used Tailwind CSS for responsive layouts, styling, and animations (e.g., the marquee in `PartnersSection`). Brand colors were defined in `globals.css` using Tailwind v4 `@theme`.
-   **Bonus Implementation (Lead Capture Form)**: Implemented a custom `LeadCaptureModal` component that manages its own form state. It communicates with a Next.js API route (`src/app/api/leads/route.ts`), which validates the input and mocks a database insertion, returning a success response.
-   **Responsiveness**: Utilized Tailwind's mobile-first breakpoints (`sm:`, `md:`, `lg:`) to ensure a seamless experience across devices.

## AI Usage Explanation

**Where AI helped:**
-   **Scaffolding**: AI (Google's Antigravity Agent) was used to initialize the Next.js project, generate the implementation plan, and quickly draft the boilerplate for React components.
-   **Tailwind Styling**: AI assisted in rapidly generating Tailwind CSS classes for complex layouts like the CSS Grid in the `ProgramsSection` and the marquee animation in `PartnersSection`.
-   **Content Generation**: AI was used to generate placeholder content, statistics, and FAQ text based on the original Accredian website.

**What was modified/improved manually:**
-   **Architecture Decisions**: The decision to use Next.js App Router and how to structure the components (separating UI from sections) was guided manually.
-   **Modal State Management**: Manually refined the approach to handling the state of the Lead Capture Modal from the parent `page.tsx` component to keep it accessible from multiple potential CTA buttons.
-   **API Route Mocking**: Structured the API route specifically to meet the bonus requirement without needing a complex backend setup.

## Improvements with More Time

1.  **Database Integration**: Connect the lead capture form to a real database (e.g., PostgreSQL via Prisma or MongoDB).
2.  **Form Validation**: Use a library like `zod` and `react-hook-form` for more robust client-side and server-side validation.
3.  **Animations**: Add more micro-interactions and scroll animations using `framer-motion` to make the site feel more dynamic and "alive".
4.  **Accessibility**: Conduct a thorough audit to ensure all interactive elements have proper `aria-labels` and keyboard navigation support.
5.  **Context Provider**: Implement a React Context provider for global state management, such as the modal state, to avoid prop drilling or hacky event listeners.
