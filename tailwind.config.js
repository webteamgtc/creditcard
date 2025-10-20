// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // if using /pages too
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
         screens: {
        ...defaultScreens, // ✅ keep default breakpoints
        '3xl': '1720px',
        '4xl': '2250px',
      },
    },
  },
  plugins: [],
};
