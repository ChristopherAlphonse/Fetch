/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: "Syne",
      body: "Lexend",
    },
    container: {
      padding: {
        DEFAULT: ".9rem",
        lg: "2.5rem",
      },
    },
    screens: {
      xs: "356",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        blue: "#007bff",
        indigo: "#6610f2",
        violet: "#510359",
        primary: "#300d38",
        white: "#f1ece9",
        black: "#343a40",
        danger: "#dc3545",
        success: "#04833e",
      },
    },
  },
  plugins: [],
};
