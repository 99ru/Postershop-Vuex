<template>
  <div class="home">
    <section>
      <router-link
        :to="'/SinglePoster/' + poster.id"
        v-for="poster in posters"
        :key="poster.id"
        ><Posters :poster="poster"
      /></router-link>
    </section>
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
  color: rgb(252, 252, 252);
  text-decoration: none;
  margin: 0;
  background-color: black;
}
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
}

</style>
