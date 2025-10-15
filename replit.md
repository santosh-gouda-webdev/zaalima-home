# Zaalima Development Website

## Overview
This is the official website for Zaalima Development, an IT services and products company. The site is built with React, TypeScript, Vite, and Tailwind CSS, featuring modern UI components and animations.

**Project Type**: Frontend Website  
**Tech Stack**: React 19, TypeScript, Vite 7, Tailwind CSS 4, Framer Motion  
**Current State**: Production-ready, imported from GitHub

## Recent Changes
- **October 15, 2025**: Fixed UI/UX issues for better mobile responsiveness
  - Fixed InternshipModal scrollbar issue by consolidating scroll containers
  - Improved modal mobile responsiveness with proper spacing and sizing
  - Fixed Outstanding Achievers section on Interns page with responsive image heights
  - Fixed CTA section buttons cutting off on mobile with full-width layout
  - Added comprehensive mobile breakpoints (sm/md/lg) throughout components
- **October 15, 2025**: Imported project from GitHub and configured for Replit environment
  - Configured Vite to run on port 5000 with host 0.0.0.0
  - Set up HMR for Replit's proxy environment (WSS on port 443)
  - Created workflow for development server

## Project Architecture

### Directory Structure
```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
├── hooks/          # Custom React hooks
├── lib/            # Utility libraries
└── utils/          # Feature-specific components
    ├── Hero/       # Home and About pages
    ├── company/    # Business pages (careers, events, products, services, etc.)
    ├── chatbot/    # Chat widget
    ├── faq/        # FAQ components
    ├── legal-documents/  # Privacy, refund, terms pages
    ├── logos/      # Logo components
    └── modal/      # Modal components
```

### Key Features
- **Routing**: React Router with hash-based navigation for smooth scrolling
- **UI Framework**: Radix UI components with custom styling
- **Animations**: Framer Motion for interactive elements
- **Styling**: Tailwind CSS 4 with custom configuration
- **Theme**: Dark mode support via next-themes
- **Components**: 
  - Navigation with responsive navbar
  - Chatbot widget
  - FAQ accordion
  - Career listings
  - Event pages
  - Product/Service showcase
  - Contact forms
  - Internship hall of fame

### Pages
- `/` - Home page
- `/about` - About page
- `/services` - Services overview
- `/products` - Products showcase
- `/get-a-quote` - Quote request form
- `/careers` - Career opportunities
- `/events` - Company events
- `/contact` - Contact page
- `/courses` - Training courses
- `/interns` - Intern hall of fame
- `/privacy-policy` - Privacy policy
- `/refund-policy` - Refund policy
- `/terms-of-service` - Terms of service

## Development

### Running the Project
```bash
npm run dev
```
The development server runs on port 5000 and is accessible via Replit's webview.

### Building for Production
```bash
npm run build
```
Output goes to the `dist/` directory.

### Linting
```bash
npm run lint
```

## Configuration

### Vite Configuration
- Port: 5000 (required for Replit)
- Host: 0.0.0.0 (required for Replit)
- HMR: Configured for WSS over port 443 (Replit proxy)
- Path aliases: `@/` points to `src/`

### Dependencies
Key production dependencies:
- React 19.1.1
- React Router 7.9.1
- Tailwind CSS 4.1.13
- Framer Motion 12.23.16
- Radix UI components
- Lucide React (icons)
- Next Themes (dark mode)

## User Preferences
None specified yet.
