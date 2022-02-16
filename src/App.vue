<template>
  <div id="app">
    <Header />
    <router-link to="/"> Home </router-link>
    <router-link to="/Cart/"> Cart </router-link>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<style>
* {
  margin: 0;
}
a {
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
}
a:hover {
  color: #3de07e;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(0, 0, 0);
}
</style>
