'use strict';

module.exports = {
  extends: 'ryansobol/core',
  parser: 'babel-eslint',

  env: {
    es6: true,
    node: true
  },

  ecmaFeatures: {
    modules: true
  },

  rules: require('../rules/ecmascript-6')
};
