var merge = require("merge")

module.exports = {
  parser: "babel-eslint",

  plugins: [
    "shopify"
  ],

  env: {
    es6: true
  },

  ecmaFeatures: {
    modules: true
  },

  rules: merge(
    require("../rules/ecmascript-6"),
    require("../rules/shopify"),
    {"no-param-reassign": 0} // because of default params
  )
};
