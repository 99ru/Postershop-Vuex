<template>
  <div class="container">
    <section class="single-card">
      <img
        :src="require('../assets/char-' + poster.id + '.png')"
        alt="poster image"
      />
      <p>{{ poster.job }}</p>
      <button @click="addToCart(poster)">ADD TO CART</button>
    </section>

    <div class="info">
      <h3>{{ poster.price }} sek</h3>
      <p>{{ poster.amount }} in stock</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart(poster) {
      this.$store.dispatch('addToCart', poster);
    }
  },
  computed: {
    poster() {
      return this.$store.state.posters.find(
        (poster) => poster.id == this.$route.params.id
      );
    },
  },
};
</script>

<style scoped>
* {
  background-color: rgb(3, 3, 3);
  color: white;
  font-size: 2rem;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.info {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

}
h1 {
  color: white;
}
img {
  width: 700px;
 
}
.single-card {
  display: inline-table;
  margin: 30px;
}
button {
  background-color: #e83f57;
  color: white;
  border: none;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: green;
}

</style>
