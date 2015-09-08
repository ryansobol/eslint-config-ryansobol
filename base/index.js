var merge = require("merge"),
  fs = require("fs"),
  path = require("path");

var rules = fs.readDirSync(path.resolve(__dirname, "../rules"))
  .filter(function(file) {
    return file.indexOf("react") < 0;
  })
  .map(function(file) {
    return require(file);
  });

module.exports = {
  env: [
    "es6",
    "node"
  ],

  parser: "babel-eslint",

  rules: merge.apply(merge, rules)
};
