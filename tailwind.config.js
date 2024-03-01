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
        },
        bounceIn: {
          '0%': {transform: 'translate3d(0, 3000px, 0) scaleY(5) translate(-50%,-50%)'},
          '60%': {transform: 'translate3d(0, -20px, 0) scaleY(0.9) translate(-50%,-50%)'},
          '75%': {transform: 'translate3d(0, 10px, 0) scaleY(0.95) translate(-50%,-50%)'},
          '90%': {transform: 'translate3d(0, -5px, 0) scaleY(0.985) translate(-50%,-50%)'},
          '100%': {transform: 'translate3d(0, 0, 0) translate(-50%,-50%)'}
        }
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out 2',
        bounceIn: 'bounceIn 1s ease-in-out 1'
      }
    }
  },
  plugins: [],
}

