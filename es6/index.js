'use strict';

module.exports = {
  env: {
    es6: true
  },

  extends: 'ryansobol/core',

  parserOptions: {
    sourceType: 'module'
  },

  rules: require('../rules/ecmascript-6')
};
