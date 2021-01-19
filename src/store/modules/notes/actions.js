export default {
  async downloadNotes(context, payload) {
  
    await context.dispatch("checkRefreshToken", null, { root: true });

    const response = await fetch("/api/api/" + payload.boardId, {
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

    await context.commit("downloadNotes", { boardContent: responseData });

    await context.commit("setNotesLoaded", { setValue: true });
  },

  async saveNote(context, payload) {
    await context.dispatch("checkRefreshToken", null, { root: true });

    const response = await fetch(
      "/api/api/" + payload.boardId + "/" + payload.noteId,
      {
        method: "PUT",
        body: JSON.stringify(payload.noteData),
        credentials: "include",
        mode: "cors",
      }
    );

    const serverError = await context.dispatch("isServerError", response, {
      root: true,
    });
    if (serverError) {
      return;
    }
  },

  async newNote(context, payload) {
    await context.dispatch("checkRefreshToken", null, { root: true });

    const response = await fetch("/api/api/" + payload.boardId, {
      method: "POST",
      body: JSON.stringify(payload.noteData),
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

  async deleteNote(context, payload) {
    await context.dispatch("checkRefreshToken", null, { root: true });

    const response = await fetch(
      "/api/api/" + payload.boardId + "/" + payload.noteId,
      {
        method: "DELETE",
        credentials: "include",
        mode: "cors",
      }
    );

    const serverError = await context.dispatch("isServerError", response, {
      root: true,
    });
    if (serverError) {
      return;
    }
  },
};
