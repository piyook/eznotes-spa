 export default {
    isNoteDataLoaded(state){
        return state.isNotesLoaded
      },
    
      getBoardContent(state){
        let selectedBoard = state.boardContent;
        return typeof selectedBoard === "undefined" ? null : selectedBoard;
      },
    
      getNoteContent: (state) => (id) => {
        let emptyNote = {
          title: "",
          date: "",
          body: "",
          colour: "white",
        };
    
        let board = state.boardContent.find(
          (value)=>(value.id == id) )
    
        if (typeof board === "undefined") {
          return emptyNote;
        }
        
          return board;
    
      },

 }