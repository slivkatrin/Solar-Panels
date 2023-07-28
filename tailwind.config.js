/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-color': '0 4px 6px rgba(25, 99, 71, 0.5)', /* Replace the color with your desired shadow color */
      },
      colors:{
        primaryColor: '#ff5733',
        secondaryColor: '#33ff57',
        'accent-green': '#a1d322',
      },
    },
  },
  plugins: [],
}