<template>
  <div>
    <div class="footer">
      <div class="nav">
        <h4>Nav</h4>
        <ul>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="address">
        <h4>Address</h4>
        <ul>
          <li>Plinkeplonkvägen 32</li>
          <li>888 81 Klonkberga</li>
        </ul>
      </div>
      <div class="social-media">
        <h4>Social Media</h4>
        <ul>
          <img src="../assets/logo-facebook.svg" alt="facebook" />
          <img src="../assets/logo-instagram.svg" alt="instagram" />
          <img src="../assets/logo-linkedin.svg" alt="linkedin" />
          <img src="../assets/logo-twitter.svg" alt="twitter" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.footer {
  background-color: #333333;
  width: 100%;
  height: 200px;
  color: aliceblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

li {
  list-style: none;
}
h4 {
  font-size: 1.4rem;
  padding: 0.5rem 0;
}

</style>
