import Vue from 'vue'
import Vuex from 'vuex'
import posters from '@/posters.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posters: [...posters],
    cart: [], 
  },
  mutations: {
    addToCart(state, poster) {
      state.cart.push(poster)
    }
  },
  actions: {
    addToCart(context, poster) {
      context.commit('addToCart', poster)
    }
  },
  getters: {
  
  },
  modules: {
  }
})
