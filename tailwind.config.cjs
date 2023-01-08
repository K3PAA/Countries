/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        slideUp: 'slideUp 2s 0.5s both cubic-bezier(.21,.95,.42,1.02)',
        slideLeft: 'slideLeft 1.2s 1s both cubic-bezier(.3,.79,.38,.84)',
        slideRight: 'slideRight 1.2s 1s both cubic-bezier(.3,.79,.38,.84)',
        spinRight: 'spinRight 2s linear infinite',
        spinLeft: 'spinLeft 2s linear infinite',
      },
      keyframes: {
        spinRight: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        spinLeft: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(200px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(-100px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(100)',
            opacity: 1,
          },
        },
        slideRight: {
          '0%': {
            transform: 'translateX(100px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },

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
