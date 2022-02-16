<template>
  <div>
    <section>
      <img
        :src="require('../assets/char-' + poster.id + '.png')"
        alt="poster image"
      />
      <p>{{ poster.job }}</p>
      <button>Oh, take my money!</button>
    </section>
  </div>
</template>

<script>
export default {
  props: ["poster"],
};
</script>

<style scoped>
* {
  background-color: black;
}
img {
  width: 300px;
}
section {
  display: inline-table;
  margin: 30px;
  
}
h1 {
  color: white;
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
</style>
