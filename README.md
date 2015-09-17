# eslint-config-shopify

This package provides Shopify's `.eslintrc` as an extensible shared config.

## Usage

### React

Install this module, as well as the other eslint modules on which it is dependent:

```shell
npm install --save-dev eslint babel-eslint eslint-plugin-react # dependencies
npm install --save-dev eslint-config-shopify
```

then, extend the React version of this configuration in your own `.eslintrc`:

```json
{
  "extends": "shopify/react"
}
```

### Non-React Projects

Install this module, as well as the other eslint modules on which it is dependent:

```shell
npm install --save-dev eslint babel-eslint # dependencies
npm install --save-dev eslint-config-shopify
```

then, extend the base version of this configuration in your own `.eslintrc`:

```json
{
  "extends": "shopify"
}
```

## Improvements

If there are rules that you wish to alter for your particular project, feel free to do so in your own `.eslintrc`. Rule declarations you make there will override the rules declared by this configuration. If you feel that a particular rule choice is poor and should be changed for all projects using this configuration, please open a PR [against this repo on Github](https://github.com/Shopify/eslint-config-shopify).

## Changelog

### 3.0.0

Enforce trailing commas on multiline literals.

Enforce double quotes for JSX to be in line with XML.

Don't allow spacing inside object literals.

### 2.0.1

Fixed typo in one rule. Minor project cleanup.

### 2.0.0

All warnings are now errors. Removed some rules relating to complexity, maximum length, and nesting depth.

### 1.0.7

Loosens restriction on `==` for `null` checking (which Flow requires for Maybe types).

### 1.0.6

Adds global Flow types for React (`ReactClass` and `ReactElement`).

### 1.0.5

Prefer `var` until Flow adds support for `const`/ `let`.

### 1.0.4

Allow `continue`

### 1.0.3

Prefer `const`/ `let`.

### 1.0.2

Updated React linting rules.

### 1.0.1

Removed unnecessary dependencies.

### 1.0.0

Initial commit.
