<template>
  <div class="outer">
    <Modal v-show="modalActive" :image="modalImage" :url="modalUrl" @close="closeModal" />
    <div class="inner" v-if="urls.length">
      <QRCard v-for="url in urls" :key="url.id" :QR="url" @view="openModal" @remove="removeUrl" />
      <div class="navigator">
        <template v-if="this.curPage !== 1">
          <router-link
            class="navigator-prev"
            :to="{ name: 'MyQRs', query: { page: curPage - 1 } }"
          >Prev</router-link>
        </template>
        <template v-if="!isLastPage">
          <router-link
            class="navigator-next"
            :to="{ name: 'MyQRs', query: { page: curPage + 1 } }"
          >Next</router-link>
        </template>
      </div>
    </div>
    <div class="inner-else" v-else>
      <p>No QRs to Display</p>
    </div>
  </div>
</template>

<script>
import QRCard from '@/components/QRCard.vue'
import Modal from '@/components/Modal.vue'
import { mapState } from 'vuex'
export default {
  components: {
    QRCard,
    Modal
  },
  data() {
    return {
      modalImage: '',
      modalUrl: '',
      urls: []
    }
  },
  mounted() {
    this.getMyUrls()
  },
  computed: {
    isLastPage() {
      return Math.ceil(this.myUrls.length / this.perPage) == this.curPage
    },
    curPage() {
      return parseInt(this.$route.query.page || 1)
    },
    modalActive() {
      return !(this.modalImage === '')
    },
    ...mapState(['myUrls', 'perPage'])
  },
  methods: {
    openModal(image, url) {
      this.modalImage = image
      this.modalUrl = url
    },
    closeModal() {
      this.modalImage = ''
      this.modalUrl = ''
    },
    getMyUrls() {
      const start = (this.curPage - 1) * this.perPage
      console.log(this.myUrls.length, this.myUrls)
      this.urls = this.myUrls.slice(start, start + this.perPage)
    },
    removeUrl(id) {
      this.$store.dispatch('removeUrl', id)
      this.getMyUrls()
    }
  }
}
</script>

<style scoped>
.outer {
  position: relative;
  margin: 0 auto;
  width: 100%;
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
  overflow: scroll;
}

.navigator {
  display: flex;
  justify-content: flex-end;
  font-weight: 800;
}

.navigator-prev {
  color: #ffa500 !important;
  margin-right: auto;
}

.navigator-prev:hover {
  border-bottom: 2px solid;
}
.navigator-next {
  color: #ffa500 !important;
}
.navigator-next:hover {
  border-bottom: 2px solid;
}
</style>
