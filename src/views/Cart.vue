<template>
  <main>
    <h1>Shopping cart</h1>
    <section>
      <ul>
        <li v-for="poster in cart" :key="poster.id">
          <div class="cart-products">
            <img
              :src="require('../assets/char-' + poster.id + '.png')"
              width="100px"
            />
            <h3>{{ poster.job }} sek</h3>
            <p>{{ poster.amount }} in stock</p>
          </div>
          <div class="amount">
            
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.644);
  color: #fff;
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
</style>
