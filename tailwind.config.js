const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.tsx', './src/style.css'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: '768px',
    },
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
