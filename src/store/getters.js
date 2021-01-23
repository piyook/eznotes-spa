export default {
  isUserAuth(state) {
    return state.isLoggedIn;
  },
  getUser(state){
    return state.userInfo;
  },
  getToken(state){
    return state.userInfo.token;
  },
  isAppLoading(state){
    return state.isLoading;
  }
};
