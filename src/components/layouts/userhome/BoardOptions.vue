<template>
  <div id="page" :class="boardBackgroundColour">
    <div id="operationBar">
      <img src="../../../assets/back-arrow.png" @click="goBack" />
      <img src="../../../assets/save.png" @click="save" />
      <img src="../../../assets/trashcan.png" @click="deleteBoard" />
    </div>
    <h1>NoticeBoard Settings</h1>
    <form>
      <div id="title">
        <label for="boardTitle">Board Title:</label>
        <input
          type="text"
          id="boardTitle"
          aria-describedby="board Title"
          v-model.trim="title"
          placeholder="New Title"
        />
      </div>

      <div id="board">
        <p id="summary-label">Summary</p>
        <textarea
          v-model.trim="body"
          id="boardData"
          aria-describedby="board Body"
          placeholder="Enter A Summary Of Board Contents"
          rows="8"
          cols="80"
        />
      </div>

      <div id="boardColour">
        <div id="boardLabel">board Colour</div>
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
      boardContent: {},
      title: "",
      body: "",
      chosenBoardColour: "",
      boardId: 0,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    async save() {
      this.boardContent.colour = this.chosenBoardColour;
      this.boardContent.title = this.title;
      this.boardContent.body = this.body;

      if (this.boardId === "new") {
        await this.$store.dispatch({
          type: "boards/newBoard",
          boardData: this.boardContent,
        });
      } else {
        await this.$store.dispatch({
          type: "boards/saveBoard",
          boardId: this.boardId,
          boardUpdate: this.boardContent,
        });
      }

      this.$router.push("/noticeboard/");
    },
    async deleteBoard() {
      let approveDelete = prompt(
        "deleting board " + this.$route.params.boardId + ": Type 'YES' or 'NO'"
      );

      if (approveDelete == "YES") {
        await this.$store.dispatch({
          type: "boards/deleteBoard",
          boardId: this.boardId,
        });

        this.$store.commit("boards/setBoardsLoaded", { setValue: false });

        this.$router.push("/userhome");
      }
    },
    colourSelect(colour) {
      this.chosenBoardColour = colour;
    },
    isActiveColour(colour) {
      if (this.chosenBoardColour == colour) {
        return { current: true };
      } else return { current: false };
    },
  },
  computed: {
    boardSummary() {
      return this.boardContent.body;
    },
    boardBackgroundColour() {
      return this.chosenBoardColour;
    },
  },
  mounted() {
    let board = this.$route.params.boardId;
    this.boardContent = this.$store.getters["boards/getBoardDetails"](board);
    this.chosenBoardColour = this.boardContent.colour;
    this.title = this.boardContent.title;
    this.body = this.boardContent.body;
    this.boardId = this.$route.params.boardId;
    if (this.boardId == "new") {
      this.chosenBoardColour = "white";
    }
  },
};
</script>

<style scoped>
#page {
  border: 1px solid black;
  margin: 60px;
}

h1 {
  font-size: 60px;
  font-weight: 300px;
  text-align: center;
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

#title label,
#summary-label {
  font-size: 30px;
  font-weight: 300;
  margin-right: 20px;
}

#title input {
  font-size: 40px;
}

#board textarea {
  vertical-align: top;
}

#board label {
  margin-right: 40px;
}

button {
  border: none;
  background-color: transparent;
}

#boardLabel {
  margin-right: 50px;
}

#boardColour {
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

  #boardLabel {
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
