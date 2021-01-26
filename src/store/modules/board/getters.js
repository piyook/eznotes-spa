export default {
  getBoardTitle: (state) => (id) => {
    let board = state.boardSummary.find((value) => value.id == id);
    return board["title"];
  },

  getBoardNumber: (state) => (id) => {
    let boardNumber = state.boardSummary.findIndex((value) => value.id == id);
    return boardNumber+1;
  },

  getBoardColour: (state) => (id) => {
    let board = state.boardSummary.find((value) => value.id == id);
    return board["colour"];
  },

  getBoardSummary(state) {
    return state.boardSummary;
  },

  getBoardDetails: (state) => (boardId) => {
    let emptyBoard = {
      number: boardId,
      title: "",
      summary: "",
      colour: "white",
    };

    let board = state.boardSummary.find((value) => value.id == boardId);

    if (typeof board === "undefined") {
      return emptyBoard;
    }
    return board;
  },

  isBoardDataLoaded(state) {
    return state.isBoardsLoaded;
  },
};
