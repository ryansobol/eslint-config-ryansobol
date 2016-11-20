'use strict';

module.exports = {
  extends: 'ryansobol/core',

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },

  plugins: [
    'react'
  ],

  rules: require('../rules/react')
};
