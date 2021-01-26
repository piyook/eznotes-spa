<template>
  <button @click.prevent="signUp">Sign Me Up</button>
</template>

<script>
export default {
  methods: {
    signUp() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
button {
  width: 382px;
  height: 88px;
  margin: 30px 0px;
  border: none;
  border-radius: 5px;
  background-color: #f2f20e;
  color: black;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  color: #000000;
  transition: all 1.5s ease-in-out;
}

button:hover {
  background: black;
  color: #f2f20e;
}
</style>
