/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./core/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        bgMuted: "#F8F8F8",
        DEFAULT: "rgb(255 255 255 / <alpha-value>)",
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
      sans: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
      heading: ["DM Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
