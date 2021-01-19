export default {
  async downloadBoards(context) {
    
    await context.dispatch("checkRefreshToken", null, { root: true });

    const response = await fetch("/api/api", {
      method: "GET",
      credentials: "include",
      mode: "cors",
    });

    const serverError = await context.dispatch("isServerError", response, {
      root: true,
    });
    if (serverError) {
      return;
    }

    const responseData = await response.json();

    await context.commit("downloadBoards", { boardSummary: responseData });

    await context.commit("setBoardsLoaded", { setValue: true });
  },

  async newBoard(context, payload) {
    await context.dispatch("checkRefreshToken", null, { root: true });

    const response = await fetch("/api/api", {
      method: "POST",
      body: JSON.stringify(payload.boardData),
      credentials: "include",
      mode: "cors",
    });

    const serverError = await context.dispatch("isServerError", response, {
      root: true,
    });
    if (serverError) {
      return;
    }
  },

  async saveBoard(context, payload) {
    await context.dispatch("checkRefreshToken", null, { root: true });

    const response = await fetch("/api/api/" + payload.boardId, {
      method: "PUT",
      body: JSON.stringify(payload.boardUpdate),
      credentials: "include",
      mode: "cors",
    });

    const serverError = await context.dispatch("isServerError", response, {
      root: true,
    });
    if (serverError) {
      return;
    }
  },

  async deleteBoard(context, payload) {
    await context.dispatch("checkRefreshToken", null, { root: true });

    const response = await fetch("/api/api/" + payload.boardId, {
      method: "DELETE",
      credentials: "include",
      mode: "cors",
    });

    const serverError = await context.dispatch("isServerError", response, {
      root: true,
    });
    if (serverError) {
      return;
    }
  },
};
