/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      slate: '#18191F',
      orange: '#EB8D00',
      black: '#000000',
      red: '#F42F2F',
      gray: '#BEBEBE',
      white: '#FFFFFF'
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
}