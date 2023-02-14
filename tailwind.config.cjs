/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js,ts,svg}",
    "./content/**/*.{html,md,ts}",
    "./assets/**/*{html,js,ts}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Vollkorn", "serif"],
      body: ["Inter", "sans-serif"],
      manuscript: ["Junicode", "serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
