import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Landing";
import store from "../store/index.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/userhome",
    name: "userHome",
    component: () =>
      import(/* webpackChunkName: "UserHome" */ "../pages/UserHome.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/noticeboard/:boardId",
    name: "noticeboard",
    component: () =>
      import(/* webpackChunkName: "NoticeBoard" */ "../pages/NoticeBoard.vue"),
    meta: { requiresAuth: true },
    beforeEnter: (to, __, next) => {
      if (isNaN(to.params.boardId)) {
        router.push("/userhome");
      }
      next();
    },
  },
  {
    path: "/noticeboard/settings/:boardId",
    name: "BoardSettings",
    component: () =>
      import(
        /* webpackChunkName: "NoticeBoard" */ "../pages/BoardSettings.vue"
      ),
    meta: { requiresAuth: true },
  },
  {
    path: "/note/:boardId/:noteId",
    name: "note",
    component: () => import(/* webpackChunkName: "Note" */ "../pages/Note.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "LogIn" */ "../pages/LogIn.vue"),
    beforeEnter: async () => {
      const response = await fetch("/api/refresh", {
        method: "POST",
        credentials: "include",
        mode: "cors",
      });

      if (response.ok) {
        store.commit("updateAuth", { isLoggedIn: true }, { root: true });

        store.commit("setUser", { email: responseData.email });

        router.push("/userhome");
      } else {
        router.push("/error");
        return;
      }

      const responseData = await response.json();
    },
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../pages/LogIn.vue"),
  },
  {
    path: "/error",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../pages/error.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../pages/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth) {
    if (store.getters.isUserAuth) {
      next();
    } else {
      next("/login");
    }
  } else {
    if (store.getters.isUserAuth) {
      router.push("/userhome");
    }
    next();
  }
});

export default router;
