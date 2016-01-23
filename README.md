# eslint-config-shopify

[![Build status][circle-image]][circle-url] [![NPM version][npm-image]][npm-url]

This package provides Shopify's `.eslintrc` as an extensible shared config.

## Usage

### React

Install this module, as well as the other eslint modules on which it is dependent:

```shell
npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-plugin-shopify # dependencies
npm install --save-dev eslint-config-shopify
```

then, extend the React version of this configuration in your own `.eslintrc.json`:

```json
{
  "extends": "shopify/react"
}
```

### ES2015 and Beyond Projects

Install this module, as well as the other eslint modules on which it is dependent:

```shell
npm install --save-dev eslint babel-eslint eslint-plugin-shopify # dependencies
npm install --save-dev eslint-config-shopify
```

then, extend the base version of this configuration in your own `.eslintrc`:

```json
{
  "extends": "shopify"
}
```

### ES5 Projects

Projects with a legacy codebase or that target a tool that targets node may continue to use ES5. To lint these projects, first install this module, as well as the other eslint modules on which it is dependent:

```shell
npm install --save-dev eslint eslint-plugin-shopify # dependencies
npm install --save-dev eslint-config-shopify
```

then, extend the ES5 version of this configuration in your own `.eslintrc`:

```json
{
  "extends": "shopify/es5"
}
```

## Contributing

If there are rules that you wish to alter for your particular project, feel free to do so in your own `.eslintrc`. Rule declarations you make there will override the rules declared by this configuration. If you feel that a particular rule choice is poor and should be changed for all projects using this configuration, please open a PR [against this repo on Github](https://github.com/Shopify/eslint-config-shopify).

For changes to existing rules, bump the major version. For addition of new rules, bump the minor version. For all other corrections and updates, bump the patch version. These can easily be done by running `npm publish <version>`, where `version` is either `major`, `minor`, or `patch`.

[circle-url]: https://circleci.com/gh/ryansobol/eslint-config-ryansobol
[circle-image]: https://circleci.com/gh/ryansobol/eslint-config-ryansobol.svg?&style=shield
[npm-url]: https://npmjs.org/package/eslint-config-ryansobol
[npm-image]: http://img.shields.io/npm/v/eslint-config-ryansobol.svg
