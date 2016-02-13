# eslint-config-ryansobol

[![NPM version][ni]][nu]
[![Build status][ti]][tu]

Ryan Sobol's shareable ESLint configuration

The MIT License - Copyright (c) 2016 Brigade and Ryan Sobol

## Philosophy

- Declare all available rules
- Support ECMAScript 5 and above
- Be compatible with alternative parsers
- Break the build when code fails any rule
- Equip developers with powerful semantics
- Teach developers how to write maintainable code
- Allow any rule to be overridden on a per project basis

## Dependencies

| Dependency                   | Type     | Version   |
|------------------------------|----------|-----------|
| [eslint][eslint]             | Peer     | `^2.0.0`  |
| [eslint-plugin-react][react] | Required | `^3.16.0` |
| [node][node]                 | Engine   | `>=4.2.0` |

## Global Installation & Usage

Install the package globally.

```shell
npm install -g eslint eslint-config-ryansobol
```

Create a configuration file and configure the [project's language][language].

```shell
touch .eslintrc.js
```

Run the package globally returning a non-zero status code with it fails.

```shell
eslint .
```

## Local Installation & Usage

Install the package locally by adding it to the `package.json` file as a development dependency.

```shell
npm install -D eslint eslint-config-ryansobol
```

Create a configuration file and configure the [project's language][language].

```shell
touch .eslintrc.js
```

Run the package locally returning a non-zero status code with it fails.

```shell
./node_modules/.bin/eslint .
```

Additionally, add a script to the `package.json` file.

```json
{
  "script": {
    "lint": "eslint ."
  }
}
```

And run the script locally returning a non-zero status code with it fails.

```shell
npm run lint
```

## Language Configuration

A project can be linted by **one** of the following language configurations.

| Language     | Module            |
|--------------|-------------------|
| ECMAScript 5 | `ryansobol/es5`   |
| ECMAScript 6 | `ryansobol/es6`   |

Add the following code to the `.eslintrc.js` file of an ECMAScript 5 project.

```js
module.exports = {
  extends: 'ryansobol/es5'
}
```

Or add the following code to the `.eslintrc.js` file of an ECMAScript 6 project.

```js
module.exports = {
  extends: 'ryansobol/es6'
}
```

## Overriding Rules

Alter any rule by overriding it in the `.eslintrc.js` file.

```js
module.exports = {
  extends: 'ryansobol/es5',

  rules: {
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
  }
}
```

## Supplemental configuration

A project can be linted by **any** of the following supplemental configurations.

| Supplement | Module            |
|------------|-------------------|
| Node.js    | `ryansobol/node`  |
| React.js   | `ryansobol/react` |

Add the following code to the `.eslintrc.js` file of an ECMAScript 6 project using Node.js.

```js
module.exports = {
  extends: [
    'ryansobol/es6',
    'ryansobol/node'
  ]
}
```

Add the following code to the `.eslintrc.js` file of an ECMAScript 6 project using Node.js and React.js.

```js
module.exports = {
  extends: [
    'ryansobol/es6',
    'ryansobol/node',
    'ryansobol/react',
  ]
}
```

## Alternative parsers

The default [Espree][espree] parser is assumed, but alternative parsers like [babel-eslint][babel] can be specified in the `.eslintrc.js` file.

```js
module.exports = {
  extends: [
    'ryansobol/es6',
    'ryansobol/node',
    'ryansobol/react',
  ],

  parser: 'babel-eslint'
}
```

Parser options can be specified in the `.eslintrc.js` file as well.

```js
module.exports = {
  extends: [
    'ryansobol/es6',
    'ryansobol/node',
    'ryansobol/react',
  ],

  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module'
  }
}
```

## Contributing

See the section on [overriding rules][overriding] to learn how to alter any of them for your own project.

Pull requests are very much welcome for the following.

- Fixing bugs
- Adding tests
- Writing documentation
- Adding rules for another plugin (e.g. [eslint-plugin-angular][angular])
- Changing rules that don't follow the [project's philosophy][philosophy]

## Credits

Thanks goes to the Shopify team for publishing [eslint-config-shopify][shopify] under a permissive license.

[ni]: https://img.shields.io/npm/v/eslint-config-ryansobol.svg?style=flat-square
[nu]: https://www.npmjs.com/package/eslint-config-ryansobol
[ti]: https://img.shields.io/travis/ryansobol/eslint-config-ryansobol/master.svg?style=flat-square
[tu]: https://travis-ci.org/ryansobol/eslint-config-ryansobol
[angular]: https://github.com/Gillespie59/eslint-plugin-angular
[babel]: https://github.com/babel/babel-eslint
[eslint]: http://eslint.org/
[espree]: https://github.com/eslint/espree
[node]: https://nodejs.org/
[react]: https://github.com/yannickcr/eslint-plugin-react
[shopify]: https://github.com/Shopify/eslint-config-shopify
[language]: #language-configuration
[overriding]: #overriding-rules
[philosophy]: #philosophy
