# Project Nirv - Astro Implementation

## Directory Structure

\`\`\`
src/
├── components/
│   ├── header.astro        # Site navigation
│   ├── footer.astro        # Site footer
│   ├── tag-badge.astro     # Research category tags
│   ├── research-card.astro # Clickable research cards
│   ├── section-layout.astro# Article section wrapper
│   └── filter-tags.astro   # Interactive tag filter
├── layouts/
│   └── base-layout.astro   # HTML wrapper with styles
├── pages/
│   ├── index.astro         # Home page with research grid
│   ├── about.astro         # About Project Nirv
│   └── research/
│       └── [id].astro      # Dynamic research detail pages
└── data/
    └── research.ts         # Centralized research data
\`\`\`

## Setup Instructions

1. Create a new Astro project:
   \`\`\`bash
   npm create astro@latest project-nirv
   \`\`\`

2. Install Tailwind CSS:
   \`\`\`bash
   npx astro add tailwind
   \`\`\`

3. Copy all files from `src/` to your project's `src/` directory

4. Configure Tailwind in `tailwind.config.mjs`:
   \`\`\`js
   export default {
     content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
     theme: {
       extend: {
         fontFamily: {
           mono: ['Space Mono', 'monospace'],
         },
         colors: {
           'cyan-accent': '#00d9ff',
         },
       },
     },
   };
   \`\`\`

5. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## Features

- **Dark Mode Design**: Black background with cyan accents
- **Space Mono Typography**: Monospace font throughout
- **Responsive Layout**: Mobile-first design
- **Static Generation**: Pre-renders all research pages
- **Client-Side Filtering**: JavaScript-powered tag filtering
- **Reusable Components**: Modular Astro components

## Customization

- Edit `src/data/research.ts` to add/modify research articles
- Update colors in `src/layouts/base-layout.astro`
- Modify component styles in individual `.astro` files
