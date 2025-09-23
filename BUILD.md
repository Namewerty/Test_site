# Build System Setup

## Prerequisites
- Install Node.js (version 16+ recommended)
- Ensure npm is available in your PATH

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build Tailwind CSS:**
   ```bash
   npm run build
   ```
   This runs: `tailwindcss -i src/styles/tailwind.css -o dist/tailwind.css --minify`

3. **Development workflow:**
   - Make changes to your HTML or CSS
   - Run `npm run build` to regenerate `dist/tailwind.css`
   - The site will automatically pick up the changes

## File Structure

```
├── src/styles/
│   ├── tokens.css        # Design tokens (CSS custom properties)
│   ├── globals.css       # Global styles + token imports
│   └── tailwind.css      # Tailwind entry point (@tailwind directives)
├── dist/
│   └── tailwind.css      # Built CSS (generated)
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.cjs    # PostCSS configuration
└── index.html           # Updated to use dist/tailwind.css
```

## Tailwind Configuration

The `tailwind.config.js` maps Tailwind utilities to your existing CSS custom properties:

- `brand-*` → `var(--color-accent)`
- `surface-page/card` → `var(--color-surface-*)`
- `text-primary/invert` → `var(--color-text-*)`
- `border-base` → `var(--color-border-base)`
- `rounded-card` → `var(--radius-card)`
- `shadow-sm/md` → `var(--shadow-*)`

## Git and Deployment

- ✅ `dist/tailwind.css` is now tracked by git (removed from .gitignore)
- ✅ All configuration files committed to repository
- ✅ Ready for deployment without additional build steps

## Development Workflow

1. **First time setup:**
   ```bash
   npm install
   npm run build:css  # Build initial CSS
   ```

2. **Daily development:**
   ```bash
   npm run watch:css  # Auto-rebuild CSS on changes (Terminal 1)
   npm run dev        # Start dev server (Terminal 2)
   ```

3. **Before committing:**
   ```bash
   npm run build:css  # Build production CSS
   git add .
   git commit -m "Your changes"
   ```

## Current Status

- ✅ All files tracked by git (no more commit issues)
- ✅ Build system ready for development
- ✅ Production-ready deployment
- ✅ Existing styles preserved
