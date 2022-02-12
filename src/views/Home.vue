<template>
  <div class="home">
    <Posters />
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
