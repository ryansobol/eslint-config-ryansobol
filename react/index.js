'use strict';

module.exports = {
  extends: 'ryansobol/core',

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: [
    'react'
  ],

  rules: require('../rules/react')
};
