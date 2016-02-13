'use strict';

// see http://eslint.org/docs/rules/#nodejs-and-commonjs
module.exports = {
  // enforce return after a callback
  'callback-return': 0,

  // disallow require() outside of the top-level module scope
  'global-require': 0,

  // Enforces error handling in callbacks
  'handle-callback-err': [2, '^.*(e|E)rr(or)?$'],

  // Disallow mixing regular variable and require declarations
  'no-mixed-requires': 0,

  // Disallow use of new operator with the require function
  'no-new-require': 2,

  // Disallow string concatenation with __dirname and __filename
  'no-path-concat': 0,

  // Disallow process.exit()
  'no-process-exit': 0,

  // Restrict usage of specified node imports
  'no-restricted-imports': 0,

  // Restrict usage of specified node modules
  'no-restricted-modules': 0,

  // Disallow use of synchronous methods
  'no-sync': 2
};
