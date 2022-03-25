const { resolve } = require('path');

module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "jest": true,
    "es6": true
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "rules": {
    // "no-console": "warn",
    // "no-eval": "error",
  }
}
