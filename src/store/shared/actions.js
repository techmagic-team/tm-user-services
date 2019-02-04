// Actions for Shared //
const actions = {
  setDrawer({ commit }, drawer) {
    commit('setDrawer', drawer);
  },

  setNotification({ commit }, notification) {
    commit('setNotification', notification);
  },
};

export default actions;
