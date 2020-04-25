<template>
  <nav>
    <h1>link2QR</h1>
    <router-link :to="{ name: 'Home' }">Home</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  box-sizing: border-box !important;
  width: 50%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  box-sizing: content-box;
  padding: 0 10px;
  color: white;
  background: #ffa500;
}
</style>
