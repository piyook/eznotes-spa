<template>
  <div :class="boardColour">
    <img src="../../../assets/back-arrow.png" @click="goHome" />

    <h1 v-if="isBoardAvailable">
      <span class="smallText">NoticeBoard {{ boardNumber }} <br /> </span>{{ boardTitle }}
    </h1>
    <p>Click a Note to Read or Edit</p>
  </div>
</template>

<script>
export default {
  computed: {
    boardTitle() {
      return this.$store.getters["boards/getBoardTitle"](this.$route.params.boardId);
    },
    boardColour() {
      return this.$store.getters["boards/getBoardColour"](this.$route.params.boardId);
    },
    isBoardAvailable() {
      return this.$store.getters["boards/isBoardDataLoaded"];
    },
    boardNumber() {
      return this.$store.getters["boards/getBoardNumber"](this.$route.params.boardId);
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
.smallText {
  font-size: 24px;
  letter-spacing: 3px;
  color: white;
  width: 100%;
  padding: 0px;
  margin: 0px;
}

img {
  width: 60px;
  height: 60px;
  margin: 20px 0px 0px 20px;
}

img:hover {
  background: rgba(255, 255, 255, 0.5);
}
div {
  background-color: #d13838;
  color: #ffffff;
  width: 100%;
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

.yellow {
  background: #f8da79;
}

.blue {
  background: #75d9e9;
}

.green {
  background: #8bf599;
}

.pink {
  background: #fea1c9;
}

.red {
  background: #f65f6a;
}

@media only screen and (max-width: 750px) {
  h1 {
    font-size: 30px;
  }

  img {
    width: 40px;
    height: 40px;
    margin: 10px 0px 0px 10px;
  }
}
</style>
