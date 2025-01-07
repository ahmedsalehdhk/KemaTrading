/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('src/assets/images/hero.png')",
        'shoe-bg': "url('src/assets/images/shoe.jpg')",
      },
      animation: {
        float: "float 8s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translatey(0px)"
          },
          "50%": {
            transform: "translatey(-15px)"
          }
        }
      }
    },
    fontFamily: {
      'playfair-display': ['Playfair Display'],
      'open-sans': ["Open Sans"]
    },
  },
  plugins: [],
}