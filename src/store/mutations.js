export default {

        updateNote(state, payload) {
          state.boardContent[0][payload.boardId][payload.noteId] = payload.newNote;
        },

        delNote(state, payload) {
          delete state.boardContent[0][payload.boardId][payload.noteId];
        },

        createNewBoard(state,payload){
          state.boardContent[0][payload.boardId] = {};
        },
        
        updateBoard(state,payload){
              state.boardSummary[0][payload.boardId] = payload.boardUpdate;
        },
     
        delBoard(state, payload) {
              delete state.boardSummary[0][payload.boardId];
        },

}