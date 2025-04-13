# Rudraksh Saraf - Portfolio Website

This repository contains the source code for my personal portfolio website. It serves as a dynamic resume and showcase of my skills, projects, professional experience, and educational background as an AI & Backend Developer. The site is designed to be visually appealing, responsive, and informative for potential employers, collaborators, or anyone interested in my work.

## Project Overview

The portfolio is a single-page application (SPA) featuring several distinct sections:

- **Home:** A hero section with a brief introduction, profile picture, and quick links.
- **About:** More detailed information about my background, passion for AI and backend development, and core competencies.
- **Experience:** A timeline detailing my work history, internships, and key responsibilities/achievements.
- **Skills:** A breakdown of my technical skills (programming languages, frameworks, databases, tools), graphic design abilities, and soft skills. Includes visual skill bars for key competencies.
- **Projects:** Cards showcasing selected personal and professional projects, with descriptions, technologies used, and links to GitHub repositories.
- **Education:** Information about my academic qualifications and relevant certifications.
- **Contact:** A contact form (powered by FormSubmit) and links to my professional profiles (GitHub, LinkedIn) and email.

The website features smooth scrolling, responsive design for various screen sizes, subtle animations, and a consistent dark theme with accent colors.

## Technologies Used

This project leverages a modern web development stack:

- **Framework/Library:** **React (v19)** - Chosen for its component-based architecture, efficient rendering, and extensive ecosystem, enabling the creation of a modular and maintainable user interface.
- **Language:** **TypeScript** - Used to add static typing to JavaScript, improving code quality, developer productivity, and reducing runtime errors.
- **Build Tool:** **Vite** - Provides an extremely fast development server with Hot Module Replacement (HMR) and optimized production builds, significantly speeding up the development workflow.
- **Styling:** **Tailwind CSS (v4)** - A utility-first CSS framework used for rapidly building custom designs directly in the markup. It allows for a highly customizable and responsive layout without writing extensive custom CSS. The `@tailwindcss/vite` plugin integrates it seamlessly with Vite.
- **Icons:** **React Icons (Fi)** - Provides easy access to a wide range of popular icon sets (Feather Icons in this case) as React components, used throughout the UI for visual cues and branding.
- **Particles:** **tsparticles** - Integrated to create an animated particle background effect, adding a dynamic and visually engaging element to the site (though currently commented out in `App.tsx`).
- **Form Handling:** **FormSubmit.co** - Used as a simple backend service to handle contact form submissions without requiring a custom server-side setup. The endpoint is configured via environment variables (`.env`).
- **Linting/Formatting:** **ESLint** & **TypeScript ESLint** - Configured to enforce code style consistency and catch potential errors early in the development process.
