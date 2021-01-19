import boardMutations from './mutations.js';
import boardActions from './actions.js';
import boardGetters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            boardSummary: [
                {
                  0: {
                  id: 0,
                  title: "",
                  body: "",
                  colour: "yellow",
                  },
              },
              ],
            isBoardsLoaded:false,
        }
    },
    mutations: boardMutations,
    actions: boardActions,
    getters: boardGetters,
}