/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(233, 47%, 7%)',
        secondary: 'hsl(244, 38%, 16%)',
        tertiary: 'hsl(277, 64%, 61%)',
      },
    },
  },
  plugins: [],
};
