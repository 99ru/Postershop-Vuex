<template>
  <div>
    <h1>Single Poster View</h1>
     <img :src="require(`../assets/char-${poster.id}.png`)" alt="Poster" />
      <h1>{{ poster.job }}</h1>
  </div>
</template>

<script>

export default {
computed: {
  
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