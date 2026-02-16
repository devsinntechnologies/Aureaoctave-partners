/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        red-500: 'var(--color-red-500)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
