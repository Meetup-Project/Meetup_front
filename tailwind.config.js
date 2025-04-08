/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueblue': '#4B6BF5',
        'graygray': '#EFEFEF',
        'tgray': '#AFB3C2',
        'bggray' : 'EFEFEF'
      },
      fontSize: {
        'sm': ['0.875rem', '1.25rem'],
        'base': ['1rem', '1.5rem'],
        'lg': ['1.25rem', '1.75rem'],
        'xl': ['1.75rem', '2.25rem'],
      },
    },
  },
  plugins: [],
}
