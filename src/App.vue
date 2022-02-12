<template>
  <div id="app">
    <Header />
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Cart/">Cart</router-link>
    </div>
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
  color: rgb(0, 0, 0);
  font-size: 2rem;
  font-weight: bold;
  margin: 10px;
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
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #3de07e;
}
</style>
