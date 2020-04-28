<template>
  <div class="outer">
    <label class="boxer" for="myurl">
      <span class="contenter">Enter your url</span>
    </label>
    <input name="myurl" type="text" placeholder="https://" v-model="myurl" />
    <button class="search-btn" @click="getMyQR" :disabled="isEmpty">Get my QR</button>
    <transition name="fade">
      <div v-show="isLoaded" class="result" :class="{ hidden: isDead }">
        <h2>Here's your QR</h2>
        <img :src="image" @load="loaded" />
      </div>
    </transition>
  </div>
</template>

<script>
import NProgress from 'nprogress'
export default {
  data() {
    return {
      myurl: '',
      image: '',
      isLoaded: false
    }
  },
  computed: {
    isDead() {
      return this.image == ''
    },
    isEmpty() {
      return this.myurl == ''
    }
  },
  methods: {
    getMyQR() {
      let newImage = 'https://qrtag.net/api/qr_6.png?url=' + this.myurl
      if (newImage === this.image) return
      this.isLoaded = false
      NProgress.start()
      this.image = newImage
      let id = Math.floor(Math.random() * 1000000)
      let date = new Date()
      date = date.toString().split(' ')
      let mydate = date[1] + ' ' + date[2] + ' ' + date[3]
      this.$store.dispatch('addNewUrl', {
        id: id,
        url: this.myurl,
        image: this.image,
        date: mydate
      })
    },
    loaded() {
      this.isLoaded = true
      NProgress.done()
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
  width: 100%;
  height: 84vh;
  padding: 50px;
  text-align: left;
  background: #ffebc6;
}

input {
  background-color: white;
  font-size: 1rem;
  padding: 0.2rem;
  border: 3px solid white;
  border-radius: 5px;
}

label {
  font-weight: 800;
}
.result {
  justify-self: center;
}
img {
  justify-self: center;
  display: block;
  margin-bottom: 1rem;
}
.contenter {
  text-align: left;
}

button {
  font-size: 1rem;
  padding: 0.5rem;
  background-color: white;
  border: 2px solid white;
  border-radius: 5px;
}

.search-btn {
  justify-self: center;
}

.dwnld-btn {
  display: block;
  margin: 0 auto;
}
/* .outer label {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
} */
/* .outer label::after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  border-bottom: 5px solid #ffc558;
} */
</style>
