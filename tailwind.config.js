/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quattrocento Sans', 'sans-serif'],
      },
      colors: {
        'nvidia-green': '#76b900',
      }
    }
  },
  plugins: [],
}