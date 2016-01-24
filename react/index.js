'use strict';

module.exports = {
  ecmaFeatures: {
    jsx: true
  },

  extends: 'ryansobol/core',

  plugins: [
    'react'
  ],

  rules: require('../rules/react')
};
