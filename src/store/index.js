import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myUrls: []
  },
  mutations: {
    ADD_URL(state, newUrl) {
      state.myUrls.push(newUrl)
    },
    SET_URLS(state, myUrls) {
      state.myUrls = myUrls
    }
  },
  actions: {
    addNewUrl({ state, commit }, newUrl) {
      commit('ADD_URL', newUrl)
      localStorage.setItem('myUrls', JSON.stringify(state.myUrls))
    },
    setUrls({ commit }) {
      let myUrls = JSON.parse(localStorage.getItem('myUrls'))
      if (myUrls) commit('SET_URLS', myUrls)
    }
  },
  modules: {}
})
