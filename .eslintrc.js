const { resolve } = require('path');

module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "jest": true,
    "es6": true
  },
  "plugins": [
    "prettier",
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended"
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
