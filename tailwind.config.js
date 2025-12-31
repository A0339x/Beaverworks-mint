/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canadian: {
          red: '#C8102E', // Official flag red
          dark: '#8a0b20',
          gold: '#D4AF37',
        },
        slate: {
          850: '#151e2e',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}