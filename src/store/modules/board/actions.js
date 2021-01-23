export default {
  async downloadBoards(context) {
    if (context.state.isBoardsLoaded) {
      return;
    }

    const responseData = await context.dispatch(
      "contactAPI",
      {
        fetchMethod: "GET",
        fetchUri: "/api",
      },
      { root: true }
    );

    await context.commit("downloadBoards", { boardSummary: responseData });

    await context.commit("setBoardsLoaded", { setValue: true });
  },

  async newBoard(context, payload) {
    
     await context.dispatch(
      "contactAPI",
      {
        fetchMethod: "POST",
        fetchUri: "/api",
        fetchBody : JSON.stringify(payload.boardData),
      },
      { root: true }
    );

    await context.commit("setBoardsLoaded", { setValue: false });

  },

  async saveBoard(context, payload) {
    
    await context.dispatch(
      "contactAPI",
      {
        fetchMethod: "PUT",
        fetchUri: "/api/" + payload.boardId,
        fetchBody : JSON.stringify(payload.boardUpdate),
      },
      { root: true }
    );

    await context.commit("setBoardsLoaded", { setValue: false });

  },

  async deleteBoard(context, payload) {
    
     await context.dispatch(
      "contactAPI",
      {
        fetchMethod: "DELETE",
        fetchUri: "/api/" + payload.boardId,
      },
      { root: true }
    );

    await context.commit("setBoardsLoaded", { setValue: false });

  },
};
