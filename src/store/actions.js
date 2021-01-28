import router from "../router/index.js";

export default {
  changeLogStatus(context, payload) {
    context.commit("updateAuth", payload);
  },

  async login(context, payload) {
    let data = { email: payload.email, password: payload.password };

    const responseData = await context.dispatch(
      "contactAPI",
      {
        fetchMethod: "POST",
        fetchUri: "/api/login",
        fetchBody: JSON.stringify(data),
      },
      { root: true }
    );

    context.commit("setUser", { email: responseData.email });

    await context.commit("updateAuth", { isLoggedIn: true });

    return responseData;

  },

  async register(context, payload){

    let data = { email: payload.email, password: payload.password };

    const responseData = await context.dispatch(
      "contactAPI",
      {
        fetchMethod: "POST",
        fetchUri: "/api/register",
        fetchBody: JSON.stringify(data),
      },
      { root: true }
    );
   
    context.commit("setUser", { email: responseData.email });

    await context.commit("updateAuth", { isLoggedIn: true });

    return responseData;

  },

  async logout(context){

    const response = await fetch("/api/logout", {
      method: "POST",
      credentials: "include",
      mode: "cors",
    });

    const serverError = await context.dispatch("isServerError", response, {
      root: true,
    });
    if (serverError) {
      return;
    }

    context.dispatch({
      type: "changeLogStatus",
      isLoggedIn: false,
    });

    context.commit("boards/logoutBoards");
    context.commit("notes/logoutNotes");

  },

  async contactAPI(context, payload){

    await context.dispatch("checkRefreshToken", null, { root: true });

    context.commit("updateLoadingStatus", {status:true}, { root: true });

    let response = null;

    if (payload.fetchMethod === 'GET' || payload.fetchMethod === 'DELETE') {

      response = await fetch(payload.fetchUri, {
        method: payload.fetchMethod,
        credentials: "include",
        mode: "cors",
      });

    } else {

      response = await fetch(payload.fetchUri, {
        method: payload.fetchMethod,
        credentials: "include",
        body: payload.fetchBody,
        mode: "cors",
      });

  }

    context.commit("updateLoadingStatus", {status:false}, { root: true });

    const serverError = await context.dispatch("isServerError", response, {
      root: true,
    });
    if (serverError) {
      return;
    }

    return await response.json();
  },

  async isServerError(context, response) {
    if (response.status == "401") {
      context.commit("updateAuth", { isLoggedIn: false }, { root: true });

      router.push("/login");

      const error = new Error(
        "You are not authorized to access this resource - Please Login"
      );
      throw error;
    }

    if (!response.ok) {
      const error = new Error(
        "There was a problem connecting - Please Try again later"
      );
      throw error;
    }
  },

  async checkRefreshToken() {

    if (getCookie("RefreshTimer") == "") {
      const refresh = await fetch("/api/refresh", {
        method: "POST",
        credentials: "include",
        mode: "cors",
      });

      return refresh.ok;
    } else {
      return true;
    }
  },

  async awaitModalResponse(context){
    return await new Promise((resolve) => 
    context.commit('setModal', {modalPromise : resolve}));
},

}

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
