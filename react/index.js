module.exports = {
  extends: "../base/index.js",

  plugins: [
    "react"
  ],

  ecmaFeatures: {
    jsx: true
  },

  globals: {
    "fetch": true
  },

  rules: require("../rules/react")
};
