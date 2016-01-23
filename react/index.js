module.exports = {
  extends: 'ryansobol/es6',

  plugins: [
    'react'
  ],

  ecmaFeatures: {
    jsx: true
  },

  globals: {
    fetch: true,
    ReactElement: true,
    ReactClass: true
  },

  rules: require('../rules/react')
};
