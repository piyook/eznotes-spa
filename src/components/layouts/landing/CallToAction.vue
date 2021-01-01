<template>
  <div id="callBox">
    <div id="actionBox">
      <h1>Sign up for Free today</h1>
      <p>Try It Now for Free and Start Making your First Notes !!</p>
      <signup-button></signup-button>
    </div>
  </div>
</template>

<script>
import SignupButton from "../../UI/SignupButton";
export default {
  components: {
    SignupButton,
  },
};
</script>

<style scoped>
#callBox {
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 80px;
}

#actionBox {
  border: black 1px solid;
  margin-bottom: 80px;
}

h1 {
  background-color: #d13838;
  color: #ffffff;
  font-size: 60px;
  font-weight: 300;
  padding: 0px 80px;
}
</style>
