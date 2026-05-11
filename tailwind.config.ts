import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Poppins', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: 'var(--brand-bg)',
          surface: 'var(--brand-surface)',
          text: 'var(--brand-text)',
          muted: 'var(--brand-text-muted)',
          border: 'var(--brand-border)',
          accent: 'var(--brand-accent)',
          'accent-hover': 'var(--brand-accent-hover)',
          'footer-bg': 'var(--brand-footer-bg)',
          'footer-text': 'var(--brand-footer-text)',
        },
        badge: {
          rose: 'var(--badge-rose)',
          teal: 'var(--badge-teal)',
          sage: 'var(--badge-sage)',
          beige: 'var(--badge-beige)',
          purple: 'var(--badge-purple)',
          tan: 'var(--badge-tan)',
        },
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px' },
      },
    },
  },
  plugins: [],
} satisfies Config;
