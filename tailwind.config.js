/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ejs}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440"
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [],
}
