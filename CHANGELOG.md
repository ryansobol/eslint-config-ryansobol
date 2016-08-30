# Change Log

All changes to this project are documented in this file. This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [9.1.1] - 2016-08-30
### Changed
- Sort the rules by the official ESLint rule order

## [9.1.0] - 2016-08-30
### Changed
- Disable the `sort-keys` rule

## [9.0.0] - 2016-08-29
### Added
- Add Node v4.5, v6.3, and v6.4 to continuous testing
- Add `sort-keys` rule to require object keys to be sorted
- Add `no-template-curly-in-string` rule to disallow template literal placeholder syntax in regular strings
- Add a `ryansobol/express` environment
- Add `props` option to `no-self-assign` rule to disallow self-assignment of properties
- Add `symbol-description` rule to require symbol description
- Add `class-methods-use-this` rule to not enforce that class methods utilize `this`
- Add `react/forbid-component-props` rule to not forbid certain props on Components
- Add `react/no-danger-with-children` to prevent problems with children and `props.dangerouslySetInnerHTML`
- Add `react/no-unused-prop-types` to prevent definitions of unused prop types
- Add `react/style-prop-object` to enforce style prop value being an object
- Add `type-annotations` order option for the `react/sort-comp` rule

### Changed
- Update `eslint` dependency to ^3.4.0
- Update `eslint-plugin-react` dependency to ^6.2.0
- Replace `no-native-reassign` with `no-global-assign`
- Replace `no-negated-in-lhs` with `no-unsafe-negation`
- Replace `no-spaced-func` with `func-call-spacing`
- Move `sort-imports` to ECMAScript 6 rules
- Silence the log output of `npm run lint`
- Exempt `'a'` from `id-length` rule
- Change deprecated `allow-null` option for `eqeqeq` rule

### Removed
- Remove support for Node v5
- Remove Node v5 from continuous testing

## [8.0.0] - 2016-08-04
### Added
- Add `no-tabs` to disallow tabs in file

### Changed
- Update eslint dependency to ^3.2.2
- Disable `react/prefer-stateless-function` rule
- Allow tailing directory to be specified for npm run lint command
- Add `react/no-find-dom-node` to prevent usage of findDOMNode
- Use the default options for `react/self-closing-comp`
- Rename `react/no-comment-textnodes` to `react/jsx-no-comment-textnodes`
- Rename `react/wrap-multilines` to `react/jsx-wrap-multilines`

### Removed
- Remove `react/require-extension` rule

## [7.7.0] - 2016-07-21
### Changed
- Disable `arrow-body-style` rule

## [7.6.0] - 2016-07-16
## Added
- Add `allowParens: true` option to `no-confusing-arrow`
- Add `functions` option to `no-extra-parens`

## [7.5.0] - 2016-07-16
### Added
- Add `react/require-render-return` to enforce ES5 or ES6 class for returning value in render function
- Add `react/jsx-first-prop-new-line` to configure the position of the first property
- Add `react/jsx-no-target-blank` to prevent usage of unsafe `target='_blank'`
- Add `react/require-optimization` to not enforce React components to have a shouldComponentUpdate method
- Add `react/jsx-filename-extension` to restrict file extensions that may contain JSX
- Add `react/no-render-return-value` to prevent usage of the return value of React.render
- Add `react/no-comment-textnodes` to prevent comments from being inserted as text nodes
- Add option to `react/self-closing-comp` to check HTML tags
- Add `multiline-ternary` to not enforce newlines between operands of ternary expressions
- Add documentation on how to include `.jsx` files in the linting

### Changed
- Update eslint-plugin-react dependency to ^5.2.2
- Fix missing `jsx-space-before-closing` rule
- Improve the browser, ES6, Node, and React configuration docs
- Improve the parser options configuration docs
- Improve the ESLint environments configuration docs

## [7.4.0] - 2016-07-04
### Added
- Add `no-useless-rename` to disallow renaming import, export, and destructured assignments to the same name
- Add `unicode-bom` to disallow the Unicode Byte Order Mark (BOM)
- Add `no-prototype-builtins` to allow use of `Object.prototypes` builtins directly
- Add `max-lines` to enforce a maximum file length
- Add `no-mixed-operators` to allow mixes of different operators
- Add `object-curly-newline` to not require line breaks inside braces
- Add `rest-spread-spacing` enforce spacing between rest and spread operators and their expressions

### Changed
- Update eslint dependency to ^3.0.0

## [7.3.1] - 2016-06-05
### Added
- Document Materialize environment configuration

### Removed
- Remove unnecessary comma in `.eslintrc.js`

## [7.3.0] - 2016-06-05
### Added
- Add a read-only `Materialize` global

## [7.2.0] - 2016-05-19
### Added
- Add `no-useless-escape` to disallow unnecessary escape characters
- Add `max-statements-per-line` to enforce a max number of statements per line
- Add `no-duplicate-imports` to disallow duplicate imports
- Add `no-unsafe-finally` to disallow control flow statements in finally blocks
- Add `no-useless-computed-key` to disallow unnecessary computed property keys
- Add `object-property-newline` to not enforce placing object properties on separate lines

### Changed
- Test with Node.js 4.4, 5.9, 5.10, 5.11, 6.0, 6.1, and 6.2 on TravisCI
- Update eslint dependency to ^2.10.2

## [7.1.0] - 2016-03-20
### Added
- Add `argsIgnorePattern` to `no-unused-vars` rule
- Add `react/prefer-stateless-function` to enforce stateless components written as a pure function

### Changed
- Update eslint-plugin-react dependency to ^4.2.3

## [7.0.0] - 2016-03-14
### Changed
- Disable the `consistent-return` rule

## [6.2.0] - 2016-03-13
### Added
- Add `newline-before-return` to require newline before return statement
- Add `no-restricted-globals` to disallow specific global variables
- Add node v5.8 to continuous test

### Changed
- Update eslint dependency to ^2.3.0

### Removed
- Remove close and issue number from CHANGELOG

## [6.1.0] - 2016-02-27
### Changed
- Update eslint-plugin-react dependency to ^4.1.0

## [6.0.6] - 2016-02-27
### Added
- Add node v5.7 to continuous test

## [6.0.5] - 2016-02-27
### Changed
- Change to `ryansobol/browser` in usage sections of the README

## [6.0.4] - 2016-02-21
### Changed
- Fix broken link in the README

## [6.0.3] - 2016-02-21
### Changed
- Rename supplement configuration to environment configuration

## [6.0.2] - 2016-02-21
### Changed
- Clarify usage instructions in the README

## [6.0.1] - 2016-02-20
### Changed
- Fix environments example in the README
- Fix React examples in the README
- Add MIT License badge
- Make README headers consistent
- Clarify the run step in the usage sections of the README
- Link to ESLint environments in the README
- Credit colleagues and students at Galvanize in README
- Rename npm script to lint

## [6.0.0] - 2016-02-20
### Added
- Add semicolons to config examples (fixes #5)
- Add ryansobol/browser config
- Add ryansobol/mocha config
- Add ryansobol/jquery config
- Add README section on additional ESLint environments

#### React
- Add `react/jsx-space-before-closing` rule to validate spacing before closing bracket

### Changed
- Clarify the language and examples in the README
- Tighten up the Philosophy section of the README
- Link to the ESLint philosophy in the README
- Update `eslint-plugin-react` dependency to ^4.0.0

#### React
- Change `react/sort-comp` rule to support static methods
- Rename `react/jsx-sort-prop-types` rule to `react/sort-prop-types`
- Change `react/display-name` rule to use `ignoreTranspilerName` option

## [6.0.0-beta.1] - 2016-02-13
### Added
#### Stylistic Issues
- Add `no-bitwise` to not disallow use of bitwise operators
- Add `no-restricted-syntax` to not disallow use of certain syntax in code

### Changed
- Test with Node.js 4.3, 5.5, and 5.6 on TravisCI
- Change the description to shareable (fixes #4)

## [6.0.0-alpha.2] - 2016-02-13
### Added
#### Best Practices
- Add `array-callback-return` to enforce returns in callbacks of array's methods
- Add `no-empty-function` to disallow use of empty functions
- Add `no-extra-label` to disallow unnecessary labels
- Add `no-implicit-globals` to disallow var and named functions in global scope
- Add `no-self-assign` to disallow assignments where both sides are the same
- Add `no-unmodified-loop-condition` to disallow unmodified conditions of loops
- Add `no-unused-labels` to disallow unused labels

#### ECMAScript 6
- Add `no-new-symbol` to disallow use of the new operator with the Symbol object
- Add `no-useless-constructor` to disallow unnecessary constructor
- Add `prefer-rest-params` to suggest rest parameters instead of arguments

#### Node.js and CommonJS
- Add `no-restricted-imports` to not restrict usage of specified node imports

#### Stylistic Issues
- Add `id-blacklist` to not blacklist certain identifiers to prevent their use
- Add `newline-per-chained-call` to not enforce newline after each chained call
- Add `no-whitespace-before-property` to disallow whitespace before properties
- Add `one-var-declaration-per-line` to require newlines around var declarations
- Add `sort-imports` to sort import declarations within module
- Add `template-curly-spacing` to enforce spacing in template strings
- Add `yield-star-spacing` to enforce spacing around the * in yield* expressions

### Changed
- Tweak the `README.md` file
- Update `eslint` dependencies to ^2.0.0

#### Best Practices
- Replace `no-empty-label` with `no-labels`

#### Stylistic Issues
- Change `sort-vars` to sort variables within the same declaration block

### Fixed
- Fix the compare links in the `CHANGLOG.md` file

## [6.0.0-alpha.1] - 2016-01-24
### Added
- Add `'node'` keyword to `package.json` file

#### ECMAScript 6
- Add `no-arrow-condition` to disallow arrow funcs where a condition is expected
- Add `prefer-reflect` to not suggest using Reflect methods until more supported

#### React
- Add `react/jsx-equals-spacing` to enforce spaces around equal signs in JSX
- Add `react/jsx-handler-names` to enforce event handler naming in JSX

#### Stylistic Issues
- Add `max-depth` rule to specify the max depth blocks can be nested (4 levels)
- Add `max-len` rule to specify the max length of a line (80 chars, ignore URLs)
- Add `max-params` rule to limit the number of function parameters (3)
- Add `max-statements` rule to specify the max statements in a function (15)
- Add `no-negated-condition` to disallow negated conditions
- Add `no-plusplus` to disallow use of `++` and `--` except in for loops
- Add `require-jsdoc` to not require JSDoc comments
- Add `space-before-keywords` to require a space before keywords

### Changed
- Move the changelog to a dedicated `CHANGLOG.md` file
- Include Ryan Sobol in the `LICENSE` file
- Change `package.json` to `eslint-config-ryansobol`
- Default to ES5 rules
- Update CircleCI and NPM badges
- Extend `ryansobol/core` for ES5, ES6, and React rules
- Update `node` dependency to >=4.2.0
- Change to TravisCI and build against Node.js >=4.2.0
- Order rules alphabetically
- Split Node specific `env` and `rules` into `ryansobol/node` config
- Enforce `consistent-as-needed` for this project's `quote-props` rule
- Update `eslint` dependencies to ^2.0.0-beta.2
- Update `.eslintrc.js` to extend `ryansobol/es6` and `ryansobol/node`
- Update `eslint-plugin-react` dependencies to ^3.16.0
- Change `eslint-plugin-react` to a regular dependency
- Update the `README.md` file

#### Best Practices
- Change `block-scoped-var` rule to an error
- Change `consistent-return` rule to an error
- Change `curly` rule to an error
- Change `default-case` rule to an error
- Change `dot-location` rule to an error
- Change `dot-notation` rule to an error
- Change `guard-for-in` rule to disabled
- Change `no-alert` rule to an error
- Change `no-div-regex` rule to an error
- Change `no-else-return` rule to an error
- Change `no-extra-bind` rule to an error
- Change `no-floating-decimal` rule to an error
- Change `no-implicit-coercion` rule to an error
- Change `no-invalid-this` rule to an error
- Change `no-lone-blocks` rule to an error
- Change `no-multi-spaces` rule to an error
- Change `no-new` rule to an error
- Change `no-octal` rule to an error
- Change `no-process-env` rule to disabled
- Change `no-script-url` rule to an error
- Change `no-sequences` rule to an error
- Change `no-throw-literal` rule to an error
- Change `no-unused-expressions` rule to an error
- Change `no-useless-concat` rule to an error
- Change `no-warning-comments` rule to disabled
- Change `radix` rule to `'as-needed'`
- Change `wrap-iife` rule to an error
- Change `yoda` rule to an error except ranges

#### ECMAScript 6
- Change `arrow-parens` rule to an error
- Change `arrow-spacing` rule to an error
- Change `generator-star-spacing` rule to an error and be more explicit
- Change `no-class-assign` rule to an error
- Change `object-shorthand` rule to an error
- Change `prefer-const` rule to an error
- Change `prefer-template` rule to an error
- Change `no-arrow-condition` rule to `no-confusing-arrow`
- Change all keyword spacing rules to `keyword-spacing`

#### Node.js and CommonJS
- Update comment to official docs
- Change `callback-return` rule to disabled
- Change `handle-callback-err` rule to an error
- Change `no-new-require` rule to an error
- Change `no-path-concat` rule to disabled
- Change `no-process-exit` rule to disabled
- Change `no-sync` rule to an error

#### Possible Errors
- Change `comma-dangle` rule to `'never'`
- Change `no-console` rule to an error
- Change `no-constant-condition` rule to an error
- Change `no-debugger` rule to an error
- Change `no-empty` rule to an error
- Change `no-extra-boolean-cast` rule to an error
- Change `no-extra-parens` rule to an error
- Change `no-extra-semi` rule to an error
- Change `no-func-assign` rule to an error
- Change `no-inner-declarations` rule to an error
- Change `no-irregular-whitespace` rule to an error
- Change `no-negated-in-lhs` rule to an error
- Change `no-regex-spaces` rule to an error
- Change `no-sparse-arrays` rule to an error
- Change `no-unexpected-multiline` rule to an error

#### React
- Change `react/display-name` rule to an error
- Change `react/forbid-prop-types` rule to forbid vague `object` prop type
- Change `react/jsx-boolean-value` rule to `'always'` enforce boolean JSX attrs
- Change `react/jsx-closing-bracket-location` rule to enforce `'line-aligned'`
- Change `react/jsx-curly-spacing` rule to an error
- Change `react/jsx-indent-props` rule to an error
- Change `react/jsx-indent` rule to an error
- Change `react/jsx-no-bind` rule to an error
- Change `react/jsx-sort-prop-types` rule to an error
- Change `react/jsx-sort-props` rule to an error
- Change `react/no-danger` rule to an error
- Change `react/no-multi-comp` rule to an error
- Change `react/no-string-refs` rule to an error
- Change `react/no-unknown-property` rule to an error
- Change `react/prefer-es6-class` rule to disabled
- Change `react/prop-types` rule to disabled
- Change `react/require-extension` rule to include `'.jsx'`
- Change `react/self-closing-comp` rule to an error
- Change `react/sort-comp` rule to an error and use the default order
- Change `react/wrap-multilines` rule to an error and prevent wrapping parens

#### Strict Mode
- Change `strict` rule to `'safe'`

#### Stylistic Issues
- Change `array-bracket-spacing` rule to an error
- Change `block-spacing` rule to an error
- Change `brace-style` rule to an error and enforce `'stroustrup'` style
- Change `camelcase` rule to an error
- Change `comma-spacing` rule to an error
- Change `comma-style` rule to an error
- Change `computed-property-spacing` rule to an error
- Change `consistent-this` rule to an error
- Change `eol-last` rule to an error
- Change `func-style` rule to an error enforce `'expression'` style
- Change `id-length` rule to an error and exempt `'z'`, `'e'`, `'k'`, and `'v'`
- Change `indent` rule to an error and indent case statements by 1 level
- Change `jsx-quotes` rule to an error
- Change `key-spacing` rule to an error
- Change `linebreak-style` rule to an error and enforce `'unix'` line breaks
- Change `lines-around-comment` rule to an error and enforce more exemptions
- Change `max-nested-callbacks` rule to an error and enforce 4 levels
- Change `new-cap` rule to use its defaults
- Change `new-parens` rule to an error
- Change `newline-after-var` rule to an error
- Change `no-lonely-if` rule to an error
- Change `no-mixed-spaces-and-tabs` rule to an error
- Change `no-multiple-empty-lines` rule to an error and enforce a max of 1 line
- Change `no-nested-ternary` rule to an error
- Change `no-new-object` rule to an error
- Change `no-spaced-func` rule to an error
- Change `no-trailing-spaces` rule to an error
- Change `no-unneeded-ternary` rule to an error
- Change `object-curly-spacing` rule to an error and enforce except in objects
- Change `one-var` rule to an error
- Change `operator-assignment` rule to an error
- Change `operator-linebreak` rule to an error
- Change `padded-blocks` rule to an error and never should be padded
- Change `quote-props` rule to an error
- Change `quotes` rule to an error
- Change `semi-spacing` rule to an error
- Change `semi` rule to an error
- Change `space-after-keywords` rule to an error
- Change `space-before-blocks` rule to an error
- Change `space-before-function-paren` rule to an error
- Change `space-in-parens` rule to an error
- Change `space-infix-ops` rule to an error
- Change `space-return-throw-case` rule to an error
- Change `space-unary-ops` rule to an error
- Change `spaced-comment` rule to an error

#### Variables
- Change `init-declarations` rule to disabled
- Change `no-catch-shadow` rule to disabled
- Change `no-shadow` rule to reports `'all'` shadowing
- Change `no-unused-vars` rule to an error
- Change `no-use-before-define` rule to remove exemptions

### Removed
- Replace `merge` dependency with `Object.assign()` function
- Remove `eslint-plugin-shopify` rules and dependencies
- Remove `.nvmrc` file
- Remove unnecessary `eslint --max-warnings` flag
- Remove unnecessary `npm run lint` script
- Remove legacy rules for old Shopify projects
- Remove globals for `ryansobol/react` rules
- Remove `babel-eslint` parser from `ryansobol/es6`
- Remove `babel-eslint` dev dependency
- Remove forced ES6 module support from `ryansobol/es6`

## [5.9.0] - 2016-01-19
### Changed
- Updated `eslint-plugin-react` dependency to 3.15
- Updated `eslint-plugin-shopify` to 2.1
- Set the default `shopify/require-flow` config to `"explicit"`

## [5.8.0] - 2016-01-07
### Added
- Added the newly introduced rules

### Changed
- Updated `eslint-plugin-react` dependency to 3.14

## [5.7.1] - 2015-12-04
### Removed
- Removed `no-arrow-condition` for `ecmascript-6` that conflicted with `arrow-body-style` rule

## [5.7.0] - 2015-12-01
### Added
- Added the new rules introduced by ESLint 1.10

### Changed
- Updated `eslint` dependency to 1.10
- Updated `eslint-plugin-react` dependency to 3.11

## [5.6.1] - 2015-10-20
### Fixed
- Fix non-prefixed React plugin rule

## [5.6.0] - 2015-10-20
### Added
- Add new React plugin rules: `prefer-es6-class`, `no-direct-mutation-state`, and `forbid-prop-types`

## [5.5.0] - 2015-10-20
### Changed
- Converts most rules to being warnings rather than errors. Rules that catch existing bugs or that are considered bad practices are still treated as errors.

## [5.4.0] - 2015-10-06
### Added
- Adds the new rules from `eslint-plugin-shopify`

## [5.3.6] - 2015-09-25
### Added
- Added `eslint-plugin-shopify` to the ES5 config to avoid it dying on those rules

## [5.3.5] - 2015-09-25
### Changed
- Loosens restriction on usage of `this` outside of objects and classes

## [5.3.4] - 2015-09-23
### Added
- Add `_` as an exception to the identifier length rule

## [5.3.3] - 2015-09-22
### Changed
- Demote `console.log` to a warning

## [5.3.2] - 2015-09-22
### Changed
- Allow node things in ES6 config (for Webpack-style imports, like React's images)

## [5.3.1] - 2015-09-21
### Added
- Added a few more exceptions to identifier length rule

### Fixed
- Fix issue where ES6 config was not inheriting from core config

## [5.3.0] - 2015-09-21
### Changed
- Reorganized the project to have a core set of rules that are added to by each config (instead of setting and overriding)
- Allow non-global requires

## [5.2.2] - 2015-09-21
### Fixed
- Fixed some issues with the parsers and plugins specified by the configs

## [5.2.1] - 2015-09-21
### Fixed
- Fixed a dependency issue

## [5.2.0] - 2015-09-21
### Added
- Added the Shopify plugin and initial rule defaults

## [5.1.1] - 2015-09-21
### Fixed
- Fix URLs in `package.json`

## [5.1.0] - 2015-09-21
### Added
- Added an ES5 version of the config
- Added a few minor exceptions to the `id-length` rule

## [5.0.0] - 2015-09-21
### Changed
- Prevent implicit coercions

## [4.0.0] - 2015-09-18
### Changed
- Force `let` in all cases. `const` is allowed but not enforced (use it sparingly to indicate immutable primitives).
- Force function declarations (`function foo() {}`) over function expressions (`var foo = function() {}`)
- Force variable initialization at definition (i.e., no `let foo;`, must be assigned)
- Force parens for arrow function parameters regardless of arity, and force spaces around the actual arrow
- Prefer template strings over concatenation, and spread (`...`) over `.apply()`
- Other minor rule additions and updates

## [3.0.4] - 2015-09-18
### Changed
- Allow function declarations to be used before defined (avoids issues with, for example, functions that call each other recursively)

## [3.0.3] - 2015-09-18
### Changed
- Avoid escape in quote styles

## [3.0.2] - 2015-09-17
### Fixed
- Forgot to bump to package.json version

## [3.0.1] - 2015-09-17
### Changed
- Use jsx-quotes instead of react/jsx-quotes

## [3.0.0] - 2015-09-17
### Changed
- Enforce trailing commas on multiline literals
- Enforce double quotes for JSX to be in line with XML
- Don't allow spacing inside object literals

## [2.0.1] - 2015-09-15
### Changed
- Minor project cleanup

### Fixed
- Fixed typo in one rule

## [2.0.0] - 2015-09-15
### Changed
- All warnings are now errors

### Removed
- Removed some rules relating to complexity, maximum length, and nesting depth

## [1.0.7] - 2015-09-14
### Changed
- Loosens restriction on `==` for `null` checking (which Flow requires for Maybe types)

## [1.0.6] - 2015-09-14
### Added
- Adds global Flow types for React (`ReactClass` and `ReactElement`)

## [1.0.5] - 2015-09-14
### Changed
- Prefer `var` until Flow adds support for `const`/ `let`

## [1.0.4] - 2015-09-10
### Changed
- Allow `continue`

## [1.0.3] - 2015-09-09
### Changed
- Prefer `const`/ `let`

## [1.0.2] - 2015-09-08
### Changed
- Updated React linting rules

## [1.0.1] - 2015-09-08
### Removed
- Removed unnecessary dependencies

## [1.0.0] - 2015-09-08
### Added
- Initial commit

[Unreleased]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v9.1.1...HEAD
[9.1.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v9.1.0...v9.1.1
[9.1.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v9.0.0...v9.1.0
[9.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v8.0.0...9.0.0
[8.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v7.7.0...v8.0.0
[7.7.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v7.6.0...v7.7.0
[7.6.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v7.5.0...v7.6.0
[7.5.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v7.4.0...v7.5.0
[7.4.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v7.3.1...v7.4.0
[7.3.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v7.3.0...v7.3.1
[7.3.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v7.2.0...v7.3.0
[7.2.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v7.1.0...v7.2.0
[7.1.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v7.0.0...v7.1.0
[7.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.2.0...v7.0.0
[6.2.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.1.0...v.6.2.0
[6.1.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.0.6...v6.1.0
[6.0.6]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.0.5...v6.0.6
[6.0.5]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.0.4...v6.0.5
[6.0.4]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.0.3...v6.0.4
[6.0.3]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.0.2...v6.0.3
[6.0.2]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.0.1...v6.0.2
[6.0.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.0.0...v6.0.1
[6.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.0.0-beta.1...v6.0.0
[6.0.0-beta.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.0.0-alpha.2...v6.0.0-beta.1
[6.0.0-alpha.2]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v6.0.0-alpha.1...v6.0.0-alpha.2
[6.0.0-alpha.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.9.0...v6.0.0-alpha.1
[5.9.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.8.0...v5.9.0
[5.8.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.7.1...v5.8.0
[5.7.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.7.0...v5.7.1
[5.7.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.6.1...v5.7.0
[5.6.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/5.6.0...v5.6.1
[5.6.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.5.0...v5.6.0
[5.5.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.4.0...v5.5.0
[5.4.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/vv5.3.6...v5.4.0
[5.3.6]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.3.5...v5.3.6
[5.3.5]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.3.4...v5.3.5
[5.3.4]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.3.3...v5.3.4
[5.3.3]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.3.2...v5.3.3
[5.3.2]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.3.1...v5.3.2
[5.3.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.2.2...v5.3.1
[5.2.2]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.2.1...v5.2.2
[5.2.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.2.0...v5.2.1
[5.2.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.1.1...v5.2.0
[5.1.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.1.0...v5.1.1
[5.1.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/5.0.0...v5.1.0
[5.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/4.0.0...5.0.0
[4.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/3.0.4...4.0.0
[3.0.4]: https://github.com/ryansobol/eslint-config-ryansobol/compare/3.0.3...3.0.4
[3.0.3]: https://github.com/ryansobol/eslint-config-ryansobol/compare/3.0.2...3.0.3
[3.0.2]: https://github.com/ryansobol/eslint-config-ryansobol/compare/3.0.1...3.0.2
[3.0.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/3.0.0...3.0.1
[3.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/2.0.1...3.0.0
[2.0.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/2.0.0...2.0.1
[2.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/1.0.7...2.0.0
[1.0.7]: https://github.com/ryansobol/eslint-config-ryansobol/compare/1.0.6...1.0.7
[1.0.6]: https://github.com/ryansobol/eslint-config-ryansobol/compare/1.0.5...1.0.6
[1.0.5]: https://github.com/ryansobol/eslint-config-ryansobol/compare/1.0.4...1.0.5
[1.0.4]: https://github.com/ryansobol/eslint-config-ryansobol/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/ryansobol/eslint-config-ryansobol/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/ryansobol/eslint-config-ryansobol/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/tree/5ea066257
