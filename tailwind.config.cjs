/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#303030",
        primary: "#3F37C9",
        textColor: "white",
      },
      fontFamily: {
        outfit: "Outfit, sans-serif",
        allura: "Rouge Script, sans-serif",
      },
    },
  },
  plugins: [],
};
