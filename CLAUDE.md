# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Asamkhya** - a premium SvelteKit application for an exclusive AI education institute. The app positions Asamkhya as the "Harvard of AI Education" with a sophisticated dark navy and neon green design theme, featuring rigorous admission processes and premium educational offerings.

## Development Commands

- **Development server**: `npm run dev` (starts Vite dev server with ngrok support)
- **Build for production**: `npm run build` 
- **Preview production build**: `npm run preview`
- **Type checking**: `npm run check` (runs svelte-check with TypeScript)
- **Type checking (watch mode)**: `npm run check:watch`
- **Run tests**: `npm run test` (runs Playwright E2E tests)
- **Run E2E tests directly**: `npm run test:e2e`

## Architecture

### Framework Stack
- **SvelteKit** with Svelte 5 and TypeScript
- **Tailwind CSS** (v4) with Vite plugin for styling
- **shadcn-svelte** component library with bits-ui foundation
- **Playwright** for end-to-end testing
- **Vite** for build tooling with ngrok configuration

### Route Structure
The app follows SvelteKit's file-based routing:

- `/` - Homepage that redirects to `/asamkhya`
- `/asamkhya` - Main landing page with premium branding and hero section
- `/asamkhya/programs` - AI education programs and curriculum details
- `/asamkhya/assessment` - Multi-step application and assessment process
- `/asamkhya/about` - Institute mission, philosophy, and leadership
- `/asamkhya/contact` - Contact information and inquiry forms

### Component Architecture
- **shadcn-svelte UI Library**: Comprehensive component system located in `src/lib/components/ui/`
  - Full suite of 40+ production-ready components (Button, Card, Dialog, Form, etc.)
  - Built on bits-ui primitive components for accessibility
  - Configured with `components.json` for consistent theming
- **Layout Components**: 
  - `+layout.svelte` - App-wide layout with Header and CSS custom properties
  - `Header.svelte` - Premium navigation header with Asamkhya branding
  - Academic crest SVG integrated into navigation and branding
- **Page Components**: Route-specific components in `src/routes/asamkhya/`
- **Utility System**: `src/lib/utils.ts` for component styling and utilities

### Design Philosophy
- **Premium Positioning**: Exclusive, merit-based admission approach
- **Academic Excellence**: Harvard/IIT-style branding and messaging
- **Sophisticated UI**: Dark navy backgrounds with gold accents
- **Professional Forms**: Comprehensive application and assessment processes
- **Responsive Design**: Mobile-first approach with elegant desktop layouts

### Key Features
- **Assessment Process**: 4-step application with technical questions
- **Program Details**: Multiple AI education tracks and specializations
- **Leadership Profiles**: Academic staff and credentials
- **Contact System**: Professional inquiry handling with response time commitments

### Color Palette
- **Premium Dark Theme with Neon Green Accents**:
  - **Primary**: #0A0A0A (--bg-primary)
  - **Secondary**: #111111 (--bg-secondary)  
  - **Tertiary**: #1A1A1A (--bg-tertiary)
  - **Neon Green**: #00FF88 (--neon-green) - primary accent
  - **Neon Green Dark**: #00CC6A (--neon-green-dark)
  - **Text Primary**: #FFFFFF (--text-primary)
  - **Text Secondary**: #B0B0B0 (--text-secondary)
  - **Glass Effects**: rgba(255, 255, 255, 0.05) with backdrop-filter
- **Legacy Gold Palette** (used in redirect page):
  - **Gold Primary**: #D4AF37 (academic crest and branding)
  - **Navy Deep**: #0f1528, #1e2a4a (gradient backgrounds)

### Typography
- **Main Font**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "SF Pro Display", sans-serif
- **Font Features**: "cv01", "cv03", "cv04", "cv11" for enhanced readability
- **Antialiasing**: Webkit and Mozilla optimizations for crisp text
- **Academic Styling**: Emphasis on readability and sophisticated presentation

## Development Configuration

### Vite Configuration
- **Host**: `true` for network access
- **ngrok Support**: Pre-configured allowed hosts for external preview
- **Plugins**: Tailwind CSS Vite plugin, SvelteKit integration

### Component System
- **shadcn-svelte**: Complete UI component library with TypeScript support
- **Path Aliases**: Configured in `components.json` for clean imports
  - `$lib/components` → components
  - `$lib/components/ui` → ui
  - `$lib/utils` → utils
- **Base Color**: Slate theme configuration
- **Registry**: Official shadcn-svelte component registry

### Build System
- **Adapter**: `@sveltejs/adapter-auto` for automatic deployment platform detection
- **Preprocessing**: Vite preprocessing for optimal performance
- **TypeScript**: Full type checking with svelte-check

# important-instruction-reminders
This is a PURE Asamkhya website - there should be NO references to any other projects, food content, restaurants, or unrelated material.
ALWAYS maintain the premium, academic positioning.
NEVER create content that doesn't align with AI education excellence.
ALWAYS use the established navy/gold color scheme.
ALWAYS prefer sophisticated, professional language and design.