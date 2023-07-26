/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-color': '0 4px 6px rgba(255, 99, 71, 0.5)', /* Replace the color with your desired shadow color */
      }
    },
  },
  plugins: [],
}