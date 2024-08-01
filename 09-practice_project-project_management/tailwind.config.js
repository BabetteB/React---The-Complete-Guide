/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h2': '1.7rem', 
      },
      colors: {
        'h2-color': '#334047', 
      },
    },
  },
  plugins: [],
}

