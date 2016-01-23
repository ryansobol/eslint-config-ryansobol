module.exports = {
  extends: 'shopify/core',

  env: {
    node: true,
  },

  rules: require('../rules/node')
};
