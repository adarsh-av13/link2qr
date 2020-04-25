<template>
  <div class="outer">
    <label class="boxer" for="myurl">
      <span class="contenter">Enter your url</span>
    </label>
    <input name="myurl" type="text" v-model="myurl" />
    <button @click="getMyQR">Get my QR</button>
    <div class="result" :class="{ hidden: isDead }">
      <h2>Here's your QR</h2>
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myurl: '',
      image: ''
    }
  },
  computed: {
    isDead() {
      return this.image == ''
    }
  },
  methods: {
    getMyQR() {
      this.image = 'https://qrtag.net/api/qr_6.png?url=' + this.myurl
      this.$store.dispatch('addNewUrl', {
        url: this.myurl,
        image: this.image
      })
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

input {
  background-color: rgb(230, 230, 230);
  border: none;
  border-bottom: 1px solid white;
}

input:focus {
  border-bottom: 3px solid #ffc558;
}

.result {
  justify-self: center;
}
img {
  justify-self: center;
}
.contenter {
  text-align: left;
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
