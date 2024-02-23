/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundColor:{
      "Light-gray": "hsl(212, 45%, 89%)",
      "White": "hsl(0, 0%, 100%)",
      "G-blue": "hsl(220, 15%, 55%)",
      "D-blue": "hsl(218, 44%, 22%)",


    },
    textColor:{
      "G-blue": "hsl(220, 15%, 55%)",
      "D-blue": "hsl(218, 44%, 22%)",

    }
  },
  plugins: [],
}

