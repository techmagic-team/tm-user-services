// Mutations for Admin //
const mutations = {
  setCurrent(state, admin) {
    state.admin = admin;
  },
  setLoggedIn(state) {
    state.isLoggedIn = true;
  },
  setLoggedOut(state) {
    state.isLoggedIn = false;
    state.admin = null;
  },
};

export default mutations;
