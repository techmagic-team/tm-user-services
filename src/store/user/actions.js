import Http from '../../utils/http';

// Actions for User //
const actions = {
  fetchList({ commit }) {
    Http.get('users.json')
      .then(({ data }) => {
        const users = Object.values(data).map(user => ({
          ...user,
          lastWorkingDay: +new Date(user.lastWorkingDay),
        }));
        commit('setList', users);
      });
  },
};

export default actions;
