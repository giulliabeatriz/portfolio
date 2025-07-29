import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Comfortaa', ...defaultTheme.fontFamily.sans],
         'heading': ['"Julius Sans One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}