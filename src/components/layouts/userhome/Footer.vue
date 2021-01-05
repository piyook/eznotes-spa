<template>
  <div>
    <p @click="logout">Logout</p>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch({
        type: "changeLogStatus",
        isLoggedIn: false,
      });

      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
div {
  width: 100vw;
  background-color: #d13838;
  color: #ffffff;
}
p {
  text-align: right;
  margin-right: 40px;
  padding: 10px;
  font-size: 25px;
  font-weight: 300;
}

p:hover {
  color: #f2f20e;
  cursor: pointer;
}
</style>
