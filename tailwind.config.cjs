/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      primary: "Syne",
      body: "Lexend",
    },

    screens: {
      xs: "356",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        footer: "url('./src/assets/footer-background.jpg')",
        hero: "url('./src/assets/pexels-ewel-z-1594927.jpg')",
      },
      zIndex: {
        100: "100",
      },
      colors: {
        blue: "#007bff",
        indigo: "#6610f2",
        violet: "#510359",
        primary: "#300d38",
        white: "#f1ece9",
        yellow: "#ffa900",
        black: "#343a40",
        danger: "#dc3545",
        success: "#04833e",
      },
    },
  },
  plugins: [],
};
