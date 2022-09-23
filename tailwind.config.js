/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        bgMuted: "#F8F8F8",
        DEFAULT: "#FFFFFF",
      },
      primary: {
        light: "#E8F2EE",
        DEFAULT: "#5BB5A2",
      },
      black: {
        txt: "rgb(26 25 30 / <alpha-value>)",
        bg: "#1A191E",
      },
      grey: "#E8E8E8",
    },
    fontFamily: {
      sans: ["Inter"],
      heading: ["DM Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
