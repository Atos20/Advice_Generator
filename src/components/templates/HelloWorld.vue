<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <h3>Store counter: {{ counterStore.count }}</h3>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()

defineProps<{ msg: string }>()

//DATA
const count = ref(0)

//COMPUTED

//METHODS

//LIFE CYCLES AKA WATCH
</script>
