<template>
  <div class="container-centre">
    <h1>EZ-Notes</h1>
    <div id="form">
      <login-page></login-page>
    </div>
  </div>
</template>

<script>
import LoginPage from "../components/layouts/LoginPage";

export default {
  components: {
    LoginPage,
  },
};
</script>

<style scoped>
#form {
  background-color: #d13838;
  color: white;
  width: 800px;
  min-height: 450px;
  text-align: center;
}

h1 {
  font-size: 80px;
}
</style>
