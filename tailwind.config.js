/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#D27561",
        secondary: "#E0B4AB",
        light: "#d1fae5",
        white: "#ffffff",
        dark: "#000000",
      },
    },
  },
  plugins: [],
}

