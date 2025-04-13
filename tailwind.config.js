module.exports = {
  content: ["./src/*.vue", "./src/components/*.vue", "./src/components/**/*.vue"],
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
      },
      colors: {
        glass: {
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: 'rgba(255, 255, 255, 0.5)',
          600: 'rgba(255, 255, 255, 0.6)',
          700: 'rgba(255, 255, 255, 0.7)',
          800: 'rgba(255, 255, 255, 0.8)',
          900: 'rgba(255, 255, 255, 0.9)',
        },
        modern: {
          primary: '#3b82f6',   // Blue-500
          secondary: '#8b5cf6', // Violet-500
          accent: '#f43f5e',    // Rose-500
          neutral: '#f9fafb',   // Gray-50
          dark: '#111827',      // Gray-900
          light: '#ffffff',     // White
          success: '#10b981',   // Emerald-500
          warning: '#f59e0b',   // Amber-500
          error: '#ef4444'      // Red-500
        }
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-sm': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'glass-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
      },
      borderColor: {
        glass: 'rgba(255, 255, 255, 0.18)',
      },
    },
    container: {
      padding: "1rem",
      center: true
    }
  },
  plugins: []
};
