/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
    fontFamily:{
      hand:["Salsa","cursive"],
      serif:["DM Serif Display", "serif"],
      coolvetica: ['Coolvetica','sans-serif'],
      thin:["Montserrat", "sans-serif"]
    }
  },
  plugins: [],
}

