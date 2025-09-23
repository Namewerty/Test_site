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

## Current Status

- ✅ Configuration files created
- ✅ Package.json updated with dependencies and build script
- ✅ index.html updated to use built CSS
- ⚠️ Placeholder CSS in `dist/tailwind.css` (run build to replace)
- ✅ Existing inline styles preserved

## Next Steps

1. Install Node.js if not available
2. Run `npm install` to install dependencies
3. Run `npm run build` to generate the actual Tailwind CSS
4. Start using Tailwind utilities in your HTML!
