<template>
  <div class="outer">
    <div class="inner" v-if="getMyUrls.length">
      <QRCard v-for="url in getMyUrls" :key="url.id" :QR="url" />
    </div>
    <p v-else>No QRs to Display</p>
  </div>
</template>

<script>
import QRCard from '@/components/QRCard.vue'
export default {
  components: {
    QRCard
  },
  computed: {
    getMyUrls() {
      return this.$store.getters.getMyUrls
    }
  }
}
</script>

<style scoped>
.outer {
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  align-items: center;
  row-gap: 5%;
  margin: 0 auto;
  width: 50%;
  height: 500px;
  padding: 50px;
  text-align: left;
  background: rgb(230, 230, 230); /*#ffc558;*/
}

.inner {
  width: 100%;
}
ul {
  padding: 0;
  list-style: none;
  width: 100%;
  margin: 0;
}

li {
  margin: 0;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  padding: 10px;
  background-color: #ffc558;
}
</style>
