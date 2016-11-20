'use strict';

module.exports = {
  env: {
    // Use ES6 globals and parser options
    es6: true
  },

  extends: 'ryansobol/core',

  // Overwrite ES6 parser options
  parserOptions: {
    ecmaVersion: 8
  },

  rules: Object.assign(require('../rules/ecmascript-6'), {
    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 2
  })
};
