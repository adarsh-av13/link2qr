<template>
  <div class="outer">
    <Modal
      v-show="modalActive"
      :image="modalImage"
      :url="modalUrl"
      @close="closeModal"
    />
    <div class="inner" v-if="getMyUrls.length">
      <QRCard
        v-for="url in getMyUrls"
        :key="url.id"
        :QR="url"
        @view="openModal"
      />
    </div>
    <div class="inner-else" v-else>
      <p>No QRs to Display</p>
    </div>
  </div>
</template>

<script>
import QRCard from '@/components/QRCard.vue'
import Modal from '@/components/Modal.vue'
export default {
  components: {
    QRCard,
    Modal
  },
  data() {
    return {
      modalImage: '',
      modalUrl: ''
    }
  },
  computed: {
    getMyUrls() {
      return this.$store.getters.getMyUrls
    },
    modalActive() {
      return !(this.modalImage === '')
    }
  },
  methods: {
    openModal(image, url) {
      this.modalImage = image
      this.modalUrl = url
    },
    closeModal() {
      this.modalImage = ''
      this.modalUrl = ''
    }
  }
}
</script>

<style scoped>
.outer {
  position: relative;
  margin: 0 auto;
  width: 50%;
  height: 84vh;
  text-align: left;
  background: #ffebc6;
  z-index: 0;
}
.inner-else {
  margin: 0;
  height: 10%;
  position: absolute;
  top: 45%;
  bottom: 45%;
  left: 0;
  right: 0;
  text-align: center;
}
.inner {
  width: 100%;
  height: 100%;
  display: grid;
  padding: 50px;
  row-gap: 5%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 0.1fr;
}
</style>
