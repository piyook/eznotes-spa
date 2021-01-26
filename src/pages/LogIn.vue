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
  text-align: center;
  padding: 50px;
}

h1 {
  font-size: 80px;
}
</style>
