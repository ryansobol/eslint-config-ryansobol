module.exports = {
  extends: "shopify",

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
