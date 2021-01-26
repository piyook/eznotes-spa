<template>
  <div>
    <p>{{ userEmail }}</p>
    <h1>Your NoticeBoards</h1>
  </div>
</template>

<script>
export default {
  computed: {
    userEmail() {
      return this.$store.getters.getUser.email;
    },
  },
};
</script>

<style scoped>
div {
  background-color: #d13838;
  color: #ffffff;
}

h1 {
  font-size: 60px;
  font-weight: 300;
  text-align: center;
}

p {
  text-align: right;
  padding: 10px;
  margin-right: 50px;
  font-size: 16px;
  font-weight: 300;
  font-style: italic;
  color: lightgrey;
}

* {
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-block-start: 0;
  padding-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
}

@media only screen and (max-width: 750px) {
  h1 {
    font-size: 40px;
  }
}
</style>
