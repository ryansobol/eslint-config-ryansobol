'use strict';

module.exports = {
  ecmaFeatures: {
    jsx: true
  },

  extends: 'ryansobol/es6',

  globals: {
    fetch: true,
    ReactElement: true,
    ReactClass: true
  },

  plugins: [
    'react'
  ],

  rules: require('../rules/react')
};
