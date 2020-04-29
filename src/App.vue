<template>
  <div id="app">
    <NavBar />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: { NavBar },
  created() {
    this.$store.dispatch('setUrls')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: 'Avenir, Helvetica, Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
a {
  color: white;
  text-decoration: none;
}

.hidden {
  display: none;
}

#nprogress .bar {
  background: #ffa500 !important;
}
#nprogress .spinner-icon {
  border-top-color: #ffa500 !important;
  border-left-color: #ffa500 !important;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 0.5s;
}
</style>
