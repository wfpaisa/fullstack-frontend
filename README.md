# FullStack Frontend (Vite, React)


## Build
- Install pnpm: `curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm`

```bash
# Enviroment, and edit .env
cp .env.example .env

$ pnpm build
```

## Development
uses: pnpm: `curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm`


### Style guide

https://vuejs.org/style-guide/

- Folder/File names: `kebab-case`
- Folder/File component names: `PascalCase`
- Variables: `camelCases`
- API: `camelCase`

### DEV (Compile and Hot-Reload for Development)

```sh
# Editor VSCode

# Recommended extensions : `Ctrl + Shift + P ` search: (show recommended extensions) install all
# Take over - in plugins search: `@builtin typescript` and disable in workspace: https://github.com/johnsoncodehk/volar/discussions/471

# Enviroment, and edit .env
cp .env.example .env

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

### Zustand (State management)
State management: [zustand](https://github.com/pmndrs/zustand)


### React helmet (Meta tags)
uses [React-helmet](https://github.com/staylor/react-helmet-async) for meta tags.

```js
import {Helmet} from "react-helmet";
<Helmet>
    <meta charSet="utf-8" />
    <title>My Title</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
```

### Cypress (E2E testing)
uses [Cypress](https://www.cypress.io/) for E2E testing.

Directory: `test/cypress` 

### Alerts
https://react-hot-toast.com/

```js
import { Toaster } from "react-hot-toast"
// variant could be success, error
toast.success("Here is your toast.")
```

### Markdown

```jsx
import ReactMarkdown from "react-markdown"
// 
<ReactMarkdown transformImageUri={(uri) => `${import.meta.env.VITE_API}${uri}`}>
  {post.attributes.shortDescription}
</ReactMarkdown>
```

### GraphQL
https://www.apollographql.com/docs/react/data/queries


### Forms
Form validatios: https://react-hook-form.com/get-started#Quickstart
Validations: https://github.com/jquense/yup

## Todo
[x] Vite.
[x] React.
[x] Typescript.
[x] Enviroments.
[x] Linter.
[x] React router.
[x] State management.
[x] Persist state management.
[x] Meta Data.
[x] Tests.
[x] MaterialUI.
[x] Black mode.
[x] Graphql.
[x] Forms validation.



