<template>
  <main>
    <ul>
      <li v-for="poster in cart" :key="poster.id">
        <div class="cart-products">
          <img
            :src="require('../assets/char-' + poster.id + '.png')"
            width="200px"
          />
          <button @click="decrementBtn(poster)">-</button>
          <button @click="incrementBtn(poster)">+</button>
           <p>QNTY: {{ poster.amount }}</p>
        </div>
      </li>
    </ul>
    <div class="checkout">
      <p>Total: {{ cartTotal }} SEK</p>
      <button>Checkout</button>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    decrementBtn(poster) {
      this.$store.dispatch("decrementBtn", poster);
    },
    incrementBtn(poster) {
      this.$store.dispatch("incrementBtn", poster);
    },
  },
  computed: {
    ...mapGetters({ cartTotal: "cartTotal", cart: "cart" }),
    /*  cart() {
      return this.$store.state.cart; 
    }, */
  },
};
</script>

<style scoped>
.cart-products {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgb(255, 255, 255);
  margin: 10px;
}
ul {
  list-style: none;
}
.stock-amount {
  color: #e83f57;
}
button {
  background-color: #e83f57;
  color: white;
  border: none;
  margin: 2px;
  padding: 5px;
  border-radius: 1px;
  cursor: pointer;
}
.checkout {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;
 margin-right: 5rem;
  color: white;
  font-size: 1.2rem;
}
</style>
