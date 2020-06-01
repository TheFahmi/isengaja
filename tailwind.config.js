module.exports = {
  purge: ["./src/*.vue", "./src/components/*.vue", "./src/components/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "SF Text",
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ]
      }
    },
    container: {
      padding: "1rem",
      center: true
    }
  },
  variants: {},
  plugins: []
};
