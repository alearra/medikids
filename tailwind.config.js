const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      pantoneP111: "#517fa2",
      pantoneP176: "##fbbe5b",
      pantoneP346: "#f1894c",
      pantoneP178: "#c4c0b3",
      pantoneP126: "##b6d1d2",
      ...colors,
    },
    fontFamily: {
      "NUNITO": ["Nunito", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};