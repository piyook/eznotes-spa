export default {

        updateAuth(state, payload){
            state.isLoggedIn = payload.isLoggedIn;
        },
        setUser(state, payload){
            state.userInfo.email = payload.email;
          },
        updateLoadingStatus(state, payload){
            state.isLoading = payload.status;
        },
        setModal(state, payload){
            state.modalPromise = payload.modalPromise;
      },
        modalResponse(state, payload) {
            state.modalPromise(payload.response);
        },


      
}