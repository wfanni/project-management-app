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
      },
      minHeight: {
        '80vh': '80vh'
      },
      screens: {
        'xs': '320px'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(-0.5rem) translate(-50%,-50%)' },
          '50%': { transform: 'translateX(0.5rem) translate(-50%,-50%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out 2',
      }
    }
  },
  plugins: [],
}

