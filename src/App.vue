<template>
  <div>
    <header>
      <Navbar/>
    </header>
    <Dental-Tab/>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'
import DentalTab from './components/tabs/Dental.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    DentalTab
  },
  setup() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}
</style>
