export default {
  isUserAuth(state) {
    return state.isLoggedIn;
  },

  getBoardContent: (state) => (selectedBoardId) => {
    let selectedBoard = state.boardContent[0][selectedBoardId];

    return typeof selectedBoard === "undefined" ? null : selectedBoard;
  },

  getBoardTitle: (state) => (id) => {
    return state.boardSummary[0][id].title;
  },

  getBoardSummary(state) {
    return state.boardSummary[0];
  },

  getBoardDetails: (state) => (boardId) => {
    let emptyBoard = {
      number: boardId,
      title: "",
      summary: "",
      colour: "new",
    };

    if (typeof state.boardSummary[0] === "undefined") {
      return emptyBoard;
    }

    return boardId in state.boardSummary[0]
      ? state.boardSummary[0][boardId]
      : emptyBoard;
  },

  getNoteContent: (state) => (board, id) => {
    let emptyNote = {
      title: "",
      date: "",
      note: "",
      colour: "new",
    };

    if (typeof state.boardContent[0][board] === "undefined") {
      return emptyNote;
    }

    return id in state.boardContent[0][board]
      ? state.boardContent[0][board][id]
      : emptyNote;
  },
};
