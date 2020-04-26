<template>
  <nav>
    <h1>link2QR</h1>
    <router-link id="home" :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'MyQRs' }">My QRs</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  box-sizing: border-box !important;
  width: 50%;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
  box-sizing: content-box;
  padding: 0 25px;
  color: white;
  background: #ffa500;
}

h1 {
  margin-right: auto;
  font-family: 'Pacifico', cursive;
}

#home {
  margin: 20px;
  padding: 5px 15px;
  border-right: 1px solid white;
}
</style>
