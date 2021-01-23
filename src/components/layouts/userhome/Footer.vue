<template>
  <div>
    <p @click.prevent="logout">Logout</p>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch({
        type: "logout",
      });

      this.$router.push("/");
      return;
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
