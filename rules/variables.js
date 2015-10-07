// see http://eslint.org/docs/rules/#variables

module.exports = {
  // enforce or disallow variable initializations at definition
  "init-declarations": [1, "always"],
  // Disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
  "no-catch-shadow": 1,
  // Disallow deletion of variables
  "no-delete-var": 2,
  // Disallow labels that share a name with a variable
  "no-label-var": 2,
  // Disallow shadowing of names such as arguments
  "no-shadow-restricted-names": 1,
  // Disallow declaration of variables already declared in the outer scope
  "no-shadow": 1,
  // Disallow use of undefined when initializing variables
  "no-undef-init": 1,
  // Disallow use of undeclared variables unless mentioned in a /*global */ block
  "no-undef": 2,
  // Disallow use of undefined variable (off by default)
  "no-undefined": 2,
  // Disallow declaration of variables that are not used in the code
  "no-unused-vars": 1,
  // Disallow use of variables before they are defined
  "no-use-before-define": [1, "nofunc"]
};
