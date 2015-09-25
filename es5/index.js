var merge = require("merge");

module.exports = {
  extends: "shopify/core",

  plugins: [
    "shopify"
  ],

  rules: merge(
    require("../rules/node"),
    require("../rules/shopify")
  )
};
