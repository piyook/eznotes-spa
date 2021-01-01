<template>
  <div class="container-centre">
    <h1>EZ-Notes</h1>
    <div id="form">
      <login-layout></login-layout>
    </div>
  </div>
</template>

<script>
import LoginLayout from "../components/layouts/Login";

export default {
  components: {
    LoginLayout,
  },
};
</script>

<style scoped>
#form {
  background-color: #d13838;
  color: white;
  width: 800px;
  min-height: 500px;
  text-align: center;
}

h1 {
  font-size: 80px;
}
</style>
