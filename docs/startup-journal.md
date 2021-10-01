# STARTUP JOURNAL

## AT ANY TIME AFTER FIRST STEP

- `yarn dev` (run the dev server)
- `yarn build` (build the deployment files into the \dist folder)
- `yarn server` (run a server hosting the dist production build)

## CREATE LINTING BASELINE

- `yarn create vite`
- `yarn`
- `yarn add -D eslint eslint-plugin-vue vue-eslint-parser @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin`
- `yarn add -D husky lint-staged`
- `yarn add -D prettier eslint-plugin-prettier @vue/eslint-config-prettier`
- `yarn add -D stylelint stylelint-config-recommended stylelint-config-standard`
- added `.eslintrc`

  ```json
  {
    "root": true,
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
    },
    "extends": [
      "plugin:vue/vue3-recommended",
      "eslint:recommended",
      "@vue/typescript/recommended",
      "@vue/prettier",
      "@vue/prettier/@typescript-eslint"
    ],
    "parserOptions": {
      "ecmaVersion": 2021
    },
    "plugins": ["vue", "prettier"],
    "rules": {}
  }
  ```

- added `prettierrc`

  ```json
  {
    "singleQuote": true,
    "semi": false,
    "vueIndentScriptAndStyle": true,
    "trailingComma": "all"
  }
  ```

- added a `styleintrc`

```json
{
  "extends": ["stylelint-config-recommended", "stylelint-config-standard"]
}
```

- add the following to `package.json`:

  ```json
  "husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx,vue}": "eslint --fix",
    "*.{css,scss,vue}": "stylelint --fix",
    "*": "prettier -w -u"
  }
  ```

- modified `.tsconfig.json` as:

  ```json
  {
    "compilerOptions": {
      "target": "esnext",
      "useDefineForClassFields": true,
      "module": "esnext",
      "moduleResolution": "node",
      "strict": true,
      "jsx": "preserve",
      "sourceMap": true,
      "resolveJsonModule": true,
      "esModuleInterop": true,
      "lib": ["esnext", "dom"],
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      },
      "skipLibCheck": true
      "allowSyntheticDefaultImports": true,
      "plugins": [{ "name": "ts-vue-plugin" }]
    },
    "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
  }
  ```

- modified `vite.config.ts` to:

  ```json
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  import { resolve } from 'path'

  // https://vitejs.dev/config/
  export default defineConfig({
  resolve: {
      alias: {
      '@': resolve(__dirname, 'src'),
      },
  },
  plugins: [vue()],
  })
  ```

- added a `\.vscode\settings.json` with:

  ```json
  {
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    },
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "vetur.experimental.templateInterpolationService": true
  }
  ```

- `git init`
- `git config user.name "<first and last>"`
- `git config user.email "<appropriate@email.address>"`
- `git add -A`
- `git commit -m "configured baseline"`

## ADD PRIMEVUE

- `yarn add primevue primeicons primeflex`
- modify `main.ts`

  ```js
  import { createApp } from 'vue'
  import App from './App.vue'
  import PrimeVue from 'primevue/config'
  import Button from 'primevue/button'
  import Calendar from 'primevue/calendar'
  import InputText from 'primevue/inputtext'

  import 'primevue/resources/primevue.min.css'
  import 'primevue/resources/themes/fluent-light/theme.css'
  import 'primeicons/primeicons.css'
  import 'primeflex/primeflex.css'

  const app = createApp(App)
  app.use(PrimeVue)
  app.component('Calendar', Calendar)
  app.component('Button', Button)
  app.component('InputText', InputText)

  app.mount('#app')
  ```

- modify `App.vue`

  ```html
  <script setup lang="ts">
    import HelloWorld from '@/components/HelloWorld.vue'
  </script>

  <template>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div><Calendar /></div>
    <div><button label="Primary" /></div>
    <div><InputText /></div>
    <div><i class="pi pi-check"></i></div>
    <div class="grid">
      <div class="col">1</div>
      <div class="col">2</div>
      <div class="col">3</div>
    </div>
    <div class="inline mr-2">Displayed as inline.</div>
    <div class="inline">Also displayed as inline.</div>
    <div class="flex text-center">Displayed as a flexbox container.</div>
    <div
      class="
        fadeinleft
        animation-duration-2000 animation-iteration-infinite
        text-center
      "
    >
      Displayed as a flexbox container.
    </div>
    <div class="block lg:inline">Inline for larger screens and block for others.</div>
    <div class="inline lg:block">Inline for larger screens and block for others.</div>
    <div class="block">
      <div class="inline md:hidden">Visible on a Small Screen</div>
      <div class="hidden md:inline">Hidden on a Small Screen</div>
    </div>
    <div class="flex">
      <div class="mr-2 flex-order-3 md:flex-order-2">Item 1</div>
      <div class="mr-2 flex-order-1 md:flex-order-3">Item 2</div>
      <div class="mr-2 flex-order-2 md:flex-order-1">Item 3</div>
    </div>
  </template>

  <style>
    #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin-top: 60px;
    }

    body {
      margin: 0;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: var(--surface-a);
      font-family: var(--font-family);
      font-weight: 400;
      color: var(--text-color);
    }
  </style>
  ```

## ADDING CYPRESS AND JEST

### Cypress

- `yarn add -D cypress @cypress/vue @cypress/vite-dev-server start-server-and-test @cypress/webpack-dev-server webpack-dev-server`
- under `/tests`, create an `e2e` folder, then the following subfolders: fixtures, integrations, plugins, screenshots, support, videos
- add `cypress.json` config file:

  ```json
  {
    "baseUrl": "http://localhost:3000",
    "testFiles": "**/*.spec.{js,ts}",
    "fixturesFolder": "tests/e2e/fixtures",
    "integrationFolder": "tests/e2e/integration",
    "pluginsFile": "tests/e2e/plugins/index.ts",
    "screenshotsFolder": "tests/e2e/screenshots",
    "supportFile": "tests/e2e/support/index.ts",
    "videosFolder": "tests/e2e/videos"
  }
  ```

- add `"test:e2e": "start-server-and-test dev http-get://localhost:3000 cypress"` and `"cypress": "cypress run"` to `scripts` in `package.json`
- add `"types": ["vite/client", "@types/jest", "cypress"]` to `tsconfig.json`

### Jest

- `yarn add -D jest ts-jest @types/jest @vue/vue3-jest@27-alpha.1 @vue/test-utils@next`
- `npx ts-jest config:init`
- create test\unit folder
- add a sample `test\unit\sample1.spec.js` test (see repo)
- configure `jest.config.js` as:

  ```js
  /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['tests/unit'],
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
    },
    moduleFileExtensions: ['json', 'js', 'jsx', 'ts', 'tsx', 'vue'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  }
  ```

- add `"test:unit": "jest"` line to `package.json` in `scripts` property
- test run jest at command line: `yarn test:unit`

## VUEX

- `yarn add`

## REFERENCES USED

### General

<https://miyauchi.dev/posts/vite-vue3-typescript/>

### Cypress

<https://vuesome.dev/articles/add-testing-to-vite/>
<https://docs.cypress.io/guides/component-testing/framework-configuration#Vite-Based-Projects-Vue-React>
