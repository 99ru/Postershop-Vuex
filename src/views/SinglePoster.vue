<template>
  <div>

      <img :src="require('../assets/char-'+poster.id+'.png')" alt="poster image" height="300px">
      <p>{{poster.motif}}</p>
      <p>Price: {{poster.price}} kr</p>
     
    
   <!--  <h1>Single Poster View</h1>
     <img :src="require(`../assets/char-${poster.id}.png`)" alt="Poster" />
      <h1>{{ poster.job }}</h1> -->

  </div>
</template>

<script>

export default {
computed: {
  poster() {
    
     return this.$store.state.posters.find(poster => poster.id == this.$route.params.id)
  },
}
};
</script>

<style scoped>
* {
  background-color: black;
}
h1 {
  color: white;
}
img {
  width: 500px;
}
</style>