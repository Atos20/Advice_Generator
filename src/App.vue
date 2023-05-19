<template>
  <BannerPage :banner="banner" :scrollY="scrollY" />
  <AdviceBody v-if="advice" :advice="advice" @fetchAdvice="fetchAdvice" />
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

import AdviceBody from '@/components/templates/AdviceBody.vue'
import BannerPage from '@/components/templates/BannerPage.vue'
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
const banner = ref<string>('When in doubt, ask for advice - but trust your gut to make the final decision.')
const scrollY = ref<number>(0)

// METHODS
const fetchAdvice = async (): Promise<void> => {
  const { data }: FetchResult<Advice> = await useFetch('https://api.adviceslip.com/advice')
  advice.value = data.value
}

const updateScrollY = (e: Event) => {
  scrollY.value = (e.target as Document).documentElement.scrollTop
}

const scrollToTop = () => {
  nextTick(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    scrollY.value = 0
  })
}

//LIFE CYCLE HOOKS
onMounted(() => {
  fetchAdvice()
  scrollToTop()
  window.addEventListener('scroll', updateScrollY)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollY)
})
</script>
