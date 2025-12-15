AGENTS.md
---

> **System Context:** University Web Infrastructure (Student/Faculty Facing)  
> **Primary Goals:** Accessibility (WCAG 2.1 AA), Performance (Core Web Vitals), Maintainability.  
> **Critical Constraint:** **NO Prettier**. Do not install, configure, or suggest Prettier.  

# 1. Tech Stack & Environment

- **Framework:** Next.js 16 (App Router, Server Components)
- **Language:** TypeScript (Strict Mode, No `any`)
- **Styling:** Tailwind CSS v4 (CSS-first configuration)
- **Design System:** Custom implementation of Stanford Decanter
- **Hosting:** Netlify (Edge Functions & Node Runtime)
- **Linting:** ESLint 9 (Flat Config: `eslint.config.mjs`)
- **State:** Server Actions (Mutations), URL Search Params (Filters), React Hooks (Client interaction only)

# 2. Project Structure

Adhere strictly to this hierarchy.

```text
/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (Fonts, Providers)
│   │   ├── page.tsx            # Home
│   │   ├── globals.css         # Tailwind v4 imports & CSS Variables
│   │   └── [route]/            # Feature routes
│   ├── components/             # Shared UI Components
│   │   ├── ui/                 # Primitive components (Buttons, Inputs)
│   │   ├── features/           # Complex domain components
│   │   └── [Component]/        # Component Directory
│   │       ├── Component.tsx
│   │       └── Component.styles.ts
│   ├── lib/                    # Utilities & Business Logic
│   ├── types/                  # Global Type Definitions
├── public/                     # Static Assets
├── netlify.toml                # Deployment Config
└── eslint.config.mjs           # Linting Rules
```

# 3. Coding Standards

## Component Architecture
- **Server Components (Default):** All components are Server Components (RSC) unless interactivity is strictly required.
- **Client Components:** Use `'use client'` *only* for:
  - Event listeners (`onClick`, `onChange`).
  - React Hooks (`useState`, `useEffect`).
  - Browser-only APIs.
- **Next.js 16 Breaking Changes:**
  - `params` and `searchParams` are **Promises**. You must `await` them.
  - Example: `const { slug } = await params;`

## Naming Conventions
- **Components:** `PascalCase` (e.g., `StudentCard.tsx`).
- **Styles:** `[Component].styles.ts` (e.g., `StudentCard.styles.ts`).
- **Functions:** `camelCase`.
- **Directories:** `kebab-case`.

## Styling (Tailwind CSS v4)
- **Configuration:** Do not look for `tailwind.config.js`. Theme variables are defined in `src/app/globals.css` using `@theme`.
- **Pattern:** For complex components, extract utility strings into a separate styles file to keep JSX clean.
  ```typescript
  // Component.styles.ts
  export const styles = {
    container: "p-4 border rounded-md bg-fog-light",
    heading: "text-xl font-bold text-cardinal-red"
  };
  ```
- **Mobile-First:** Write mobile styles first, then use `md:` and `lg:` overrides.

## Accessibility (Mandatory WCAG 2.1 AA)
- **Semantics:** Use `<main>`, `<nav>`, `<section>`, `<article>` instead of `<div>`.
- **Images:** All images require meaningful `alt` text.
- **Focus:** Ensure visible focus states (`focus-visible:ring`).
- **Interactive:** Never put `onClick` on a `div` without `role="button"` and keyboard handlers.

# 4. Data Fetching & State
- **Fetching:** Fetch data directly in Server Components using `async/await`.
- **Mutations:** Use **Server Actions** (`'use server'`) for form submissions.
- **Caching:** Use `use cache` directive or `unstable_cache` for granular control.
- **Client State:** Prefer URL Search Params for filter/sort state to ensure shareability.

# 5. Deployment (Netlify)
- **Config:** Respect `netlify.toml`.
- **Environment:** Access secrets via `process.env`. Do not hardcode credentials.
- **Build:** Standard command is `next build`. Output is `.next`.

# 6. Agent Behavior Guidelines

**When generating code, you (the AI) must:**

1.  **Analyze Context:** Check if the file is a Client or Server Component before suggesting code.
2.  **No Prettier:** Do not attempt to format code using Prettier patterns. Respect the user's indentation (2 spaces) and rely on ESLint.
3.  **Strict Types:** Never use `any`. If a type is unknown, use `unknown` and narrow it, or ask the user for the type definition.
4.  **Tailwind v4 Compliance:** Verify utility classes are valid for v4. Do not suggest editing `tailwind.config.js`.
5.  **Accessibility First:** Automatically add `aria-label`, `role`, and semantic tags. If you generate a form, include labels.
6.  **Security:** Never output secrets or keys in code snippets.

# 7. Brand and Style Guide

## 1. Brand Overview

### Brand Personality
McKMedia sits at the intersection of **modern web technology and human-centered design**.  
The brand should feel:

- Confident but approachable  
- Technically sharp without being cold  
- Creative, warm, and collaborative  

This is not an agency that hides behind jargon. McKMedia guides people through complexity and makes the web feel understandable and useful.

### Core Values
- Clarity over cleverness  
- Craft over shortcuts  
- Partnership over transactions  
- Technology in service of people  

### Brand Voice
- Plainspoken  
- Helpful  
- Calmly confident  
- Never salesy or buzzword-heavy  

## 2. Logo Usage

Primary logo file `/public/logos/logo-pink-orange.png`

Other logo files can be found in `/public/logos`

### Primary Logo
- Gradient icon + **MCKMEDIA** wordmark  
- Optional tagline: *Modern Web. Made Human.*

### Clear Space
- Maintain padding equal to the height of the center logo shape on all sides.
- Never crowd the logo with UI elements or text.

### Backgrounds
- Preferred: black or very dark backgrounds  
- Acceptable: white or light neutral backgrounds with reduced glow  
- Avoid busy photography directly behind the logo  

### Logo Don’ts
- Don’t recolor outside the approved gradient palette  
- Don’t add outlines, drop shadows, or bevels  
- Don’t distort, rotate, or separate icon elements  

## 3. Color System

### Primary Gradient (Hero Identity)
This gradient is the heart of the brand.

**Direction**
- Diagonal or left-to-right  
- Smooth transitions, no hard stops  

**Core Stops**
- Magenta / Pink  
- Coral  
- Orange / Amber  

**Usage**
- Logo icon  
- Primary headlines  
- Hero backgrounds  
- Accent UI elements (buttons, dividers, highlights)  

### Supporting Neutrals
- **Black** — primary background  
- **Near-black / charcoal** — cards, sections  
- **White** — text on dark backgrounds  
- **Soft gray** — secondary text, borders  

> Rule: Let color be intentional and sparing. Black space is a feature, not a void.

## 4. Typography

### Primary Typeface (Headlines)
Sans-serif, modern, geometric.

**Examples**
- Inter  
- SF Pro  
- Neue Haas Grotesk  
- Manrope  

**Style**
- Medium to bold weights  
- Tight letter spacing for large headings  
- Confident, simple phrasing  

### Secondary Typeface (Body)
- Same family as headline or a closely related sans-serif  

**Style**
- Regular weight  
- Comfortable line height (1.5–1.7)  
- Prioritize readability over density  

### Text Tone
- Short paragraphs  
- Clear headings  
- Conversational, not marketing-heavy  

## 5. Layout & Structure

### Overall Feel
- Spacious  
- Calm  
- Deliberate  

Avoid:
- Overcrowded layouts  
- Decorative elements without purpose  
- Trend-chasing UI gimmicks  

### Grid
- Strong vertical rhythm  
- Generous margins  
- Consistent spacing scale (4px or 8px system)  

### Sections
- Clear separation using space, not lines  
- Gradients used sparingly as emphasis  

## 6. UI Components

### Buttons

**Primary Button**
- Gradient background  
- White text  
- Rounded corners (medium radius)  
- Confident verbs: *Start*, *Build*, *Explore*  

**Secondary Button**
- Transparent or dark background  
- Gradient border or text  
- Used sparingly  

### Links
- Gradient text or subtle underline  
- No default blue links  
- Clear hover state (brightness or glow shift)  

### Cards
- Dark background  
- Soft elevation  
- Minimal borders  
- Focus on content clarity  

## 7. Imagery & Graphics

### Illustration Style
- Abstract  
- Soft gradients  
- Minimal detail  
- Human, not corporate  

### Photography (If Used)
- Real people  
- Natural lighting  
- Candid, not staged  
- Avoid stock-photo clichés  

### Motion
- Subtle fades  
- Gentle gradient movement  
- No aggressive animations  

## 8. Content Style

### Headlines
- Short  
- Direct  
- Human  

**Examples**
- “Modern web, without the friction.”  
- “Built with care. Delivered with clarity.”  

### Body Copy
- Explain the *why* before the *how*  
- Assume intelligence, not expertise  
- Speak like a trusted guide, not a salesperson  