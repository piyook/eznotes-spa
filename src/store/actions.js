import router from "../router/index.js";

export default {
  changeLogStatus(context, payload) {
    context.commit("updateAuth", payload);
  },

  async login(context, payload) {
    let data = { email: payload.email, password: payload.password };

    const response = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),
      credentials: "include",
      mode: "cors",
    });

    const responseData = await response.json();

    await context.commit("updateAuth", { isLoggedIn: true });

    context.state.userInfo.token = responseData.jwt;
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
