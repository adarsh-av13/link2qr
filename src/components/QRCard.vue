<template>
  <transition name="move-up">
    <div class="qrcard">
      <h3>URL: {{ QR.url }}</h3>
      <span>{{ QR.date }}</span>
      <span class="dlt-btn" @click="removeUrl">X</span>
      <span @click="$emit('view', QR.image, QR.url)" class="view-btn">View</span>
    </div>
  </transition>
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
      this.$store.dispatch('removeUrl', this.QR.id)
    }
  }
}
</script>

<style scoped>
.qrcard {
  position: relative;
  border-radius: 5px;
  background: white;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.qrcard::before {
  position: absolute;
  left: 0%;
  top: 5%;
  content: '';
  width: 100%;
  height: 10%;
  background: #ffc558;
}

.qrcard::after {
  position: absolute;
  top: 0%;
  right: 2%;
  content: '';
  width: 4%;
  height: 20%;
  background: white;
  z-index: 0;
}

.dlt-btn {
  position: absolute;
  top: 5%;
  right: 3%;
  font-weight: 900;
  cursor: pointer;
  z-index: 1;
}

.dlt-btn:hover {
  transform: scale(1.2);
  transition: all 0.2s;
}

.view-btn {
  position: absolute;
  bottom: 5%;
  right: 5%;
  color: #ffbb3d;
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  cursor: pointer;
}

.view-btn:hover {
  transform: scale(1.2);
  transition: all 0.2s;
}

.move-up-enter {
  transform: translateY(100%);
}

.move-up-enter-to {
  transform: translateY(0%);
}

.move-up-enter-active {
  transition: all 0.2s;
}
</style>
