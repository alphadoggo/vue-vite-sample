<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div><Calendar /></div>
  <div><Button label="Primary" /></div>
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
