export default {
  getBoardTitle: (state) => (id) => {
    let board = state.boardSummary.find((value) => value.id == id);
    return board["title"];
  },

  getBoardSummary(state) {
    return state.boardSummary;
  },

  getBoardDetails: (state) => (boardId) => {
    let emptyBoard = {
      number: boardId,
      title: "",
      summary: "",
      colour: "new",
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
