// see http://eslint.org/docs/rules/#nodejs

module.exports = {
  // enforce return after a callback
  "callback-return": [1, ["callback", "cb", "next"]],
  // disallow require() outside of the top-level module scope
  "global-require": 0,
  // Enforces error handling in callbacks (off by default) (on by default in the node environment)
  "handle-callback-err": [1, "^.*(e|E)rr(or)?$"],
  // Disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
  "no-mixed-requires": 0,
  // Disallow use of new operator with the require function (off by default) (on by default in the node environment)
  "no-new-require": 1,
  // Disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
  "no-path-concat": 1,
  // Disallow process.exit() (on by default in the node environment)
  "no-process-exit": 1,
  // Restrict usage of specified node modules (off by default)
  "no-restricted-modules": 0,
  // Disallow use of synchronous methods (off by default)
  "no-sync": 1
};
