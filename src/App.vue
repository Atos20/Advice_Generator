<template>
  <AppHeader />
  <AdviceBody v-if="advice" :advice="advice" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import AdviceBody from '@/components/templates/AdviceBody.vue'
import AppHeader from '@/components/templates/AppHeader.vue'
import { useFetch } from '@/utilities/fetch'

export interface Advice {
  slip: Slip
}

export interface Slip {
  id: string
  advice: string
}

//DATA
const advice = ref<Advice | null>(null)

//METHODS

//LIFE CYCLE HOOKS
onMounted(async () => {
  const { data } = await useFetch('https://api.adviceslip.com/advice')
  advice.value = data.value as Advice
})
</script>
