/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmserif: ["var(--font-dm-serif)"],
        merriweather: ["var(--font-merriweather)"],
      },
      colors: {
        primary: "#54032d",
        gold: "#e4bb45",
        beige: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
