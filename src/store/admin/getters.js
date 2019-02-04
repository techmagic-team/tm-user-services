// Getters for Admin //
const getters = {
  getCurrent(state) {
    return state.admin;
  },
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
};

export default getters;
