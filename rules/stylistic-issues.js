'use strict';

// see http://eslint.org/docs/rules/#stylistic-issues
module.exports = {
  // Enforce spacing inside array brackets
  'array-bracket-spacing': [2, 'never'],

  // Disallow or enforce spaces inside of single line blocks
  'block-spacing': [2, 'always'],

  // Enforce one true brace style
  'brace-style': [2, 'stroustrup', { allowSingleLine: true }],

  // Require camel case names
  'camelcase': [2, { properties: 'always' }],

  // Enforce spacing before and after comma
  'comma-spacing': [2, { after: true, before: false }],

  // Enforce one true comma style
  'comma-style': [2, 'last'],

  // Require or disallow padding inside computed properties
  'computed-property-spacing': [2, 'never'],

  // Enforces consistent naming when capturing the current execution context
  'consistent-this': [2, 'self'],

  // Enforce newline at the end of file, with no multiple empty lines
  'eol-last': 2,

  // Disallow spacing between function identifiers and their invocations
  'func-call-spacing': [2, 'never'],

  // Don't require function expressions to have a name
  'func-names': 0,

  // Enforces use of function declarations or expressions
  'func-style': [2, 'expression'],

  // Blacklist certain identifiers to prevent them being used
  'id-blacklist': 0,

  // This option enforces minimum and maximum identifier lengths (variable
  // names, property names etc.)
  'id-length': [2, {
    exceptions: ['x', 'y', 'z', 'a', 'e', 'i', 'j', 'k', 'v', '_'],
    min: 2,
    properties: 'always'
  }],

  // Require identifiers to match the provided regular expression
  'id-match': 0,

  // This option sets a specific tab width for your code
  'indent': [2, 2, { SwitchCase: 1 }],

  // Specify whether double or single quotes should be used in JSX attributes
  'jsx-quotes': [2, 'prefer-double'],

  // Enforces spacing between keys and values in object literal properties
  'key-spacing': [2, { afterColon: true, beforeColon: false }],

  // Enforce spacing before and after keywords
  'keyword-spacing': 2,

  // Disallow mixed 'LF' and 'CRLF' as linebreaks
  'linebreak-style': [2, 'unix'],

  // Enforces empty lines around comments
  'lines-around-comment': [2, {
    allowArrayStart: true,
    allowBlockStart: true,
    allowObjectStart: true,
    beforeBlockComment: true,
    beforeLineComment: true
  }],

  // Specify the maximum depth that blocks can be nested
  'max-depth': [2, 4],

  // Specify the maximum length of a line in your program
  'max-len': [2, 80, 4, { ignoreUrls: true }],

  // Enforce a maximum file length
  'max-lines': [2, { max: 300, skipBlankLines: true, skipComments: true }],

  // Specify the maximum depth callbacks can be nested
  'max-nested-callbacks': [2, 4],

  // Limits the number of parameters that can be used in the function
  // declaration.
  'max-params': [2, 3],

  // Specify the maximum number of statement allowed in a function
  'max-statements': [2, 15],

  // Enforce a maximum number of statements allowed per line
  'max-statements-per-line': [2, { max: 2 }],

  // Enforce newlines between operands of ternary expressions
  'multiline-ternary': 0,

  // Require a capital letter for constructors
  'new-cap': 2,

  // Disallow the omission of parentheses when invoking a constructor with no
  // arguments
  'new-parens': 2,

  // Allow/disallow an empty newline after var statement
  'newline-after-var': 2,

  // Require newline before return statement
  'newline-before-return': 2,

  // Don't enforce newline after each call when chaining the calls
  'newline-per-chained-call': 0,

  // Disallow use of the Array constructor
  'no-array-constructor': 2,

  // Disallow use of bitwise operators
  'no-bitwise': 2,

  // Disallow use of the continue statement
  'no-continue': 0,

  // Disallow comments inline after code
  'no-inline-comments': 0,

  // Disallow if as the only statement in an else block
  'no-lonely-if': 2,

  // Allow mixes of different operators
  'no-mixed-operators': 0,

  // Disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 2,

  // Disallow multiple empty lines
  'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],

  // Disallow negated conditions
  'no-negated-condition': 2,

  // Disallow nested ternary expressions
  'no-nested-ternary': 2,

  // Disallow use of the Object constructor
  'no-new-object': 2,

  // Disallow use of unary operators, ++ and --
  'no-plusplus': [2, { allowForLoopAfterthoughts: true }],

  // Disallow use of certain syntax in code
  'no-restricted-syntax': 0,

  // Disallow tabs in file
  'no-tabs': 2,

  // Disallow the use of ternary operators
  'no-ternary': 0,

  // Disallow trailing whitespace at the end of lines
  'no-trailing-spaces': 2,

  // Allow dangling underscores in identifiers
  'no-underscore-dangle': 0,

  // Disallow the use of Boolean literals in conditional expressions
  'no-unneeded-ternary': 2,

  // Disallow whitespace before properties
  'no-whitespace-before-property': 2,

  // Require or disallow line breaks inside braces
  'object-curly-newline': 0,

  // Require or disallow padding inside curly braces
  'object-curly-spacing': [2, 'always', { objectsInObjects: false }],

  // Don't enforce placing object properties on separate lines
  'object-property-newline': 0,

  // Allow or disallow one variable declaration per function
  'one-var': [2, 'never'],

  // Require or disallow an newline around variable declarations
  'one-var-declaration-per-line': [2, 'always'],

  // Require assignment operator shorthand where possible or prohibit it
  // entirely
  'operator-assignment': [2, 'always'],

  // Enforce operators to be placed before or after line breaks
  'operator-linebreak': [2, 'after', {
    overrides: { ':': 'before', '?': 'before' }
  }],

  // Enforce padding within blocks
  'padded-blocks': [2, 'never'],

  // Require quotes around object literal property names
  'quote-props': [2, 'as-needed'],

  // Specify whether backticks, double or single quotes should be used
  'quotes': [2, 'single', 'avoid-escape'],

  // Don't require JSDoc comment
  'require-jsdoc': 0,

  // Require or disallow use of semicolons instead of ASI
  'semi': [2, 'always'],

  // Enforce spacing before and after semicolons
  'semi-spacing': [2, { after: true, before: false }],

  // Require object keys to be sorted
  'sort-keys': [2, 'asc', { caseSensitive: true, natural: true }],

  // Sort variables within the same declaration block
  'sort-vars': [2, { ignoreCase: false }],

  // Require or disallow space before blocks
  'space-before-blocks': [2, 'always'],

  // Require or disallow space before function opening parenthesis
  'space-before-function-paren': [2, 'never'],

  // Require or disallow spaces inside parentheses
  'space-in-parens': [2, 'never'],

  // Require spaces around operators
  'space-infix-ops': 2,

  // Require or disallow spaces before/after unary operators (words on by
  // default, nonwords)
  'space-unary-ops': [2, { nonwords: false, words: true }],

  // Require or disallow a space immediately following the // or /* in a comment
  'spaced-comment': [2, 'always'],

  // Require or disallow the Unicode Byte Order Mark (BOM)
  'unicode-bom': 0,

  // Require regex literals to be wrapped in parentheses
  'wrap-regex': 0
};
