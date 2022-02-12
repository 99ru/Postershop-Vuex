<template>
  <div>
<section>
 <img :src="require('../assets/char-'+poster.id+'.png')" alt="poster image" height="300">
      <p>{{poster.job}}</p>
</section>
    

   <!--  <section v-for="poster in posters" :key="poster.id">
      <img :src="require(`../assets/char-${poster.id}.png`)" alt="Poster" />
      <h1>{{ poster.job }}</h1>
      <p>{{ poster.price }} sek</p>
      <button>ADD TO CART</button>
    </section> -->
  </div>

</template>

<script>
export default {
  props: ['poster'],
  /* computed: {
    posters() {
      return this.$store.state.posters;
    },
  }, */
};
</script>

<style scoped>
* {
  background-color: black;
}
img {
  width: 300px;
  padding-top: 40px;
}
section {
display: inline-table;
margin: 30px;
}
h1 {
  color: white;
}
button{
  background-color: #E83F57;
  color: white;
  border: none;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
}

</style>