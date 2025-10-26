/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdfbf7',
          100: '#faf5e6',
          200: '#f5eacc',
          300: '#ead9a8',
          400: '#ddc575',
          500: '#d4af37',
          600: '#c29d2e',
          700: '#a38428',
          800: '#856b26',
          900: '#6e5923',
          950: '#3e3012',
        },
        accent: {
          light: '#ead9a8',
          DEFAULT: '#d4af37',
          dark: '#a38428',
        },
        warmGold: {
          light: '#f5e6d3',
          DEFAULT: '#d4af37',
          dark: '#b8941f',
        },
        deepBlue: {
          light: '#4a5b7c',
          DEFAULT: '#2c3e5e',
          dark: '#1a2841',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      background: {
        DEFAULT: '#1a130b',
        dark: '#2b1f12',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'section-pattern': 'linear-gradient(to right, rgba(232, 132, 60, 0.05), rgba(212, 175, 55, 0.05))',
        'warm-gradient': 'linear-gradient(135deg, rgba(217, 107, 43, 0.1), rgba(212, 175, 55, 0.1))',
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.04em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};