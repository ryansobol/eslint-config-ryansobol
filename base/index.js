var merge = require("merge"),
  fs = require("fs"),
  path = require("path");

var rulesDir = path.resolve(__dirname, "../rules");
var rules = fs.readdirSync(rulesDir)
  .filter(function(file) {
    return file.indexOf("react") < 0;
  })
  .map(function(file) {
    return require(path.resolve(rulesDir, file));
  });

module.exports = {
  parser: "babel-eslint",

  env: {
    es6: true,
    node: true
  },

  ecmaFeatures: {
    modules: true
  },

  rules: merge.apply(merge, rules)
};
