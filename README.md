# eslint-config-shopify

This package provides Shopify's `.eslintrc` as an extensible shared config.

## Usage

Install this module (it should install its dependent modules):

```shell
npm install --save-dev eslint-config-airbnb
```

then, extend this config in your own `.eslintrc`:

```json
{
  "extends": "shopify"

  // your overrides and extensions
}
```

## Improvements

If adding complex linting changes (for example, those requiring regular expressions), consider adding tests. Tests can be run using `npm test`.

## Changelog

### 1.0.0

Initial commit.
