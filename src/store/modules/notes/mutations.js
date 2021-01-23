export default {
  updateNote(state, payload) {
    state.boardContent[0][payload.boardId][payload.noteId] = payload.newNote;
  },

  delNote(state, payload) {
    delete state.boardContent[0][payload.boardId][payload.noteId];
  },
  downloadNotes(state, payload) {
    state.boardContent = payload.boardContent;
  },

  setNotesLoaded(state, payload) {
    state.isNotesLoaded = payload.setValue;
  },
  logoutNotes(state){
    state.boardContent = null;
}
  
};
