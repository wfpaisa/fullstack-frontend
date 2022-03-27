# Boilerplate Vite React

# FITEC

## Build

- Could need quasar: `yarn global add @quasar/cli@latest`
- Install pnpm: `curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm`

## Development

### Style guide

https://vuejs.org/style-guide/

- Files names: `PascalCase`
- Folder names: `kebab-case`
- Variables: `camelCase`
- API: `camelCase`
- URL: `kebab-case`

### DEV (Compile and Hot-Reload for Development)

```sh
# Editor VSCode

# Recommended extensions : `Ctrl + Shift + P ` search: (show recommended extensions) install all
# Take over - in plugins search: `@builtin typescript` and disable in workspace: https://github.com/johnsoncodehk/volar/discussions/471

# Dependencies:
$ pnpm i

# Star:
$ pnpm dev

```

### PROD (Type-Check, Compile and Minify for Production)

```sh
$ pnpm run build
```

### TEST UNIT (Unit Tests with [Vitest](https://vitest.dev/))

```sh
$ pnpm run test:unit
```

### TEST EtoE (End-to-End Tests with [Cypress](https://www.cypress.io/))

```sh
$ pnpm run build
$ pnpm run test:e2e # or `$ pnpm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
$ pnpm run lint
```

### ENV (Environment Variables)

add to `.env` & `.env.example`, and types in `env.d.ts`
Note: Is necesary start the word with `VITE_...`

```js
import.meta.env.VITE_API_PATH;
```

## Adds

### Recoil (state management)
uses [Recoil](https://recoiljs.org/docs/introduction/getting-started) for state management



## Todo
[x] Vite.
[x] React.
[x] Typescript.
[ ] Enviroments.
[x] Linter.
[x] React router.
[x] State management.
[ ] Persist state management.
[ ] Tests
[ ] MaterialUI.
[ ] Meta Data (import { useMeta } from 'quasar';)

 



