<template>
  <div class="container">
    <section class="single-card">
      <img
        :src="require('../assets/char-' + poster.id + '.png')"
        alt="poster image"
      />
      <h2>{{ poster.job }}</h2>
      <p>{{ poster.price }} SEK</p>
      <button @click="addToCart(poster)">ADD TO CART</button>
    </section>

    <div class="info">
      <h3>{{ poster.stock }} in stock</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit
        voluptas beatae, fuga dolor obcaecati molestiae expedita consequuntur
        laudantium ullam! Accusantium optio ipsum consequuntur? Dolor a quis hic
        ab? In assumenda tempora odit dicta obcaecati? Qui velit dolore sunt
        quos .
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart(poster) {
      this.$store.dispatch("addToCart", poster);
    },
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
.info p {
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.5;
  width: 400px;
}
h1 {
  color: white;
}
p {
  font-size: 1rem;
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

h3 {
  font-size: 1.2rem;
  color: #e83f57;
}
</style>
