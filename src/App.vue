<template>
  <MainNavbar />
  <router-view />
  <MainFooter/>
</template>

<script>
import MainNavbar from './components/MainNavbar.vue';
import MainFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: { MainNavbar, MainFooter }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  padding: 0;
}
</style>
