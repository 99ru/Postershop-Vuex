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
     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptas beatae, fuga dolor obcaecati molestiae expedita consequuntur laudantium ullam! Accusantium optio ipsum consequuntur? Dolor a quis hic ab? In assumenda tempora odit dicta obcaecati? Qui velit dolore sunt quos vero, modi culpa impedit sequi minima laudantium aliquid ea distinctio fugiat dolorum doloribus sed. Quo voluptatum nobis excepturi. Optio odio id veritatis molestiae dolores. In eos quibusdam harum ratione, numquam quod accusamus asperiores nisi! Optio sit vero similique quod aspernatur maxime iure, excepturi mollitia, rem provident cumque temporibus consequatur corporis. Quod, expedita. Neque beatae consequatur molestias vero, in amet laborum. </p>
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
.info p {
font-size: 1.2rem;
line-height: 1.5;
width: 400px;
}
h1 {
  color: white;
}
p{
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


</style>
