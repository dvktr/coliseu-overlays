/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayBlue: "#D8DEE9",
      },
      fontFamily: {
        coolvetica: ['Coolvetica', 'sans-serif'],
      },
      backgroundImage: {
        gradientHorizontalOrange: "linear-gradient(to right, rgb(239,228,214), hsl(34,51%,54%))",
        gradientHorizontalPurple: "linear-gradient(to right, rgb(239,228,214), hsl(270, 50%, 50%))",
        gradientHorizontalCyan: "linear-gradient(to right, rgb(239,228,214), hsl(170, 100%, 35%))",
        gradientHorizontalRed: "linear-gradient(to right, rgb(239,228,214), hsl(0, 80%, 50%))",
      },
    },
  },
  plugins: [],
}