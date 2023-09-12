/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 5px 5px rgba(0,0,0,0.3)'
      },
      colors: {
        text_black: '#363636',
        gray: '#7B7B7B',
        primary_blue: '#2672E7',
        white: '#FFFFFF',
        light_gray: '#F8F8FF',
        golden: '#FCA311',
        barbg: '#D9D9D9'
      }
    },
  },
  plugins: [],
}

