var merge = require("merge");

module.exports = {
  rules: merge(
    require("../rules/best-practices"),
    require("../rules/legacy"),
    require("../rules/possible-errors"),
    require("../rules/strict-mode"),
    require("../rules/stylistic-issues"),
    require("../rules/variables")
  )
};
