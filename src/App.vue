<template>
  <AppHeader />
  <AdviceBody v-if="advice" :advice="advice" @fetchAdvice="fetchAdvice" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import AdviceBody from '@/components/templates/AdviceBody.vue'
import AppHeader from '@/components/templates/AppHeader.vue'
import { useFetch, FetchResult } from '@/utilities/fetch'

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
// METHODS
const fetchAdvice = async (): Promise<void> => {
  const { data }: FetchResult<Advice> = await useFetch('https://api.adviceslip.com/advice')
  advice.value = data.value
}
//LIFE CYCLE HOOKS
onMounted(() => {
  fetchAdvice()
})
</script>
