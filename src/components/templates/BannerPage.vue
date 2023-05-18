<template>
  <div class="banner-container">
    <h1 class="banner">
      {{ banner }}
    </h1>
  </div>
  <a
    v-if="scrollY < 700"
    class="ca3-scroll-down-link ca3-scroll-down-arrow"
    data-ca3_iconfont="ETmodules"
    data-ca3_icon=""
    @click="scrollToBottom"
  ></a>
</template>

<script setup lang="ts">
defineProps<{ banner: string; scrollY: number }>()

//METHODS
const scrollToBottom = () => {
  window.scroll({ top: 813, left: 0, behavior: 'smooth' })
}
</script>

<style>
.banner-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 375px) {
  .card-container {
    height: 465px;
    background-color: #aef4af;
    grid-area: 1/ 1/ 4/ 3;
  }
}
.banner {
  --interval: 1s;
  display: block;
  text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2), 0 0 40px var(--color3), 0 0 80px var(--color4);
  will-change: filter, color;
  filter: saturate(60%);
  animation: flicker steps(100) var(--interval) 1s infinite;
}
.banner {
  color: lightyellow;
  --color1: rgb(55, 255, 0);
  --color2: hsl(119, 67%, 59%);
  --color3: hsl(150, 100%, 66%);
  --color4: hsl(158, 100%, 66%);
  font-family: gruppo;
  font-size: 3rem;
  line-height: 5rem;
  width: 50%;
}
@keyframes flicker {
  50% {
    color: white;
    filter: saturate(200%) hue-rotate(20deg);
  }
}

.ca3-scroll-down-arrow {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
  background-size: contain;
  background-repeat: no-repeat;
}

.ca3-scroll-down-link {
  cursor: pointer;
  height: 60px;
  width: 80px;
  margin: 0px 0 0 -40px;
  line-height: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  color: #fff;
  text-align: center;
  font-size: 70px;
  z-index: 100;
  text-decoration: none;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);

  -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
  -moz-animation: ca3_fade_move_down 2s ease-in-out infinite;
  animation: ca3_fade_move_down 2s ease-in-out infinite;
}

/*animated scroll arrow animation*/
@-webkit-keyframes ca3_fade_move_down {
  0% {
    -webkit-transform: translate(0, -20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
}
@-moz-keyframes ca3_fade_move_down {
  0% {
    -moz-transform: translate(0, -20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -moz-transform: translate(0, 20px);
    opacity: 0;
  }
}
@keyframes ca3_fade_move_down {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 20px);
    opacity: 0;
  }
}
</style>
