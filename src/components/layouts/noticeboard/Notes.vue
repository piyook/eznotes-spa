<template>
  <section>
    <note-card
      v-for="note in notes"
      :key="note.id"
      @click="openNote(note.id)"
      :class="note.colour"
    >
      <template v-slot:title>{{ note.title }}</template>
      <p>{{ note.date }}</p>
      <p id="noteText">{{ noteSummary(note.body) }}</p>
    </note-card>

    <note-card class="white" @click="newNote">
      <template v-slot:title> + Add New</template>
      <p>click to create a new note</p>
    </note-card>
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
      if (note.length > 150) note = note.substring(0, 150) + " | ... more ";
      return note;
    },
    newNote() {
      this.openNote("new");
    },
  },

  async mounted() {
    await this.$store.dispatch({
      type: "notes/downloadNotes",
      boardId: this.$route.params.boardId,
    });
    this.notes = this.$store.getters["notes/getBoardContent"];
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
