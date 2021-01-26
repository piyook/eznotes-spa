<template>
  <div>
    <p v-if="IsLoginMode" class="Login-Title">Login</p>
    <p v-else class="Login-Title">Register</p>
    <login-form :is-login-mode="IsLoginMode"></login-form>
  </div>
  <router-link to="/register" v-if="IsLoginMode"
    >Not Registered Yet? Register Here</router-link
  >
  <router-link to="/login" v-else>Already Registered? Login Here</router-link>
</template>

<script>
import LoginForm from "../UI/LogForm";
export default {
  components: {
    LoginForm,
  },
  computed: {
    IsLoginMode() {
      if (this.$route.path == "/login") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style scoped>
.Login-Title {
  font-family: Roboto;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  color: #ffffff;
}

a {
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #fffbfb;
  transition: all 1s;
}

a:hover {
  color: #f2f20e;
}
</style>
