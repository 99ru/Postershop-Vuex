<template>
  <main>
    <section>
      <h1>Shopping cart</h1>
      <ul>
        <li v-for="poster in cart" :key="poster.id">
          <div class="cart-products">
            <img
              :src="require('../assets/char-' + poster.id + '.png')"
              width="200px"
            />
            <h2>{{ poster.job }}</h2>
            <p class="stock-amount">{{ poster.stock }} in stock</p>
          </div>
          <div class="select-amount">
            <p>QTY: {{ poster.amount }}</p>
            <button @click="decrementBtn(poster)">-</button>
            <button @click="incrementBtn(poster)">+</button>
          </div>
        </li>
      </ul>
    </section>
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
    ...mapGetters({ total: "total", cart: "cart" }),
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.699);
  color: #fff;
  padding: 30px;
  gap: 20px;
}
h1 {
  font-size: 2rem;
  margin-right: 60rem;
  margin-top: 20px;
}

ul {
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
button {
  background-color: #e83f57;
  border: none;
  color: white;
  font-size: 1.2rem;
  padding: 2px;
  border-radius: 5px;
  margin: 2px;
  width: 60px;
}
.stock-amount {
  color: #e83f57;
}
</style>
