/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00bcd4",
        primary: "#ffbe33",
        secondary: "#222831",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
