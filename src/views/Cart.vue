<template>
  <main>
    <ul>
      <li v-for="poster in cart" :key="poster.id">
        <div class="cart-products">
          <img
            :src="require('../assets/char-' + poster.id + '.png')"
            width="200px"
          />
          <p>Quantity: {{ poster.amount }}</p>
          <button @click="decrementBtn(poster)">-</button>
          <button @click="incrementBtn(poster)">+</button>
        </div>
      </li>
    </ul>

    <div class="checkout">
      <h2>Total: {{ cartTotal }} SEK</h2>
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
  margin: 5px;
  padding: 5px;
  border-radius: 1px;
  cursor: pointer;
}
.checkout {
  border-radius: 10px;
  width: 20%;
  background-color: #e83f57;
}

</style>
