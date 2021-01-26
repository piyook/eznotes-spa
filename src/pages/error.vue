<template>
  <div id="container">
    <div id="note">
      <h1>Sorry, <br />There Was An <br />Error Connecting To The Server</h1>
      <br />
      Please Try Again Later
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("/");
      return;
    }, 3000);
  },
};
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

#note {
  background-color: grey;
  transform: rotate(-20deg);
  color: black;
  text-align: center;
  font-size: 28px;
  box-shadow: 5px 5px 5px #000000;
  padding: 30px;
}
</style>
