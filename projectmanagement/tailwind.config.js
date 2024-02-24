/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Montserrat"', 'sans-serif']
      },
      backgroundImage: {
        'paper': "url('./assets/paper-bg2.jpg')"
      }
    }
  },
  plugins: [],
}

