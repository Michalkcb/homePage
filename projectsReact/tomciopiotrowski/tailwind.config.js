/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'myFigtree': [ 'Figtree', 'sans-serif'],
        'myRoboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}