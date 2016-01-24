'use strict';

module.exports = {
  ecmaFeatures: {
    jsx: true
  },

  extends: 'ryansobol/es6',

  plugins: [
    'react'
  ],

  rules: require('../rules/react')
};
