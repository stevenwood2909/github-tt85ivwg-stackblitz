/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f0',
          100: '#e6e0d9',
          200: '#d1c5b7',
          300: '#b9a68f',
          400: '#a68c71',
          500: '#8c6f52',
          600: '#735a43',
          700: '#5a4535',
          800: '#42321f',
          900: '#2b1f12',
          950: '#1a130b',
        },
        accent: {
          light: '#b9a68f',
          DEFAULT: '#8c6f52',
          dark: '#5a4535',
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
        'section-pattern': 'linear-gradient(to right, rgba(185, 166, 143, 0.05), rgba(140, 111, 82, 0.05))',
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