/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // garante que Tailwind escaneie todos seus arquivos
  ],
  theme: {
    extend: {
      colors: {
        'terra-base': '#4B3228',
        'terra-accent': '#A9746E',
        'terra-dark': '#3A261F',
        'terra-medium': '#6F4E37',
        'terra-light': '#D9CAB3',
      },
    },
  },
  plugins: [],
}
