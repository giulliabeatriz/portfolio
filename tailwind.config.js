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
      colors: {
        'primary': {
          light: '#836cc4',    
          DEFAULT: '#6750a4', 
          dark: '#4d3d7d',    
        },
        'secondary': {
          light: '#e5e7eb',
          DEFAULT: '#4b5563',
          dark: '#1f2937',
        },
        'accent': {
          light: '#fde047',
          DEFAULT: '#facc15',
          dark: '#eab308',
        },
        'feedback': {
          success: '#22c55e', 
          error: '#ef4444',     
          warning: '#f97316', 
        },
      },
      fontFamily: {
        'sans': ['Comfortaa', ...defaultTheme.fontFamily.sans],
         'heading': ['"Julius Sans One"', 'sans-serif'],
        'corpo': ['Junge', 'serif'],
      },
    },
  },
  plugins: [],
}