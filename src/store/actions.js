export default {

  saveNote(context, payload) {
    context.commit("updateNote", payload);
  },

  deleteNote(context, payload) {
    context.commit("delNote", payload);
  },

  newBoard(context, payload) {
    context.commit("createNewBoard", payload);
  },

  saveBoard(context, payload) {
    context.commit("updateBoard", payload);
  },

  deleteBoard(context, payload) {
    context.commit("delBoard", payload);
  },

  checkUniqueNoteId(context, payload) {
    let currentBoardContents = context.state.boardContent[0][payload.boardId];
    if (typeof currentBoardContents === "undefined") {
      return true;
    }

    return payload.noteId in currentBoardContents
      ? true
      : false;
  },

  checkUniqueBoardId(context, payload) {
    let currentBoards = context.state.boardSummary[0];
    if (typeof currentBoards === "undefined") {
      return true;
    }

    return payload.boardId in currentBoards ? true : false;
  },
};
