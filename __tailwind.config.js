/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef9f3',
          100: '#fceee0',
          200: '#f8d9bc',
          300: '#f3be8d',
          400: '#eda05c',
          500: '#e8843c',
          600: '#d96b2b',
          700: '#b55424',
          800: '#8f4325',
          900: '#743922',
          950: '#3f1b0f',
        },
        accent: {
          light: '#f3be8d',
          DEFAULT: '#d96b2b',
          dark: '#b55424',
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