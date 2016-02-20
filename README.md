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

Create a `.eslintrc.js` configuration file.

```shell
touch .eslintrc.js
```

Add [language configuration][language] and [supplemental configuration][supplemental] to the `.eslintrc.js` file.

```js
module.exports = {
  extends: [
    'ryansobol/es5',
    'ryansobol/node'  
  ]
};
```

Run the package globally and fix any linting errors.

```shell
eslint .
```

## Local Installation & Usage

Install the package locally by adding it to the `package.json` file as a development dependency.

```shell
npm install -D eslint eslint-config-ryansobol
```

Create a `.eslintrc.js` configuration file.

```shell
touch .eslintrc.js
```

Add [language configuration][language] and [supplemental configuration][supplemental] to the `.eslintrc.js` file.

```js
module.exports = {
  extends: [
    'ryansobol/es5',
    'ryansobol/node'  
  ]
};
```

Run the package locally and fix any linting errors.

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

Then run the `npm` script locally and fix any linting errors.

```shell
npm run lint
```

## Language Configuration

A project is linted by **one** of the following language configurations.

| Language     | Module            |
|--------------|-------------------|
| ECMAScript 5 | `ryansobol/es5`   |
| ECMAScript 6 | `ryansobol/es6`   |

Add the following code to the `.eslintrc.js` file of an ECMAScript 5 project.

```js
module.exports = {
  extends: 'ryansobol/es5'
};
```

Or add the following code to the `.eslintrc.js` file of an ECMAScript 6 project.

```js
module.exports = {
  extends: 'ryansobol/es6'
};
```

## Overriding Rules

Customize any rule by overriding it in the `.eslintrc.js` file.

```js
module.exports = {
  extends: 'ryansobol/es5',

  rules: {
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
  }
};
```

## Supplemental configuration

Additionally, a project is linted by **any** of the following supplemental configurations.

| Supplement  | Module              |
|-------------|---------------------|
| browser     | `ryansobol/browser` |
| jQuery      | `ryansobol/jquery`  |
| Mocha       | `ryansobol/mocha`   |
| Node.js     | `ryansobol/node`    |
| React.js    | `ryansobol/react`   |

Add the following code to the `.eslintrc.js` file of an ECMAScript 5 project that's running in a browser.

```js
module.exports = {
  extends: [
    'ryansobol/browser',
    'ryansobol/es5'
  ]
};
```

Add the following code to the `.eslintrc.js` file of an ECMAScript 5 project that's running in a browser and using jQuery.

```js
module.exports = {
  extends: [
    'ryansobol/browser',
    'ryansobol/es5',
    'ryansobol/jquery'
  ]
};
```

Add the following code to the `.eslintrc.js` file of an ECMAScript 6 project that's running in Node.js.

```js
module.exports = {
  extends: [
    'ryansobol/es6',
    'ryansobol/node'
  ]
};
```

Add the following code to the `.eslintrc.js` file of an ECMAScript 6 project that's running in Node.js and using React.js.

```js
module.exports = {
  extends: [
    'ryansobol/es6',
    'ryansobol/node',
    'ryansobol/react',
  ]
};
```

## Alternative parsers

The default parser is [Espree][espree] but alternative parsers, like [babel-eslint][babel], can be specified in the `.eslintrc.js` file.

```js
module.exports = {
  extends: [
    'ryansobol/es6',
    'ryansobol/node',
    'ryansobol/react',
  ],

  parser: 'babel-eslint'
};
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
};
```

## Additional environments

Additional ESLint environments, like `commonjs`, can also be specified in the `.eslintrc.js` file.

```js
module.exports = {
  env: {
    commonjs: true
  },

  extends: [
    'ryansobol/es6',
    'ryansobol/browser',
    'ryansobol/react',
  ]
};
```

## Contributing

If you want to customize any of the rules for your own project, see the section on [overriding rules][overriding] to learn how.

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
[supplemental]: #supplemental-configuration
