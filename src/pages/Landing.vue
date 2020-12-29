<template>
  <div><router-link to="/login">Login or Register</router-link></div>
  <landing-page></landing-page>
</template>

<script>
import LandingPage from "../components/layouts/LandingPage";
export default {
  components: {
    LandingPage,
  },
};
</script>
