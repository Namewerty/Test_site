/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Map to existing CSS custom properties used in index.html
        brand: {
          DEFAULT: 'var(--color-accent)'
        },
        surface: {
          page: 'var(--color-surface-page)',
          card: 'var(--color-surface-card)'
        },
        text: {
          primary: 'var(--color-text-primary)',
          invert: 'var(--color-text-invert)'
        },
        border: {
          base: 'var(--color-border-base)'
        }
      },
      borderRadius: {
        card: 'var(--radius-card)'
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)'
      },
      fontFamily: {
        sans: 'var(--font-family-sans)',
        mono: 'var(--font-family-mono)'
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)'
      }
    }
  },
  plugins: []
}
