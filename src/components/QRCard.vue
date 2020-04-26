<template>
  <div id="qrcard">
    <h2>URL: {{ QR.url }}</h2>
    <span>{{ QR.date }}</span>
    <span class="dlt-btn" @click="removeUrl">x</span>
  </div>
</template>

<script>
export default {
  props: {
    QR: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeUrl() {
      console.log(this.QR.id)
      this.$store.dispatch('removeUrl', this.QR.id)
    }
  }
}
</script>

<style scoped>
#qrcard {
  position: relative;
  border: 2px solid #f7a100;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 1.5rem;
}

.dlt-btn {
  position: absolute;
  top: 5%;
  right: 2.5%;
  font-weight: 900;
  cursor: pointer;
}
</style>
