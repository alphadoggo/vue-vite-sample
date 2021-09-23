# STARTUP JOURNAL

## AT ANY TIME AFTER FIRST STEP

- `yarn dev` (run the dev server)
- `yarn build` (build the deployment files into the \dist folder)
- `yarn server` (run a server hosting the dist production build)

## CREATE LINTING BASELINE

- `yarn create vite`
- `yarn`
- `yarn add -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin`
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
- `git config user.name "Paul Tiseo"`
- `git config user.email "ptiseo@metacodestudios.com"`
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
    <div class="block lg:inline">
      Inline for larger screens and block for others.
    </div>
    <div class="inline lg:block">
      Inline for larger screens and block for others.
    </div>
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

- `yarn add -D cypress @cypress/vue @cypress/vite-dev-server start-server-and-test`
- add `cypress.json` config file:

  ```json

  ```

- add `"test:e2e": "start-server-and-test dev http-get://localhost:3000 cypress"` and `"cypress": "cypress run"` to `scripts` in `package.json`
- add `"types": ["vite/client", "@types/jest", "cypress"]` to `tsconfig.json`

- add `"types": ["vite/client", "@types/jest", "cypress"]` to `tsconfig.json`

## REFERENCES USED

### General

<https://miyauchi.dev/posts/vite-vue3-typescript/>

### Cypress

<https://vuesome.dev/articles/add-testing-to-vite/>
<https://docs.cypress.io/guides/component-testing/framework-configuration#Vite-Based-Projects-Vue-React>
