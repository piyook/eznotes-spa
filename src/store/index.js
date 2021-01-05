import { createStore } from "vuex";

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

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
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
  modules: {},
});
