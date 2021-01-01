<template>
  <section>
    <notice-board-card
      v-for="(board, key) in noticeboards"
      :key="key"
      @click="viewBoard(key)"
      :class="board.colour"
    >
      <template v-slot:title>{{ board.title }}</template>
      <p>{{ board.summary }}</p>
      <img src="../../../assets/cog.png" @click.stop="boardSettings(key)" />
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
  methods: {
    viewBoard(boardId) {
      this.$router.push("/noticeboard/" + boardId);
    },
    boardSummary(summary) {
      if (summary.length > 40) summary = summary.substring(0, 40) + " | ... more ";
      return summary;
    },
    boardSettings(boardId) {
      this.$router.push("/noticeboard/settings/" + boardId);
    },
    newBoard() {
      let time = Date.now().toString();
      let newBoardId = +time.slice(-5);
      let isUniqueId = this.$store.dispatch({
        type: "checkUniqueBoardId",
        boardId: this.$route.params.boardId,
      });

      if (!isUniqueId) {
        this.newBoard();
      }

      this.boardSettings(newBoardId);
    },
  },
  mounted() {
    this.noticeboards = this.$store.getters.getBoardSummary;
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
