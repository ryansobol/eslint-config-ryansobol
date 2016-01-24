'use strict';

module.exports = {
  extends: 'ryansobol/core',

  ecmaFeatures: {
    modules: true
  },

  env: {
    es6: true
  },

  parser: 'babel-eslint',

  rules: require('../rules/ecmascript-6')
};
