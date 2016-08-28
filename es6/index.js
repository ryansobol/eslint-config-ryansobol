'use strict';

module.exports = {
  env: {
    es6: true
  },

  extends: 'ryansobol/core',

  rules: Object.assign(require('../rules/ecmascript-6'), {
    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 2
  })
};
