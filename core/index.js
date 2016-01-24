'use strict';

module.exports = {
  rules: Object.assign(
    require('../rules/best-practices'),
    require('../rules/possible-errors'),
    require('../rules/strict-mode'),
    require('../rules/stylistic-issues'),
    require('../rules/variables')
  )
};
