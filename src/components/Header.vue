<template>
  <header>
    <div class="menu-button">
      <img src="@/assets/navicon.svg" width="30px" height="30px" />
    </div>
    <div class="ninja-image">
      <img src="@/assets/poster.png"/>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
}
header {
  background-color: #3de07e;
  width: 100%;
  height: 608px;
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
}
</style>