<template>
  <div class="home">
    <router-link :to="'/SinglePoster/' + poster.id" v-for="poster in posters" :key="poster.id"><Posters :poster="poster"/></router-link>
   <!--  <Posters /> -->
  </div>
</template>

<script>
import Posters from "@/components/Posters.vue";

export default {
  components: { Posters },
  computed: {
    posters() {
      return this.$store.state.posters;
    },
  },
};
</script>

<style scoped>
* {
  color: white;
  text-decoration: none;
  margin: 0;
  background-color: black;
}
img {
  width: 10%;
}
</style>
