'use strict';

// see http://eslint.org/docs/rules/#ecmascript-6
module.exports = {
  // Require braces in arrow function body
  'arrow-body-style': 0,

  // Require parens in arrow function arguments
  'arrow-parens': [2, 'always'],

  // Require space before/after arrow function's arrow
  'arrow-spacing': [2, { before: true, after: true }],

  // Verify super() callings in constructors
  'constructor-super': 2,

  // Enforce the spacing around the * in generator functions
  'generator-star-spacing': [2, { before: false, after: true }],

  // Disallow modifying variables of class declarations
  'no-class-assign': 2,

  // Disallow arrow functions where they could be confused with comparisons
  'no-confusing-arrow': [2, { allowParens: true }],

  // Disallow modifying variables that are declared using const
  'no-const-assign': 2,

  // Disallow duplicate name in class members
  'no-dupe-class-members': 2,

  // Disallow duplicate imports
  'no-duplicate-imports': 2,

  // Disallow use of the new operator with the Symbol object
  'no-new-symbol': 2,

  // Disallow to use this/super before super() calling in constructors.
  'no-this-before-super': 2,

  // Disallow unnecessary computed property keys on objects
  'no-useless-computed-key': 2,

  // Disallow unnecessary constructor
  'no-useless-constructor': 2,

  // Disallow renaming import, export, and destructured assignments to the same
  // name
  'no-useless-rename': 2,

  // Require let or const instead of var
  'no-var': 2,

  // Require method and property shorthand syntax for object literals
  'object-shorthand': [2, 'always'],

  // Suggest using arrow functions as callbacks
  'prefer-arrow-callback': 2,

  // Suggest using of const declaration for variables that are never modified
  // after declared
  'prefer-const': 2,

  // Suggest using Reflect methods where applicable
  'prefer-reflect': 0,

  // Suggest using the rest parameters instead of arguments
  'prefer-rest-params': 2,

  // Suggest using the spread operator instead of .apply()
  'prefer-spread': 2,

  // Suggest using template literals instead of strings concatenation
  'prefer-template': 2,

  // Disallow generator functions that do not have yield
  'require-yield': 2,

  // Enforce spacing between rest and spread operators and their expressions
  'rest-spread-spacing': 2,

  // Sort import declarations within module
  'sort-imports': [2, {
    ignoreCase: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
  }],

  // Require symbol description
  'symbol-description': 2,

  // Enforce spacing around embedded expressions of template strings
  'template-curly-spacing': [2, 'never'],

  // Enforce spacing around the * in yield* expressions
  'yield-star-spacing': [2, { before: false, after: true }]
};
