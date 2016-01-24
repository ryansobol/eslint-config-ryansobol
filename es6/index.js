'use strict';

module.exports = {
  ecmaFeatures: {
    modules: true
  },

  env: {
    es6: true
  },

  extends: 'ryansobol/core',

  parser: 'babel-eslint',

  rules: require('../rules/ecmascript-6')
};
