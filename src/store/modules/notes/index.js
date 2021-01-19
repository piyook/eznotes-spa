import noteMutations from './mutations.js';
import noteActions from './actions.js';
import noteGetters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            isNotesLoaded:false,
            boardContent: [
              {
                0: {
                  0: {
                    id: 0,
                    title: "",
                    date: "",
                    body:"",
                    colour: "yellow",
                  },
                },
              },
            ],
        }
    },
    mutations: noteMutations,
    actions: noteActions,
    getters: noteGetters,
}