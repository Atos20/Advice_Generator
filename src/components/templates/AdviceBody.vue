<style scoped>
.main-body {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(218, 23%, 16%);
}

.card-container {
  background-color: hsl(217, 19%, 24%);
  border-radius: 25px;
  height: 60%;
  width: 90%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  align-items: center;
  position: relative;
}

.advice {
  text-transform: uppercase;
  color: hsl(150, 100%, 66%);
  letter-spacing: 0.2rem;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 800;
}

.content {
  font-weight: 800;
  font-size: 28px;
  line-height: 1.5em;
  margin: 20px 20px;
  padding: 10px;
  height: 100px;
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
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.btn-container {
  background-color: hsl(150, 100%, 66%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
  padding: 1em;
  position: absolute; /* 2 */
  top: 450px; /* 3 */
  transform: translate(0, -50%);
}

@media screen and (min-width: 375px) and (max-width: 750px) {
  .main-body {
    grid-area: 2/ 1/ 5/ 3;
    background-color: hsl(218, 23%, 16%);
  }

  .card-container {
    height: 465px;
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
</style>

<template>
  <div class="main-body">
    <div class="card-container">
      <h2 class="advice">Advice # {{ advice.slip.id }}</h2>
      <p class="content">"{{ advice.slip.advice }}"</p>
      <SvgMobileLine />
      <div class="btn-container"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Advice } from '@/App.vue'
import SvgMobileLine from '@/components/atoms/SvgIcon/SvgMobileLine.vue'
defineProps<{ advice: Advice }>()
</script>
