export default {
    createNewBoard(state,payload){
        state.boardContent[0][payload.boardId] = {};
      },
      
      updateBoard(state,payload){
            state.boardSummary[0][payload.boardId] = payload.boardUpdate;
      },
   
      delBoard(state, payload) {
            delete state.boardSummary[0][payload.boardId];
      },

      downloadBoards(state, payload){

            state.boardSummary = payload.boardSummary;
           
          },

      setBoardsLoaded(state, payload){
            state.isBoardsLoaded = payload.setValue;
          },
}