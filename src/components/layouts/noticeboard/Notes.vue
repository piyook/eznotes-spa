<template>
  <section>
    <notice-board-card
      v-for="(note, key) in notes"
      :key="key"
      @click="openNote(key)"
      :class="note.colour"
    >
      <template v-slot:title>{{ note.title }}</template>
      <p>{{ note.date }}</p>
      <p id="noteText">{{ noteSummary(note.note) }}</p>
    </notice-board-card>

    <notice-board-card class="white" @click="newNote">
      <template v-slot:title> + Add New</template>
      <p>click to create a new note</p>
    </notice-board-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    openNote(noteId) {
      this.$router.push("/note/" + this.$route.params.boardId + "/" + noteId);
    },
    noteSummary(note) {
      if (note.length > 40) note = note.substring(0, 40) + " | ... more ";
      return note;
    },
    newNote() {
      let time = Date.now().toString();
      let newNoteId = +time.slice(-5);
      let isUniqueId = this.$store.dispatch({
        type: "checkUniqueNoteId",
        boardId: this.$route.params.boardId,
        noteId: newNoteId,
      });

      if (!isUniqueId) {
        this.newNote();
      }

      this.openNote(newNoteId);
    },
  },

  mounted() {
    this.notes = this.$store.getters.getBoardContent(this.$route.params.boardId);
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
</style>
