module.exports = {
  extends: "shopify",

  plugins: [
    "react"
  ],

  ecmaFeatures: {
    jsx: true
  },

  globals: {
    fetch: true,
    ReactElement: true,
    ReactClass: true
  },

  rules: require("../rules/react")
};
