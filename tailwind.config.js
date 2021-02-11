const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.blue,
      secondary: colors.green,
      cancel: colors.gray,
      danger: colors.red,
      info: colors.blue,
      success: colors.green,
      warning: colors.yellow,
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [],
};
