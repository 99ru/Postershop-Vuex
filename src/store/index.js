import Vue from "vue";
import Vuex from "vuex";
import posters from "@/posters.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posters: [...posters],
    cart: [],
    quantity: 0,
  },


  mutations: {
    addToCart(state, poster) {
      // prevent duplicates and adds quantity
      if (!state.cart.includes(poster)) {
        state.cart.push(poster);
      } else {
        state.cart[state.cart.indexOf(poster)].amount++;
      }
    },
    incrementBtn(state, poster) {
      state.cart[state.cart.indexOf(poster)].amount++;
    },
    decrementBtn(state, poster) {
      state.cart[state.cart.indexOf(poster)].amount--;
    }
  },

  actions: {
    addToCart(context, poster) {
      context.commit("addToCart", poster);
    },
    incrementBtn(context, poster) {
      context.commit("incrementBtn", poster);
    },
    decrementBtn(context, poster) {
      context.commit("decrementBtn", poster);
    },
  },

  getters: {
    cart(state) {
      return state.cart;
    },
    cartTotal(state) {
      let total = 0;
      for(let item of state.cart) {
        total += (item.amount * item.price);
      }
      return total;
    }
  },

  modules: {

  },
});
