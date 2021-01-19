import { createStore } from "vuex";

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import boardModule from './modules/board/index.js';
import noteModule from './modules/notes/index.js';


export default createStore({
  state() {
    return {
      isLoggedIn: false,
      userInfo: {email: "", token:"" },
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
  modules: {
    boards : boardModule,
    notes : noteModule,
  },
});
