/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f3',
          100: '#faecd7',
          200: '#f3d5a3',
          300: '#e8b967',
          400: '#dca341',
          500: '#c18b1e', // plus chaud que ton gold d’origine
          600: '#a87619',
          700: '#865e16',
          800: '#654714',
          900: '#4a3511',
          950: '#2b1f0a',
        },
        accent: {
          light: '#f0cf9f',
          DEFAULT: '#c18b1e',
          dark: '#8c6114',
        },
        warmGold: {
          light: '#f5e0b8',
          DEFAULT: '#dca341',
          dark: '#a87619',
        },
        deepBlue: {
          light: '#556080',
          DEFAULT: '#2b3858', // plus chaud, moins “corporate”
          dark: '#1c253d',
        },
        earth: {
          light: '#c97b5a',
          DEFAULT: '#a85a3b', // note cuivrée, chaleureuse
          dark: '#7b3e2a',
        },
        background: {
          DEFAULT: '#1a130b', // tu peux le garder tel quel
          dark: '#22160d',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'section-pattern': 'linear-gradient(to right, rgba(168, 90, 59, 0.05), rgba(193, 139, 30, 0.05))',
        'warm-gradient': 'linear-gradient(135deg, rgba(168, 90, 59, 0.1), rgba(193, 139, 30, 0.1))',
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