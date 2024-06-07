/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBody-bg": "#ffc017",
        "footer-bg": "#f7f4ed"
      },
    },
  },
  plugins: [],
}

