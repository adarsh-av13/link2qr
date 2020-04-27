import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myUrls: [],
    perPage: 3
  },
  mutations: {
    ADD_URL(state, newUrl) {
      state.myUrls.push(newUrl)
    },
    SET_URLS(state, myUrls) {
      state.myUrls = myUrls
    },
    REMOVE_URL(state, id) {
      state.myUrls = state.myUrls.filter(url => url.id !== id)
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
    },
    removeUrl({ commit, state }, id) {
      commit('REMOVE_URL', id)
      localStorage.setItem('myUrls', JSON.stringify(state.myUrls))
    }
  },
  getters: {
    getMyUrls(state) {
      console.log(state.myUrls)
      return state.myUrls
    }
  },
  modules: {}
})
