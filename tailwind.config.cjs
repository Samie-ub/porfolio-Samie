/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        secondary: "#A0AEC0",
        tertiary: "#00000",
        "black-100": "#5A96E3",
        "black-200": "#EE4540",
        "white-100": "#fffff",
      },
      gradientColorStops: {
        "primary-gradient": "#121212",
        "secondary-gradient": "#000000",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #38B2AC",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
