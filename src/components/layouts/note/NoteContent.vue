<template>
  <div id="page" :class="noteBackgroundColour">
    <div id="operationBar">
      <img src="../../../assets/back-arrow.png" @click="goBack" />
      <img src="../../../assets/save.png" @click="save" />
      <img src="../../../assets/trashcan.png" @click="deleteNote" />
    </div>
    <form>
      <div id="title">
        <label for="noteTitle">Title:</label>
        <input
          type="text"
          id="noteTitle"
          aria-describedby="Note Title"
          v-model.trim="title"
          placeholder="Enter a Title"
        />
      </div>
      <div id="date">
        <p>Date Created: {{ date }}</p>
      </div>

      <div id="note">
        <textarea
          v-model.trim="body"
          id="noteData"
          aria-describedby="Note Body"
          placeholder="Enter Your Note"
          rows="8"
          cols="80"
        />
      </div>

      <div id="noteColour">
        <div id="noteLabel">Note Colour</div>
        <div
          @click="colourSelect('yellow')"
          class="yellow colorBox"
          :class="isActiveColour('yellow')"
        ></div>
        <div
          @click="colourSelect('blue')"
          class="blue colorBox"
          :class="isActiveColour('blue')"
        ></div>
        <div
          @click="colourSelect('green')"
          class="green colorBox"
          :class="isActiveColour('green')"
        ></div>
        <div
          @click="colourSelect('pink')"
          class="pink colorBox"
          :class="isActiveColour('pink')"
        ></div>
        <div
          @click="colourSelect('red')"
          class="red colorBox"
          :class="isActiveColour('red')"
        ></div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noteContent: {},
      title: "",
      date: "",
      body: "",
      chosenNoteColour: "",
      isNewNote: false,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    save() {
      this.noteContent.colour = this.chosenNoteColour;
      this.noteContent.title = this.title;
      this.noteContent.note = this.body;
      this.noteContent.date = this.date;

      this.$store.dispatch({
        type: "saveNote",
        boardId: this.$route.params.boardId,
        noteId: this.$route.params.noteId,
        newNote: this.noteContent,
      });

      this.$router.push("/noticeboard/" + this.$route.params.boardId);
    },
    deleteNote() {
      let approveDelete = prompt(
        "deleting note " + this.$route.params.noteId + ": Type 'YES' or 'NO'"
      );

      if (approveDelete == "YES") {
        this.$store.dispatch({
          type: "deleteNote",
          boardId: this.$route.params.boardId,
          noteId: this.$route.params.noteId,
        });
        this.$router.push("/noticeboard/" + this.$route.params.boardId);
      }
    },
    colourSelect(colour) {
      this.chosenNoteColour = colour;
    },
    isActiveColour(colour) {
      if (this.chosenNoteColour == colour) {
        return { current: true };
      } else return { current: false };
    },
  },
  computed: {
    noteBody() {
      return this.noteContent.note;
    },
    noteBackgroundColour() {
      return this.chosenNoteColour;
    },
  },
  mounted() {
    let board = this.$route.params.boardId;
    let note = +this.$route.params.noteId;

    this.noteContent = this.$store.getters.getNoteContent(board, note);

    this.chosenNoteColour = this.noteContent.colour;
    this.title = this.noteContent.title;
    this.body = this.noteContent.note;
    this.date = this.noteContent.date;
    if (this.chosenNoteColour == "new") {
      this.chosenNoteColour = "yellow";
      this.isNewNote = true;
      var utc = new Date().toUTCString();
      this.date = utc;
    }
  },
};
</script>

<style scoped>
#page {
  border: 1px solid black;
  margin: 60px;
}

#back:hover {
  color: #ffffff;
}
button:hover {
  border: 1px solid black;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
}

div {
  margin-top: 30px;
}

textarea {
  resize: none;
  outline: none;
  width: 100%;
  height: 200px;
}

#title label {
  font-size: 50px;
  font-weight: 300;
  margin-right: 30px;
}

#title input {
  font-size: 40px;
}

#note textarea {
  vertical-align: top;
}

#note label {
  margin-right: 40px;
}

button {
  border: none;
  background-color: transparent;
}

#noteLabel {
  margin-right: 50px;
}

#noteColour {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
}

#operationBar {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: rgba(255, 255, 255, 0.5);
}

.colorBox {
  height: 50px;
  width: 50px;
  margin: 10px;
  background: grey;
}

.colorBox:hover {
  border: black 2px solid;
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

.current {
  border: 1px solid black;
}

img {
  width: 50px;
  height: 50px;
  padding: 5px;
}

img:hover {
  background: rgba(255, 255, 255, 0.5);
}

@media only screen and (max-width: 750px) {
  #title label {
    font-size: 20px;
    margin-right: 10px;
  }

  #title input {
    font-size: 20px;
  }

  #noteLabel {
    margin-right: 20px;
    font-size: 80%;
  }

  .colorBox {
    height: 25px;
    width: 25px;
    margin: 5px;
  }
}
</style>
