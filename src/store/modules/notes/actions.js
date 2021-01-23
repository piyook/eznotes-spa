export default {
  async downloadNotes(context, payload) {

    const responseData = await context.dispatch(
      "contactAPI",
      {
        fetchMethod: "GET" ,
        fetchUri: "/api/" + payload.boardId,
      },
      { root: true }
    );

    await context.commit("downloadNotes", { boardContent: responseData });
  },

  async saveNote(context, payload) {
  
    await context.dispatch(
      "contactAPI",
      {
        fetchMethod: "PUT",
        fetchUri: "/api/" + payload.boardId + "/" + payload.noteId,
        fetchBody : JSON.stringify(payload.noteData),
      },
      { root: true }
    );

  },

  async newNote(context, payload) {
    
    await context.dispatch(
      "contactAPI",
      {
        fetchMethod: "POST",
        fetchUri: "/api/" + payload.boardId,
        fetchBody : JSON.stringify(payload.noteData),
      },
      { root: true }
    );

  },

  async deleteNote(context, payload) {
   
    await context.dispatch(
      "contactAPI",
      {
        fetchMethod: "DELETE",
        fetchUri: "/api/" + payload.boardId + "/" + payload.noteId,
      },
      { root: true }
    );

  },
};
