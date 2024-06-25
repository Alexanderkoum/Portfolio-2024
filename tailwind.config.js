/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/gridpattern.png')",
        'dotted-white': "url('/assets/minimal_halftone_pattern_background.jpg')",
      }
    },
  },
  plugins: [],
}

