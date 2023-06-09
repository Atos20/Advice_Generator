<style scoped>
.main-body {
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(218, 23%, 16%);
}

.card-container {
  background-color: hsl(217, 19%, 24%);
  border-radius: 25px;
  width: 90%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  align-items: center;
  position: relative;
  /* min-width: 750px;
  min-height: 470px; */
}

.advice {
  text-transform: uppercase;
  color: hsl(150, 100%, 66%);
  letter-spacing: 0.3rem;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 800;
}

.content {
  font-weight: 800;
  font-size: 30px;
  font-family: Manrope;
  line-height: 1.5em;
  margin: 20px 20px;
  padding: 10px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reset-btn {
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.btn-container:focus,
.btn-container:focus-visible {
  outline: none;
  border: none;
}

.btn-container {
  background-color: hsl(150, 100%, 66%);
  width: 87px;
  height: 87px;
  border-radius: 50%;
  margin-top: 10px;
  padding: 1em;
  position: absolute; /* 2 */
  top: 450px; /* 3 */
  transform: translate(0, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: glow 3s infinite alternate !important;
}

.btn-container:hover {
  box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 30px hsl(150, 100%, 66%), 0 0 40px hsl(150, 100%, 66%),
    0 0 50px hsl(150, 100%, 66%);
}

.inner-btn {
  background-color: black;
  height: 35px;
  width: 35px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.dot-box {
  height: 15%;
  width: 70%;
  display: flex;
  justify-content: space-around;
}

.dot {
  background-color: hsl(150, 100%, 66%);
  height: 5px;
  width: 5px;
  border-radius: 50%;
}

@media screen and (min-width: 750px) and (max-width: 1440px) {
  .card-container {
    height: 465px;
  }
}

@media screen and (min-width: 375px) and (max-width: 750px) {
  .main-body {
    grid-area: 6/ 1/ 7/ 3;
    background-color: hsl(218, 23%, 16%);
  }

  .card-container {
    height: 465px;
  }

  .advice {
    font-size: 15px;
  }
}

@media screen and (max-width: 375px) {
  .card-container {
    height: 465px;
  }
  .advice {
    font-weight: 600;
    font-size: 20px;
  }
}

@media screen and (min-width: 1440px) {
  .card-container {
    height: 465px;
  }
  .advice {
    font-weight: 600;
    font-size: 20px;
  }
}

@media (hover: none) {
  /* we want to add the hover effect for mobile view */
  @keyframes glow {
    from {
      box-shadow: 0 0 10px -10px #aef4af;
    }
    to {
      box-shadow: 0 0 10px 10px #aef4af;
    }
  }
}
</style>

<template>
  <div class="main-body" data-testid="advice-container">
    <div class="card-container">
      <h2 class="advice" data-testid="advice-id">Advice # {{ advice.slip.id }}</h2>
      <p class="content" data-testid="advice-content">"{{ advice.slip.advice }}"</p>
      <SvgMobileLine v-if="windowWidth < 750" data-testid="mobile-line" />
      <SvgDesktopLine v-else data-testid="desktop-line" />
      <button @click="onHandleAdvice" class="btn-container glow" ref="btnRef" data-testid="fetch-btn">
        <div class="inner-btn">
          <div class="dot-box">
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div class="dot-box">
            <div class="dot"></div>
          </div>
          <div class="dot-box">
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue'

import { Advice } from '@/App.vue'
import SvgDesktopLine from '@/components/atoms/SvgIcon/SvgDesktopLine.vue'
import SvgMobileLine from '@/components/atoms/SvgIcon/SvgMobileLine.vue'

defineProps<{ advice: Advice }>()
const emit = defineEmits(['fetchAdvice'])

//DATA
const btnRef = ref<HTMLDivElement | null>(null)
const windowWidth = ref<number>(window.innerHeight)

//METHODS
const onHandleAdvice = () => {
  emit('fetchAdvice')
}

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

//LYFE CICLE
onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
</script>
