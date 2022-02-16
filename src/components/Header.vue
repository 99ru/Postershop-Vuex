<template>
  <header>
    
    <div class="menu-button">
      <img src="@/assets/navicon.svg" width="30px" />
    </div>

    <div class="ninja-image">
      <img src="@/assets/poster.png" height="300px" />
    </div>

  </header>
</template>

<script>
export default {
};
</script>

<style scoped>
* {
  margin: 0;
}
header {
  background-color: #3de07e;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.menu-button {
  position: absolute;
  top: 10px;
  left: 20px;
  cursor: pointer;
  margin: 10px;
}
.ninja-image {
  margin: -4px;
}
</style>
