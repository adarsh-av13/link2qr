<template>
  <transition name="fade">
    <div class="modal-container">
      <div v-show="isLoaded" class="modal">
        <span class="close-btn" @click="$emit('close')">x</span>
        <img :src="image" @load="loaded" />
        <h4>{{ url }}</h4>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    image: String,
    url: String
  },
  data() {
    return {
      isLoaded: false
    }
  },
  methods: {
    loaded() {
      this.isLoaded = true
    }
  }
}
</script>

<style scoped>
.modal-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(2, 2, 2, 0.4);
  z-index: 2;
}
.modal {
  position: absolute;
  width: 50%;
  height: 60%;
  left: 25%;
  top: 20%;
  background: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  justify-items: center;
  box-shadow: 0 30px 20px 0 rgba(0, 0, 0, 0.1);
}

.close-btn {
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 800;
  justify-self: end;
  margin-right: 5%;
  margin-top: 5%;
}

.close-btn:hover {
  transform: scale(1.2);
  transition: all 0.2s;
}
</style>
