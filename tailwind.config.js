/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        'inter':['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
