const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      nintendo: "#E60011",
      ...colors,
    },
    fontFamily: {
      "NUNITO": ["Nunito", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};