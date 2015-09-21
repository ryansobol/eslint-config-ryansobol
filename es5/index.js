var merge = require("merge");

module.exports = {
  extends: "shopify/core",

  rules: merge(
    require("../rules/node"),
    require("../rules/shopify")
  )
};
