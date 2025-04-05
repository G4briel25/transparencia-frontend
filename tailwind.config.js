/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[class*="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1920px'
    },
    extend: {},
  },
  plugins: [],
}

