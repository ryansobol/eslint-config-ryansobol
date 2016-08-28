'use strict';

module.exports = {
  rules: {
    // Allow non-constructor function names to begin with a capital letter
    // eslint-disable-next-line no-useless-escape
    'new-cap': [2, { capIsNewExceptionPattern: '^express\.Router' }]
  }
};
