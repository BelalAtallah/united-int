/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#F9F5E8',
          200: '#F3E9C9',
          300: '#E9D79C',
          400: '#DEC36F',
          500: '#D4AF37',
          600: '#B8952D',
          700: '#947723',
          800: '#6F591A',
          900: '#4A3C11',
        },
      },
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
