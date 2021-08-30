const { resolveDirective } = require("vue");

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'rgb(85, 190, 240)',
        secondary: 'rgb(29, 29, 31)'
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
