var rules = {
  "no-var": 0,
  "comma-dangle": 0,
  "no-param-reassign": 0
};

var es6Rules = require("../rules/ecmascript-6");
Object.keys(es6Rules).forEach(function(key) {
  rules[key] = 0;
});

module.exports = {
  extends: "shopify",

  env: {
    node: true,
    es6: false
  },

  globals: {
    fetch: true,
    ReactElement: true,
    ReactClass: true
  },

  rules: rules
};
