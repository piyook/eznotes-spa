<template>
  <load-spinner v-if="isLoading"></load-spinner>
  <section>
    <notice-board-card
      v-for="board in noticeboards"
      :key="board.id"
      @click="viewBoard(board.id)"
      :class="board.colour"
    >
      <template v-slot:title>{{ board.title }}</template>
      <p>{{ board.body }}</p>
      <img src="../../../assets/cog.png" @click.stop="boardSettings(board.id)" />
    </notice-board-card>

    <notice-board-card class="white" @click="newBoard">
      <template v-slot:title> + Add New</template>
      <p>click to create a new notice board</p>
    </notice-board-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      noticeboards: [],
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.isAppLoading;
    },
  },
  methods: {
    viewBoard(boardId) {
      this.$router.push("/noticeboard/" + boardId);
    },
    boardbody(body) {
      if (body.length > 40) body = body.substring(0, 40) + " | ... more ";
      return body;
    },
    boardSettings(boardId) {
      this.$router.push("/noticeboard/settings/" + boardId);
    },
    newBoard() {
      this.$router.push("/noticeboard/settings/new");
    },
  },
  async mounted() {
    await this.$store.dispatch("boards/downloadBoards");
    this.noticeboards = this.$store.getters["boards/getBoardSummary"];
  },
};
</script>

<style scoped>
section {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

p {
  font-size: 15px;
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

.white {
  background: #ffffff;
}
#noteText {
  font-weight: 600;
  margin: 5px;
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

img {
  width: 40px;
  height: 40px;
  padding: 5px;
  align-self: flex-end;
}

img:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
