const { resolveDirective } = require("vue");

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'rgb(85, 190, 240)',
        secondary: 'rgb(29, 29, 31)',
        neutral: {
          '100': 'hsl(0, 0%, 100%)',
          '300': 'hsl(220, 14%, 96%)',
          '500': 'hsl(216, 12%, 84%)',
          '700': 'hsl(217, 19%, 27%)',
          '900': 'hsl(221, 39%, 11%)'
        },
        accent: {
          '1': 'hsl(199, 83.8%, 63.7%)',
          '2': 'rgb(245, 158, 11)'
        }
      },
      spacing: {
        'screen-60': '60vw',
        '18': '4.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
