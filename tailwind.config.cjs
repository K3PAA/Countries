/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryD: 'hsl(209, 23%, 22%)',
        secondaryD: 'hsl(207, 26%, 17%)',
        darkest: 'hsl(200, 15%, 8%)',
        primaryW: 'hsl(0, 0%, 52%)',
        secondaryW: 'hsl(0, 0%, 98%)',
        lightest: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
}
