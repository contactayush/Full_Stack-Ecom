const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx}", "components/**/*.{js,jsx}"],
  theme: {},
  plugins: [require("tailwindcss-animate")],
};
