import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      isLoggedIn: true,
      userInfo: { id: 0, email: "" },
      boardSummary: [
        {
          1: {
          title: "Main Board",
          summary: "the best board",
          colour: "yellow",
          },
          2:  {
          title: "noticeboard 2",
          summary: "the second best board",
          colour: "red",
        },
        67 : {
          title: "noticeboard 3",
          summary: "the third best board",
          colour: "blue",
        },
      },
      ],
      boardContent: [
        {
          1: {
            1: {
              title: "my first note",
              date: "31/12/2020",
              note:
                "this is a demo note and it is quite long to test how the app handles a lot of text",
              colour: "yellow",
            },

            2: {
              title: "my second note",
              date: "31/12/2020",
              note: "this is a second note on board 1",
              colour: "green",
            },
            3: {
              title: "my third note",
              date: "31/12/2020",
              note: "this is a third note on board 1",
              colour: "blue",
            },
          },
          2: {
            1: {
              title: "my first note",
              date: "31/12/2020",
              note:
                "this is a demo note and it is quite long to test how the app handles a lot of text",
              colour: "yellow",
            },

            2: {
              title: "my second note",
              date: "31/12/2020",
              note: "this is a second note on board 2",
              colour: "green",
            },
            3: {
              title: "my third note",
              date: "31/12/2020",
              note: "this is a third note on board 2",
              colour: "blue",
            },
          },
          67: {
            1: {
              title: "my first note",
              date: "31/12/2020",
              note:
                "this is a demo note and it is quite long to test how the app handles a lot of text",
              colour: "yellow",
            },

            2: {
              title: "my second note",
              date: "31/12/2020",
              note: "this is a second note on board 3",
              colour: "green",
            },
            3: {
              title: "my third note",
              date: "31/12/2020",
              note: "this is a third note on board 3",
              colour: "blue",
            },
          },
        },
      ],
    };
  },
  mutations: {
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
  },
  actions: {
    saveNote(context, payload) {
      context.commit("updateNote", payload);
    },
    deleteNote(context, payload) {
      context.commit("delNote", payload);
    },
    deleteBoard(context, payload) {
      context.commit("delBoard", payload);
    },
    saveBoard(context, payload) {
      context.commit('updateBoard', payload);
    },
    newBoard(context, payload) {
      context.commit('createNewBoard', payload);
    },
    checkUniqueNoteId(context, payload){

          if (typeof context.state.boardContent[0][payload.boardId] === 'undefined') { return true;}

          return (payload.noteId in context.state.boardContent[0][payload.boardId]) ? true : false;
    },
    checkUniqueBoardId(context, payload){

      if (typeof context.state.boardSummary[0] === 'undefined') { return true;}

      return (payload.boardId in context.state.boardSummary[0]) ? true : false;
}
  },
  getters: {
    isUserAuth(state) {
      return state.isLoggedIn;
    },
    getBoardContent: (state) => (selectedBoardId) => {
      let selectedBoard = state.boardContent[0][selectedBoardId];
  
      return  (typeof selectedBoard === "undefined") ?  null : selectedBoard;
    
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

      if (typeof state.boardSummary[0] === "undefined") { return  emptyBoard }

      return (boardId in state.boardSummary[0])
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

      if (typeof state.boardContent[0][board] === "undefined") { return  emptyNote }
    
      return (id in state.boardContent[0][board])
        ? state.boardContent[0][board][id]
        : emptyNote;
     
    },
  },
  modules: {},
});
