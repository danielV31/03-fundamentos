<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <Counter tittle="entraron" :start="10" /> -->
  <!-- <Counter tittle="salieron" /> -->
  <Indecision />
</template>

<script>
// import Counter from '@/components/Counter.vue'
import Indecision from './components/indecision.vue'
export default {
  name: 'App',
  components: {
    // Counte,
    Indecision,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
