<template>
  <div>
    <img src="../../../assets/back-arrow.png" @click="goHome" />
    <h1 v-if="isBoardAvailable">{{ boardTitle }}</h1>
    <p>Click a Note to Read or Edit</p>
  </div>
</template>

<script>
export default {
  computed: {
    boardTitle() {
      return this.$store.getters["boards/getBoardTitle"](this.$route.params.boardId);
    },
    isBoardAvailable() {
      return this.$store.getters["boards/isBoardDataLoaded"];
    },
  },
  methods: {
    goHome() {
      this.$router.push("/userhome");
    },
  },
  async beforeMount() {
    await this.$store.dispatch("boards/downloadBoards");
  },
};
</script>

<style scoped>
img {
  width: 60px;
  height: 60px;
  margin: 20px;
}

img:hover {
  background: rgba(255, 255, 255, 0.5);
}
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
  text-align: center;
  margin: 20px;
}

#home:hover {
  color: #f8da79;
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
</style>
