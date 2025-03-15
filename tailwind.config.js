/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /*
        primary: {
          50: '#fff9e6',
          100: '#fff3cc',
          200: '#ffe799',
          300: '#e9e164',
          400: '#d2944c',
          500: '#d36763',
          600: '#a85250',
          700: '#7e3e3d',
          800: '#542929',
          900: '#2a1515',
          950: '#150a0a',
        },
        accent: {
          light: '#e9e164',
          DEFAULT: '#d2944c',
          dark: '#d36763',
        },
        */
        /*primary: {
          50: '#fff7e0',  // Lightest shade for backgrounds or light accents
          100: '#ffeb99', // Soft yellow for subtle highlights
          200: '#ffdd66', // Warm, inviting yellow-orange
          300: '#fbbf2f', // Bright golden-yellow for call-to-action buttons
          400: '#e89a1f', // Deeper, vibrant yellow-orange for attention-grabbing elements
          500: '#d37527', // Bold, warm orange for main sections or headers
          600: '#b46222', // Rich orange for text or important elements
          700: '#8f4e1c', // Earthy, darker orange for footers or subtle text
          800: '#693715', // Deep, warm brownish-orange for emphasis
          900: '#40210f', // Very dark brown for text or dark accents
          950: '#2a1509', // Almost black, great for backgrounds or dark overlays
        },
        accent: {
          light: '#fbbf2f', // Light golden-yellow for softer accents
          DEFAULT: '#e89a1f', // Main accent color, warm and inviting
          dark: '#d37527', // Darker orange for high contrast elements
        },*/
        primary: {
          50: '#fff7e6', // Very light warm cream for subtle backgrounds or light accents
          100: '#ffe4b3', // Soft warm yellow with a hint of gold for gentle highlights
          200: '#ffcc66', // Light honey gold for light accents or icons
          300: '#ff9933', // Warm, inviting orange for CTA buttons or callouts
          400: '#ff6f1f', // Deeper golden-orange for headers and bold elements
          500: '#ff5722', // A strong, vibrant orange for primary sections or focal points
          600: '#e04e19', // Darker, rich orange for high contrast or accent text
          700: '#b74317', // Earthy, deep orange for subtle backgrounds or footer text
          800: '#8b2c0f', // Deep burnt orange for footer sections or background overlays
          900: '#5c1607', // Very dark reddish-brown for text or dark contrast elements
          950: '#3e0a02', // Almost black, great for deep dark accents or background overlays
        },
        accent: {
          light: '#ff9933', // A warm orange for secondary highlights or softer CTAs
          DEFAULT: '#ff5722', // Bold, fiery orange for accents, buttons, and links
          dark: '#e04e19', // Deeper orange for high contrast or hover states
        },
      },
      fontFamily: {
        display: ['Cormorant', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      background: {
        DEFAULT: '#3e0a02', // A deep, warm reddish-brown for the overall background
        dark: '#5c1607', // Darker, rich brown for sections like footers or overlays
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'section-pattern':
          'linear-gradient(to right, rgba(233, 225, 100, 0.05), rgba(210, 148, 76, 0.05))',
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.04em',
      },
    },
  },
  plugins: [],
};
