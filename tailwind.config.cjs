/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,css}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Vollkorn, serif", { fontFeatureSettings: '"dlig", "calt" 0' }],
      body: ["Inter, sans-serif"],
      manuscript: ["Junicode", "serif"],
      code: ["JetBrains Mono", "monospace"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      sea: {
        5: "hsl(var(--sea-5) / <alpha-value>)",
        10: "hsl(var(--sea-10) / <alpha-value>)",
        20: "hsl(var(--sea-20) / <alpha-value>)",
        30: "hsl(var(--sea-30) / <alpha-value>)",
        40: "hsl(var(--sea-40) / <alpha-value>)",
        50: "hsl(var(--sea-50) / <alpha-value>)",
        60: "hsl(var(--sea-60) / <alpha-value>)",
        70: "hsl(var(--sea-70) / <alpha-value>)",
        80: "hsl(var(--sea-80) / <alpha-value>)",
        90: "hsl(var(--sea-90) / <alpha-value>)",
        95: "hsl(var(--sea-95) / <alpha-value>)",
      },
      land: {
        5: "hsl(var(--land-5) / <alpha-value>)",
        10: "hsl(var(--land-10) / <alpha-value>)",
        20: "hsl(var(--land-20) / <alpha-value>)",
        30: "hsl(var(--land-30) / <alpha-value>)",
        40: "hsl(var(--land-40) / <alpha-value>)",
        50: "hsl(var(--land-50) / <alpha-value>)",
        60: "hsl(var(--land-60) / <alpha-value>)",
        70: "hsl(var(--land-70) / <alpha-value>)",
        80: "hsl(var(--land-80) / <alpha-value>)",
        90: "hsl(var(--land-90) / <alpha-value>)",
        95: "hsl(var(--land-95) / <alpha-value>)",
      },
      blood: {
        5: "hsl(var(--blood-5) / <alpha-value>)",
        10: "hsl(var(--blood-10) / <alpha-value>)",
        20: "hsl(var(--blood-20) / <alpha-value>)",
        30: "hsl(var(--blood-30) / <alpha-value>)",
        40: "hsl(var(--blood-40) / <alpha-value>)",
        50: "hsl(var(--blood-50) / <alpha-value>)",
        60: "hsl(var(--blood-60) / <alpha-value>)",
        70: "hsl(var(--blood-70) / <alpha-value>)",
        80: "hsl(var(--blood-80) / <alpha-value>)",
        90: "hsl(var(--blood-90) / <alpha-value>)",
        95: "hsl(var(--blood-95) / <alpha-value>)",
      },
      gold: {
        5: "hsl(var(--gold-5) / <alpha-value>)",
        10: "hsl(var(--gold-10) / <alpha-value>)",
        20: "hsl(var(--gold-20) / <alpha-value>)",
        30: "hsl(var(--gold-30) / <alpha-value>)",
        40: "hsl(var(--gold-40) / <alpha-value>)",
        50: "hsl(var(--gold-50) / <alpha-value>)",
        60: "hsl(var(--gold-60) / <alpha-value>)",
        70: "hsl(var(--gold-70) / <alpha-value>)",
        80: "hsl(var(--gold-80) / <alpha-value>)",
        90: "hsl(var(--gold-90) / <alpha-value>)",
        95: "hsl(var(--gold-95) / <alpha-value>)",
      },
      ream: {
        5: "hsl(var(--ream-5) / <alpha-value>)",
        10: "hsl(var(--ream-10) / <alpha-value>)",
        20: "hsl(var(--ream-20) / <alpha-value>)",
        30: "hsl(var(--ream-30) / <alpha-value>)",
        40: "hsl(var(--ream-40) / <alpha-value>)",
        50: "hsl(var(--ream-50) / <alpha-value>)",
        60: "hsl(var(--ream-60) / <alpha-value>)",
        70: "hsl(var(--ream-70) / <alpha-value>)",
        80: "hsl(var(--ream-80) / <alpha-value>)",
        90: "hsl(var(--ream-90) / <alpha-value>)",
        95: "hsl(var(--ream-95) / <alpha-value>)",
      },
      welc: {
        5: "hsl(var(--welc-5) / <alpha-value>)",
        10: "hsl(var(--welc-10) / <alpha-value>)",
        20: "hsl(var(--welc-20) / <alpha-value>)",
        30: "hsl(var(--welc-30) / <alpha-value>)",
        40: "hsl(var(--welc-40) / <alpha-value>)",
        50: "hsl(var(--welc-50) / <alpha-value>)",
        60: "hsl(var(--welc-60) / <alpha-value>)",
        70: "hsl(var(--welc-70) / <alpha-value>)",
        80: "hsl(var(--welc-80) / <alpha-value>)",
        90: "hsl(var(--welc-90) / <alpha-value>)",
        95: "hsl(var(--welc-95) / <alpha-value>)",
      },
      grey: {
        5: "hsl(var(--grey-5) / <alpha-value>)",
        10: "hsl(var(--grey-10) / <alpha-value>)",
        20: "hsl(var(--grey-20) / <alpha-value>)",
        30: "hsl(var(--grey-30) / <alpha-value>)",
        40: "hsl(var(--grey-40) / <alpha-value>)",
        50: "hsl(var(--grey-50) / <alpha-value>)",
        60: "hsl(var(--grey-60) / <alpha-value>)",
        70: "hsl(var(--grey-70) / <alpha-value>)",
        80: "hsl(var(--grey-80) / <alpha-value>)",
        90: "hsl(var(--grey-90) / <alpha-value>)",
        95: "hsl(var(--grey-95) / <alpha-value>)",
      },
      black: "hsl(var(--black) / <alpha-value>)",
      white: "hsl(var(--white) / <alpha-value>)",
    },
    extend: {
      gridTemplateColumns: {
        cover: "200px 6fr",
        "cover-sm": "0px 1fr",
        "cover-md": "200px 6fr",
        "cover-lg": "200px 6fr",
        "cover-xl": "200px 6fr",
        "cover-2xl": "200px 6fr",
      },
      gridTemplateRows: {
        ridge: "14rem 1fr 6rem 10rem",
        cover: "10rem 1fr 6rem 6rem",
      },
      aspectRatio: {
        foolscap: "13 / 8",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
